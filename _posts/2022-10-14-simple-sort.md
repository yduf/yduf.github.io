---
published: true
title: Simplest sort algorithm
tags: sort
---
> Simple and innefficient - [HN](https://news.ycombinator.com/item?id=28758106) / [arxiv.org](https://arxiv.org/pdf/2110.01111.pdf)

{% highlight cpp %}
void sort() {
    for( int i = 0; i < N; i++)
        for( int j = 0; j < N; j++)
            if( id[i] < id[j])
                swap( i, j);
}
{% endhighlight %}

[ ![caption](https://github.com/radiantly/simplest-sort/raw/main/demo/screencast.gif)](https://github.com/radiantly/simplest-sort)

