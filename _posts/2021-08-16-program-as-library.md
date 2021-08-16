---
published: true
title: Using program as library
tags: null
---
> Can we use a program as a library ?

- [Can FFmpeg be used as a library, instead of a standalone program?](https://stackoverflow.com/a/3167088/51386) - call the compiler with -Dmain=ffmpeg / also need to deal with the output (normally goes to stdin/stderr) and error handling (is it ok if it calls abort() or exit()?).
