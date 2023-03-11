---
published: true
title: Python (OpenCV)
tags: python opencv
---
> How to setup

## Install

- Requirement have python3 installed
- create a dedicated [virtual env]({% post_url 2020-07-18-python %})

{% highlight bash %}
$ virtualenv -p python3 py-opencv # this create a folder py-opencv
$ cd py-opencv
{% endhighlight %}

- install [python binding](https://www.geeksforgeeks.org/how-to-install-opencv-for-python-in-linux/)
{% highlight bash %}
$ virtualenv -p python3 py-opencv # this create a folder py-opencv
$ pip3 install --force-reinstall -v "opencv-python==4.5.4"	# will list available version if not found

$ pip3 install opencv-python	  # or get latest version	
{% endhighlight %}

### Test Install

{% highlight python %}
python3
>>>import cv2
>>>print(cv2.__version__)
{% endhighlight %}