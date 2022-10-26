---
published: true
title: Condition in vector code
tags: avx
---
> If a vector component is already finished, freeze it to avoid doing any further calculations on it. This is done by masking the finished components on any value assignment. The unfinished vector components will keep being updated, but finished ones won't. - [Controlling the Data Flow](https://www.codingame.com/playgrounds/283/sse-avx-vectorization/controlling-the-data-flow)

## see also
- [How to use if condition in intrinsics](https://stackoverflow.com/questions/38006616/how-to-use-if-condition-in-intrinsics)