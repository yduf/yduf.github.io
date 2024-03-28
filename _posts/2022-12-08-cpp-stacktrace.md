---
published: true
title: StackTrace
tags: c++ stacktrace single-header codingame
---
> Base your stack tracing / "symbolization" on Boost stack_trace - [#146](https://github.com/doctest/doctest/issues/146)

- [Backward-cpp](https://github.com/bombela/backward-cpp?tab=readme-ov-file#backward-cpp-) - header only - a beautiful stack trace pretty printer for C++.
- [std::basic_stacktrace (c++23)](https://en.cppreference.com/w/cpp/utility/basic_stacktrace)
- [Cpptrace](https://github.com/jeremy-rifkin/cpptrace) - a simple, portable, and self-contained C++ stacktrace library supporting C++11 and greater on Linux
- [de-boostified version of libstacktrace.](https://github.com/eyalroz/stacktrace/)

see also
- [symbolizer (folly)](https://github.com/facebook/folly/tree/main/folly/experimental/symbolizer) - older than boost

### Shortest implementation with glib

- [How to automatically generate a stacktrace when my program crashes](https://stackoverflow.com/questions/77005/how-to-automatically-generate-a-stacktrace-when-my-program-crashes)

{% highlight cpp %}
#include <stdio.h>
#include <execinfo.h>
#include <signal.h>
#include <stdlib.h>
#include <unistd.h>


void handler(int sig) {
  void *array[10];
  size_t size;

  // get void*'s for all entries on the stack
  size = backtrace(array, 10);

  // print out all the frames to stderr
  fprintf(stderr, "Error: signal %d:\n", sig);
  backtrace_symbols_fd(array, size, STDERR_FILENO);
  exit(1);
}

void baz() {
 int *foo = (int*)-1; // make a bad pointer
  printf("%d\n", *foo);       // causes segfault
}

void bar() { baz(); }
void foo() { bar(); }


int main(int argc, char **argv) {
  signal(SIGSEGV, handler);   // install our handler
  foo(); // this will call foo, bar, and baz.  baz segfaults.
}
{% endhighlight %}