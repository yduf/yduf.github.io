---
published: true
title: Compare Image Quality
tags: image jpeg algorithm
---
> you have 2 equal images in files, you don't have a reference highest quality image and you want to keep the better one of the two. - [SE](https://photo.stackexchange.com/questions/75995/how-do-i-compare-two-similar-images-sharpness/117823#117823)


- Resize to the bigger size & re-compress both images with exactly same quality preset, grayscale conversion, using JPEG or better algorithm.
- Compare the file sizes.
- Erase the files and keep the better picture (coresponding to the bigger file).

### Explanation

Often the image compression preset is different for the different files so the initial sizes cannot speak for the quality. That's why we re-compress them with the same preset and software. We resize to equal size so the compressor decisions are made based on the detail level of the 2 images. Not always the bigger one has the higher detail.

### When this will fail

if one of the images is with applied noise filter - some photographers add noise when retoutching their photos to increase their "ART" value. The noise is hardly compressible and is perceived by the JPEG codec/compressor as higher level of detail, so will yield a bigger file.