---
title: Memory Safety
published: true
tags: lang memory c++-memory zig rust golang
---
- [	Partially Matching Zig Enums](https://news.ycombinator.com/item?id=44845017) - while both Rust and Zig prevent memory safety issues, Zig does it with false negatives while Rust does it with false positives. This is by necessity when using the type system for that job, but it does come at a cost that disqualifies Rust for others...

- [Go Language's Memory Safety Claims Under Fire as Data Races Enable Undefined Behavior](https://biggo.com/news/202507251923_Go_Memory_Safety_Debate) - can a language claim memory safety when concurrent programming can lead to undefined behavior and potential security vulnerabilities?
  - While Go remains significantly safer than languages like C or C++, the evidence suggests it cannot provide the same level of memory safety guarantees as truly safe languages
  - **There is no memory safety without thread safety**
