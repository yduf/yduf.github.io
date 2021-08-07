---
published: true
title: Blake (hash)
tags: hash crypto
---
> BLAKE3 is a cryptographic hash function - [Blake3](https://github.com/BLAKE3-team/BLAKE3)

- [use of unstable library feature 'stdsimd'](https://github.com/BLAKE3-team/BLAKE3/issues/57)
	- install rust via [rustup](https://www.rust-lang.org/tools/install), not via `sudo apt install cargo / rustc` 

{% highlight bash %}
cargo install b3sum
{% endhighlight %}

## Ref
- [Mercurial planning to transition away from SHA-1](https://lwn.net/Articles/832111/) - Blake2/3 discussed

## Binding
- [x] [Crystal](https://github.com/didactic-drunk/blake3.cr)
