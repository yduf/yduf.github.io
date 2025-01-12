---
title: Download subtitle/transcript (youtube)
published: true
tags: youtube
---
> How to download transcript from youtube video - [chatgpt](https://chatgpt.com/share/6783ce5a-74ec-800d-8d80-07957370e86b)

Using ytl, prefer srt[¹]

{% highlight bash %}
$ yt-dlp --write-auto-sub --sub-lang en --skip-download VIDEO_URL    # without video

$ yt-dlp --write-sub --sub-lang en --skip-download VIDEO_URL         # for manual subtitle

$ yt-dlp --write-auto-sub --sub-lang en --convert-subs srt --skip-download VIDEO_URL    # convert  to SRT

{% endhighlight %}

And then convert to text.

[¹]: [SRT vs VTT? Which Subtitle Format Should You Use?](https://www.getsubly.com/post/srt-vtt) 