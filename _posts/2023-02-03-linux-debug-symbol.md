---
published: true
title: Debug Symbol Packages
tags: debug linux debug-c++
---
> If you are on Ubuntu Jammy (22.04) or later, you do not need to worry about installing debug symbol packages anymore. The Ubuntu project maintains a Debuginfod server, and GDB and other debuginfo-consumer applications support it out of the box. For more information about it, please refer to [this page](https://ubuntu.com/server/docs/service-debuginfod) - [ubuntu](https://wiki.ubuntu.com/Debug%20Symbol%20Packages)

### [Using the service](https://ubuntu.com/server/docs/service-debuginfod)

From Kinetic onwards, when you install GDB your system will be automatically configured to use Ubuntu’s debuginfod service.