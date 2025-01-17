---
published: true
title: Firejail / Sandboxing
tags: sandbox cgroup firefox systemd
---
> a SUID sandbox program that reduces the risk of security breaches by restricting the running environment of untrusted applications using Linux namespaces, seccomp-bpf and Linux capabilities. - [github](https://github.com/netblue30/firejail#firejail)

### [Limit memory usage for a single Linux process](https://unix.stackexchange.com/questions/44985/limit-memory-usage-for-a-single-linux-process)

Limiting memory consumtion
{% highlight bash %}
$ systemd-run --scope --user -p MemoryLimit=6G -p MemorySwapMax=0 firefox %u
{% endhighlight %}


- [Firefox Sandboxing Guide](https://firejail.wordpress.com/documentation-2/firefox-guide/)
	- Not all sandboxes are equal. For example: Firejail does not allow to write outside Downloads. Sandbox does not prevent such writing. - [SO](https://askubuntu.com/questions/1436132/how-to-run-firefox-in-firejail)
    
- [Limit the memory size used by the jailed process #593 ](https://github.com/netblue30/firejail/issues/593) - `ulimit` + `firejail` or [`firejail --cgroups`](https://github.com/netblue30/firejail/issues/49)
	- [ulimit vs cgroup](https://unix.stackexchange.com/questions/302938/about-ulimit-setrlimit-and-cgroup) - the mechanisms are generally not redundant:
    	- cgroup sets limits per groups of processes
        - setrlimit sets limits per user or per process (ulimit is a wrapper arrount setrlimit)
        

### see also
- [`systemd-run --scope --user -p  MemoryLimit=1G vivaldi-stable`](https://superuser.com/questions/1624040/firejail-and-chrome-limiting-ram-useage) - and  [What is a systemd scope for?](https://askubuntu.com/questions/1058635/what-is-a-systemd-scope-for)
- [How do I check cgroup v2 is installed on my machine?](https://unix.stackexchange.com/questions/471476/how-do-i-check-cgroup-v2-is-installed-on-my-machine) - `grep cgroup /proc/filesystems`
- [How To Sandbox Processes With Systemd On Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-sandbox-processes-with-systemd-on-ubuntu-20-04)
