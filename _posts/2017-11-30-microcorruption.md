---
title: Microcorruption
published: true
tags: reverse security debug
---
> Scattered throughout the world in locked warehouses are briefcases filled with Cy Yombinator bearer bonds that could be worth billions comma billions of dollars. You will help steal the briefcases.
Using the debugger, you'll be able to single step the lock code, set breakpoints, and examine memory on your own test instance of the lock. You'll use the debugger to find an input that unlocks the test lock, and then replay it to a real lock. [Embedded Security CTF](https://microcorruption.com/login) - [HN](https://news.ycombinator.com/item?id=11796620)

- [mspgcc](http://mspgcc.sourceforge.net/manual/book1.html)
A port of the GNU tools to the Texas Instruments MSP430 microcontrollers
	- [The instruction set](http://mspgcc.sourceforge.net/manual/x223.html)

## [Hackaday](https://hackaday.com/2014/01/18/microcorruption-embedded-ctf/)
![caption](https://hackaday.com/wp-content/uploads/2014/01/ctf.png?w=800)

{% highlight cpp %}
Lockitall                                            LOCKIT PRO r a.01
______________________________________________________________________

              User Manual: Lockitall LockIT Pro, rev a.01              
______________________________________________________________________


OVERVIEW

    - This is the first LockIT Pro Lock.
    - This lock is not attached to any hardware security module.


DETAILS

    The LockIT Pro a.01  is the first of a new series  of locks. It is
    controlled by a  MSP430 microcontroller, and is  the most advanced
    MCU-controlled lock available on the  market. The MSP430 is a very
    low-power device which allows the LockIT  Pro to run in almost any
    environment.

    The  LockIT  Pro   contains  a  Bluetooth  chip   allowing  it  to
    communiciate with the  LockIT Pro App, allowing the  LockIT Pro to
    be inaccessable from the exterior of the building.

    There is  no default password  on the LockIT  Pro---upon receiving
    the LockIT Pro, a new password must be set by connecting it to the
    LockIT Pro  App and  entering a password  when prompted,  and then
    restarting the LockIT Pro using the red button on the back.
    
    This is Hardware  Version A.  It contains  the Bluetooth connector
    built in, and one available port  to which the LockIT Pro Deadbolt
    should be connected.

    This is Software Revision 01.

    


(c) 2013 LOCKITALL                                            Page 1/1
{% endhighlight %}
