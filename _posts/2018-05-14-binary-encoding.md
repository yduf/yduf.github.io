---
title: Binary / Text encoding
published: true
tags: ascii binary text utf8 base64 encoding string single-header ruby c++
excerpt_separator: <!--more-->
---
> if you wish to efficiently encode binary data as Unicode text, - [Efficiently encoding binary data in Unicode ](https://qntm.org/unicodings)
> -    in UTF-8, use Base64 or Base85
> -    in UTF-16, use Base32768
> -    in UTF-32, use Base65536

## [ASCII‑constrained](https://en.wikipedia.org/wiki/ASCII)
- [Base1](https://github.com/qntm/base1) \*
- [Base16](https://en.wikipedia.org/wiki/Hexadecimal),Hex -  **50%** UTF8 Efficiency - hash output [a9eb85ea214a6cfa6882f4be041d5cce7bee3e45](https://blog.thoughtram.io/git/2014/11/18/the-anatomy-of-a-git-commit.html)
- [Base32](https://en.wikipedia.org/wiki/Base32) - standard 32-character set: twenty-six upper-case letters A–Z and the digits 2–7.
- [Base36](https://en.wikipedia.org/wiki/Base36) - Arabic numerals 0–9 and the Latin letters A–Z
- [Base58](https://en.wikipedia.org/wiki/Binary-to-text_encoding#Base58) - avoid both non-alphanumeric characters (+ and /) and letters which might look ambiguous when printed (0 - zero, I - capital i, O - capital o and l - lower case L).
- [Base64](https://en.wikipedia.org/wiki/Base64) / [uuencode](https://en.wikipedia.org/wiki/Uuencode) -  **75%** UTF8 Efficiency
- [Base85,Ascii85](https://en.wikipedia.org/wiki/Ascii85) - **80%** UTF8 Efficiency - more efficient than uuencode or Base64, may contain escape characters such as backslash and quote †
- [basE91](http://base91.sourceforge.net/)
- [Base-122](https://github.com/kevinAlbs/Base122)
- [yEnc](https://en.wikipedia.org/wiki/YEnc) - 8-bit encoding method, 252 of the 256 possible bytes are passed through unencoded as a single byte, whether that result is a printable ASCII character or not. Only NUL, LF, CR, and = are escaped.

<!--more-->
**†** Base85 is listed for completeness but all variants use characters which are considered hazardous for general use in 

**\***  The Base1 encoding is not as simple as taking the binary as a place-value base 256 number. This would give no way to distinguish buffers with leading null bytes from one another. We have to encode the length of the source buffer as well. We do this by sorting all possible buffers by length and then lexicographically, then simply returning the index of the buffer in the list.

## [Unicode]({% post_url 2020-08-13-unicode %})

> To encode one additional bit per code point, we need to double the number of code points we use from 65,536 to 131,072. This would be a new encoding, Base131072, and its UTF-32 encoding efficiency would be 53% vs. 50% for Base65536. (Note that in UTF-16, Base32768 significantly outperforms either choice, and **in UTF-8, Base64 remains the preferred choice.**) - [Base efficiency](https://github.com/qntm/base65536)

- Base2048  56%
- Base32768  63%

Base2048 sadly renders Base65536 obsolete for its original intended purpose of sending binary data through Twitter. Using Base2048, up to 385 octets can fit in a single Tweet. Compare with Base65536, which manages only 280 octets.

However, Base65536 remains the state of the art for sending binary data through text-based systems which naively counts Unicode code points, particularly those using the fixed-width UTF-32 encoding.

### [BMP‑constrained](https://github.com/qntm/base65536)


### [Full Unicode]({% post_url 2020-08-13-unicode %})
- [Base65536](https://github.com/qntm/base65536) 56%

## [Scheme and overhead](https://en.wikipedia.org/wiki/Binary-to-text_encoding)


- [Efficiently encoding binary data in Unicode ](https://qntm.org/unicodings)

- [base2048 ](https://github.com/qntm/base2048) / [HN](https://news.ycombinator.com/item?id=31281305) - a binary encoding optimised for transmitting data through Twitter, up to 385 octets can fit in a single Tweet. Compare with Base65536, which manages only 280 octets.
	- [qntm/ base65536](https://github.com/qntm/base65536) 
	- [online](https://repl.it/@YvesDufournaud/HauntingGrandExecutable#index.js) example
    
- [Base32768](https://github.com/qntm/base32768) - a binary encoding optimised for UTF-16-encoded text.

- [Base65536](https://github.com/qntm/base65536) / [HN](https://news.ycombinator.com/item?id=14468818) - Base65536 is a binary encoding optimised for UTF-32-encoded text.
	- in [Ruby](https://github.com/coderobe/base65536-ruby)
    - [Base65536: The (not very serious) Successor of Base64](https://www.isticktoit.net/?p=1504)

Base65536 encodes data in a similar fashion to base64, but its alphabet, instead of being 64 characters long, is 65536 characters long. This means, one can map 16 bits of data into a single unicode codepoint.
It is of course terribly inefficient, if you were to count the outputted bytes (especially when UTF-8 encoded), but if you count just the number of unicode characters, as for example Twitter does for it’s length limit, you can fit double the data per character.
   
### [### [stackoverflow](https://stackoverflow.com/a/971501/51386)
](https://stackoverflow.com/a/971501/51386)

{% highlight text %}
Original:  64 bytes, 128 bytes in hex.  
Base2048: ЗཟǷњϳݫЬߦՏԈ௰ڿƫ௪தͶޡഺཀވࡌੳٿ༲৩ত༥၄ঙџڸࠑحϷгଘƩƴߢய߅ϚƐγ๓ۑఞ (47 characters, 113 bytes)  
Base64:   MJ7MSJwS1utMxA9QyQLytNDtd+5RGnx6m808qG1M2G+YndNbxf9JlnDaNCVbRbDP2DDoH2Bdz33FVC6TrpzXbw== (88 bytes)  
Base58:   yP4cqy7jmaRDzC2bmcGNZkuQb3VdftMk6YH7ynQ2Qw4zktKsyA9fk52xghNQNAdkpF9iFmFkKh2bNVG4kDWhsok (87 bytes)  
{% endhighlight %}


## [Base64/UUencode](https://en.wikipedia.org/wiki/Uuencode)
- [Base64 encoding and decoding at almost the speed of a memory copy](https://news.ycombinator.com/item?id=21459839)

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
