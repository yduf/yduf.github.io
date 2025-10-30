---
title: Minification (Pico-8)
published: true
tags: pico8 zip
---
> [Shrinko8](https://github.com/thisismypassport/shrinko8?tab=readme-ov-file#shrinko8) - an aggressive cart minifier (+ linter & other tools) - [online](https://thisismypassport.github.io/shrinko8/) / [lexaloffle](https://www.lexaloffle.com/bbs/?tid=48591&utm_source=chatgpt.com)

- **Tokens**: 8192
- **Characters**: 65'536
- **Compressed Code Size**: 15'616 

### [Compression limit](http://pico8wiki.com/index.php?title=Save#The_.p8.png_format,_and_the_compressed_code_size_limit)
Because there is a small, fixed amount of space available to encode the cart in the image, PICO-8 uses compression to reduce the size of the cart's source code. The compressed code size must be under a certain limit for the save to succeed. As of 0.2.2c, this limit is 15,616 bytes. 

### [PXA File Format](https://pancelor.bearblog.dev/adventures-in-pico-8-compression-mine1k/)
pico8 stores its cartridges in a custom compressed format called PXA. basically, it stores data in chunks. each chunk is a specific type, CHR, REF, or RAW

coming up with new ways to make my code horrific but slightly smaller when compressed:
- changing all my loops (e.g. `for j=1,8 do`) to use the same index variable (j) and start number, so that the loop header compressed neatly into a larger REF chunk. 
- don't store variables if you can help it. writing `x=stat(32)` to get the mouse's xpos and then using it ~6 times was 1 byte longer than just calling `stat(32)` 6 times. surprising!

see also [PXAVizualiser](https://carlc27843.itch.io/pico-8-source-compression-visualizer)

### see also
- [A compressed size limit rant](https://www.lexaloffle.com/bbs/?tid=3205)
- [Alex Kidd Pico Part 3: Code & Music limitations](https://www.domariusgames.com/devblog/akid3_code_music.html)
