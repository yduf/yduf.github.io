---
title: herdr 🐑 (~tmux)
tags:  term tmux
---
> One terminal to rule them all - [Home](https://herdr.dev/) / [youtube](https://www.youtube.com/watch?v=yQDARWdrPeY) / [HN](https://news.ycombinator.com/item?id=48756578)

- native mouse scroll
- Support [mosh]({% post_url 2017-06-04-ssh-mosh %}) like functionnality herdr (client) <-> herdr (remote) control.
- [feature demo](https://www.youtube.com/watch?v=Oa2BXTerhtY)
  
```bash
$ herdr -- remote yves@bastion  # self install if needed
```

# [Config ⮺](https://herdr.dev/docs/configuration/)

Themes are accessible via `menu/settings`

<div class="encart green" markdown="1">
Herdr config can be reload within a session using

`.config/herdr/config.toml`

```bash
$ herdr server reload-config
```
</div>

# Server

Closing everything

```bash
$ herdr server stop
```