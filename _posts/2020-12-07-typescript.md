---
published: true
title: Typescript
tags: typescript lang online
---
> TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. - [Home](https://www.typescriptlang.org/) / [online](https://www.typescriptlang.org/play)

## [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### [Classes](https://www.typescriptlang.org/docs/handbook/classes.html)
- inheritance: ̀`extends`
- interface: `implements` 
- [Parameter properties](https://www.typescriptlang.org/docs/handbook/classes.html#parameter-properties) - let you create and initialize a member in one place.
{% highlight typescript %}
class Octopus {
  constructor(readonly name: string) {}
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name;
{% endhighlight %}


### [Union Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html) / [Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types)

### [var](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#var-declarations) vs [let](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations) vs [const](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#const-declarations)

`var` declarations are accessible anywhere within their containing function, module, namespace, or global scope - all which we’ll go over later on - regardless of the containing block. Some people call this var-scoping or function-scoping. Parameters are also function scoped.

When a variable is declared using `let`, it uses what some call lexical-scoping or block-scoping. Unlike variables declared with `var` whose scopes leak out to their containing function, block-scoped variables are not visible outside of their nearest containing block or for-loop.

`const` declarations are like `let` declarations but, as their name implies, their value cannot be changed once they are bound. 

### [Array](https://www.typescriptlang.org/docs/handbook/basic-types.html#array) / [Tuple](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)

### Map or Hash (== [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)) / [SO](https://stackoverflow.com/questions/42211175/typescript-hashmap-dictionary-interface)
- [TypeScript Map](https://howtodoinjava.com/typescript/maps/)
- [Map class in TypeScript??](https://www.reddit.com/r/typescript/comments/39taz3/map_class_in_typescript/)
- [TypeScript hashmap/dictionary interface](https://stackoverflow.com/questions/42211175/typescript-hashmap-dictionary-interface)

{% highlight typescript %}
code
{% endhighlight %}

### [Any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) / [Void](https://www.typescriptlang.org/docs/handbook/basic-types.html#void) / [Null / Undefined](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined) / [Unknown](https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown)  / [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)
