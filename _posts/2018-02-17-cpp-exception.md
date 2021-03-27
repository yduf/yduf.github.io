---
title: Exception vs Error Code
published: true
tags: c++ exception benchmarking
---
> [In an earlier blog post](http://nibblestew.blogspot.com/2016/12/comparing-executable-size-of-c.html) we found out that C++ exceptions produce smaller executables than corresponding code using error codes. The most common comment to it was that executable size is not that important, performance is what matters. Since we have the tooling, let's do perf measurements as well. - [Measuring execution performance of C++ exceptions vs error codes](https://nibblestew.blogspot.com/2017/01/measuring-execution-performance-of-c.html)

measurements on an i5-6600K.

{% highlight cpp %}
GCC 4.8.4    gcc 5.4.0   Clang 3.{4, 6, 8}

ECCCCCCCCCC  eeccCCCCCC  EeeccCCCCC
EecCCCCCCCC  EEEeeeeccc  EEEEEeeeee
EEecCCCCCCC  EEEEEEeeee  EEEEEEEEEE
EEEeecCCCCC  EEEEEEEEEe  EEEEEEEEEE
EEEEeecccCC  EEEEEEEEEE  EEEEEEEEEE
EEEEEeeeccc  EEEEEEEEEE  EEEEEEEEEE
EEEEEEeeeec  EEEEEEEEEE  EEEEEEEEEE
EEEEEEEEeee  EEEEEEEEEE  EEEEEEEEEE
EEEEEEEEEee  EEEEEEEEEE  EEEEEEEEEE
EEEEEEEEEEe  EEEEEEEEEE  EEEEEEEEEE
{% endhighlight %}

In this diagram C means that plain C error codes are faster and E that exceptions are faster for that particular pair of parameters. For easier reading all cases where error codes win have been given a red background color. Each row represents a different number of functions. The top row has 50 functions (call depth of 16) and each row adds 50 so the bottommost row has 500 functions.

[Whenever a discussion on C++ exceptions occurs,](http://nibblestew.blogspot.fr/2017/01/measuring-execution-performance-of-c.html) there is That Guy who comes in and says "C++ exceptions are slow, don't use them". At this point the discussion usually breaks down on fighting about whether exceptions are fast or not. These discussion are ultimately pointless because asking whether exceptions are "fast" is the wrong question.

The proper question to ask is "under which circumstances are exceptions faster". As we have seen here, the answer is surprisingly complex. It depends on many factors including which platform, compiler, code size and error rate is used. Blanket statements about performance of X as compared to Y are usually simplifying, misleading and just plain wrong. Such is the case here as well.
