---
title: Face detection (OpenCV DNN)
published: true
tags: computer-vision face opencv NN
---
> [DNN]({% post_url 2023-03-10-opencv-dnn-module %}) Face detector in OpenCV - [OpenCV](https://docs.opencv.org/4.x/d0/dd4/tutorial_dnn_face.html)

### [A comparison](https://learnopencv.com/face-detection-opencv-dlib-and-deep-learning-c-python/) 

This model was included in OpenCV from version 3.3. It is based on a Single-Shot-Multibox detector and uses ResNet-10 Architecture as the backbone. The model was trained using images from the web, but the source is not disclosed. OpenCV provides 2 models for this face detector.
- Floating point 16 version of the original caffe implementation ( 5.4 MB )
- 8 bit quantized version using Tensorflow ( 2.7 MB )

The DNN-based detector overcomes all the drawbacks of the Haar cascade based detector without compromising on any benefit provided by Haar. We could not see any major drawback for this method except that it is slower than the Dlib HoG-based Face Detector discussed next.

### see also
- [OpenCV DNN](https://pyimagesearch.com/2018/02/26/face-detection-with-opencv-and-deep-learning/)
	- [YuNet](https://github.com/opencv/opencv_zoo/tree/master/models/face_detection_yunet)  / [high-performance-face-detection](https://medium.com/@silkworm/yunet-ultra-high-performance-face-detection-in-opencv-a-good-solution-for-real-time-poc-b01063e251d5) - a light-weight, fast and accurate face [detection model](https://github.com/opencv/opencv_zoo/tree/master/models/face_detection_yunet)
    - [opencv/samples/dnn/face_detect.py](https://github.com/opencv/opencv/blob/4.x/samples/dnn/face_detect.py) - opencv battery included - `./dnn/example_dnn_face_detect -m=/home/yves/Downloa
ds/face_detection_yunet_2022mar.onnx`
		- [ ShiqiYu/libfacedetection](https://github.com/ShiqiYu/libfacedetection) - `./detect  -m=/home/yves/Downloads/face_detection_yunet_2022mar.onnx`
		- [models](https://github.com/opencv/opencv/blob/4.x/samples/dnn/models.yml)
	- [detect_faces.py](https://github.com/sr6033/face-detection-with-OpenCV-and-DNN/blob/master/detect_faces.py)
