---
published: true
title: Entity component system (ECS)
tags: c++ games software architecture ECS single-header
---
> An entity system is simply a part of your program that uses a particular way of breaking up the logic and variables of your program into source code. - [Part2](http://t-machine.org/index.php/2007/11/11/entity-systems-are-the-future-of-mmog-development-part-2/)

> [EnTT](https://github.com/skypjack/entt) is a header-only, tiny and easy to use library for game programming and much more written in modern C++, mainly known for its innovative entity-component-system (ECS) model.
Among others, it's used in Minecraft by Mojang and the ArcGIS Runtime SDKs by Esri. - [HN](https://news.ycombinator.com/item?id=23128702)

## [Why should I use an ECS?](https://skypjack.github.io/2019-02-14-ecs-baf-part-1/)
The main reason why you should use such a tool is the code organization and not (only) the performance. Of course, performance matter, but a well organized codebase is invaluable sometimes and for a lot of games you won’t have performance problem even with OOP or suboptimal implementations of component based models.
In fact, component based programming is an incredibly powerful tool to make code flexible and to speed up iterations during development. This must be your first goal, nothing else.

> Entity Component Systems are extremely performant, really good science, and shipping in middlewares like Unity. However, in order to ship an ECS game, in my experience, you have to have already made your whole game first in a normal approach, in order to have everything be fully specified sufficiently that you can correctly create an ECS implementation. - [HN](https://news.ycombinator.com/item?id=37140272)

## [FAQ](https://github.com/SanderMertens/ecs-faq#what-is-ecs)
