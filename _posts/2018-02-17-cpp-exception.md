---
title: Exception vs Error Code Performance (c++)
published: true
tags: c++ exception benchmarking
---
## [ Measuring execution performance of C++ exceptions vs error codes](http://nibblestew.blogspot.fr/2017/01/measuring-execution-performance-of-c.html)
 Whenever a discussion on C++ exceptions occurs, there is That Guy who comes in and says "C++ exceptions are slow, don't use them". At this point the discussion usually breaks down on fighting about whether exceptions are fast or not. These discussion are ultimately pointless because asking whether exceptions are "fast" is the wrong question.

The proper question to ask is "under which circumstances are exceptions faster". As we have seen here, the answer is surprisingly complex. It depends on many factors including which platform, compiler, code size and error rate is used. Blanket statements about performance of X as compared to Y are usually simplifying, misleading and just plain wrong. Such is the case here as well.
