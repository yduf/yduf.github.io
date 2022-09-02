---
published: true
title: Blender CAM
tags: CAM blender cnc
---
> Blender CAM is an open source solution for artistic CAM - Computer aided machining - a g-code generation tool. Blender CAM is an extension for the free open-source Blender 3d package. - [BlenderCam - CNC path addon](https://github.com/vilemduha/blendercam)

![caption](https://cloud.githubusercontent.com/assets/648108/12375710/7a24b868-bca6-11e5-99a8-8c8c02e89724.png)

[![caption](https://img.youtube.com/vi/jR8jt6dJPfE/0.jpg)](https://www.youtube.com/watch?v=jR8jt6dJPfE)

## [Install](https://github.com/vilemduha/blendercam/wiki/Install-opencamlib-into-blender-2.80-and-2.90-on-linux)
### [Opencamlib](https://github.com/aewallin/opencamlib) / [SO](https://stackoverflow.com/questions/24174394/cmake-is-not-able-to-find-python-libraries)
{% highlight bash %}
$ git clone git://github.com/aewallin/opencamlib.git
$ cd opencamlib
$ mkdir build
$ cd build
$ sudo apt install cmake
$ sudo apt install libboost-program-options-dev
$ sudo apt install doxygen
# texlive long to install and probably should be skipped as well as doxygen
$ sudo apt install texlive-full
# this one is misssing from doc and cmake won't work without it
$ sudo apt-get install python-dev

$ cmake -DBUILD_PY_LIB=ON -DBUILD_CXX_LIB=OFF -DUSE_PY_3=ON ..
$ make -j4

$ sudo make install
{% endhighlight %}

### Installing OpenCamLib in Blender
{% highlight bash %}
export BLENDER=~/app/blender-2.90.1-linux64/2.90/python/lib/python3.7/site-packages/
ln -s /usr/lib/python3.8/site-packages/ocl.so $BLENDER
ln -s /usr/lib/python3.8/site-packages/STLTools.py $BLENDER
ln -s /usr/lib/python3.8/site-packages/procmemory.py $BLENDER
ln -s /usr/lib/python3.8/site-packages/camvtk.py $BLENDER
ln -s /usr/lib/python3.8/site-packages/pyocl.py $BLENDER
{% endhighlight %}