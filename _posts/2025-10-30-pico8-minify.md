---
title: Minification (Pico-8)
published: true
tags: pico8 zip
---
> [Shrinko8](https://github.com/thisismypassport/shrinko8?tab=readme-ov-file#shrinko8) - an aggressive cart minifier (+ linter & other tools) - [online](https://thisismypassport.github.io/shrinko8/)

- **Tokens**: 8192
- **Characters**: 65'536
- **Compressed Code Size**: 15'616 

### [Compression limit](http://pico8wiki.com/index.php?title=Save#The_.p8.png_format,_and_the_compressed_code_size_limit)
Because there is a small, fixed amount of space available to encode the cart in the image, PICO-8 uses compression to reduce the size of the cart's source code. The compressed code size must be under a certain limit for the save to succeed. As of 0.2.2c, this limit is 15,616 bytes. 

### see also
- [A compressed size limit rant](https://www.lexaloffle.com/bbs/?tid=3205)
- [Alex Kidd Pico Part 3: Code & Music limitations](https://www.domariusgames.com/devblog/akid3_code_music.html)
