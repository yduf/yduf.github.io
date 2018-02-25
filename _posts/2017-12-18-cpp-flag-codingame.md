---
title: C++ and the -O3 compilation flag (Codingame)
published: true
tags: c++ codingame
---
## [C++14](https://www.codingame.com/forum/t/language-request-c-14/1039/32)
```
flags -std=gnu++14 -Werror=return-type -g -pthread -lm -lpthread -ldl -lcrypt
```

[c++ optimization trick](https://www.codingame.com/forum/t/c-and-the-o3-compilation-flag/1670/15)

```c++
// trigger optimisation from source file
#pragma GCC optimize("O3")
#pragma GCC optimize("inline")
#pragma GCC optimize("omit-frame-pointer")
```
