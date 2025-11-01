---
title: Minification (Pico-8)
published: true
tags: pico8 zip
toc: true
---
> [Shrinko8](https://github.com/thisismypassport/shrinko8?tab=readme-ov-file#shrinko8) - an aggressive cart minifier (+ linter & other tools) - [online](https://thisismypassport.github.io/shrinko8/) / [lexaloffle](https://www.lexaloffle.com/bbs/?tid=48591&utm_source=chatgpt.com)

Sometimes your cartridge fits in the token count, but not the characters count / compressed size, so you can't export it until you reduce the number of characters in the cartridge. - [Aggressive Lua code minification and debug code stripping](https://www.lexaloffle.com/bbs/?tid=36804)

- [r/pico8](https://www.reddit.com/r/pico8/comments/1ney75o/lesson_learned_be_wary_of_heavy_code_commenting/) - A set of Pico-8 cart tools, with a focus on shrinking code size.
    
- **Tokens**: 8192
- **Characters**: 65'536
- **Compressed Code Size**: 15'616 

# [Compression limit](http://pico8wiki.com/index.php?title=Save#The_.p8.png_format,_and_the_compressed_code_size_limit)
Because there is a small, fixed amount of space available to encode the cart in the image, PICO-8 uses compression to reduce the size of the cart's source code. The compressed code size must be under a certain limit for the save to succeed. As of 0.2.2c, this limit is 15,616 bytes. 

## [PXA File Format](https://pancelor.bearblog.dev/adventures-in-pico-8-compression-mine1k/)
pico8 stores its cartridges in a custom compressed format called PXA. basically, it stores data in chunks. each chunk is a specific type, CHR, REF, or RAW

coming up with new ways to make my code horrific but slightly smaller when compressed:
- changing all my loops (e.g. `for j=1,8 do`) to use the same index variable (j) and start number, so that the loop header compressed neatly into a larger REF chunk. 
- don't store variables if you can help it. writing `x=stat(32)` to get the mouse's xpos and then using it ~6 times was 1 byte longer than just calling `stat(32)` 6 times. surprising!

see also [PXAVizualiser](https://carlc27843.itch.io/pico-8-source-compression-visualizer)

## Compressor
- [PX9](https://www.lexaloffle.com/bbs/?tid=34058) / [PX8](https://www.lexaloffle.com/bbs/?tid=3930) - PX9 is a lightweight gfx & map compression library, intended to replace PX8. It uses the same ideas and interface as px8, but is smaller (~297~x 214 tokens to decompress), and requires zero configuration.

- [New Byte Compressor 2022](https://www.lexaloffle.com/bbs/?tid=50713)
- [Adventures in data compression (2021)](https://www.lexaloffle.com/bbs/?tid=45300)
- [My Compressor (2018)](https://www.lexaloffle.com/bbs/?tid=31725)
- [SRAM Smasher! (2018)](https://www.lexaloffle.com/bbs/?tid=31632)
- [Binary Image Compressor (2016)](https://www.lexaloffle.com/bbs/?tid=27892)

### see also
- [A compressed size limit rant](https://www.lexaloffle.com/bbs/?tid=3205)
- [Alex Kidd Pico Part 3: Code & Music limitations](https://www.domariusgames.com/devblog/akid3_code_music.html)

# Token Optimisation

- [PICO-8 Token Optimizations](https://github.com/seleb/PICO-8-Token-Optimizations)
	- [ put all your game data into a string.](https://www.reddit.com/r/pico8/comments/17ehiba/which_of_these_methods_is_better/) = 1 token 

# MultiCart
- [From one Pico-8 cart to many](https://retroactive.me/post/from-one-pico-cart-to-many/)
	- [Picocraft: Pico8 Sprite and maps Tricks](https://yourykiki.itch.io/picocraft/devlog/949482/picocraft-pico8-sprite-and-maps-tricks) - Graphics Workflow with PX9
		- show multicart and upper memory usage
## Sprite Optimisation
- [rectpack2D](https://github.com/TeamHypersomnia/rectpack2D#rectpack2d) / [HN](https://news.ycombinator.com/item?id=36469297) - A header-only 2D rectangle packing library written in modern C++.





