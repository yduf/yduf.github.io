---
published: true
title: zero-click iMessage exploit
tags: security
---
> The image files tricked the iPhone into giving access to its entire memory, bypassing security and allowing the installation of spyware that would steal a user's messages. - [HN](https://news.ycombinator.com/item?id=30393530) / [Project Zero](https://googleprojectzero.blogspot.com/2021/12/a-deep-dive-into-nso-zero-click.html)

1. iMessage has a feature to send and receive GIFs

2. These GIFs are copied to a specific path early in the message processing pipeline (even before the message is displayed)

3. But the copy code doesn't just copy the GIF. It uses the CoreGraphics APIs _renders_ the image to a new GIF file at the destination path.

4. The code uses the ImageIO lib to guess the image format, ignoring the .gif file extension. So you can trick this code to accept a non-GIF file.

5. You can use the above to invoke one of over 20 image codecs that were not intended to be invoked in this code, including the CoreGraphics PDF parser.

6. CoreGraphics PDF parser has a very specific vulnerability in its JBIG2 image codec.

7. JBIG2 takes an image of text, identifies repeating glyphs and uses that fact for better compression. To avoid confusing slightly differing glyphs in things like images of poor quality prints (think e and é, or 3 and 8), it has a way of applying a diff over each instance of an identified repeating glyph.

8. This logic has an integer overflow bug: the 'number of symbols' variable is a 32-bit integer, which can be overflowed using a carefully crafted file. Now the attacker can can set the buffer for symbols to a much smaller value.

9. Making a long story short, this allows overwriting heap memory, setting arbitrary values in the objects used in the JBIG2 logic.

10. The JBIG2 logic uses AND, OR, XOR and XNOR operations when iterating through these objects (to apply the 'diff' on glyphs). The attacker can craft a file that strings together these logic operations so that it basically forms a software logic circuit.

11. So this exploit basically emulates a computer architecture inside an image codec, which can be used to operate on arbitrary memory!
