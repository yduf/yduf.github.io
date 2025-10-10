---
title: Implementing a Struct of Arrays
published: true
tags: c++ vector array template single-header
---
> C++26 Reflection doesn’t have a lot on offer when it comes to code generation, but it does have the tools for this. - [article](https://brevzin.github.io/c++/2025/05/02/soa/) / [HN](https://news.ycombinator.com/item?id=43935434)

see also
- [SOA library in C++](https://chatgpt.com/share/68e8e4a2-3838-800d-a173-e9206a65dc00)
	- [EnTT](https://github.com/skypjack/entt?tab=readme-ov-file) - a header-only, tiny and easy Popular for ECS (Entity-Component-System) in games.
    	- Internally uses SOA for components.
- [llvm-mos-sdk](https://llvm-mos.github.io/llvm-mos-sdk/classsoa_1_1Array.html) - soa::Array< T, N > - An array implemented as a struct of arrays.
