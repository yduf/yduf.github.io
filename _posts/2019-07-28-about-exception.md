---
published: false
title: Exception
tags: software article
---
> Well it seems you don't understand exceptions. They eliminate erroneous states entirely, since the objects just don't get created if an error occurs.
> 
The alternative ... was making all of your state be a union with some kind of error, and making sure all accesses handle the fact the variable might be in a erroneous state. That is a huge explosion of possible states in your program, and essentially making every invariant weak everywhere.
> 
Then FFI, ... interfacing with C. Problems that arise when interfacing with other programming languages are orthogonal to a language's ability to be used for system programming. Obviously you wouldn't let an exception propagate through some C code, that's forbidden. - [HN](https://news.ycombinator.com/item?id=34216678)

## Raison d'être

{% highlight cpp %}
# take off
power_engine
release_rocket
take_off
aim_to_moon
...
{% endhighlight %}

As soon as a programmer goes beyond "hello world" sample program, he will face "real world" (or production) issue.
When we solve a problem, there is an ideal path on which we put much focus, but in reality for each operation that invovle external interactions, there is a possibility of failure. So what was initially thought as a sequential set of operation, has to be changed to a multipath version to make it robust to runtime issue and allows program to fail gracefully, and space shuttle to fly.

One historical way of doing this is to take alternative error path at each step and act accoringly. This is both naive, and a common practice which in general wil put in evidence rapidly the complexity of this task.

{% highlight cpp %}
power_status = power_engine
if power_status
    release_status = release_rocket
    if release_status
        take_off_status = take_off

        aim_status = aim_to_moon

        if aim_status
            ...
        else
            # ??!!
        end
    else
        # !! stop engine
    end
else
    # !! emergency exit for astronaut
    # evacute fuel
    ...
    
...
{% endhighlight %}

The set of issue to address depends of the runtime environemnet and the tool used, but can be caterized as:
- Ressource allocated before the error condition, may have to be explicitly deallocated, ex: may be the engine as to be turned off.
- The place where the condition is detected, may not be the place where there is sufficient information to take proper actions, ex the the mechanism that detect engine start, may be buried deep inside the callstack. Which means:
    - that error status have to be propaged back to the caller,
    - may be several status have to be aggreated allong the way.
- Each error identified in spec have to be taken into account, if not the system may appear to function properly in simulator, but will fail in reality.

Exception is an error signaling mechanism meant to address some of this issue by ensuring that:
- error can be propagated easily downward the caller, without having to plan return parameter ahead.
    - so that any place with sufficient information can take action or intermediate action
- at least one of the caller has to take the exception into account

With exception the above code would ideally look like this

{% highlight cpp %}
# take off
try 
    power_engine
    release_rocket
    take_off
    aim_to_moon
    ...

rescue
    when released_failed
        power_off_engine

    when power_failed
        emergency_exit
end
{% endhighlight %}
