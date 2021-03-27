---
published: true
title: Initializing static template member
tags: c++
---
> Since it is part of a template, as with all templates the compiler will make sure it's only defined once. - [SO](https://stackoverflow.com/questions/3229883/static-member-initialization-in-a-class-template/3229904#3229904)

{% highlight cpp %}
template <typename T>
struct S
{
    static double something_relevant;
};

template <typename T>
double S<T>::something_relevant = 1.5;
{% endhighlight %}
