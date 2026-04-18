---
published: true
title: Clean Code?
tags: code software fastware
---
>  "clean code" is a phase most programmers go through. Like adolescence, with it's desire to find The One True Way. But after that most of us discover that the principles are pointless in and by itself and that it's often preferable to ship "working software" instead. - [Clean code is a phase](https://koenvangilst.nl/blog/clean-code-is-a-phase#content)

[**Code is run more than read**](https://olano.dev/blog/code-is-run-more-than-read/) / [HN](https://news.ycombinator.com/item?id=47718470)
- Code is read more than written 
  - `maintainer > author`
- Code is used more than read 
  - `user > maintainer > author => user > dev`
- Code is run more than read 
  -  `user > ops > dev`
- Also, there’s business 
  - `biz > user > ops > dev`
- Smells
  - Unmaintainable code
    - `author > maintainer `
  - Unusable software 
    - ` dev > user`
  - Works on my machine
    - `dev > ops`
  - The right thing 
    - `dev > biz` - Code considered as an end in itself. Software built by pretentious artisans, musicians of the Titanic, and Lisp Hackers.
  - Resume-driven development 
    - `dev > *`
  - Imaginary software 
    - `biz > user > ops > dev`
  - Late capitalism 
    - `biz > user > ops > dev`
- An elephant 
  - `biz > user`
  - `user > ops > dev`
  - `biz > ops > dev`
  - `biz ≹ user`


**see also**
- ["Clean" Code, Horrible Performance](https://www.youtube.com/watch?v=tD5NrevFtbU) / [blog](https://www.computerenhance.com/p/clean-code-horrible-performance) - polymorphisme and avoiding internal knowledge whipeout twelve years of hardware improvement.
- [Horrible Code, Clean Performance](https://johnnysswlab.com/horrible-code-clean-performance/) / [HN](https://news.ycombinator.com/item?id=35596069)
- [Bad scientific code beats code following "best practices"](https://news.ycombinator.com/item?id=38872325)
