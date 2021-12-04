---
title: Kernels management (linux)
published: true
tags: linux-system
---
## Ubuntu
- [Upgrade LTS Kernel (HWE)](https://itsfoss.com/ubuntu-hwe-kernel/)
- [Remove old version](https://askubuntu.com/questions/2793/how-do-i-remove-old-kernel-versions-to-clean-up-the-boot-menu/100953#100953)

## Boot parameters
- [About Kernel Boot Parameters](https://wiki.ubuntu.com/Kernel/KernelBootParameters)
	- [disabling spectre mitigation]({% post_url 2019-10-14-linux-fast %})
- [How to view Linux kernel parameters for currently booted system](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/5/html/tuning_and_optimizing_red_hat_enterprise_linux_for_oracle_9i_and_10g_databases/sect-oracle_9i_and_10g_tuning_guide-pre_installation_preparation_and_verification-verifying_kernel_parameters)
	- cat /proc/cmdline
    - sysctl -a
