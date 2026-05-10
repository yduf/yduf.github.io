---
title: Gromit-MPX 📝
tags: broadcast doc
toc: true
---
> On screen annotation tool - [github](https://github.com/bk138/gromit-mpx#gromit-mpx)

# Hotkey

<pre>
F9:        toggle painting
SHIFT-F9:  clear screen
CTRL-F9:   toggle visibility

ALT-F9:    quit Gromit-MPX

F8:       undo last stroke
SHIFT-F8: redo last undone stroke
</pre>

# Tools configuration

<pre>
"default" = "red Pen";						
"default"[SHIFT] = "blue Pen";					
"default"[CONTROL] = "yellow Pen";				
"default"[2] = "green Marker";					
"default"[Button3] = "Eraser";					
"default"[ALT] = "blue Circle";
"default"[ALT,SHIFT] = "red Filled Circle";
"default"[ALT,CONTROL] = "semi-transparent Circle";
</pre>

## Color

<pre>
color="#FF0000"   # red
color="#00FFFF88" # use RGBA (with transparency)
"My Custom Pen" = PEN (size=6 color="#4FD1C5");
</pre>

## Config

{% highlight bash %}
# you need to restart the tool for config to be takeng into account
$ killall gromit-mpx
$ gromit-mpx
{% endhighlight %}

# Install
- with flatpack and _software install_ on linuxmint

[![demo](https://github.com/bk138/gromit-mpx/raw/master/data/on-gnome-wayland.png)](https://github.com/bk138/gromit-mpx#gromit-mpx)