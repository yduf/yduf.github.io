---
title: exiftool
published: true
tags: image photo metadata jpeg ruby
toc: true
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

# [digikam]({% post_url 2021-10-20-photo-digikam %})

These information are visible in 
- Metadata Sidebar / exiftool panel

# [Ruby 💎](https://chatgpt.com/share/6947f672-9c28-800d-b8bc-3495b8d2a870)

{% highlight ruby %}
require 'mini_exiftool'

photo = MiniExiftool.new("image.jpg")

photo.title       = "Sunset at the beach"
photo.description = "Taken during summer vacation"
photo.artist      = "Jane Doe"

# Writing custom or uncommon tags
photo.keywords = ["travel", "sunset", "beach"]


photo.save
{% endhighlight %}
