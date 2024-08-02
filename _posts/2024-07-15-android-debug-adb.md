---
title: Android debug bridge (adb)
published: true
tags: android debug-android
---
>  a versatile command-line tool that lets you communicate with a device.  - [Home](https://developer.android.com/tools/adb)

- [Enable Developer options](https://developer.android.com/studio/debug/dev-options#enable) - find build number - tap the build number 7 times untils you see the message _you are now a developer!_
- [Enable USB debugging on your device](https://developer.android.com/studio/debug/dev-options#Enable-debugging) - Settings > System > Advanced > Developer Options > USB debugging
	- [ADB Android Device Unauthorized](https://stackoverflow.com/questions/23081263/adb-android-device-unauthorized)
- [How to list all the files in android phone by using adb shell?](https://stackoverflow.com/questions/16796432/how-to-list-all-the-files-in-android-phone-by-using-adb-shell)

- [How to Extract an APK on an Android Device](https://www.alphr.com/extract-apk-android/)
- [How to extract default ringtones from Android device?](https://android.stackexchange.com/questions/183455/how-to-extract-default-ringtones-from-android-device) - `adb pull /system/media/audio/`
	- [How To Transfer Ringtones From Android to Android ](https://mobiletrans.wondershare.com/android-transfer/transfer-ringtones-from-android-to-android.html)
    
- [How do I kill all active tasks/apps using ADB?](https://stackoverflow.com/a/38845817/51386) - `adb shell am force-stop <PACKAGE>`
    
### see also
- [Android remote]({% post_url 2018-03-11-android-remote %})
