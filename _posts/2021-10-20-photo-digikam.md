---
published: true
title: digiKam (DAM)
tags: image photo google-alt hash
---
> Professional Photo Management with the Power of Open Source - [Home](https://www.digikam.org/) / [HN](https://news.ycombinator.com/item?id=23947398)

**The biggest CON for digiKam is the delete function. If you delete a file from the app it is deleted from the drive.**

- digiKam [features](https://www.digikam.org/about/features/)
	- [tags & face tags](https://userbase.kde.org/Digikam/Tutorials/Tagging_and_Face_Tags)
- complement [DarkTable]({% post_url 2021-07-03-photo-app %})
- an alternative to Picasa

- [Digital Asset Management (DAM) with digiKam](https://docs.kde.org/trunk5/en/digikam-doc/digikam/using-dam.html)

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
it's necessary to force db creation when creating a new library
{% highlight bash %}
digikamctl new Work   # Create new library
digikamctl use Work   # setup new library as .digikamrc

# force recreation of database (open digikam setup process)
digikam --database-directory Pictures/DigiKams/Work/Database/ --config Pictures/DigiKams/Work/digikamrc


{% endhighlight %}


### Usage
{% highlight bash %}
digikamctl ls         # List your available libraries
digikamctl new Work   # Create new library
digikamctl use Work   # Activate library
digikamctl open Personal # digikamctl open Personal in digikam
digikamctl rm Work    # Remove library 
{% endhighlight %}


## Internal
- [digiKam API reference page](https://www.digikam.org/api/index.html)
- internally use [FNV-1a](https://github.com/KDE/digikam/blob/33d0457e20adda97c003f3dee652a1749406ff9f/core/dplugins/generic/tools/mediaserver/upnpsdk/Neptune/Source/Core/NptHash.cpp) / [Fowler–Noll–Vo hash function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function)
