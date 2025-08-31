---
title: "Offline: Building your own archive system \U0001F4AD"
published: true
tags: offline firefox archive dream project
---
> archive your own explored part of the web

## Rough Idea
- implement a service
	- that given a page url -> serve the backed up page
    - that give a parge url -> backed up the page
- need a web extension
	- that can toggle archive mode (store a specific page in archive)
    - when browsing, ping the archive to know if archive exist / is up to date

Page could be stored as [Zim]({% post_url 2022-10-07-zim-format %}) or [SingleFile]({% post_url 2024-10-28-firefox-singlefile %}) (compressed html)

### [Firefox Extension](https://chatgpt.com/share/68a4ac02-834c-800d-9dfe-e1578db6ca7a)

Extension have limitations and cannot gives complete access to filesystem.
To go beyond what extensions allow (e.g., writing anywhere on disk), you’d need a native application that the extension communicates with via Native Messaging.

This allows the browser to send data to a background executable which can write to disk freely.

see [CG Local]({% post_url 2018-01-28-codingame %}#firefox-extension) as an example.

## see also
- [Zim file vs singlefileZ](https://chatgpt.com/share/68a0407f-0e40-800d-95d9-3b5157ac37fd)