---
published: true
title: Linux namespace
tags: docker filesystem
---
> A Linux namespace is an abstraction over resources in the operating system. We can think of a namespace as a box. Inside this box are these system resources, which ones exactly depend on the box’s (namespace’s) type. There are currently 7 types of namespaces _Cgroup_, _IPC_, _Network_, _Mount_, _PID_, _User_, _UTS_. - [A deep dive into Linux namespaces](https://ifeanyi.co/posts/linux-namespaces-part-1/)

[**_Mount_ namespaces**](https://ifeanyi.co/posts/linux-namespaces-part-3/) - isolate filesystem resources.