---
published: true
title: Copy file with progress (cp)
tags: cp cli progress-bar
---
> A command that looks for coreutils basic commands (cp, mv, dd, tar, gzip/gunzip, cat, etc.) currently running on your system and displays the percentage of copied data. It can also show estimated time and throughput, and provides a "top-like" mode (monitoring). - [progress](https://github.com/Xfennec/progress)

![caption](https://camo.githubusercontent.com/48bdeb64edffd7223f60a454260fedb617083079a1f4b9b6858380447ce4ff1e/68747470733a2f2f7261772e6769746875622e636f6d2f5866656e6e65632f70726f67726573732f6d61737465722f636170747572652e706e67)

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
