---
title: Microcorruption
published: true
tags: reverse security debug capture-the-flag
---
> Scattered throughout the world in locked warehouses are briefcases filled with Cy Yombinator bearer bonds that could be worth billions comma billions of dollars. 
>  
> You will help steal the briefcases. -  [Embedded Security CTF](https://microcorruption.com/login) / [HN](https://news.ycombinator.com/item?id=11796620)

Using the debugger, you'll be able to single step the lock code, set breakpoints, and examine memory on your own test instance of the lock. You'll use the debugger to find an input that unlocks the test lock, and then replay it to a real lock.

### see also
- [Convince me!]({% post_url 2023-10-10-llm-hacking %}) - Your goal is to make Gandalf reveal the secret password for each level.

[![caption](https://hackaday.com/wp-content/uploads/2014/01/ctf.png?w=800)](https://hackaday.com/2014/01/18/microcorruption-embedded-ctf/)

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

## Hints
_Every number in the debugger is in base 16._

`mov.b @r15, r14` - move whatever is at memory addressed by r15 in to r14

**debugger action**  
`let pc=4498` - change pc  
`solve` - reolve puzzle outside debug mode  

**MSP430** - [online (dis)assembly](https://microcorruption.com/assembler)
- [The instruction set] (https://phas.ubc.ca/~michal/phys319/MSP430Reference-RyansEdit.pdf)
	- [ref](http://mspgcc.sourceforge.net/manual/x223.html)
- [mspgcc](http://mspgcc.sourceforge.net/manual/book1.html) - A port of the GNU tools to the Texas Instruments MSP430 microcontrollers

    
### Levels
- [**Tutorial**](https://microcorruption.com/debugger/Tutorial) - follow tutorial. - _every password of proper size work._

**LockIT Pro rev A**  
- [**New Orleans**](https://microcorruption.com/debugger/New%20Orleans) - LockIT Pro rev a.01 - _hardcoded password_
- [**Sydney**](https://microcorruption.com/debugger/Sydney) - LockIT Pro  rev a.02 - _hardcoded password_
- [**Reykjavik**](https://microcorruption.com/debugger/Reykjavik) - LockIT Pro rev a.03 - 

**LockIT Pro rev B** - LockIT Pro Hardware  Security Module 1 stores  the login password, ensuring users  can not access  the password through  other means.
- [**Hanoi**](https://microcorruption.com/debugger/Hanoi) - LockIT Pro rev b.01 - _login flags next to input_
- [**Cusco**](https://microcorruption.com/debugger/Cusco) - LockIT Pro rev b.02 - _input stored on the stack_

- --
- [**Vancouver**](https://microcorruption.com/map) - LockIT 2 a.01 -  ?
- [**Baku**](https://microcorruption.com/debugger/Baku) - SecurePlus rev a.01 - ?