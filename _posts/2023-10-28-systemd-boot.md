---
published: true
title: Boot Process with Systemd
tags: systemd boot init
---
> Analyzing System Boot Performance - [practical examples](https://www.geeksforgeeks.org/boot-process-with-systemd-in-linux/)

{% highlight bash %}
# To view the overall time it takes for the system to boot
$ systemd-analyze time

# To view a summary of the boot process, including the services that are started 
# and the time it takes for each service to start
$ systemd-analyze critical-chain

# To view a list of services that are started during the boot process, 
# sorted by the time taken for each service to start
$ systemd-analyze blame

# To view a graphical representation of the boot process, 
# showing the dependencies between services and the time taken for each service to start
$ systemd-analyze plot > boot.svg
{% endhighlight %}

[![caption](https://media.geeksforgeeks.org/wp-content/uploads/20221216180018/boot.png)](https://www.geeksforgeeks.org/boot-process-with-systemd-in-linux/)

### see also
- [Modern CPUs have a backstage cast](https://www.devever.net/~hl/backstage-cast) - Basically any multiprocessor CPU chip of reasonable sophistication produced today — i.e., desktop and server CPUs, and probably smartphone SoCs for that matter, also has an entire “backstage cast” of ancillary support cores keeping things running correctly. Some of these mainly handle the boot process, and we're more likely to know about these (e.g. Intel ME/AMD PSP), but even less known are “backstage” cores which don't participate in the boot process but which are instead involved in things like power and thermal regulation.
