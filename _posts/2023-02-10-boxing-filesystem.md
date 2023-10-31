---
published: true
title: Boxing Filesystem (boxxy .config)
tags: home config filesystem cgroup namespace
---
> boxxy is a tool for boxing up misbehaving Linux applications and forcing them to put their files and directories in the right place, without symlinks! - [boxxy](https://github.com/queer/boxxy#boxxy) / [HN](https://news.ycombinator.com/item?id=34730520)

### [Features](https://github.com/queer/boxxy#features)
- box any program and force it to put its files/directories where you want it to
- context-dependent boxing, ie different rules apply in different directories depending on your configuration

[**AppImage**](https://github.com/queer/boxxy/issues/142) have to be handled like a docker image:
just use the `--appimage-extract-and-runparameter` to the AppImage in your call, eg:

{% highlight bash %}
$ ./boxxy -l debug ~/app/digiKam-8.1.0-x86-64.appimage --appimage-extract-and-run
{% endhighlight %}


see also
- [can non-root user run process in chroot jail?](https://serverfault.com/questions/135599/ubuntu-can-non-root-user-run-process-in-chroot-jail/811509#811509)
