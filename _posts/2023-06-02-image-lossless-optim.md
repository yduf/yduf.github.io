---
published: true
title: Losslessly Optimising Images
tags: image zip
---
> there are a few tools you can use to losslessly optimise and reduce file sizes of various image formats. - [HN](https://news.ycombinator.com/item?id=32635906)

{% highlight bash %}
$ pngcrush -reduce -verbose $IN.png $OUT.png
$ jpegoptim --all-normal --verbose $IN.jpg $OUT.jpg
$ gifsicle -O3 --verbose -i $IN.gif -o $OUT.gif
$ scour -i $IN.svg -o $OUT.svg
{% endhighlight %}