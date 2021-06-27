---
published: true
title: Read/Write File in C++
tags: c++ file io-stream
---
### [input/output library](https://en.cppreference.com/w/cpp/io/basic_ofstream)

[Return content of stream as a string](http://wordaligned.org/articles/cpp-streambufs)
{% highlight cpp %}
std::string load_stream(std::istream& src)
{
    std::ostringstream buf;
    buf << src.rdbuf();
    return buf.str();
}

std::ifstream in("input/test1.txt");
cerr << load_stream(in);
{% endhighlight %}

Write file binary / text
{% highlight cpp %}
{   // scoped, so that ostrm desctructor will close file by the end
    std::ofstream ostrm("Test.b", std::ios::binary);
    double d = 3.14;
    // binary output
    ostrm.write(reinterpret_cast<char*>(&d), sizeof d); 
    // text output
    ostrm << 123 << "abc" << '\n';
}
{% endhighlight %}
