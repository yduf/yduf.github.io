---
published: true
title: digiKam (DAM)
tags: application photo hash
---
> Professional Photo Management with the Power of Open Source - [Home](https://www.digikam.org/) / [HN](https://news.ycombinator.com/item?id=23947398) / [Photography (SE)](https://photo.stackexchange.com/search?q=digikam)

An alternative [to Picasa](https://shotkit.com/best-picasa-alternative/)


**The biggest CON for digiKam is the delete function. If you delete a file from the app it is deleted from the drive.**   
If you delete a picture, it first goes to digikam's trash `.dtrash` in same folder as where the photo was - [r/homelab](https://www.reddit.com/r/homelab/comments/kktqqw/digikam_pros_cons_alternatives_for_photo/)

### digiKam [features](https://www.digikam.org/about/features/)
- [tags & face tags](https://userbase.kde.org/Digikam/Tutorials/Tagging_and_Face_Tags)
- [quality sorter](https://photo.stackexchange.com/questions/70858/how-does-the-digikam-quality-sorter-work?r=SearchResults)
- complement [DarkTable]({% post_url 2021-07-03-photo-app %})
- [digiKam 8.0](https://9to5linux.com/digikam-8-0-released-with-qt-6-port-improved-jpeg-xl-webp-and-avif-support) - Released with Qt 6 Port, Improved JPEG-XL, WebP, and AVIF Support

- [Digital Asset Management (DAM) with digiKam](https://docs.kde.org/trunk5/en/digikam-doc/digikam/using-dam.html)
- [digiKam <-> Darktable workflow?](https://www.reddit.com/r/FOSSPhotography/comments/jgviqd/digikam_darktable_workflow/)

## [How to use multiple photo libraries with DigiKam](https://unix.cafe/wp/en/2020/08/how-to-use-multiple-photo-libraries-with-digikam/) / [github](https://github.com/DeaDSouL/unix.cafe_digikam-multiple-libraries)

The `digikamctl` script create & switch .config/digikamrc file, associating db automatically

### initialize repo

{% highlight bash %}
cp -v ~/.config/digikamrc ~/Pictures/DigiKams/digikamrc.template
sed -i "s,Database Name=.*,Database Name=,g" "${HOME}/Pictures/DigiKams/digikamrc.template"
sed -i "s,Database Name Face=.*,Database Name Face=,g" "${HOME}/Pictures/DigiKams/digikamrc.template"
sed -i "s,Database Name Similarity=.*,Database Name Similarity=,g" "${HOME}/Pictures/DigiKams/digikamrc.template"
sed -i "s,Database Name Thumbnails=.*,Database Name Thumbnails=,g" "${HOME}/Pictures/DigiKams/digikamrc.template"
{% endhighlight %}

### init DB
it's necessary to force db creation when creating a new library.

{% highlight bash %}
digikamctl new Work   # Create new library
digikamctl use Work   # setup new library as .digikamrc

# force recreation of database for new library (open digikam setup process)
# it seems to work because the path to digikamrc is local / not found ?
digikam --database-directory Pictures/DigiKams/Work/Database/ --config Pictures/DigiKams/Work/digikamrc

{% endhighlight %}


### Usage
{% highlight bash %}
digikamctl ls         # List your available libraries
digikamctl new Work   # Create new library
digikamctl use Work   # Activate library
digikamctl open Personal # digikamctl open Personal in digikam (modified to NOT setup as default)
                      # need to remove check in script to enable opening several lib concurrently
digikamctl rm Work    # Remove library 
{% endhighlight %}


## Issue
- does not recognize image when filename is missing extension

## [Internal](https://www.digikam.org/documentation/)
- [digiKam API reference page](https://www.digikam.org/api/index.html) - digiKam is split into a number of components, each ones located to a dedicated directory.
- internally use [FNV-1a](https://github.com/KDE/digikam/blob/33d0457e20adda97c003f3dee652a1749406ff9f/core/dplugins/generic/tools/mediaserver/upnpsdk/Neptune/Source/Core/NptHash.cpp) / [Fowler–Noll–Vo hash function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function)

- [Compile and install Digikam on Ubuntu 20.04 Focal (21.10 too)](https://www.blackrosetech.com/gessel/2021/03/26/compile-and-install-digikam-on-ubuntu-20-04-focal)

## Atlernative
- [How I found my best Digital Asset Management (DAM) system](https://www.bkwinephotography.com/technology/found-best-digital-asset-management-dam-system/)- [Digikam alternative Reddit](https://pedirostoba.com/index--nk6080-jon.php/2015/07/04/free-software-alternatives-to-photoshop-and-lightroom-gimp-and-digikam/)

- [Darktable]({% post_url 2021-07-03-photo-app %}) - Non-destructive editing throughout the complete workflow, your original images are never modified.
- [RawTherapee](http://rawtherapee.com/) - Non-destructive, 32-bit (floating point) processing engine, modern demosaicing algorithms
- [Shotwell](https://wiki.gnome.org/Apps/Shotwell)
