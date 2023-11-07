---
published: true
title: Firejail
tags: sandbox cgroup firefox systemd
---
> a SUID sandbox program that reduces the risk of security breaches by restricting the running environment of untrusted applications using Linux namespaces, seccomp-bpf and Linux capabilities. - [github](https://github.com/netblue30/firejail#firejail)

- [Firefox Sandboxing Guide](https://firejail.wordpress.com/documentation-2/firefox-guide/)
	- Not all sandboxes are equal. For example: Firejail does not allow to write outside Downloads. Sandbox does not prevent such writing. - [SO](https://askubuntu.com/questions/1436132/how-to-run-firefox-in-firejail)
    
- [Limit the memory size used by the jailed process #593 ](https://github.com/netblue30/firejail/issues/593)
    
### see also
- [`systemd-run --scope --user -p  MemoryLimit=1G vivaldi-stable`](https://superuser.com/questions/1624040/firejail-and-chrome-limiting-ram-useage) - and  [What is a systemd scope for?](https://askubuntu.com/questions/1058635/what-is-a-systemd-scope-for)