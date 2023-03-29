---
published: true
tags: linux network benchmarking
title: Network Tools
---
## [Probing Host](https://www.linux.com/learn/who-and-what-my-network-probing-your-network-linux)

{% highlight bash %}
$ netstat -untap
$ whowatch			# interactive  user and process monitoring tool
$ ss -ltpn			# socket status
{% endhighlight %}


## [perf host/host](https://linuxaria.com/article/tool-command-line-bandwidth-linux)
[also](https://www.linux.com/learn/five-funny-little-linux-network-testers-and-monitors)

### [iperf](https://askubuntu.com/questions/7976/how-do-you-test-the-network-speed-betwen-two-boxes#7977)

You need to install iperf on both ends of the link you want to test, which in these examples are Studio and Uberpc. Then start iperf in server mode on one host, and run it in client mode on the other host. Note that on the client, you must name the server. This is the simplest way to run a test:

{% highlight bash %}
carla@studio:~$ iperf -s
terry@uberpc:~$ iperf -c studio
{% endhighlight %}


## [Misc](http://www.linuxhomenetworking.com/wiki/index.php/Quick_HOWTO_:_Ch04_:_Simple_Network_Troubleshooting)
