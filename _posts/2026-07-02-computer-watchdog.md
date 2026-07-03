---
title: Watchdog 🐕‍🦺
tags: linux-system watchdog pc-hardware raspberry-pi
toc: true
---
> Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. - [HN](https://news.ycombinator.com/item?id=21288195)


# [Raspberry-pi ⮺](https://chatgpt.com/share/6a464e32-7f44-83eb-a090-1c9da63865ea)

<div class="encart blue" markdown="1">
Expected availability from this design: ~99.9–99.99%

99.99% still means roughly 4.4 minutes of downtime per month.  
It avoid scheduled daily reboots entirely.
</div>

## Hardware Setup
- [x] Raspberry Pi 4 or 5 (Ethernet preferred over Wi-Fi)
- [x] SSD boot (USB SSD) instead of microSD

## Watchdog

<div class="encart blue" markdown="1">
The Pi 5 changed a lot of low-level hardware compared with earlier Pi models, and watchdog support is handled differently than on older BCM2835/BCM2711 systems. - [ChatGPT](https://chatgpt.com/share/6a474e11-ccc4-83eb-a07a-480620704e42)
</div>

Check devices (Pi5)
{% highlight bash %}
$ ls -l /dev/watchdog*
$ dmesg | grep -i watchdog
[    0.673520] bcm2835-wdt bcm2835-wdt: Broadcom BCM2835 watchdog timer
{% endhighlight %}

Enable hardware watchdog
{% highlight bash %}
$ sudo apt update
$ sudo apt install watchdog

# check it
$ systemctl status watchdog
{% endhighlight %}

<div class="encart orange" markdown="1">
If one of the condtion below is met, the server will reboot.
Make sure network interface is correct.
</div>

{% highlight bash %}
# /etc/watchdog.conf
watchdog-device=/dev/watchdog   # If Linux freezes → reboot
max-load-1=24                   # If system load goes insane → reboot
# interface=eth0                  # If networking dies badly enough → reboot
# ping=8.8.8.8                    # this may be handled by network recovery below to avoid reboot 
retry-timeout=60
{% endhighlight %}

{% highlight bash %}
$ sudo systemctl enable watchdog
$ sudo systemctl start watchdog
{% endhighlight %}


## Make SSH self-healing

If SSH crashes:
- wait 5 seconds
- restart automatically

No reboot needed.

[ `sudo systemctl edit ssh`  ⮺](https://chatgpt.com/share/6a4753d9-de34-83eb-b562-7fb9f4de61de)

{% highlight ini %}
[Unit]
StartLimitIntervalSec=0

[Service]
Restart=always
RestartSec=5
{% endhighlight %}

{% highlight bash %}
$ sudo systemctl daemon-reload
$ sudo systemctl restart ssh
{% endhighlight %}

## Add network recovery

<div class="encart blue" markdown="1">
Dedicated to restarting networking rather than using watchdog
</div>

test script

{% highlight bash %}
# /usr/local/bin/network-check.sh
#!/bin/bash

if ! ping -c2 1.1.1.1 >/dev/null; then
    logger "Network unavailable, restarting network"
    systemctl restart networking
fi
{% endhighlight %}

service

{% highlight bash %}
# /etc/systemd/system/network-check.service
[Unit]
Description=Network health check
After=network-online.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/network-check.sh
{% endhighlight %}

timer

{% highlight bash %}
# /etc/systemd/system/network-check.timer
[Unit]
Description=Run network check every 5 minutes

[Timer]
OnBootSec=2min
OnUnitActiveSec=5min

[Install]
WantedBy=timers.target
{% endhighlight %}

Enable 

{% highlight bash %}
# make script executable
$ sudo chmod +x /usr/local/bin/network-check.sh

$ sudo systemctl daemon-reload
$ sudo systemctl enable --now network-check.timer

# check status
$ systemctl list-timers
$ journalctl -u network-check.service
{% endhighlight %}

## Reduce disk wear

<div class="encart green" markdown="1">
Logs go mostly to RAM instead of continuously writing to storage.
</div>

{% highlight bash %}
# /etc/systemd/journald.conf
Storage=volatile
SystemMaxUse=50M
{% endhighlight %}

Restart 
{% highlight bash %}
$ sudo systemctl restart systemd-journald
{% endhighlight %}

# [PC-hardware ⮺](https://chatgpt.com/share/6a464d35-f6b4-83eb-9aec-356cce691ca2)