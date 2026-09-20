---
title: "Reopen Files Without Paths"
tags: linux filesystem inode
---
> How to reopen on linux a file later when you only stored identity in a DB, without depending on a path that may have been renamed. - [chatGPT](https://chatgpt.com/share/6aae74c1-9aac-83eb-ac29-7c84c0bbead5)

<div class="encart red" markdown="1">
## Permissions are a major caveat

`open_by_handle_at()` is intentionally privileged. On typical Linux systems, calling it requires CAP_DAC_READ_SEARCH.

because access to ressource is traditionnaly path and ACL driven.
</div>

`name_to_handle_at(2)` + `open_by_handle_at(2)` are specifically designed for this kind of “reopen later without retaining the pathname” use case.

