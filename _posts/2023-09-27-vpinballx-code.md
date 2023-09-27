---
published: true
title: VPinballX (Standalone) Code (Draft)
tags: code-review draft
---
> VisualPinball Engine for MacOS / Android / linux - [github](https://github.com/vpinball/vpinball/tree/standalone/standalone)

### Code 
Use CMake

Dependancies
- [Plog]({% post_url 2023-09-27-cpp-lib-plog %}) - Pretty powerful logging library in about 1000 lines of code. Cross-platform

{% highlight bash %}
## change build instruction to
cmake -DCMAKE_BUILD_TYPE=Debug -B build_debug # so you have debug information
{% endhighlight %}


How to start in winwdos mode ? (without seting it in debugger)