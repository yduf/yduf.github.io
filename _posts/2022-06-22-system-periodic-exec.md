---
published: true
title: Execute Task periodically
tags: linux-system service
---
> Cron, however, fails if your system happens to not be running when the appropriate execution time occurs.  
> Anacron insures that the task will be executed when your system is again active. However, the anacron frequency of execution can be no less than daily.
>
> Systemd timers offer the best of both cron and anacron. - [Systemd Timers for Scheduling Tasks](https://fedoramagazine.org/systemd-timers-for-scheduling-tasks/)

The modern option is to use a systemd timer unit. This requires creating a systemd unit which defines the job you want to periodically run, and a systemd.timer unit defining the schedule for the job. - [SO](https://askubuntu.com/questions/844533/how-to-execute-a-script-periodically-without-using-crontab/844618#844618)

## Running job as regular user

{% highlight bash %}
$ systemctl --user status "*timer"  # list timers
$ systemctl --user list-timers      # summary of next programmed execution
{% endhighlight %}


### [Create timer](https://opensource.com/article/20/7/systemd-timers)
- [systemd/Timers](https://wiki.archlinux.org/title/Systemd/Timers)

in `$HOME/.config/systemd/user`

**my-job.service**
{% highlight init %}
[Unit]
Description=Job that needs periodic execution

[Service]
ExecStart=/path/to/your/script
{% endhighlight %}

**my-job.timer**
{% highlight init %}
[Unit]
Description=Timer that periodically triggers my-job.service

[Timer]
OnCalendar=minutely
{% endhighlight %}

Then enable the newly created units, and start the timer:
{% highlight bash %}
$ systemctl --user enable my-job.service my-job.timer
$ systemctl --user start my-job.timer
{% endhighlight %}

To verify that the timer is set:
{% highlight bash %}
$ systemctl --user list-timers
NEXT                         LEFT     LAST                         PASSED UNIT         ACTIVATES
Wed 2016-11-02 14:07:00 EAT  19s left Wed 2016-11-02 14:06:37 EAT  3s ago my-job.timer my-job.service
{% endhighlight %}

`journalctl -xe` should show log entries of the job being run.
`systemctl --user status disk-usage.service` can help diagnose issue as well (eg: bad path of script or shell)