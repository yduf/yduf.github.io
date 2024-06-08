---
title: Face detection (OpenCV DNN)
published: true
tags: computer-vision face opencv NN
---
> [DNN]({% post_url 2023-03-10-opencv-dnn-module %}) Face detector in OpenCV - [a comparison](https://learnopencv.com/face-detection-opencv-dlib-and-deep-learning-c-python/) 

- [OpenCV DNN](https://pyimagesearch.com/2018/02/26/face-detection-with-opencv-and-deep-learning/)
	- [YuNet](https://github.com/opencv/opencv_zoo/tree/master/models/face_detection_yunet)  / [high-performance-face-detection](https://medium.com/@silkworm/yunet-ultra-high-performance-face-detection-in-opencv-a-good-solution-for-real-time-poc-b01063e251d5) - a light-weight, fast and accurate face [detection model](https://github.com/opencv/opencv_zoo/tree/master/models/face_detection_yunet)
    - [opencv/samples/dnn/face_detect.py](https://github.com/opencv/opencv/blob/4.x/samples/dnn/face_detect.py) - opencv battery included - `./dnn/example_dnn_face_detect -m=/home/yves/Downloa
ds/face_detection_yunet_2022mar.onnx`
		- [ ShiqiYu/libfacedetection](https://github.com/ShiqiYu/libfacedetection) - `./detect  -m=/home/yves/Downloads/face_detection_yunet_2022mar.onnx`
		- [models](https://github.com/opencv/opencv/blob/4.x/samples/dnn/models.yml)
	- [detect_faces.py](https://github.com/sr6033/face-detection-with-OpenCV-and-DNN/blob/master/detect_faces.py)
