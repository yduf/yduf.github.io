---
title: SingleFile
published: true
tags: offline firefox
---
> Save web pages as self-extracting HTML/ZIP hybrid files - [github](https://github.com/gildas-lormeau/SingleFile?tab=readme-ov-file#singlefile) / [SingleFileZ](https://github.com/gildas-lormeau/SingleFileZ?tab=readme-ov-file#singlefilez) / [HN](https://news.ycombinator.com/item?id=21426056)

### [File Format](https://github.com/gildas-lormeau/SingleFile/blob/master/faq.md#how-does-the-self-extracting-zip-format-work)

The self-extracting ZIP files created by SingleFile are essentially regular ZIP files. They take advantage of the flexibility in the ZIP specification, which allows for additional data to be included before and after the ZIP payload. See [this presentation](https://github.com/gildas-lormeau/Polyglot-HTML-ZIP-PNG?tab=readme-ov-file#learn-how-to-create-htmlzippng-polyglot-files-in-javascript) for more info.

[Project:]({% post_url 2025-08-16-build-own-archive %}) 
- save page as SingleFile and have their content usable as browser cache when offline.
