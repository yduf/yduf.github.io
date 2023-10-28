---
published: true
title: Boot Process with Systemd
tags: systemd boot
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