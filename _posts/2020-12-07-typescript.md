---
published: true
title: Typescript
tags: typescript lang
---
> TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. - [Home](https://www.typescriptlang.org/)

## [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### [var](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#var-declarations) vs [let](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations) vs [const](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#const-declarations)

`var` declarations are accessible anywhere within their containing function, module, namespace, or global scope - all which we’ll go over later on - regardless of the containing block. Some people call this var-scoping or function-scoping. Parameters are also function scoped.

When a variable is declared using `let`, it uses what some call lexical-scoping or block-scoping. Unlike variables declared with `var` whose scopes leak out to their containing function, block-scoped variables are not visible outside of their nearest containing block or for-loop.

`const` declarations are like `let` declarations but, as their name implies, their value cannot be changed once they are bound. 

### [Array](https://www.typescriptlang.org/docs/handbook/basic-types.html#array) / [Tuple](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)

### Map
- [TypeScript Map](https://howtodoinjava.com/typescript/maps/)
- [Map class in TypeScript??](https://www.reddit.com/r/typescript/comments/39taz3/map_class_in_typescript/)
- [TypeScript hashmap/dictionary interface](https://stackoverflow.com/questions/42211175/typescript-hashmap-dictionary-interface)

### Hash (== [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html))

### [Any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) / [Void](https://www.typescriptlang.org/docs/handbook/basic-types.html#void) / [Null / Undefined](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined) / [Unknown](https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown)  / [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)
