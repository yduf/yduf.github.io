---
published: true
title: 'Write code that is easy to delete, not easy to extend'
tags: software simplicity
---
> Every line of code written comes at a price: maintenance. To avoid paying for a lot of code, we build reusable software. The problem with code re-use is that it gets in the way of changing your mind later on. - [Programming is terrible]({% post_url 2017-07-04-Programming-is-terrible %}) - [HN](https://news.ycombinator.com/item?id=23914486)

> all code tends to be refactored to its level of unrefactorability. - [HN](https://news.ycombinator.com/item?id=23915571)

> Code that isn't easy to replace doesn't get replaced, instead it gets expanded. Its conditionals get bigger. The number of class names it knows about grows larger. These sorts of expansions tightly couple the code you're changing to other parts of your application. This coupling makes it difficult to swap in alternative implementations, which it turn leads to a long half-life for the code. - [The Half-Life of Code](https://sandimetz.com/blog/2017/6/1/the-half-life-of-code)