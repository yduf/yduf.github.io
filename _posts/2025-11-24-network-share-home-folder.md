---
title: Sharing Home folder
published: true
tags: network nfs home
excerpt_separator: ''
---
<link rel="shortcut icon" href="https://cdn.iconscout.com/icon/premium/png-512-thumb/network-folder-10-794131.png?f=webp&w=512" type="image/x-icon" />

## [Sharing Home folder 🚧](https://chatgpt.com/share/68206e70-c3ac-800d-83aa-1e488dabacf2)
  
Things to consider ⚠️
- **ssh keys will be shared ash well**
	- to be able to connect to other system [own key need to be added to ~/.ssh/authorized_keys](https://yduf.github.io/ssh/#copy-ssh-keys-to-another-machine---askubuntu)
- firefox will refuse to start thinking it's already started
  
It is advise to enable different config between the two system (missing application / different version)
-  consider using a dotfile manager (like [chezmoi](https://www.chezmoi.io/) or yadm) to manage user-specific configs smartly.

see also
- [Is it possible to store user's home directories remotely?](https://askubuntu.com/questions/553981/is-it-possible-to-store-users-home-directories-remotely)
- [how to deal with shared home directory on linux?](https://superuser.com/questions/211792/how-to-deal-with-shared-home-directory-on-linux)
  
  