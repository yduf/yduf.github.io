---
title: Sorting small set
published: true
tags: fastware sort
---
> 1-), 2, 3, 4, 5 - [Understanding DeepMind's Sorting Algorithm](https://justine.lol/sorting/)

{% highlight cpp %}
// sorts [a,b]
static inline void Sort2(long *a, long *b) {
  int r = *a < *b;
  long t = r ? *a : *b;
  *b = r ? *b : *a;
  *a = t;
}

// sorts [a,b,c] assuming [b,c] is already sorted
static inline void PartialSort3(long *a, long *b, long *c) {
  int r = *c < *a;
  long t = r ? *c : *a;
  *c = r ? *a : *c;
  r = t < *b;
  *a = r ? *a : *b;
  *b = r ? *b : t;
}

// sorts [a,b,c]
static inline void Sort3(long *a, long *b, long *c) {
  Sort2(b, c);
  PartialSort3(a, b, c);
}

// sorts [a,b,c,d]
static inline void Sort4(long *a, long *b, long *c, long *d) {
  Sort2(a, c);
  Sort2(b, d);
  Sort2(a, b);
  Sort2(c, d);
  Sort2(b, c);
}

// sorts [a,b,c,d,e]
static inline void Sort5(long *a, long *b, long *c, long *d, long *e) {
  Sort2(a, b);
  Sort2(d, e);
  PartialSort3(c, d, e);
  Sort2(b, e);
  PartialSort3(a, c, d);
  PartialSort3(b, c, d);
}
{% endhighlight %}