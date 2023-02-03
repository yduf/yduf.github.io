---
published: true
title: 'G-3PO: A Protocol Droid for Ghidra'
tags: reverse IA
---
> A Script that Solicits GPT-3 for Comments on Decompiled Code - [medium](https://medium.com/tenable-techblog/g-3po-a-protocol-droid-for-ghidra-4b46fa72f1ff) / [HN](https://news.ycombinator.com/item?id=34250872) / [github](https://github.com/tenable/ghidra_tools/tree/main/g3po) 


{% highlight python %}
>>> print(prompt_openai_model(f"""Here is some decompiled C code:```
{d}
```
Give me a high-level explanation of what this code is doing, and suggest a name for the function in question."""))
{% endhighlight %}

{% highlight text %}
This code is performing a memory copy operation. It is copying data from one memory location to another. The code is looping through the source memory location, and copying each byte to the destination memory location. It is also taking into account any alignment issues that may arise.A suitable name for this function could be 'memory_copy'.
{% endhighlight %}