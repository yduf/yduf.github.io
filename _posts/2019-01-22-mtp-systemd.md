---
published: true
title: Tethering to android phone in mint 18 quickly disconnects
tags: linux android mtp
---
Usb tethering with phone works for 20 seconds and then it disconnects. After that it converts that connection to a 'mobile broadband' but it still doesn't work. And I can't find the solution anywhere.

[ModemManager interferes with USB tethering, ](https://www.reddit.com/r/linuxmint/comments/4sqev1/tethering_to_android_phone_in_mint_18_quickly/)and can be disabled with:

{% highlight bash %}
sudo systemctl stop ModemManager.service
sudo systemctl disable ModemManager.service
{% endhighlight %}

