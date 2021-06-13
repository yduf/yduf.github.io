---
published: true
title: Variable length struct in C++
tags: c++ array
---
> since it's a POD, everything works just like it did in C. - [SO](https://stackoverflow.com/a/19970507/51386)

- [Multiple return values (structured bindings) with unmovable types and guaranteed RVO in C++17](https://stackoverflow.com/questions/38385451/multiple-return-values-structured-bindings-with-unmovable-types-and-guaranteed)
- [Array-to-pointer decay](https://stackoverflow.com/a/4810668/51386) - The only "connection" between T[n] and T[m] is that both types can implicitly be converted to T*, and the result of this conversion is a pointer to the first element of the array.

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
