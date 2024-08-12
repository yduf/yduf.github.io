---
published: true
title: libVIPS
tags: image-lib color jpeg jxl ruby c++
---
> a demand-driven, [horizontally threaded](https://github.com/libvips/libvips/wiki/Why-is-libvips-quick) image processing library. Compared to similar libraries, libvips runs quickly and uses little memory. - [**libVIPS**](https://www.libvips.org/) / [github](https://github.com/libvips/libvips) / [blog](http://libvips.blogspot.com/) / [wikipedia](https://en.wikipedia.org/wiki/VIPS_(software))

- [Automatic computation reordering](http://libvips.blogspot.com/2017/01/automatic-computation-reordering.html)
- support jpeg-xl since  [libvips 8.11](https://github.com/libvips/libvips/blob/master/ChangeLogS) / but not as part as ubuntu release

### Compiling
It straitghforward through meson. But it requires additional libraries to support features:
- [x] [libspng](https://github.com/randy408/libspng) (recommended) - faster png operation
	- otherwise use libpng
- [x] [mozjpeg](https://github.com/mozilla/mozjpeg#mozilla-jpeg-encoder-project-) (recommended) - compatible with the libjpeg API and ABI. It is intended to be a drop-in replacement for libjpeg. MozJPEG is a patch for libjpeg-turbo.
	- [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo#background) -  a JPEG image codec that uses SIMD instructions to accelerate baseline JPEG compression and decompression
	- libjpeg - fallback
- [x] libjxl - for jpegxl 
- [x] libwebp

- [ ] [highway]({% post_url 2022-10-24-cpp-highway-lib %}) - SIMD support
- [ ] [orc](https://github.com/GStreamer/orc#readme) - Optimized Inner Loops Runtime Compiler

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
- [Hello World](https://github.com/libvips/libvips/wiki/Hello-World#libvips-hello-world-in-c-1)
- [How libvips opens a file](http://libvips.blogspot.com/2012/06/how-libvips-opens-file.html)
	- [Sequential mode read](http://libvips.blogspot.com/2012/02/sequential-mode-read.html) - Not all operations need random access to their source pixels. For example, thumbnailing, the process of shrinking images for display, can work strictly top-to-bottom. [**But this has re-reading constraint**](https://github.com/libvips/libvips/issues/91#issuecomment-31195517)

- [Fancy transforms](http://libvips.blogspot.com/2015/11/fancy-transforms.html)
- [trim (auto crop) with ruby-vips](http://libvips.blogspot.com/2014/02/trim-auto-crop-with-ruby-vips.html?view=sidebar)


    
- [Some newbie questions on how to do things with libvips](https://github.com/libvips/libvips/issues/1449)

### Colors
- [filters like sepia, black-white](https://github.com/libvips/php-vips/issues/104)
	- [New colour package](http://libvips.blogspot.com/2012/11/new-colour-package.html)
	- [autodetect CMYK and convert to sRGB JPEG](http://libvips.blogspot.com/2011/12/task-of-day-autodetect-cmyk-and-convert.html)
	- [colour operators](https://www.libvips.org/API/current/libvips-colour.html) - These operators let you transform coordinates and images between colour spaces, calculate colour differences, and move to and from device spaces.
    	- Use vips_colourspace() to move an image to a target colourspace using the best sequence of colour transform operations.
    
- [Contrast-Limited Adaptive Histogram Equalisation](http://libvips.blogspot.com/2017/03/whats-new-in-85.html?view=timeslide)

### [Image shrinking](https://github.com/libvips/libvips/wiki/HOWTO----Image-shrinking)
- [vips_thumbnail()](https://www.libvips.org/API/current/libvips-resample.html#vips-thumbnail) - [don't use thumbnail_image on already loaded images](https://github.com/libvips/pyvips/issues/168#issuecomment-609689396). - Because the image has already been opened, it can't do any of the shrink-on-load tricks that help make thumbnail fast.
	- cmd [vipsthumbnail](http://www.manpagez.com/man/1/vipsthumbnail/)
	- [Different resize issues](https://github.com/libvips/pyvips/issues/148)

- [Making DeepZoom, Zoomify and Google Maps image pyramids with vips](http://libvips.blogspot.com/2013/03/making-deepzoom-zoomify-and-google-maps.html)

### [Image arithmetic](https://www.libvips.org/API/current/libvips-arithmetic.html)

Perform an arithmetic operation, such as addition, on every pixel in an image or a pair of images. 

- [vips_project](https://www.libvips.org/API/current/libvips-arithmetic.html#vips-project) - the sum of every row of pixels, and the sum of every column of pixels.

### Defining Matrix

- [new_matrix()](https://www.libvips.org/API/8.11/cpp/classVImage.html#ac4166259736c14dbd799b7ca98c5a72d)

{% highlight cpp %}
int akernel[] = { -1, -1, -1,
                -1, 16, -1,
                -1, -1, -1 };

VImage kernel = VImage::new_from_memory( akernel, sizeof(akernel), 
                                        3, 3, 1, VIPS_FORMAT_INT);

VImage conv = in.colourspace(VIPS_INTERPRETATION_sRGB, 
                                VImage::option()
                                ->set ("source_space", VIPS_INTERPRETATION_B_W)
                                )
                    .conv( kernel );
{% endhighlight %}


## [Internals](https://www.libvips.org/API/current/How-it-works.md.html)

### [pyvips](https://github.com/libvips/pyvips)

{% highlight python %}
import pyvips

image = pyvips.Image.new_from_file('some-image.jpg', access='sequential')
image *= [1, 2, 1]
mask = pyvips.Image.new_from_array([[-1, -1, -1],
                                    [-1, 16, -1],
                                    [-1, -1, -1]
                                   ], scale=8)
image = image.conv(mask, precision='integer')
image.write_to_file('x.jpg')

{% endhighlight %}


### [Ruby](https://github.com/libvips/ruby-vips)

Full bindings are available for 
- [New API takes shape](http://libvips.blogspot.com/2011/03/new-api-takes-shape.html)
- [ watermarking with ruby-vips](http://libvips.blogspot.com/2013/07/watermarking-with-ruby-vips.html)
- [ruby-vips example](https://github.com/libvips/ruby-vips/wiki/Examples) / [code](https://github.com/libvips/ruby-vips/tree/master/example)
	- [Are there any good examples of usage?](https://stackoverflow.com/questions/10709995/ruby-vips-image-processing-library-are-there-any-good-examples-of-usage/10710337#10710337)

### [C++](https://github.com/libvips/libvips/tree/master/cplusplus)

- The API overloads () to be [vips_getpoint()](https://www.libvips.org/API/current/libvips-arithmetic.html#vips-getpoint)

- The API overloads [] to be vips_extract_band()

### [VIPS images](https://www.libvips.org/API/current/VipsImage.html) / [c++](https://www.libvips.org/API/8.11/cpp/classVImage.html)

VIPS images are three-dimensional arrays, the dimensions being width, height and bands

- [crop](https://www.libvips.org/API/8.11/cpp/classVImage.html#a0cd5e66c9394d4dc5e3dabbef97553fc) synonym for [extract_area](https://www.libvips.org/API/8.11/cpp/classVImage.html#acae0a58b8b3590725b5b2d11694f3dde) - Extract an area from an image.
- [data](https://www.libvips.org/API/8.11/cpp/classVImage.html#acff02c37a612a932bb1838b352fd0a7e) - Arrange for the underlying object to be entirely in memory, then return a pointer to the first pixel.


### [Iterate over pixel](https://github.com/libvips/libvips/issues/2260)

You can't really iterate over pixels in libvips, since images don't really exist. Everything is a delayed computation and pixels only exist on demand. You can either implement a new vips operation, or render the whole image to an area of memory and then treat it like any other array. Have a look at [vips_image_write_to_memory()](https://www.libvips.org/API/current/VipsImage.html#vips-image-write-to-memory).

For eg:

From [version 8.4](https://github.com/libvips/libvips/issues/494#issuecomment-235858208)

{% highlight cpp %}
uint64_t dhash( VImage hash ) {
    VImage cache = VImage::new_memory();
    hash[0].write( cache);
    auto* p = (uint8_t*) cache.data();

	uint64_t hash_value = 0;

    for (int j = 0; j < h; j++) {
        for (int i = 0; i < w; i++) {
            hash_value <<= 1;
            hash_value |= *p++ > 0 ? 1 : 0; 
        }
    }

    return hash_value;
}

{% endhighlight %}

before

{% highlight cpp %}
uint64_t dhash( VImage hash ) {
    auto w = hash.width();
    auto h = hash.height();
    cout << "w: " << w << " h: " << h << "band: " << hash.bands() << "\n";

    size_t size;
    auto* p = (uint8_t*) hash[0].write_to_memory( &size);
    uint64_t hash_value = 0;
      for (int j = 0; j < h; j++) {
        for (int i = 0; i < w; i++) {
            hash_value <<= 1;
            //hash_value |= hash(i, j)[0] > 0 ? 1 : 0;    // 1001101100111001101011010110000010011000011000110000111
            hash_value |= *p++ > 0 ? 1 : 0;               // 1001101100111001101011010110000010011000011000110000111
        }
    }
    return hash_value;
}
{% endhighlight %}

Note: it is much faster to do that than accessing pixels through vips_getpoint()

### [VIPS History](https://github.com/libvips/libvips/wiki/VIPS-History)

background on its 30 years of development
- [205 Image Processing with VIPS](https://www.youtube.com/watch?v=L6W7eOzGxxU)
