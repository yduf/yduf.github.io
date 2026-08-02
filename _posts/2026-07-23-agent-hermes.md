---
title: Hermes 🔱
tags: agentic-AI agent-memory hermes
toc: true
---
> [Home](https://hermes-agent.nousresearch.com/)

<link rel="icon" href="https://hermes-agent.nousresearch.com/favicon.ico?favicon.0urifig_ow-kc.ico" sizes="48x48" type="image/x-icon">

<div class="encart blue" markdown="1">
[Cline CLI]({% post_url 2026-08-01-ide-agent-cline-vscode %}#cli-) can be used in a similar way for administrative task.
</div>

[6 Hermes Agent use cases](https://www.youtube.com/watch?v=AQHlyGA2cZM)
- /goal
- Kanban

# Project 💭

[Run it on raspberry-pi]({% post_url 2026-06-21-hardware-raspberry-pi5 %})

- [install](https://www.youtube.com/watch?v=BBDfNxKXBe4&t=53s)
  - Telegram setup

# Dashboard

<details markdown="1"><summary>Running as service</summary>
{% highlight ini %}
# /etc/systemd/system/hermes-dashboard.service
[Unit]
Description=Hermes Dashboard
After=network.target

[Service]
Type=simple
User=YOUR_USERNAME
WorkingDirectory=/home/YOUR_USERNAME
ExecStart=/usr/local/bin/hermes dashboard --no-open
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
{% endhighlight %}

{% highlight bash %}
# setup
$ sudo systemctl daemon-reload
$ sudo systemctl enable hermes-dashboard
$ sudo systemctl start hermes-dashboard

# test
$ sudo systemctl status hermes-dashboard
$ journalctl -u hermes-dashboard -f
{% endhighlight %}
</details>

# Security

## Sudo
- [hermes-sudo](https://github.com/brakthehack/hermes-sudo) - PAM ?
  - Does not seems to behave as expected
    - ask for sudo password once (twice in fact)
    - then keep calling sudo.. without asking and without error
      - Terminal("Running sudo podman stop forgejo + 1 command")

# see also
- [ J'ai testé Hermès Agents : voici pourquoi je l'ai désinstallé ](https://www.youtube.com/watch?v=gFSQgS0te60)
- [ The memory problem ](https://www.youtube.com/watch?v=lqiwQiDglGk)