---
title: "Building your own archive system \U0001F4AD"
published: true
tags: archive dream project
---
> archive your own explored part of the web

### Rough Idea
- implement a service
	- that given a page url -> serve the backed up page
    - that give a parge url -> backed up the page
- need a web extension
	- that can toggle archive mode (store a specific page in archive)
    - when browsing, ping the archive to know if archive exist / is up to date

Page could be stored as [Zim]({% post_url 2022-10-07-zim-format %}) or [SingleFile]({% post_url 2024-10-28-firefox-singlefile %}) (compressed html)
