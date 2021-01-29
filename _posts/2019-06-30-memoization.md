---
published: true
title: Memoization
tags: ruby recursive optimize complexity Fibonacci
use_math: true
---
> an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. - [wikipedia](https://fr.wikipedia.org/wiki/M%C3%A9mo%C3%AFsation)

## [Fibonacci](https://fr.wikipedia.org/wiki/Suite_de_Fibonacci#Algorithme_r%C3%A9cursif_na%C3%AFf)

Using it reduce the complexity of $fib(n)$ from $O(2^n)$ to $O(n)$, keeping space $O(n)$.

{% highlight ruby %}
def fib( n)
   if (@f ||= []) && @f[n]      # memoize value exists
   elsif( n <= 2)				# else compute it
        @f[n] = 1
   else 
        @f[n] = fib( n-2) + fib( n -1)
   end

   @f[n]
end

n = 1000 # gets.to_i
puts [*0..n].map {|n| fibo(n)}.join(" ")
{% endhighlight %}
