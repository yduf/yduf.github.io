---
published: true
title: Eyes&Gaze Tracker
tags: eyes opencv computer-vision
---
> ML solution for accurate iris estimation, able to track landmarks involving the iris, pupil and the eye contours using a single RGB camera, in real-time, without the need for specialized hardware. - [MediaPipe Iris ](https://google.github.io/mediapipe/solutions/iris.html) / [Eye Tracking with Mediapipe and OpenCV](https://kh-monib.medium.com/title-gaze-tracking-with-opencv-and-mediapipe-318ac0c9c2c3)

[![caption](https://github.com/pperle/gaze-tracking-pipeline/raw/main/docs/gaze_tracking_pipeline.png)](https://github.com/pperle/gaze-tracking-pipeline)


## Starting Point

### Face Landmark Detection
Using Mediapipe Iris ([Face Geometry Module](https://github.com/google/mediapipe/wiki/MediaPipe-Face-Mesh))
- [Iris Tracking MediaPipe](https://www.youtube.com/watch?v=DNKAvDeqH_Y) / [part 2](https://www.youtube.com/watch?v=8CIxfcbGU3s) / [medium](https://medium.com/mlearning-ai/iris-segmentation-mediapipe-python-a4deb711aae3)

[![caption](https://1.bp.blogspot.com/-N494e9_yk00/XywzbwgHMgI/AAAAAAAAGUo/4rWZgcvMPaQVphDK6SSeDZp8-79REaIAwCLcBGAsYHQ/s0/image8.gif)](https://ai.googleblog.com/2020/08/mediapipe-iris-real-time-iris-tracking.html)

### 3D Gaze

- [gaze-tracking-pipeline ](https://github.com/pperle/gaze-tracking-pipeline) / [Efficiency in Real-time Webcam Gaze Tracking (pdf)](https://arxiv.org/pdf/2009.01270v1.pdf)


- [Eye gaze estimation using a webcam. 100 lines of code](https://medium.com/mlearning-ai/eye-gaze-estimation-using-a-webcam-in-100-lines-of-code-570d4683fe23) / [github](https://github.com/amitt1236/Gaze_estimation)

## Iris Localization
- [Simple and Accurate Iris Center Localization Method 
based on Geometric Relationship of Eyeball Model ](https://www.researchgate.net/publication/335427069_Simple_and_Accurate_Iris_Center_Localization_Method_based_on_Geometric_Relationship_of_Eyeball_Model)

- [ Surface MediaPipe Iris model for the web #2526 ](https://github.com/google/mediapipe/issues/2526)

## Landmark Stabilisation

- [Step By Step Guide To Stabilize Facial Landmarks In A Video Using Dlib](https://analyticsindiamag.com/step-by-step-guide-to-stabilize-facial-landmarks-in-a-video-using-dlib/)
- [Stabilized-Facial-Landmark-Detection-in-Real-Time-Video](https://github.com/mayankvik2/Stabilized-Facial-Landmark-Detection-in-Real-Time-Video/blob/master/Stabilized%20Vedio.ipynb)

### see also

- [Real-time eye tracking using OpenCV and Dlib](https://towardsdatascience.com/real-time-eye-tracking-using-opencv-and-dlib-b504ca724ac6) / [github](https://github.com/vardanagarwal/Proctoring-AI)

- [Tracking your eyes with Python](https://medium.com/@stepanfilonov/tracking-your-eyes-with-python-3952e66194a6) - using haarcascade to detect face + eyes & blobs for pupils

- [Eye Gaze Tracking With Head Tracking Solutions On Linux](https://unix.stackexchange.com/questions/680253/eye-gaze-tracking-with-head-tracking-solutions-on-linux)
- [Weekend Project: Take a Tour of Open Source Eye-Tracking Software](https://www.linux.com/training-tutorials/weekend-project-take-tour-open-source-eye-tracking-software/)
	- [OpenGazer](https://github.com/opengazer/OpenGazer)
	- [GazePointer](https://gazerecorder.com/gazepointer/)
    - [Gaze Tracking](https://github.com/antoinelame/GazeTracking) - a webcam-based eye tracking system. It gives you the exact position of the pupils and the gaze direction, in real time.
    
- [Face Alignment with OpenCV and Python](https://pyimagesearch.com/2017/05/22/face-alignment-with-opencv-and-python/)

