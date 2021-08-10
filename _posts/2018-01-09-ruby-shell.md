---
title: Running a child process in Ruby (properly)
published: true
tags: ruby shell process
---
first part from [medium](https://medium.com/zendesk-engineering/running-a-child-process-in-ruby-properly-febd0a2b6ec8)

## tl;dr: Common Ruby subprocess patterns

a.k.a enough talk, just tell me what to use!

### 1 You want to run something, but don’t need its output

{% highlight ruby %}
system('rm', '-r', directory) or raise "Failed to remove #{directory}"
{% endhighlight %}

Protip: if you want to run a command without arguments, you should actually use:

{% highlight ruby %}
system(["ls", "ls"])
{% endhighlight %}

…because otherwise `system` will take your single string to be a shell string.

### You want to capture stdout as a string (and inherit stderr):

This is the most common case, in my experience.

{% highlight ruby %}
stdout, status = Open3.capture2('unzip', '-l', zipfile)
raise <error> unless status.success?
{% endhighlight %}

(you can also pass a `stdin_data: <string>` option if you need to provide some input)

### You want to capture stdout as a stream:

… because it might be huge, or you want to process each line as it arrives. This allows you to write to `stdin` as a stream, too.

{% highlight ruby %}
Open3.popen2('unzip', '-l', zipfile) do |stdin, stdout, status_thread|
 stdout.each_line do |line|
   puts "LINE: #{line}"
 end
 raise "Unzip failed"  unless status_thread.value.success?
end
{% endhighlight %}

### You need to inherit stdin

This is a tricky edge case to figure out from the `open3` docs. Each of the functions in that module support the same options as `Open3.popen3`. Which says that its options are passed through to `Process.spawn`. Which has lots of options for controlling redirections and file descriptors. Unfortunately, the docs don’t mention one crucial point — whatever redirections you pass will be ignored, because `popen3` always overrides the redirection options with its own pipes.

So if you do need to inherit `stdin` and `Kernel#system` won’t do, `IO.popen` may be your only choice. e.g. to inherit `stdin` and read `stdout` as a string:

{% highlight ruby %}
# I don’t know why you're piping a zip file into `stdin`,
# but I’m not the judging type...
output = IO.popen(['unzip', '-l', '-'], in: :in) do |io|
 io.read
end
raise 'unzip failed' unless $?.success?
puts output
{% endhighlight %}

### Bonus round: avoiding deadlocks

There’s one more gotcha when it comes to dealing with subprocesses: deadlocks. This can be an issue when you want to process both `stdout` and `stderr` of a child. If one of these pipes fill up their OS buffer with unconsumed output, the OS will block the process until somebody reads that buffered data. But if your parent process is busy waiting for the _other_ stream, you’ll get a deadlock. If you do decide to handle both streams yourself, you’ll need to use threads or `select` to read from whichever stream has data. But generally the best advice is to just to:

> inherit `stderr` or redirect it to a file,
>
> combine `stderr` and `stdout` via `Open3.popen2e` or something similar

## [Starts a list of commands as a pipeline](https://ruby-doc.org/stdlib-2.4.1/libdoc/open3/rdoc/Open3.html#method-c-pipeline_w)

::pipeline_w starts a list of commands as a pipeline with a pipe which connects to stdin of the first command.
  
{% highlight ruby %}
Open3.pipeline_w("bzip2 -c", :out=>"/tmp/hello.bz2") {|i, ts|
  i.puts "hello"
}
{% endhighlight %}

  
## [How to fire and forget a subprocess? (stackoverflow)](https://stackoverflow.com/a/806289/51386)

{% highlight ruby %}
exec("something") if fork.nil?
{% endhighlight %}
