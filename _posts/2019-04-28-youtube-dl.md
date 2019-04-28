---
published: true
title: Youtube-dl
tags: video
---
## [ytdl-org/youtube-dl](https://github.com/ytdl-org/youtube-dl/)
- [Supported sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html)

## Downloading multiple videos from a list
- [Simple queue][https://stackoverflow.com/questions/3632919/simple-queue-for-youtube-dl-in-the-linux-shell/3632944#3632944)
{% highlight cpp %}
youtube-dl -a FILE   # --batch-file=FILE, '-' for stdin
{% endhighlight %}
