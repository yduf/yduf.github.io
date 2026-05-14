---
title: Code Session (Recording)
tags: broadcast vscode profile
---
> [VS Code Streaming Setup](https://chatgpt.com/share/69eb3693-1e4c-83eb-aa44-577cb81b06b4)

# [Profiles](https://chatgpt.com/share/69eb38a6-b5ec-83eb-950f-597ef47e8cf5)

You can define custom profiles


# [Combine Rush ⮺](https://chatgpt.com/share/6a05948f-7590-83eb-96dd-7cf125df4774)

For combining output of a OBS recording session

{% highlight bash %}
# Create the concat list in chronological order
$ printf "file '%s'\n" *.mp4 > files.txt

# Merge without re-encoding (fast, no quality loss)
$ ffmpeg -f concat -safe 0 -i files.txt -c copy combined.mp4
{% endhighlight %}