---
published: true
title: Running a child process in Crystal
tags: crystal shell process
excerpt_separator: ''
---
see [Process](https://crystal-lang.org/api/0.35.1/Process.html) / [SO](https://stackoverflow.com/a/35490899)

{% highlight crystal %}
command = "curl http://dist.crystal-lang.org/apt/setup.sh | bash"
io = IO::Memory.new
status = Process.run(command, shell: true, output: io)
puts status.exit_code
output = io.to_s
{% endhighlight %}

Or if you want to duplicate what Crystal does for you:

{% highlight crystal %}
Process.run("sh", {"-c", command}, output: io)
{% endhighlight %}
