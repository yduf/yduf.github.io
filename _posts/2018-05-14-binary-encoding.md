---
title: Binary / Text encoding
published: true
tags: binary text encoding ruby
---
- [yEnc](https://en.wikipedia.org/wiki/YEnc): 2%
- [Base64](https://en.wikipedia.org/wiki/Base64): 33%
- [uuencode](https://en.wikipedia.org/wiki/Uuencode) (like base64)
- hex: 50%
- [Base85 (Ascii85)](https://en.wikipedia.org/wiki/Ascii85)
- [basE91](http://base91.sourceforge.net/)
- [Base-122](https://github.com/kevinAlbs/Base122)

## [scheme and overhead](https://en.wikipedia.org/wiki/Binary-to-text_encoding) ([stackoverflow](https://stackoverflow.com/a/971501/51386))

## [uuencode](https://en.wikipedia.org/wiki/Uuencode) (like base64)

### [install](https://askubuntu.com/questions/232440/how-do-i-install-uudecode#232444)
{% highlight bash %}
sudo apt-get install sharutils
{% endhighlight %}

### Usage
{% highlight bash %}
uuencode myfile.zip <filename> > myfile.uue
{% endhighlight %}

### Ruby uudecode = string.unpack('u')

{% highlight ruby %}
DATA.gets

File.open("out.cake", 'wb', 0777 ) do |out|
	while line = DATA.gets
    	break if line =~ /^end$/

    	out.write line.unpack("u")[0]
	end
end
{% endhighlight %}
