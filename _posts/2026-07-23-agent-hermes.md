---
title: Hermes 🔱
tags: agentic-AI
toc: true
---
> [Home](https://hermes-agent.nousresearch.com/)

[6 Hermes Agent use cases](https://www.youtube.com/watch?v=AQHlyGA2cZM)
- /goal
- Kanban

## Project 💭

[Run it on raspberry-pi]({% post_url 2026-06-21-hardware-raspberry-pi5 %})

- [install](https://www.youtube.com/watch?v=BBDfNxKXBe4&t=53s)
  - Telegram setup

## Dashboard

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


# see also
- [ J'ai testé Hermès Agents : voici pourquoi je l'ai désinstallé ](https://www.youtube.com/watch?v=gFSQgS0te60)
