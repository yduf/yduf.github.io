---
published: true
title: Simplest sort algorithm
tags: sort
---
> Simple and innefficient - [HN](https://news.ycombinator.com/item?id=28758106) / [arxiv.org](https://arxiv.org/pdf/2110.01111.pdf)

[This isn't Bubble Sort](https://news.ycombinator.com/item?id=43162982)
- In bubble sort you see if two things are the wrong way round and it they are then you swap them. This does that (sort of) the "wrong way round".
- In Bubble Sort your indices are always i<j ... [here they aren't](https://www.youtube.com/watch?v=8raee-rvBw0).
- In Bubble Sort you only ever compare adjacent items. [Here you don't](https://www.youtube.com/watch?v=bydMm4cJDeU).
- This really, really isn't Bubble Sort, unoptimised or other.

{% highlight cpp %}
void sort() {
    for( int i = 0; i < N; i++)
        for( int j = 0; j < N; j++)
            if( id[i] < id[j])
                swap( i, j);
}
{% endhighlight %}

see also
- [Quicksort Algorithm in Five Lines of Code! ](https://www.youtube.com/watch?v=OKc2hAmMOY4) - but not in place

[ ![caption](https://github.com/radiantly/simplest-sort/raw/main/demo/screencast.gif)](https://github.com/radiantly/simplest-sort)
