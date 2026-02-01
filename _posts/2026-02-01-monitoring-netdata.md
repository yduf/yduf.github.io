---
title: Netdata
published: true
tags: monitoring disk
---
> My linux system regularly write data on disk, I don't expect this activity, how to find which process does that? - [ChatGPT](https://chatgpt.com/share/697f70de-e8dc-800d-bcdd-cc7e525c9306)

<div style="
            
  border-left: 5px solid #e53935; /* red */
  background: #ffebee;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

**Netdata is a very common source of constant disk write**

By default, netdata writes metrics to disk continuously (its internal database), even if you’re not actively viewing dashboards.

</div>

{% highlight bash %}
$ sudo iotop -oPa
{% endhighlight %}

**-o** → show only processes actually doing I/O  
**-P** → show per-process (not per-thread)  
**-a** → accumulate I/O over time

### Netdata  dashboard
- [netdata instead of Grafana](https://github.com/davestephens/ansible-nas/issues/8) see [netdata/netdata](https://github.com/netdata/netdata)
	- [Install Netdata with kickstart.sh](https://learn.netdata.cloud/docs/netdata-agent/installation/linux) - script can be customized and accept arguments
		- `sudo touch /opt/netdata/etc/netdata/.opt-out-from-anonymous-statistics`
		- `--disable-telemetry`
		- `--no-updates`
