---
published: true
title: digiKam (DAM)
tags: application photo hash jxl
---
> Professional Photo Management with the Power of Open Source - [Home](https://www.digikam.org/) / [HN](https://news.ycombinator.com/item?id=23947398) / [Photography (SE)](https://photo.stackexchange.com/search?q=digikam)

<link rel="shortcut icon" href="https://www.digikam.org/favicon-32x32.png" type="image/png" />

An alternative [to Picasa](https://shotkit.com/best-picasa-alternative/)

### Notes
- digiKam [**Album**](https://docs.digikam.org/en/main_window/albums_view.html#id6) correspond directly to **Folder** on filesystem

**The biggest CON for digiKam is the delete function. If you delete a file from the app it is deleted from the drive.**   
If you delete a picture, it first goes to digikam's trash `.dtrash` in same folder as where the photo was - [r/homelab](https://www.reddit.com/r/homelab/comments/kktqqw/digikam_pros_cons_alternatives_for_photo/)

### digiKam [features](https://www.digikam.org/about/features/)
- [tags & face tags](https://userbase.kde.org/Digikam/Tutorials/Tagging_and_Face_Tags)
- [quality sorter](https://photo.stackexchange.com/questions/70858/how-does-the-digikam-quality-sorter-work?r=SearchResults)
- complement [DarkTable]({% post_url 2021-07-03-photo-app %})
- [digiKam 8.0](https://9to5linux.com/digikam-8-0-released-with-qt-6-port-improved-jpeg-xl-webp-and-avif-support) - Released with Qt 6 Port, [Improved Support](https://docs.digikam.org/en/supported_materials/image_formats.html) for  [JPEG-XL]({% post_url 2020-02-07-jpeg-xl %}), WebP, and AVIF 

## Workflow

- [Digital Asset Management (DAM) with digiKam](https://docs.kde.org/trunk5/en/digikam-doc/digikam/using-dam.html)

- [digiKam <-> Darktable workflow?](https://www.reddit.com/r/FOSSPhotography/comments/jgviqd/digikam_darktable_workflow/)



## Database

As of 8.x Digikam manages more than one database. For convenience, it is broadly categorized in three:

- Core database for all collection properties, i.e. it hosts all albums, images and searches data.
- Thumbnails database for compressed thumbnails i.e. to host image thumbs using wavelets compression images (PGF format).
- Similarity database to store image finger-prints for fuzzy search engine.
- Face database for storing face recognition metadata i.e. to host face histograms for faces recognition.

The path to the database are stored in `~/.config/digikamrc` (look for _"Database Name"_).

see also
- [Database Settings](https://docs.digikam.org/en/setup_application/database_settings.html#database-settings)

### How to use multiple photo libraries with DigiKam

Digikam does not offer that natively. To overcome that, the solution is to redirect the config to a different set of database corresponding to a different photo libraries.

This ban be done by changing the content of `~/.config/digikamrc` throught a script (see below),
or in modern system by changing the filesystem view.

[**By Filesystem boxxing**]({% post_url 2017-11-27-CG-meanmax %})

For ex using following rules
{% highlight ini %}
# ~/.config/boxxy/boxxy.yaml
rules:
- name: "redirect digikam DB"
  target: "~/.config/digikamrc"
  rewrite: "~/.config/digikamrc-lib1"
  mode: "file"
{% endhighlight %}

& Launching it with `boxxy ~/app/digiKam-8.1.0-x86-64.appimage --appimage-extract-and-run` 

As rules can be passed directly on cli, the whole thing can become, it's own script:
{% highlight bash %}
# ~/.config/boxxy/boxxy.yaml
#!/bin/bash
boxxy --rule '~/.config/digikamrc:~/.config/digikamrc-lib1:file' ~/app/digiKam-8.1.0-x86-64.appimage --appimage-extract-and-run
{% endhighlight %}

Which is less intrusive that the previous approach below, as well as allowing to launch at the same time 2 different instance of digiKam pointing to 2 different photo collections (which other approach does not support).

**By Scripting (obsolete)**
- [How to use multiple photo libraries with DigiKam](https://unix.cafe/wp/en/2020/08/how-to-use-multiple-photo-libraries-with-digikam/) / [github](https://github.com/DeaDSouL/unix.cafe_digikam-multiple-libraries)

The `digikamctl` script create & switch .config/digikamrc file, associating db automatically


## Issue
- does not recognize image when filename is missing extension. Which kind disallow use on direct hashed object store. 

## [Internal](https://www.digikam.org/documentation/)
- [digiKam API reference page](https://www.digikam.org/api/index.html) - digiKam is split into a number of components, each ones located to a dedicated directory.
- internally use [FNV-1a](https://github.com/KDE/digikam/blob/33d0457e20adda97c003f3dee652a1749406ff9f/core/dplugins/generic/tools/mediaserver/upnpsdk/Neptune/Source/Core/NptHash.cpp) / [Fowler–Noll–Vo hash function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function)

- [Compile and install Digikam on Ubuntu 20.04 Focal (21.10 too)](https://www.blackrosetech.com/gessel/2021/03/26/compile-and-install-digikam-on-ubuntu-20-04-focal)

### Atlernatives

> [How I found my best Digital Asset Management (DAM) system](https://www.bkwinephotography.com/technology/found-best-digital-asset-management-dam-system/) - [Digikam alternative (Reddit)](https://pedirostoba.com/index--nk6080-jon.php/2015/07/04/free-software-alternatives-to-photoshop-and-lightroom-gimp-and-digikam/)

- [Darktable]({% post_url 2021-07-03-photo-app %}) - Non-destructive editing throughout the complete workflow, your original images are never modified.
- [RawTherapee](http://rawtherapee.com/) - Non-destructive, 32-bit (floating point) processing engine, modern demosaicing algorithms
- [Shotwell](https://wiki.gnome.org/Apps/Shotwell)
