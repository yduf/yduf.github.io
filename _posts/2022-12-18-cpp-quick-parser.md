---
published: true
title: Quick Simple Parser
tags: c++ parser
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
