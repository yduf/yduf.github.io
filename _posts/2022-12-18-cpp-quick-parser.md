---
published: true
title: Quick Simple Parser
tags: c++ config parser single-header json toml
---
> I tend to fall back on scanf when I have to parse simple text files. - [Simple string parsing with C++](https://stackoverflow.com/questions/2880903/simple-string-parsing-with-c)

{% highlight cpp %}
char line[SOME_SIZE];
while (fgets(line, SOME_SIZE, file)) {
    int x, y, z;
    if (3 == sscanf(line, "foo: [%d %d %d]", &x, &y, &z)) {
        continue;
    }
    float w;
    if (1 == sscanf(line, "baz: %f", &w)) {
        continue;
    }
}

{% endhighlight %}

see also:
- [Parsing Command Line Arguments in C++?](https://stackoverflow.com/questions/865668/parsing-command-line-arguments-in-c)
	- [argparse](https://github.com/jamolnng/argparse) - A simple header only command line argument parser
- [toml++](https://marzer.github.io/tomlplusplus/index.html) - TOML (.ini) config parser and serializer for c++
- [json.hpp](https://github.com/nlohmann/json) - Json for modern c++ - [single-header](https://json.nlohmann.me/integration/)
- [mini-yaml](https://github.com/jimmiebergmann/mini-yaml) - Single header YAML 1.0 C++11 serializer/deserializer.
