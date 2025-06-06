---
published: true
title: Reverse Android Application
tags: reverse android blog
---
> how to reverse engineer an Android Application and what tools you can use to achieve this - even without owning an Android Phone. - [ The EPIC.blog](https://epic.blog/reverse-engineering/2020/07/27/reverse-engineering-android-app.html)

[![caption](https://scrapecrow.com/images/banner-machines.png)](https://scrapecrow.com/reverse-engineering-intro.html)


- [Android Tampering and Reverse Engineering](https://github.com/OWASP/owasp-mastg/blob/master/Document/0x05c-Reverse-Engineering-and-Tampering.md)
- [How to reverse engineer Unity3D Games?](https://medium.com/game-tech-tutorial/how-to-reverse-engineer-unity3d-games-67648f9329da)
	- [Reverse engineering a Unity-based Android game](https://palant.info/2021/02/18/reverse-engineering-a-unity-based-android-game/)
    - [Deep dive into UnityFS: structure and implementation](https://www.imbushuo.net/blog/archives/505) - UnityFS was a new asset bundle format introduced in Unity 5.
		- [UnityPack](https://github.com/HearthSim/UnityPack) - A library to deserialize Unity3D Assets and AssetBundles files (*.unity3d).
		- [Extract Images and Textures from Unity Games](https://www.youtube.com/watch?v=NApkADJe3a4)
		- [UABE](https://github.com/SeriousCache/UABE) - Asset Bundle Extractor
        

## [Where is main() in Android?](https://stackoverflow.com/questions/9293329/where-is-main-in-android)
Find a class which is a subclass of `Activity` and which is set as a LAUNCHER to start the execution of the application from its `onCreate()` method.

Activty are listed in the [`AndroidManifest.xml`](https://developer.android.com/studio/debug/apk-analyzer) file.

## [Tools](https://epic.blog/reverse-engineering/2020/07/27/reverse-engineering-android-app.html)
- [JADX (flatpak)](https://github.com/skylot/jadx) - CLI | GUI. It can run directly on APK / DEX combo without the extra step. It has also magical ability to deal with deobfuscation and from what I can tell the best full text search, declaration jumping and usage lookup.
- [Apktool](https://ibotpeaches.github.io/Apktool/install/) - `apktool d -r -s [your game].apk`

### Unity
Latest version of C#code are transpilled to cpp.

- [Il2CppDumper](https://github.com/Perfare/Il2CppDumper/releases/tag/v6.6.2) / [linux](https://www.andnixsh.com/2020/04/il2cppdumper-v621-net-core-for-macos.html)
- [dnSpy](https://github.com/dnSpy/dnSpy) -  a debugger and .NET assembly editor (windows)
- [ILSpy](https://github.com/icsharpcode/ILSpy) - the open-source .NET assembly browser and decompiler.
	- [ilspy-vscode](https://marketplace.visualstudio.com/items?itemName=icsharpcode.ilspy-vscode)
    
## [Android Crackmes](https://github.com/OWASP/owasp-mastg/blob/master/Document/0x08b-Reference-Apps.md#android-crackmes)

see also
- [The Ultimate Game Hacking Resource](https://github.com/dsasmblr/game-hacking)
- [r/REGames](https://www.reddit.com/r/REGames/)
- [How To Reverse Engineer A Bluetooth Device](https://www.youtube.com/watch?v=NIBmiPtCDdM) / [2](https://www.youtube.com/watch?v=e3VwPb72Bbgm)
- [THIS is how you find malware in an illegal Android TV Box](https://www.youtube.com/watch?v=vIuT7rJgc8w) - deep review on how to get into / and analyse VSeeBox box. - require some special electronic tools & desoldering.
