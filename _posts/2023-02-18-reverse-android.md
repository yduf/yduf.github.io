---
published: true
title: Reverse Android Application
tags: reverse android blog
---
> how to reverse engineer an Android Application and what tools you can use to achieve this - even without owning an Android Phone. - [ The EPIC.blog](https://epic.blog/reverse-engineering/2020/07/27/reverse-engineering-android-app.html)

- [Android Tampering and Reverse Engineering](https://github.com/OWASP/owasp-mastg/blob/master/Document/0x05c-Reverse-Engineering-and-Tampering.md)
- [How to reverse engineer Unity3D Games?](https://medium.com/game-tech-tutorial/how-to-reverse-engineer-unity3d-games-67648f9329da)
	- [Reverse engineering a Unity-based Android game](https://palant.info/2021/02/18/reverse-engineering-a-unity-based-android-game/)

## [Where is main() in Android?](https://stackoverflow.com/questions/9293329/where-is-main-in-android)
Find a class which is a subclass of `Activity` and which is set as a LAUNCHER to start the execution of the application from its `onCreate()` method.

Activty are listed in the [`AndroidManifest.xml`](https://developer.android.com/studio/debug/apk-analyzer) file.

## [Tools](https://epic.blog/reverse-engineering/2020/07/27/reverse-engineering-android-app.html)
- [JADX (flatpak)](https://github.com/skylot/jadx) - CLI | GUI. It can run directly on APK / DEX combo without the extra step. It has also magical ability to deal with deobfuscation and from what I can tell the best full text search, declaration jumping and usage lookup.
- [Apktool]()

## [Android Crackmes](https://github.com/OWASP/owasp-mastg/blob/master/Document/0x08b-Reference-Apps.md#android-crackmes)
