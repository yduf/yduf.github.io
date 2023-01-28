---
published: true
title: Open Multi-processing (OpenMP)
tags: c++ concurrency
---
> an extension to C/C++/Fortran languages by adding the parallelizing features to them. - [Introduction](https://www.geeksforgeeks.org/openmp-introduction-with-installation-guide/)

{% highlight cpp %}
// OpenMP header
#include <omp.h>
#include <stdio.h>
#include <stdlib.h>
  
int main(int argc, char* argv[])
{
    int nthreads, tid;
  
    // Begin of parallel region
    #pragma omp parallel private(nthreads, tid)
    {
        // Getting thread number
        tid = omp_get_thread_num();
        printf("Welcome to GFG from thread = %d\n",
               tid);
  
        if (tid == 0) {
  
            // Only master thread does this
            nthreads = omp_get_num_threads();
            printf("Number of threads = %d\n",
                   nthreads);
        }
    }
}
{% endhighlight %}

[![caption](https://media.geeksforgeeks.org/wp-content/uploads/20190415125809/Screenshot-from-2019-04-15-00-26-57.png)](https://www.geeksforgeeks.org/openmp-introduction-with-installation-guide/)

see also
- [Agade arena][https://github.com/Agade09/CG-UTTT-Arena/blob/master/Arena.cpp)
