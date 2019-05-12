---
published: true
title: Copy file with progress (cp)
tags: cp cli progress-bar
excerpt_separator: ''
---
## One big file
### [pv](https://askubuntu.com/questions/17275/how-to-show-the-transfer-progress-and-speed-when-copying-files-with-cp/17279#17279)

it does NOT preserve permission.

{% highlight cpp %}
pv my_big_file > backup/my_big_file
{% endhighlight %}

## Several files

### [Midnight-commander](https://en.wikipedia.org/wiki/Midnight_Commander)

{% highlight cpp %}
sudo apt-get install mc
{% endhighlight %}

### [rsync](https://askubuntu.com/questions/17275/how-to-show-the-transfer-progress-and-speed-when-copying-files-with-cp/201250#201250)
{% highlight cpp %}
rsync -ah --progress [source] [destination]
{% endhighlight %}

If you have rsync 3.1 or higher (rsync --version), you can copy (cp -Rpn) while preserving permissions and ownership, recurse directories, "no clobber," and display overall progress (instead of just progress by file), copy rate, and (very rough) estimated time remaining with:

{% highlight cpp %}
sudo rsync -a --info=progress2 --no-i-r /source /destination
{% endhighlight %}

### [curl](https://askubuntu.com/questions/17275/how-to-show-the-transfer-progress-and-speed-when-copying-files-with-cp/250506#250506)

it does NOT preserve permission.

{% highlight cpp %}
curl -o [destination] FILE://[source]
{% endhighlight %}

### [progress](https://superuser.com/questions/550064/how-mount-find-recover-data-in-hdd-outside-of-synology-box/603505#603505)

{% highlight cpp %}
sudo apt-get install progress
{% endhighlight %}

This tool can be used like that:

{% highlight cpp %}
cp bigfile newfile & progress -mp $!
{% endhighlight %}

