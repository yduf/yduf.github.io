---
published: true
title: Ansible-NAS
tags: nas zfs ansible monitoring
---
>  Build a full-featured home server or NAS replacement with an Ubuntu box and this playbook. - [davestephens/ansible-nas](https://github.com/davestephens/ansible-nas)

### Service
- [**Netdata**](http://192.168.0.125:19999) - dashboard
- [**Cockpit**](http://192.168.0.125:9090)  - admin

- [**Paperless-ngx**](http://192.168.0.125:8000) - CDM


## _TODO_
- samba 
- [Guacamole](https://guacamole.apache.org/doc/gug/users-guide.html) / [HN](https://news.ycombinator.com/item?id=39867702)
	- [docker](https://guacamole.apache.org/doc/gug/guacamole-docker.html)
- [rsync]({% post_url 2019-04-28-rsync %})
- airsonic ?
- [smart](https://help.ubuntu.com/community/Smartmontools)
	- [request](https://github.com/davestephens/ansible-nas/issues/2)
- gitea ? vs github ?
- nextcloud ?

 
## [Setup](https://github.com/davestephens/ansible-nas)

- [Hardware]({% post_url 2019-01-21-home-nas %})


### [Ansible]({% post_url 2019-04-13-ansible %})
- group_vars/all.yml and follow the instructions there for configuring your Ansible NAS.
- Copy inventory.dist to inventory and update it.
- Install the dependent roles: ansible-galaxy install -r requirements.yml (you might need sudo to install Ansible roles)
- Run the playbook - something like 
	- env ANSIBLE_NOCOWS=1 ansible-playbook -i inventory nas.yml -b -K should do you nicely.

### System Setup
- [Ubuntu Server 22.04.2 LTS](https://www.ubuntu.com/download/server)
	- [upgraded kernel]({% post_url 2018-06-16-remove-kernel %})
- [static ip]({% post_url 2017-07-16-network %})
- [wake on lan]({% post_url 2019-04-27-wake-up %})
- [zfs]({% post_url 2019-03-31-zfs-ubuntu %})
- [ssh]({% post_url 2019-04-29-ssh %})
- [auto shutdown]({% post_url 2019-04-27-wake-up %})
- [spectre mitigation disabled]({% post_url 2019-10-14-linux-fast %})

### Monitoring
- [**Netdata**](http://192.168.0.125:19999) dashboard
	- [netdata instead of Grafana](https://github.com/davestephens/ansible-nas/issues/8) see [netdata/netdata](https://github.com/netdata/netdata)
    	- [Install Netdata with kickstart-static64.sh](https://github.com/netdata/netdata/blob/master/packaging/installer/methods/kickstart-64.md#install-netdata-with-kickstart-static64sh)
            - `sudo touch /opt/netdata/etc/netdata/.opt-out-from-anonymous-statistics`
			- `--disable-telemetry`
            - `--no-updates`
    
### Remote Access
- [**Cockpit**](http://192.168.0.125:9090)
- ssh
- [VSCode server]({% post_url 2019-04-29-vscode-server %})

## Shared Folder

### [NFS]({% post_url 2019-05-10-nfs %})

List of expored folder are part of ansible configuration in **group_var/all.yml** (search for NFS), it maps the content of **/etc/exports**:
{% highlight bash %}
nfs_exports:
  - "{{ nfs_shares_root }}/Film *(rw,sync,no_root_squash)"
{% endhighlight %}

### Sambar - TBD

## Forum Discussion
- [Gitter](https://gitter.im/Ansible-NAS/Chat)
