---
published: true
title: Server / Headless Setup
tags: hardware server headless raspberry-pi
---
> what's missing ?

### Tools
[**kitty ssh**]({% post_url 2020-10-02-kitty-term %}) - `kitty +kitten ssh user@host `  
[**ssh**]({% post_url 2019-04-29-ssh %})  
[**micro**]({% post_url2021-06-12-term-editor %}) - term editor
**git**  

h
### TODO's
- [Generate Identity]({% post_url 2019-04-29-ssh %}#generating_a_new_ssh_key)  
{% highlight bash %}
$ ssh-keygen -t rsa -b 4096 -C `hostname`
{% endhighlight %}
