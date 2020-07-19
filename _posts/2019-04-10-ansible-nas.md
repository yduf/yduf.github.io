---
published: true
title: Ansible-NAS
tags: nas zfs ansible monitor
---
>  Build a full-featured home server or NAS replacement with an Ubuntu box and this playbook. - [davestephens/ansible-nas](https://github.com/davestephens/ansible-nas)

## _TODO_
- docker / zfs container volume
- guacamole
- [rsync]({% post_url 2019-04-28-rsync %})
- airsonic ?
- [smart](https://help.ubuntu.com/community/Smartmontools)
	- [request](https://github.com/davestephens/ansible-nas/issues/2)
- gitea ? vs github ?
- samba ?
- nextcloud ?
 
## [Setup](https://github.com/davestephens/ansible-nas)

### [Ansible]({% post_url 2019-04-13-ansible %})
- group_vars/all.yml and follow the instructions there for configuring your Ansible NAS.
- Copy inventory.dist to inventory and update it.
- Install the dependent roles: ansible-galaxy install -r requirements.yml (you might need sudo to install Ansible roles)
- Run the playbook - something like 
	- env ANSIBLE_NOCOWS=1 ansible-playbook -i inventory nas.yml -b -K should do you nicely.

### System Setup
- [Ubuntu Server 18.04.2 LTS](https://www.ubuntu.com/download/server)
	- [upgraded kernel]({% post_url 2018-06-16-remove-kernel %})
- [static ip]({% post_url 2017-07-16-network %})
- [wake on lan]({% post_url 2019-04-27-wake-up %})
- [zfs]({% post_url 2019-03-31-zfs-ubuntu %})
- [ssh]({% post_url 2019-04-29-ssh %})
- [auto shutdown]({% post_url 2019-04-27-wake-up %})
- [spectre mitigation disabled]({% post_url 2019-10-14-linux-fast %})

### Monitoring
- System
	- [netdata instead of Grafana](https://github.com/davestephens/ansible-nas/issues/8) see [netdata/netdata](https://github.com/netdata/netdata)
    	- [Install Netdata with kickstart-static64.sh](https://github.com/netdata/netdata/blob/master/packaging/installer/methods/kickstart-64.md#install-netdata-with-kickstart-static64sh)
    
- Docker
	- [portainer.io](https://www.portainer.io/installation/)
	- [docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
{% highlight bash %}
sudo systemctl status docker
sudo usermod -aG docker ${USER}
sudo systemctl status
{% endhighlight %}

### Remote Access
- ssh
- [Guacamole][https://guacamole.apache.org/doc/gug/users-guide.html)
	- [docker](https://guacamole.apache.org/doc/gug/guacamole-docker.html)
- [VSCode server]({% post_url 2019-04-29-vscode-server %})

## Shared Folder

### [NFS]({% post_url 2019-05-10-nfs %})

List of expored folder are part of ansible configuration in **group_var/all.yml** (search for NFS), it maps the content of **/etc/exports**:
{% highlight bash %}
nfs_exports:
  - "{{ nfs_shares_root }}/Film *(rw,sync,no_root_squash)"
{% endhighlight %}

## Hardware

- [In Win IW-MS04](https://proclockers.com/reviews/computer-cases/in-win-iw-ms04-mini-server-case-review?nopaging=1)
	- fan was quite noisy, changed to [noctua NF-P12 redux-900](https://www.amazon.fr/gp/product/B07C5KZX85/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1) wich was much quiter.
    
- [ASRock J3455-ITX](https://www.ldlc.com/fiche/PB00217669.html) - Quad-Core Intel Celeron J3455 - Goldmont (2016) [> Nehalem (2008)](https://en.wikipedia.org/wiki/List_of_Intel_CPU_microarchitectures)
	- [spec](https://www.asrock.com/mb/Intel/J3455-ITX/#Specification)
    


## Forum Discussion
- [Gitter](https://gitter.im/Ansible-NAS/Chat)
