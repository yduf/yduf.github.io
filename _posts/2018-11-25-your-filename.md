---
published: true
title: Duff's Devices
tags: c++ compiler tricks
---
## [Loop unrolling](https://en.wikipedia.org/wiki/Duff%27s_device)

Duff's device is a way of manually implementing loop unrolling by interleaving two syntactic constructs of C: the do-while loop and a switch statement. Its discovery is credited to Tom Duff in November 1983, when Duff was working for Lucasfilm and used it to speed up a real-time animation program. 

Loop unrolling attempts to reduce the overhead of conditional branching needed to check whether a loop is done, by executing a batch of loop bodies per iteration. To handle cases where the number of iterations is not divisible by the unrolled-loop increments, a common technique among assembly language programmers is to jump directly into the middle of the unrolled loop body to handle the remainder. Duff implemented this technique in C by using C's case label fall-through feature to jump into the unrolled body.

{% highlight cpp %}
send(to, from, count)
register short *to, *from;
register count;
{
    register n = (count + 7) / 8;
    switch (count % 8) {
    case 0: do { *to = *from++;
    case 7:      *to = *from++;
    case 6:      *to = *from++;
    case 5:      *to = *from++;
    case 4:      *to = *from++;
    case 3:      *to = *from++;
    case 2:      *to = *from++;
    case 1:      *to = *from++;
            } while (--n > 0);
    }
}
{% endhighlight %}
