---
title: Binary / Text encoding
published: true
tags: ascii binary text base64 encoding ruby c++ string single-header hash
excerpt_separator: <!--more-->
---
> tl;dr: if you wish to efficiently encode binary data as Unicode text, - [Efficiently encoding binary data in Unicode ](https://qntm.org/unicodings)
> -    in UTF-8, use Base64 or Base85
> -    in UTF-16, use Base32768
> -    in UTF-32, use Base65536


**[ASCII‑constrained](https://en.wikipedia.org/wiki/ASCII)**
- [Base16](https://en.wikipedia.org/wiki/Hexadecimal),Hex - hash output [a9eb85ea214a6cfa6882f4be041d5cce7bee3e45](https://blog.thoughtram.io/git/2014/11/18/the-anatomy-of-a-git-commit.html)
- [Base32](https://en.wikipedia.org/wiki/Base32) - standard 32-character set: twenty-six upper-case letters A–Z and the digits 2–7.
- [Base36](https://en.wikipedia.org/wiki/Base36) - Arabic numerals 0–9 and the Latin letters A–Z
- [Base58](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58) - avoid both non-alphanumeric characters (+ and /) and letters which might look ambiguous when printed (0 - zero, I - capital i, O - capital o and l - lower case L).
- [Base64](https://en.wikipedia.org/wiki/Base64) / [uuencode](https://en.wikipedia.org/wiki/Uuencode):  75%
- hex: 50%
- [Base85,Ascii85](https://en.wikipedia.org/wiki/Ascii85) - more efficient than uuencode or Base64, may contain escape characters such as backslash and quote †
- [basE91](http://base91.sourceforge.net/)
- [Base-122](https://github.com/kevinAlbs/Base122)
- [yEnc](https://en.wikipedia.org/wiki/YEnc) - 8-bit encoding method, 252 of the 256 possible bytes are passed through unencoded as a single byte, whether that result is a printable ASCII character or not.

<!--more-->
† Base85 is listed for completeness but all variants use characters which are considered hazardous for general use in 


**[BMP‑constrained](https://github.com/qntm/base65536)**
- [Base2048]({% post_url 2020-08-13-unicode %})  56%
- [Base32768]({% post_url 2020-08-13-unicode %})  63%

**Full Unicode**
- [Base65536]({% post_url 2020-08-13-unicode %}) 56%


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

### C++ 
- [tomykaira/Base64.h](https://gist.github.com/tomykaira/f0fd86b6c73063283afe550bc5d77594) - single header base64 decode/encoder. 
- [boost/beast/core/detail/base64.hpp (1.74)](https://www.boost.org/doc/libs/1_74_0/boost/beast/core/detail/base64.ipp)
  - [1.66](https://www.boost.org/doc/libs/1_66_0/boost/beast/core/detail/base64.hpp)
  - [Encoding and decoding base 64 with c++](https://renenyffenegger.ch/notes/development/Base64/Encoding-and-decoding-base-64-with-cpp/)
