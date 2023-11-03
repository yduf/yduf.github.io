---
published: false
title: Coroutine
tags: socket thread mental-model coroutine c++
---
> Coroutines split the idea of having an execution state off of the idea of having a thread of execution. - [SO](https://stackoverflow.com/a/44244451/51386)

There are two kinds of coroutines; stackful and stackless
- A stackless coroutine only stores local variables in its state and its location of execution (like a closure ?)
- A stackful coroutine stores an entire stack (like a thread).

>  A typical example of event-driven code is registering a callback that gets invoked every time a socket has data to be read. - [My tutorial and take on C++20 coroutines](https://www.scs.stanford.edu/~dm/blog/c++-coroutines.html)

[![caption](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OzMDBAGgboO36s1Bmcr7xgHaDU%26pid%3DApi&f=1&ipt=8cf91359adc963da83042579565e722e307263c890bddcae731a90adeb9ab0c8&ipo=images)](http://www.vishalchovatiya.com/cpp20-coroutine-under-the-hood/)

### see also
- [A coroutine based stream parser](https://andreasfertig.blog/2021/02/cpp20-a-coroutine-based-stream-parser/)
- [PARSCO](https://github.com/dpacbach/parsco) - C++20 Coroutine Synchronous Parser Combinator Library.
- [asynchronous parsers (video)](https://www.youtube.com/watch?v=u41EhjrqdGc)

- [Simple coroutines for games in C++](http://www.ilikebigbits.com/2016_03_20_coroutines.html)
- [CO2 - Coroutine II](https://github.com/jamboree/co2) - A header-only C++ stackless coroutine emulation library, providing interface close to N4286.
- [ Boost Coroutine2](https://www.youtube.com/watch?v=omEWXWUg5FA) / [github](https://github.com/boostorg/coroutine2)
- [I/O-bound Applications and Coroutines ](https://userver.tech/d6/d76/md_en_userver_intro_io_bound_coro.html)


## [C++-20](https://en.cppreference.com/w/cpp/language/coroutines)

>  the C++20 standard, only defines a framework for the execution of coroutines, but does not define any coroutine types satisfying such requirements. That means, we need to either write our own or rely on 3rd party libraries - [A C++20 coroutine example](https://mariusbancila.ro/blog/2020/06/22/a-cpp20-coroutine-example/)

One other complication to be aware of is that C++ coroutines are often explained and even specified using the terms future and promise. **These terms have nothing to do with the types std::future and std::promise available in the C++ \<future\> header.**

## Other version
- [boost::coroutine2 vs CoroutineTS](https://stackoverflow.com/questions/55078177/boostcoroutine2-vs-coroutinets)
	- [How do stackless coroutines differ from stackful coroutines?](https://stackoverflow.com/questions/28977302/how-do-stackless-coroutines-differ-from-stackful-coroutines?noredirect=1&lq=1)
	- [Differences between Boost.Coroutine and Boost.Coroutine2](https://stackoverflow.com/questions/37343873/differences-between-boost-coroutine-and-boost-coroutine2)

{% highlight cpp %}
generator<int> range(int start, int end) {
  while (start < end) {
    co_yield start;
    start++;
  }

  // Implicit co_return at the end of this function:
  // co_return;
}

for (int n : range(0, 10)) {
  std::cout << n << std::endl;
}
{% endhighlight %}
