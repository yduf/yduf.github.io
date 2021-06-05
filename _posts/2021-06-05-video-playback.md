---
published: true
title: Playback speed with pitch
tags: video
---
> Video player with pitch-independent speed controls? - [r/linux](https://www.reddit.com/r/linux/comments/21qaph/video_player_with_pitchindependent_speed_controls/)

## [Mplayer](https://kenfallon.com/speeding-up-speech-with-mplayer/)
You can use the {, [, backspace, ], }, keys to control the speed.

{% highlight bash %}
mplayer  -af scaletempo=speed=tempo video.mp4
{% endhighlight %}