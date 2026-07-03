---
title: Managing user (linux)  👤
tags: linux-system
excerpt_separator: ""
toc: true
---
# UID/GUID

{% highlight bash %}
$ id
{% endhighlight %}

## [Changing user id  ⮺](https://chatgpt.com/share/6a4694af-7910-83eb-bead-641a45fb44f8)

<div class="encart red" markdown="1">
Changing a UID does not automatically update file ownership in the filesystem. You need to fix ownership of the user's files manually.
</div>

{% highlight bash %}
$ sudo usermod -u 2001 john
{% endhighlight %}

## creating user with specific id

{% highlight bash %}
# To create a user named john with UID 1050
$ sudo useradd -u 1050 john
{% endhighlight %}



## [Changing username  ⮺](https://chatgpt.com/share/6a4695c6-4e64-83eb-99c0-b905354aad79)

<div class="encart blue" markdown="1">
It's easier than changing id.
</div>
<div class="encart orange" markdown="1">
A few cautions:
- Do not modify the currently logged-in user.
- Ensure you have a second admin path (another account, root shell, SSH session, recovery access).
- NFS usually cares about numeric UID/GID, not usernames, so matching 1000:1000 across machines is often what matters.
- Some services cache identities; a reboot after changes is often easier than chasing stale state.

</div>

{% highlight bash %}
# changes the account name itself.
$ sudo usermod -l newusername oldusername

# You’ll often also want to rename the user’s home directory
$ sudo usermod -d /home/newusername -m newusername

# and if user has matching primagry group with the old name, rename that too:
$ sudo groupmod -n newusername oldusername
{% endhighlight %}

# [Admin user ⮺](https://chatgpt.com/share/6a4698b6-4b1c-83eb-a6f7-6a5bc95edea8)

{% highlight bash %}
# Create the user
$ sudo adduser newusername

# Give the user administrative (sudo) privileges.
$ sudo usermod -aG sudo newusername

# Verify the group membership
$ groups newusername

# Test the account
## Switch to the user
$ su - newusername
$ sudo whoami
{% endhighlight %}
