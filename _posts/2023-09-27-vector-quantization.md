---
published: true
title: Image vector quantization
tags: image vector quantization tilemap
---
> It is just like creating a tilemap - [article](https://30fps.net/notebooks/image-vq/)

This notebook shows how to compress a single image to a tilemap and its tileset (its codebook).

We will
1. split an image into 8×8 pixel blocks (or "tiles"),
2. reorganize those blocks into a big list of 1D vectors,
3. cluster those using the K-means algorithm, and
4. then assign each image block to a cluster.

This is lossy image compression because we can then transmit the image as a set clusters and block-to-cluster assignments in smaller size. Note that we are not quantizing the colors to a palette, even though VQ is often used for that purpose.
