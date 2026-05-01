---
title: Starship 🛸
tags: shell
toc: true
---
> The minimal, blazing-fast, and infinitely customizable prompt for any shell! - [Home](https://starship.rs/)

- [ The Greatest Minimal Shell Prompt Ever Existed ](https://www.youtube.com/watch?v=oe3gadOQk44)
  - [starship.toml](starship/.config/starship/starship.toml)

**see also**
- [ The Forever Timeless Terminal Setup ](https://www.youtube.com/watch?v=MHPRnM38Dyc)

# Feature
- live update
- change windows title
- right prompt
- continuation prompt

## Transient Prompt

Transient prompt allows you to change your prompt after you execute your command. This can be useful if you’d prefer a simpler prompt in your scrollback and only keep the relevant info on your current prompt.

Only supported by 
- [fish](https://starship.rs/advanced-config/#transientprompt-and-transientrightprompt-in-fish)
  - [can be used to display actual status after execution](https://chatgpt.com/share/69ec658a-f68c-83eb-8ed5-53b1114ae101)
- bash
- [powsershell](https://gilbertsanchez.com/posts/prompt-starship/)


# [Configuration ⮺](https://starship.rs/config/)

{% highlight bash %}
$ mkdir -p ~/.config && touch ~/.config/starship.toml
{% endhighlight %}

## [promt by shell ⮺](https://chatgpt.com/share/69eb8d1c-17bc-83eb-94e2-a5e2c9867da6)

Define the shell in an env.variable

Then use it in starship
{% highlight toml %}
format = '''${env_var.SHELL}(bold green) '''

[env_var.SHELL]
variable = "STARSHIP_SHELL_STYLE"
format = "[$env_value]($style) "
style = "bold green"

{% endhighlight %}

## [Example ⮺](https://starship.rs/presets/#pure-prompt)
- [Adam DeHaven](https://www.adamdehaven.com/snippets/how-to-customize-your-shell-prompt-with-starship)

# Alternatives
- [ohmyposh](https://www.youtube.com/watch?v=9U8LCjuQzdc) - support transient prompt for zsh