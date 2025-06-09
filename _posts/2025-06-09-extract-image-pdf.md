---
title: Extract Images
published: true
tags: doc pdf image
---
> Extract images or convert a pdf to a bunch of images

### [Use pdfimages](https://askubuntu.com/questions/150100/extracting-embedded-images-from-a-pdf/150106#150106)

{% highlight bash %}
# setup
$ apt-get install poppler-utils

# usage
$ pdfimages -all in.pdf /tmp/out  # extracts all images from a PDF file in their orginal format.
or
$ pdfimages -j in.pdf /tmp/out    # saving them in JPEG format.
{% endhighlight %}


### pdftoppm
