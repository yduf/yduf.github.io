---
published: true
title: Bash (shell) 🐚
tags: bash cli shell
toc: true
---
> The term “shell” in Unix comes from a simple metaphor: it acts as a protective outer layer around the system’s core. - [ChatGPT](https://chatgpt.com/share/69cfb44c-cf30-832e-b4da-d97aa9f06925)

- [even a bad shell is better than being homelesss](https://www.youtube.com/watch?v=f1dnocPQXDQ)

# [Run multiple commands and kill them all ⮺](https://unix.stackexchange.com/questions/204480/run-multiple-commands-and-kill-them-as-one-in-bash/430215#430215)
use subshells with background commands.
{% highlight cpp %}
(command1 & command2 & command3)
{% endhighlight %}

# [redirect sudo output ⮺](https://stackoverflow.com/questions/82256/how-do-i-use-sudo-to-redirect-output-to-a-location-i-dont-have-permission-to-wr/82278#82278)

Run a shell with sudo and give the command to it by using the -c option
{% highlight bash %}
sudo sh -c 'ls -hal /root/ > /root/test.out'
{% endhighlight %}

Create a script with your commands and run that script with sudo
{% highlight bash %}
#!/bin/sh
ls -hal /root/ > /root/test.out
{% endhighlight %}

# [.profile vs .bashrc ⮺](https://chatgpt.com/share/6a6393a6-24b8-83eb-bc66-97a06ce48c3f)

**.profile** → for login shells (and often your graphical login session): set up your environment.  
**.bashrc** → for interactive non-login Bash shells: configure your shell experience

<pre>
login
  |
  +--> .profile
          |
          +--> export PATH
          +--> export EDITOR
                  |
                  +--> terminal
                          |
                          +--> bash
</pre>