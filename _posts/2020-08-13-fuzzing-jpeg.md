---
published: true
title: Fuzzing
tags: jpeg fuzzer
---
> n essence, I created a text file containing just "hello" and asked the fuzzer to keep feeding it to a program that expects a JPEG image... Such a fuzzing run would be normally completely pointless: there is essentially no chance that a "hello" could be ever turned into a valid JPEG by a traditional, format-agnostic fuzzer, since the probability that dozens of random tweaks would align just right is astronomically low.  - [Pulling JPEGs out of thin air](https://lcamtuf.blogspot.com/2014/11/pulling-jpegs-out-of-thin-air.html)
