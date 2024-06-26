---
published: true
title: Code Visualization
tags: code visualizer mental-model
---
> So here you are – sitting alone in the darkness, surrounded by the walls with mysterious texts, – and using the code editor to shine a beam of light onto this wall to read a small part of it.  - [IDE vs Fire Torch](https://divan.dev/posts/visual_programming_go/) / 
[HN](https://news.ycombinator.com/item?id=30891230)

## [Mapper vs Packer](https://divan.dev/posts/visual_programming_go/#mapper_vs_packers)  
There is a physical [knowledge graph in your head](https://gallantlab.org/huth2016/) that represents your beliefs about reality. By physical, I mean precisely that – those are actual physical connections in the real world, like on molecular level. _That’s why it’s so much easier to learn things right from scratch, instead of relearning them._ You can’t just remove already grown connections. You have to grow a new one, stronger than previous.

[![caption](https://1.bp.blogspot.com/-k5brI6NLyaY/WK0d_ZR0WNI/AAAAAAAAA_E/m5ZnXWI2pE4Ud8aVHUgGIo_Q1ac-0f8dQCLcB/s320/cppmap3.0%2B%2528screen%2B8bit%2B96dpi%2529.png) ](https://fearlesscoder.blogspot.com/2017/02/the-c17-lands.html)

> the biggest challenge is visualizing the big picture.   
> Auto-generated documents focus on the file/class/line level details, but they don't tell you the overall architecture, how components work with each other, the lifetime of components. - [HN](https://news.ycombinator.com/item?id=33708722)

## [Tools for visualizing a codebase](https://lmy.medium.com/7-tools-for-visualizing-a-codebase-41b7cddb1a14)

- [repo-visualizer](https://github.com/githubocto/repo-visualizer-demo) -  plots files as bubbles, indicating their extension names and sizes with colors and sizes, respectively. ( DirTreestat could be use to do the same)
	- see also [Repography](https://repography.com/app/0/neovim/neovim/trunk/poster-surface) and [Mountain](https://workartwork.org/design/mountain) for poster, as well as [The C++17 Land](https://fearlesscoder.blogspot.com/2017/02/the-c17-lands.html)

- [docker-compoze-viz](https://github.com/pmsipilot/docker-compose-viz) - it’s also plotting extra information like open ports and mounted volumes.

- Visualize call graphs
	- [Code2flow](https://github.com/scottrogowski/code2flow) supports a couple of dynamic languages, including Python, JavaScript, Ruby, and PHP.
