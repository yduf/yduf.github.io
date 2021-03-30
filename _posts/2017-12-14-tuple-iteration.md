---
title: 'Iterate over std::tuple'
published: true
tags: c++ tuple
---
{% highlight cpp %}
for_each(std::make_tuple(1, '2', 3.3), [](auto x) {
    std::cout << x << std::endl;
});
{% endhighlight %}

## [Cx14 solution](https://codereview.stackexchange.com/questions/51407/stdtuple-foreach-implementation/67394#67394?newreg=7edb5dfdff294d8cb78411576eefc9f1)
{% highlight cpp %}
#include <cstddef>
#include <tuple>
#include <utility>

template <typename Tuple, typename F, std::size_t ...Indices>
void for_each_impl(Tuple&& tuple, F&& f, std::index_sequence<Indices...>) {
    using swallow = int[];
    (void)swallow{1,
        (f(std::get<Indices>(std::forward<Tuple>(tuple))), void(), int{})...
    };
}

template <typename Tuple, typename F>
void for_each(Tuple&& tuple, F&& f) {
    constexpr std::size_t N = std::tuple_size<std::remove_reference_t<Tuple>>::value;
    for_each_impl(std::forward<Tuple>(tuple), std::forward<F>(f),
                  std::make_index_sequence<N>{});
}
{% endhighlight %}
