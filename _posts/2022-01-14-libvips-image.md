---
published: true
title: libVIPS
tags: image lib ruby c++
---
> a demand-driven, [horizontally threaded](https://github.com/libvips/libvips/wiki/Why-is-libvips-quick) image processing library. Compared to similar libraries, libvips runs quickly and uses little memory. - [**libVIPS**](https://www.libvips.org/) / [blog](http://libvips.blogspot.com/)

- [Automatic computation reordering](http://libvips.blogspot.com/2017/01/automatic-computation-reordering.html)

## [nip2](https://github.com/libvips/nip2)
A user interface for libvips.

- [getting started](https://www.youtube.com/watch?v=laS5SZzdnAE)
	- [Beginning_to_work_with_Nip2](https://github.com/libvips/libvips/wiki/Beginning_to_work_with_Nip2)
	- [ Assembling Marble Earth](http://libvips.blogspot.com/2011/08/assembling-marble-earth.html)
    - [Animated clustering](http://libvips.blogspot.com/2011/08/animated-clustering.html)
	- [Remove color cast](https://stackoverflow.com/questions/59666277/remove-color-cast-using-libvips/59682169#59682169)
- [nip2 as a GUI for ImageMagick](http://libvips.blogspot.com/2011/04/nip2-as-gui-for-imagemagick.html)
- [A/B viewing in nip2](http://libvips.blogspot.com/2013/07/task-of-day-toggle-between-two-images.html)
- [an example of adding a nips2 tool](http://libvips.blogspot.com/2016/09/nip2-for-nerds-example-of-adding-nips2.html)


## [Doc](https://www.libvips.org/API/current/) / [c++](https://www.libvips.org/API/8.11/cpp/) / [SO](https://stackoverflow.com/questions/tagged/vips)
- [Hello World](https://github.com/libvips/libvips/wiki/Hello-World)
- [How libvips opens a file](http://libvips.blogspot.com/2012/06/how-libvips-opens-file.html)
	- [Sequential mode read](http://libvips.blogspot.com/2012/02/sequential-mode-read.html) - Not all operations need random access to their source pixels. For example, thumbnailing, the process of shrinking images for display, can work strictly top-to-bottom.

- Full bindings are available for [Ruby](https://github.com/libvips/ruby-vips)
	- [New API takes shape](http://libvips.blogspot.com/2011/03/new-api-takes-shape.html)
	- [ watermarking with ruby-vips](http://libvips.blogspot.com/2013/07/watermarking-with-ruby-vips.html)
	- [ruby-vips example](https://github.com/libvips/ruby-vips/wiki/Examples) / [code](https://github.com/libvips/ruby-vips/tree/master/example)

- [Contrast-Limited Adaptive Histogram Equalisation](http://libvips.blogspot.com/2017/03/whats-new-in-85.html?view=timeslide)
- [Fancy transforms](http://libvips.blogspot.com/2015/11/fancy-transforms.html)
- [trim (auto crop) with ruby-vips](http://libvips.blogspot.com/2014/02/trim-auto-crop-with-ruby-vips.html?view=sidebar)

- [filters like sepia, black-white](https://github.com/libvips/php-vips/issues/104)
	- [New colour package](http://libvips.blogspot.com/2012/11/new-colour-package.html)
	- [autodetect CMYK and convert to sRGB JPEG](http://libvips.blogspot.com/2011/12/task-of-day-autodetect-cmyk-and-convert.html)
    
- [HOWTO Image shrinking](https://github.com/libvips/libvips/wiki/HOWTO----Image-shrinking)
	- [thumbnail](https://www.libvips.org/API/current/libvips-resample.html#vips-thumbnail)
		- [vipsthumbnail](http://www.manpagez.com/man/1/vipsthumbnail/)
	- [Different resize issues](https://github.com/libvips/pyvips/issues/148)

- [Some newbie questions on how to do things with libvips](https://github.com/libvips/libvips/issues/1449)

- [Making DeepZoom, Zoomify and Google Maps image pyramids with vips](http://libvips.blogspot.com/2013/03/making-deepzoom-zoomify-and-google-maps.html)


### [VIPS images](https://www.libvips.org/API/current/VipsImage.html) / [c++](https://www.libvips.org/API/8.11/cpp/classVImage.html)

VIPS images are three-dimensional arrays, the dimensions being width, height and bands
