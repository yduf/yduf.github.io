---
title: exiftool
published: true
tags: image metadata jpeg ruby
---
> [Home](https://exiftool.org/)

see also
- [MiniExiftool](https://github.com/janfri/mini_exiftool?tab=readme-ov-file#miniexiftool-) - a ruby wrapper for the ExifTool command-line 

### [Usage](https://chatgpt.com/share/694276d0-95e8-800d-b7eb-3eef1d54fc40)

{% highlight bash %}
$ exiftool -Comment <image.jpg>	              # read comment
$ exiftool -Comment="my comment" <image.jpg   # write comment
{% endhighlight %}

## Standard Metadata

**-Title**="Golden Gate at Dawn"  
**-Description**="Golden Gate Bridge at sunrise with fog."  
**-Comment=**="missed boat"
**-Label**="Approved"

### Tags

{% highlight bash %}
$ exiftool \
  -XMP-dc:Subject+="mountains" \
  -XMP-dc:Subject+="fog" \
  -XMP-lr:HierarchicalSubject+="Nature|Mountains" \
  -XMP-lr:HierarchicalSubject+="Nature|Fog" \
  image.jpg
  
# shortcuts
$ exiftool -Keywords="sunset, mountains, fog" image.jpg
{% endhighlight %}

# Ruby 💎

{% highlight ruby %}
require 'mini_exiftool'

photo = MiniExiftool.new("image.jpg")

photo.title       = "Sunset at the beach"
photo.description = "Taken during summer vacation"
photo.artist      = "Jane Doe"

photo.save
{% endhighlight %}
