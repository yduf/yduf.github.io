---
published: true
title: StackTrace ≅ (C++)
tags: debug-c++ stacktrace single-header
---
> How to automatically generate a stacktrace when my program crashes - [SO](https://stackoverflow.com/questions/77005/how-to-automatically-generate-a-stacktrace-when-my-program-crashes)

### [Backward-cpp](https://github.com/bombela/backward-cpp?tab=readme-ov-file#backward-cpp-)
Header only - a beautiful stack trace pretty printer for C++.
- can be installed via meson or conan or directly

**This one is very easy to setup**  
And well suited  for  [VScode code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) one liner compiler command:
- define a **backend** for stackunwiding
- include `backward.hpp` if you are using the API directly
- modify `backward.cpp` to use the same backend - if you want automated trace dump on SIGNAL

{% highlight cpp %}
// backward-cpp/backward.hpp.cpp
#define BACKWARD_HAS_BFD 1    // uncomment this
{% endhighlight %}

{% highlight cpp %}
# make sure the proper backend is available
$ apt-get install binutils-dev
{% endhighlight %}

All setup! Now compile with
{% highlight cpp %}
# make sure the proper backend is available
$ g++/clang++ -lbfd + include backward-cpp/backward.hpp.cpp in the sources
{% endhighlight %}

Optionally add that in the place you are need to call the API directly (make sure the backend is the same)
{% highlight cpp %}
// in main.cc
#define BACKWARD_HAS_BFD 1
#include <backward-cpp/backward.hpp>
{% endhighlight %}

This would be the .run config
{% highlight json %}
"cpp": "cd $dir && g++-11 -g $fileName ~/DEV/cpp/backward-cpp/backward.cpp -o $fileNameWithoutExt -g -O0 -std=gnu++17 -Werror=return-type -g -pthread -lm -lpthread -lbfd -ldl -lcrypt -I $workspaceRoot -I ~/DEV/cpp  && $dir$fileNameWithoutExt",
{% endhighlight %}

And you will get this automatically
[![caption](https://github.com/bombela/backward-cpp/raw/master/doc/pretty.png)](https://github.com/bombela/backward-cpp/tree/master?tab=readme-ov-file#backward-cpp-)

### [Cpptrace](https://github.com/jeremy-rifkin/cpptrace?tab=readme-ov-file#cpptrace-)
A simple, portable, and self-contained C++ stacktrace library supporting C++11 and greater on Linux
- can be installed via conan

[![caption](https://github.com/jeremy-rifkin/cpptrace/raw/main/res/from_current.png)](https://github.com/jeremy-rifkin/cpptrace?tab=readme-ov-file#30-second-overview)

### see also

- [std::basic_stacktrace (c++23)](https://en.cppreference.com/w/cpp/utility/basic_stacktrace)
- [de-boostified version of libstacktrace.](https://github.com/eyalroz/stacktrace/)
- [symbolizer (folly)](https://github.com/facebook/folly/tree/main/folly/experimental/symbolizer) - older than boost

### [Shortest implementation with glib](https://stackoverflow.com/questions/77005/how-to-automatically-generate-a-stacktrace-when-my-program-crashes)

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
