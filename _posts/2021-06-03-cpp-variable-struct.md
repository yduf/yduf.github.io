---
published: true
title: Variable length struct in C++
tags: c++ array
---
> since it's a POD, everything works just like it did in C. - [SO](https://stackoverflow.com/a/19970507/51386)

{% highlight cpp %}
struct var
{
    int a;
    int b[1];

    static std::shared_ptr<var> make_var(int num_b) {
        const extra_bytes = (num_b ? num_b-1 : 0)*sizeof(int);
        return std::shared_ptr<var>(
                new char[sizeof(var)+extra_bytes ],
                [](var* p){delete[]((char*)(p));});
}
{% endhighlight %}
