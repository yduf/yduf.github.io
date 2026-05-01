---
published: true
title: CLI improved 📟
tags: cli shell term
toc: true
---
> [Home](https://remysharp.com/2018/08/23/cli-improved) / [\[HN\]](https://news.ycombinator.com/item?id=17874718)

**see also**
- [10 CLI Tools I'm using alongside Claude Code](https://www.youtube.com/watch?v=3NzCBIcIqD0) / [part 2](https://www.youtube.com/watch?v=dTcfWvZkaV8)
  - lazygit
  - glow - like bat
  - llmfit => to explore 
  - **ranger** - file browser in term
    - **yazi**
  - **zoxide** - memorize where you are use to go (and cd you there)
    - interactive mode
  - **btop** - see [top cmd below](#bpytop--bashtop--htop--top-)
  - **chafa** - terminal viewer
  - **csvlens** - scroll over csv files
  - **eza** - improved ls - can display icon / group in grid
  - **tldr** - summarize man page


## [**bat** > cat ⮺](https://github.com/sharkdp/bat#syntax-highlighting)

A cat(1) clone with wings. It has highlighting, paging, line numbers and git integration. 


The bat command also allows me to search during output (only if the output is longer than the screen height) using the / key binding (similarly to less searching).

It can still be used like cat: "Whenever bat detects a non-interactive terminal, it will fall back to printing the plain file contents." 

## [htop > top ⮺]({% post_url 2018-08-30-htop %})

## [ncdu > du ⮺]({% post_url 2018-07-11-disk-full %})

## [cp with progress ⮺]({% post_url 2019-05-12-cp-progress %})
