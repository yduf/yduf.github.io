---
published: true
title: Youtube-dl
tags: video youtube
---
> download videos from youtube.com or other video platforms - [youtube-dl.org](https://youtube-dl.org/)

> There was a point in the past where video platforms were competing, and by no means was it clear that YouTube would end up dominating this area to the point of being close to a monopoly... When YouTube won that race, they won it with a given set of parameters, including the kind and amount of ads they show. - [about the "morality" of Adblocking](https://news.ycombinator.com/item?id=38065387)

- [**DMCA takedown from RIAA**](https://news.ycombinator.com/item?id=24872911)
- [Supported sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html)
- [can no longer download age-restricted videos ](https://news.ycombinator.com/item?id=27353917)
	- [get cookies](https://news.ycombinator.com/item?id=27359561)

see also
- [Yark](https://github.com/Owez/yark) / [HN](https://news.ycombinator.com/item?id=34264487)- YouTube archiving made simple.
- [ Invidious as youtube cache #260 ](https://github.com/iv-org/invidious/issues/260) / [Is there a good way to cache YouTube videos on my home network.](https://www.reddit.com/r/selfhosted/comments/fzokzm/is_there_a_good_way_to_cache_youtube_videos_on_my/)

## Youtube tracking

`?si= parameter` from your YouTube share links uniquely identifies you and allows Google to track your social circle with certainty. (Not that they couldn't do it already) - [HN](https://news.ycombinator.com/item?id=37504358)

## Youtube Alternatives
- [Invidious](https://github.com/iv-org/invidious) is an alternative front-end to YouTube.
- [What's the best way to own video?](https://news.ycombinator.com/item?id=32457210)

### fork
- [yt-dlp](https://news.ycombinator.com/item?id=29592707) - remove  50kb/s limits
- [blackjack4494/youtube-dlc ](https://github.com/blackjack4494/youtube-dlc) / [reddit](https://www.reddit.com/r/DataHoarder/comments/ir8ic6/youtubedlc_an_active_fork_of_youtubedl/) / [HN]() 

### Others
- [youtubedld.com](https://youtubedld.com/) - Download a YouTube video by adding ‘dld’ to the url after ‘youtube’, hit enter and pick a format.
- [Reverse-Engineering YouTube](https://tyrrrz.me/blog/reverse-engineering-youtube)

## [Select the video quality](https://askubuntu.com/questions/486297/how-to-select-video-quality-from-youtube-dl/486298#486298)

{% highlight cpp %}
# list availabe encoding
youtube-dl -F 'http://www.youtube.com/watch?v=P9pzm5b6FFY'

# choose one
youtube-dl -f 22 'http://www.youtube.com/watch?v=P9pzm5b6FFY'

# merge two video+audio
youtube-dl -f 22+136 'http://www.youtube.com/watch?v=P9pzm5b6FFY'

# download many format
youtube-dl -f 22,136 'http://www.youtube.com/watch?v=P9pzm5b6FFY'

# [download playlist](https://superuser.com/questions/993993/youtube-dl-download-playlist-in-respective-directory)
youtube-dl -o '%(playlist_title)s/%(playlist_index)s_%(title)s.%(ext)s' "https;//url&list="
{% endhighlight %}


## Downloading multiple videos from a list
- [Simple queue](https://stackoverflow.com/questions/3632919/simple-queue-for-youtube-dl-in-the-linux-shell/3632944#3632944)
{% highlight cpp %}
youtube-dl -a FILE   # --batch-file=FILE, '-' for stdin
{% endhighlight %}

## [How do I pass cookies to youtube-dl?](https://github.com/ytdl-org/youtube-dl/blob/master/README.md#how-do-i-pass-cookies-to-youtube-dl)
- --cookies /path/to/cookies.txt
