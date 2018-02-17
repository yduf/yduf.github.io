---
title: Javascript Promise (a review)
published: true
tags: javascript promise
---
## [Promises are not neutral enough](https://news.ycombinator.com/item?id=16384642)
Even though they fulfill their purpose, JavaScript Promises are an opinionated primitive that introduce a lot of weirdness. This weirdness ends up spreading to other corners of the JavaScript language and ecosystem. Basically Promises are not neutral enough because they introduce 4 opinions:
-    Eager, not lazy
-    No cancellation
-    Never synchronous
-    then() is a mix of map() and flatMap()
