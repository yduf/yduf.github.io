---
published: true
title: Metadata in SVG
tags: svg metadata
---
> As XML is extensible you can add attributes and element children as you wish. - [SO](https://stackoverflow.com/questions/1652863/metadata-in-svg)

{% highlight xml %}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:sol="http://www.sol.org">
  <circle cx="10" cy="20" sol:country="ruritania" r="5"/>
</svg>
{% endhighlight %}