---
title: Faster Compilation (C++)
published: true
tags: c++ compiler
toc: true
---
> C++ is too slow to compile. How to improve compile time ? - [r/cpp](https://www.reddit.com/r/cpp/comments/hj66pd/c_is_too_slow_to_compile_can_you_share_all_your/)

<link rel="shortcut icon" href="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" type="image/x-icon" />


- [time-trace](https://aras-p.info/blog/2019/01/16/time-trace-timeline-flame-chart-profiler-for-Clang/) -  timeline / flame chart profiler for Clang
- [Faster C++ builds](https://www.bitsnbites.eu/faster-c-builds/)
- [Using Precompiled Headers](https://gcc.gnu.org/onlinedocs/gcc/Precompiled-Headers.html)
- [2 tips to make your C++ projects compile 3 times faster](https://developers.redhat.com/blog/2019/05/15/2-tips-to-make-your-c-projects-compile-3-times-faster#)

# [**Super fast linker**]({% post_url 2021-02-23-fast-linker %})

Replace defauld linker with a faster one (mold)


# [CCache](https://ccache.dev/)

Speeds up recompilation by caching previous compilations and detecting when the same compilation is being done again. (mainly for `make clean ; make`)

- If you ever run make clean; make, you can probably benefit from ccache. It is common for developers to do a clean build of a project for a variety of reasons, and this discards the results of your previous compilations. By using ccache, recompilation goes much faster.

- Another reason to use ccache is that the same cache is used for builds in different directories. If you have several versions or branches of a project stored in different directories, many of the object files in a build directory can often be taken from the cache even if they were compiled for another version or branch.

- A third scenario is using ccache to speed up clean builds performed by servers or build farms that regularly verify that the code builds.

- You can also share the cache between users, which can be very useful on shared compilation servers.

CCache can be used as delegation mechanism to icecream:

CMake → ccache → icecc → compiler (gcc/clang)
- CMake only sees ccache as the compiler launcher
- ccache delegates to icecc
- Icecream handles distributed compilation


Cached object are in `~/.cache/ccache`

{% highlight bash %}
# Configure CCache options
$ ccache --show-config
$ ccache --set-config=max_size=10G
$ ccache --set-config=compiler_check=content

# show cache statistics
$ ccache --show-stats
{% endhighlight %}

## Installation

Ccache can be installed by nix,

yet it make sense to have it available globally (not in a flakes)

{% highlight bash %}
$ nix profile add nixpkgs#ccache
{% endhighlight %}

### CMake

{% highlight bash %}
# ccache must be explicitly enable to operate
$ cmake -G Ninja .. \
  -DCMAKE_C_COMPILER_LAUNCHER=ccache \
  -DCMAKE_CXX_COMPILER_LAUNCHER=ccache
{% endhighlight %}

# [Icecream](https://github.com/icecc/icecream)

Distribute C/C++/CUDA compilation accross several machine.

## Architecture
- **icecc scheduler** – keeps track of available workers and distributes compile jobs.
- **icecc worker** – runs on client or server machines, executes compilation tasks.
- **icecc client** – submits compilation jobs (e.g., via icecc gcc).

Workers need to know where the scheduler is. On LAN, workers can broadcast to find schedulers automatically.
You may need to disable Firewall for first test to make this happens (and then set appropriate rules latter on).

## Setup
<div style="
            
  border-left: 5px solid #fb8c00; /* orange */
  background: #fff3e0;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

We recommend that you use packages maintained by your distribution if possible. Your distribution should provide customized startup scripts that make icecream fit better into the way your system is configured.
</div>

{% highlight bash %}
# On each Ubuntu machine you want in your compile cluster:
$ sudo apt install icecc

# check
$ sudo systemctl status iceccd
{% endhighlight %}

One machine as to run the sceduler

{% highlight bash %}
$ sudo systemctl start icecc-scheduler
$ sudo systemctl enable icecc-scheduler

# check
$ sudo systemctl status icecc-scheduler
{% endhighlight %}

## Config

<div style="
  border-left: 4px solid #3498db; /* blue */
  background: #eef7ff;
            
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
"  markdown="1" >

#### [Using icecream in heterogeneous environments](https://github.com/icecc/icecream?tab=readme-ov-file#using-icecream-in-heterogeneous-environments)

Under normal circumstances this is handled transparently by the icecream daemon, which will prepare a tarball with the environment when needed. This is the recommended way, as the daemon will also automatically update the tarball whenever your compiler changes.

</div>


### [CCache](https://github.com/icecc/icecream?tab=readme-ov-file#how-to-combine-icecream-with-ccache)

The easiest way to use ccache with icecream is to set CCACHE_PREFIX to icecc (the actual icecream client wrapper):

{% highlight bash %}
$  export CCACHE_PREFIX=icecc

# or
$ ccache --set-config=prefix_command=icecc
{% endhighlight %}


### [icecream-sundae](https://github.com/JPEWdev/icecream-sundae?tab=readme-ov-file#icecream-sundae) 

Commandline Monitor for Icecream.
To compile from source => easy setup

**require libicecc-dev**


**see also**
- [Icemon](https://github.com/icecc/icemon?tab=readme-ov-file#icemon) - Icemon is an Icecream GUI monitor.

# see also
- [Distributed C++ Compiler ](https://news.ycombinator.com/item?id=43008797)
	- [nocc](https://github.com/VKCOM/nocc)
    - [SN DBS](https://www.snsystems.com/) - Used by a lot of game developers, to spread mostly compilation (but also shader compile, or custom jobs).
      - IncrediBuild - https://www.incredibuild.com/
	- [Fast build](https://www.fastbuild.org/)
	- [icecream](https://github.com/icecc/icecream) - [A more modern alternative to distcc, often easier to set up.](https://chatgpt.com/share/67f8cbfc-4924-800d-af3c-1e7143a06bcc)
	- [distcc]( https://www.distcc.org/)
	- [Goma](https://chromium.googlesource.com/infra/goma/client/)
	- [Bazel / buck](https://bazel.build/remote/rbe) / like with various RBE back ends
	- [ElectricAccelerator]( https://docs.cloudbees.com/docs/cloudbees-build-acceleration/11.0/)
