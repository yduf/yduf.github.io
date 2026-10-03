---
title: Netdata
published: true
tags: monitoring disk
---
> My linux system regularly write data on disk, I don't expect this activity, how to find which process does that? - [ChatGPT](https://chatgpt.com/share/697f70de-e8dc-800d-bcdd-cc7e525c9306)

<div class="encart red" markdown="1">

**Netdata is a very common source of constant disk write**

By default, netdata writes metrics to disk continuously (its internal database), even if you’re not actively viewing dashboards.

</div>

{% highlight bash %}
$ sudo iotop -oPa
{% endhighlight %}

**-o** → show only processes actually doing I/O  
**-P** → show per-process (not per-thread)  
**-a** → accumulate I/O over time

# Setup

- [How to setup netdata on linux.](https://chatgpt.com/share/697fa396-3110-800d-b362-baf5524b9bbd)

{% highlight bash %}
$ sudo systemctl restart netdata
{% endhighlight %}

## Netdata  dashboard
- [netdata instead of Grafana](https://github.com/davestephens/ansible-nas/issues/8) see [netdata/netdata](https://github.com/netdata/netdata)
	- [Install Netdata with kickstart.sh](https://learn.netdata.cloud/docs/netdata-agent/installation/linux) - script can be customized and accept arguments
		- `sudo touch /opt/netdata/etc/netdata/.opt-out-from-anonymous-statistics`
		- `--disable-telemetry`
		- `--no-updates`

## [Ram only](https://chatgpt.com/share/69859d6c-9684-800d-ad63-1af3c32a0b5f)

{% highlight ini %}
# /opt/netdata/netdata-configs/netdata.conf
[global]
    memory mode = ram
    
[health]
    enabled = no
    
[logging]
    debug log = none
    error log = none
    access log = none
    
[registry]
    enabled = no
    
[db]
    mode = ram
{% endhighlight %}

## [Nvidia ⮺]({% post_url 2026-01-24-pc-hardware-gpu-rtx-5070Ti %})

<div class="encart orange" markdown="1">
Netdata consumes CPU, never VRAM.
</div>

{% highlight ini %}
# /opt/netdata/netdata-configs/netdata.conf
[plugins]
    nvidia_smi = yes
{% endhighlight %}

<div class="encart orange" markdown="1">

**That `[plugins]` entry is dead config on netdata v2**

`nvidia_smi` under `[plugins]` only loads `plugins.d/nvidia_smi.sh`, which no longer ships — the collector was rewritten in Go. Verified on `netdata v2.8.5`: no such file in `plugins.d/`. The GPU charts actually come from the **go.d** collector, configured somewhere else entirely.

</div>

The go.d job spawns a long-lived child that dumps *every* counter as full XML, every 5 s, forever:

{% highlight bash %}
$ pgrep -af nvidia-smi
netdata  2402  /usr/bin/nvidia-smi -q -x -l 5     # ppid 2000 = go.d.plugin
{% endhighlight %}

`-q -x` = full XML dump, `-l 5` = loop it every 5 seconds. Much heavier than a dashboard needs.

### Fix

Override the job in `/opt/netdata/etc/netdata/go.d/nvidia_smi.conf`. Editing the packaged `/opt/netdata/usr/lib/netdata/conf.d/go.d/nvidia_smi.conf` would be lost on upgrade; the user dir wins and survives.

{% highlight ini %}
jobs:
  - name: nvidia_smi
    update_every: 10
{% endhighlight %}

go.d jobs are read at startup, so `systemctl restart netdata` is required — a `reload` is not enough.

