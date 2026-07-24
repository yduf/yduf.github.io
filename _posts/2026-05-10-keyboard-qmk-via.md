---
title: "keyboard QMK/VIA (keyd) ⌨️"
tags: keyboard config
toc: true
---
> Means keyboard firmware can be controlled and customized through the VIA app without reflashing firmware every time. - [chatgpt](https://chatgpt.com/share/6a006f71-4cc0-83eb-9a7f-c2e89c720f38)

- [Maximiser votre productivité en rendant votre clavier 2.0 ergonomique](https://www.youtube.com/watch?v=YYObbHXRTEY)
  - [Feature de customisation du clavier](https://youtu.be/YYObbHXRTEY?si=JmOuranuBx2_gsop&t=865)
  - ergol.org
  - Kanata et Arsenik
  - disposition
    - qwerty-lafayette (cheapest move)
    - ergo-L

<div class="encart blue" markdown="1">
**Alternatively**  
[configure key event directly on linux](https://chatgpt.com/share/6a05d4b8-6958-83eb-ae90-684c4f54fe56)
</div>  

# [ keyd ⮺](https://github.com/rvaiya/keyd#impetus)

keyd has several unique features many of which are traditionally only found in custom keyboard firmware like QMK as well as some which are unique to keyd.

- [Linux Keyboard Configuration with Keyd](https://www.karimarttila.fi/keyboard/2023/11/16/linux-keyboard-configuration-with-keyd.html)
  - you can have one config file for each physical keyboard
  - [man](https://raw.githubusercontent.com/rvaiya/keyd/refs/heads/master/docs/keyd.scdoc)
    - how to import a layout (azerty) ?

**keyd is for people who:**
- Want to have multiple keyboards with different layouts on the same machine.
- want to launch program with a simple key eg: `[f12 = command(firefox)`](https://chatgpt.com/share/6a0e160f-bbd4-83eb-8bf1-b9c6ff64615e)

## Kb Identify

To identify the keyboard
{% highlight bash %}
$ sudo keyd monitor
USB Composite Device Keyboard	1189:8840:fdb5dd54	a down
{% endhighlight %}

It can then be used to have a specific config for that keyboard

`sudo micro /etc/keyd/default.conf`

<details markdown="1"><summary>keyd config</summary>

{% highlight init %}
[ids]
1189:8840

[main]
i = C-play
j = play
k = playpause
l = pause
{% endhighlight %}

</details>

and apply

{% highlight bash %}
$ sudo systemctl restart keyd
or
$ sudo keyd reload
{% endhighlight %}


## [Media Keys ⮺](https://chatgpt.com/share/6a0cc588-f61c-83eb-bf95-c98254195502)

play
record - may not be recognised
pause
playpause
next
prev
volumeup
volumedown
mute

# [Layout ⮺](https://chatgpt.com/share/6a6219ab-6b28-83eb-8218-9da8d4d060a0)

ex AZERTY kebyoard
{% highlight ini %}
# /etc/keyd/azerty.conf
[ids]
*

[main]
include layouts/fr
{% endhighlight %}

# [Kanata ⮺](https://github.com/jtroo/kanata)

- [Keyd vs Kanata](https://chatgpt.com/share/6a0ca691-5438-83eb-8d26-228e83d6a722)
  - support chord