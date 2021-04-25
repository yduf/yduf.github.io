---
published: true
title: Tail call optimisation (TCO)
tags: optimize recurse algorithm ruby Fibonacci
---



## TCO transformation
### [Fibonacci](https://fr.wikipedia.org/wiki/Suite_de_Fibonacci#Algorithme_r%C3%A9cursif_terminal)

{% highlight ruby %}
def fibo(n, a, b)
	 (n > 0) ? fibo(n - 1, b, a + b) : a;       
end
{% endhighlight %}

## [Ruby Tail Call Optimization?](https://stackoverflow.com/questions/824562/does-ruby-perform-tail-call-optimization/824831#824831)

The Ruby Language Specification doesn't say anything about TCO. It doesn't say you have to do it, but it also doesn't say you can't do it.

- This is unlike Scheme, where the Language Specification requires that all Implementations must perform TCO.

- But it is also unlike Python, where Guido van Rossum [has made it very clear](http://neopythonic.blogspot.com/2009/04/tail-recursion-elimination.html) on multiple occasions (the last time just a couple of days ago) that Python Implementations should not perform TCO.

## Tail Calls in C
- [Parsing Protobuf at 2+GB/s: How I Learned To Love Tail Calls in C](https://blog.reverberate.org/2021/04/21/musttail-efficient-interpreters.html) / [HN](https://news.ycombinator.com/item?id=26931581)
