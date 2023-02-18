---
published: true
title: Reverse Android Application
tags: reverse android blog
---
> how to reverse engineer an Android Application and what tools you can use to achieve this - even without owning an Android Phone. - [ The EPIC.blog](https://epic.blog/reverse-engineering/2020/07/27/reverse-engineering-android-app.html)

- [Android Tampering and Reverse Engineering](https://github.com/OWASP/owasp-mastg/blob/master/Document/0x05c-Reverse-Engineering-and-Tampering.md)

- [Where is main() in Android?](https://stackoverflow.com/questions/9293329/where-is-main-in-android) -  find a class which is a subclass of `Activity` and which is set as a LAUNCHER to start the execution of the application from its `onCreate()` method.

## [Tools](https://epic.blog/reverse-engineering/2020/07/27/reverse-engineering-android-app.html)
- [JADX (flatpak)](https://github.com/skylot/jadx) - CLI | GUI. It can run directly on APK / DEX combo without the extra step. It has also magical ability to deal with deobfuscation and from what I can tell the best full text search, declaration jumping and usage lookup.
- [Apktool]()

## [Android Crackmes](https://github.com/OWASP/owasp-mastg/blob/master/Document/0x08b-Reference-Apps.md#android-crackmes)
