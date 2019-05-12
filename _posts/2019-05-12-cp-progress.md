---
published: true
title: Copy file with progress (cp)
tags: cp cli progress-bar
---
## One big file
### [pv](https://askubuntu.com/questions/17275/how-to-show-the-transfer-progress-and-speed-when-copying-files-with-cp/17279#17279)

it does NOT preserve permission.

{% highlight cpp %}
pv my_big_file > backup/my_big_file
{% endhighlight %}

## Several files
### [rsync](https://askubuntu.com/questions/17275/how-to-show-the-transfer-progress-and-speed-when-copying-files-with-cp/201250#201250)
{% highlight cpp %}
rsync -ah --progress [source] [destination]
{% endhighlight %}

### [curl](https://askubuntu.com/questions/17275/how-to-show-the-transfer-progress-and-speed-when-copying-files-with-cp/250506#250506)

it does NOT preserve permission.

{% highlight cpp %}
curl -o [destination] FILE://[source]
{% endhighlight %}


