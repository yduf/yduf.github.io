---
title: Nautilus automount
published: true
tags: ubuntu nautilus
---
[Install Gigolo:](https://ubuntuforums.org/showthread.php?t=1670212)
```
sudo apt-get install gigolo
```

** Go through [this](http://ubuntuforums.org/showpost.php...16&postcount=3) for a general setup:

** Open gigolo, then Actions > Connect to Server > SSH

** Create a Gigolo Bookmark and have it Auto Mount
Right Click the gigolo mount icon for the mount > Create Bookmark > Select Auto Mount

** Optional: Set up a link to the mount point in Nautilus

"Connect to Server" in Gigolo or Nautilus itself creates a mount point in a hidden directory so to make it easier to find in your applications create a bookmark in Nautilus:
Code:

nautilus $HOME/.gvfs

Then Bookmarks > Add bookmark

When you first login to your machine Gigolo will attempt to connect to the remote machine. If it is not available at that time it will wait until it is and then connect automatically. When you logoff from your desktop the ssh mount is safely unmounted. 
