---
published: true
title: Face detection
tags: computer-vision face opencv
---
> [Face detection algorithms comparison](http://datahacker.rs/017-face-detection-algorithms-comparison/) / [Face detection tips, suggestions, and best practices](https://pyimagesearch.com/2021/04/26/face-detection-tips-suggestions-and-best-practices/)

- [What is Face Detection? Ultimate Guide 2023 + Model Comparison](https://learnopencv.com/what-is-face-detection-the-ultimate-guide/)

[![caption](https://learnopencv.com/wp-content/uploads/2017/02/real-time-face-tracking.gif)](https://learnopencv.com/object-tracking-using-opencv-cpp-python/)


- [OpenCV DNN]({% post_url 2024-06-08-face-detection-opencv %})
- [OpenCV Haarcascade](https://www.superdatascience.com/blogs/opencv-face-detection)
- Detecting a face using Dlib
- MTCNN
- Facenet
- [OpenFace](https://cmusatyalab.github.io/openface/)
- The Viola-Jones Algorithm (2001)
	- Haar-like features (edge, line, four rectangle features)
	- Integral Image - compute sum once, then 4 point give the integral inside the given rectangle
	- Adaboost - build a strong classifier from weaker one, complementing each previous one
    
[![caption](https://github.com/opencv/opencv_zoo/raw/master/models/face_detection_yunet/examples/yunet_demo.gif)](https://github.com/opencv/opencv_zoo/tree/master/models/face_detection_yunet)

## [Yolo](https://github.com/akanametov/yolov8-face)

[![caption](https://github.com/akanametov/yolov8-face/raw/dev/results/face/face.jpg)](https://github.com/akanametov/yolov8-face)


## [Mediapipe](https://google.github.io/mediapipe/)
- [Truthsayer](https://github.com/everythingishacked/Truthsayer) - use  MediaPipe's Face Mesh

- [Face Landmark Detection ](https://www.youtube.com/watch?v=V9bzew8A1tc) / [Murtaza's Workshop](https://www.youtube.com/c/MurtazasWorkshopRoboticsandAI/videos)
	- [Latest Pose Estimation Realtime ](https://www.youtube.com/watch?v=brwgBf6VB0I)

- [Face Body and Hand Pose Detection with Python and Mediapipe](https://www.youtube.com/watch?v=pG4sUNDOZFg)

- [insightface](https://github.com/deepinsight/insightface)
	- [RetinaFace-tf2](https://github.com/StanislasBertrand/RetinaFace-tf2)

## [dlib](https://www.pyimagesearch.com/2021/04/19/face-detection-with-dlib-hog-and-cnn/)
- HOG + Linear SVM: dlib.get_frontal_face_detector() - use less cpu but less reliable
- MMOD CNN: dlib.cnn_face_detection_model_v1(modelPath) - would take advangate of gpu, more reliable

### Profile Face

- [why it cannot detect some profile face?](https://answers.opencv.org/question/204685/why-it-cannot-detect-some-profile-face/)
- [Face Detection with OpenCV for non frontal images](https://stackoverflow.com/questions/8798670/face-detection-with-opencv-for-non-frontal-images)
	- [Feature detection in profile face images](https://stackoverflow.com/questions/22145565/feature-detection-in-profile-face-images)

![caption](https://raw.githubusercontent.com/deepinsight/insightface/master/resources/facerecognitionfromvideo.PNG) <!-- .element height="50%" width="50% ustify-content="left" -->


### Body detection
- [How to detect individual body parts in an image](https://answers.opencv.org/question/35912/how-to-detect-individual-body-parts-in-an-image/)
- [OpenCV - detection of human body](https://forum.allaboutcircuits.com/threads/opencv-detection-of-human-body.177529/#post-1615311)
- [Yolo  Human_Detection](https://github.com/mike98465/Human_Detection)
- [Person Detection using YOLO and OpenCV](https://www.data-stats.com/person-detection-using-yolo-and-opencv/)
	- [Yolo v3](https://www.youtube.com/watch?v=MPU2HistivI)
