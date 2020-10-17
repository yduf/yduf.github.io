---
published: true
title: Read/Write File C++
tags: c++ file
---
### [input/output library](https://en.cppreference.com/w/cpp/io/basic_ofstream)

{% highlight cpp %}
{   // scoped, so that ostrm desctructor will close file by the end
    std::ofstream ostrm("Test.b", std::ios::binary);
    double d = 3.14;
    ostrm.write(reinterpret_cast<char*>(&d), sizeof d); // binary output
    ostrm << 123 << "abc" << '\n';                      // text output
}
{% endhighlight %}
