---
published: true
title: finally in C++
tags: c++
---
> Sometimes there?s a need to invoke a special action at the end of the scope: it could be a resource releasing code, flag set, code guard, begin/end function calls, etc. - [Bartek's coding blog ](https://www.bfilipek.com/2017/04/finalact.html)

Let's meet `gsl::final_act/finally`
{% highlight cpp %}
template <class F>
class final_act
{
public:
    explicit final_act(F f) noexcept 
      : f_(std::move(f)), invoke_(true) {}

    final_act(final_act&& other) noexcept 
     : f_(std::move(other.f_)), 
       invoke_(other.invoke_)
    {
        other.invoke_ = false;
    }

    final_act(const final_act&) = delete;
    final_act& operator=(const final_act&) = delete;

    ~final_act() noexcept
    {
        if (invoke_) f_();
    }

private:
    F f_;
    bool invoke_;
};
  
// In C++17 we have Template argument deduction for class templates
// that's why you can also declare final_act object as: 
final_act _f([] { doSomething(); })
{% endhighlight %}

The above class takes a callable object - f_ - and then it will call it when it?s about to be destroyed. So even if your code returns early or throws an exception your cleanup code is required to be invoked.
  
## References
- [Followup](https://www.bfilipek.com/2017/04/finalact-follow-up.html)