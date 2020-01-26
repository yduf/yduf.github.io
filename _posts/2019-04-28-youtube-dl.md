---
published: true
title: Youtube-dl
tags: video
---
## [ytdl-org/youtube-dl](https://github.com/ytdl-org/youtube-dl/)
- [Supported sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html)

## [Select the video quality](https://askubuntu.com/questions/486297/how-to-select-video-quality-from-youtube-dl/486298#486298)

{% highlight cpp %}
# list availabe encoding
youtube-dl -F 'http://www.youtube.com/watch?v=P9pzm5b6FFY'

# choose one
youtube-dl -f 22 'http://www.youtube.com/watch?v=P9pzm5b6FFY'

# merge two video+audio
youtube-dl -f 22+136 'http://www.youtube.com/watch?v=P9pzm5b6FFY'

# download many
youtube-dl -f 22,136 'http://www.youtube.com/watch?v=P9pzm5b6FFY'
{% endhighlight %}

## Downloading multiple videos from a list
- [Simple queue][https://stackoverflow.com/questions/3632919/simple-queue-for-youtube-dl-in-the-linux-shell/3632944#3632944)
{% highlight cpp %}
youtube-dl -a FILE   # --batch-file=FILE, '-' for stdin
{% endhighlight %}

## [How do I pass cookies to youtube-dl?](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#how-do-i-pass-cookies-to-youtube-dl)
- --cookies /path/to/cookies.txt
