---
published: true
title: Opencv DNN module
tags: NN opencv
---
> The OpenCV DNN module only supports deep learning inference on images and videos, but it supports loading many popular deep learning frameworks such as TensorFlow, (Py)Torch, DarkNet, Caffe, ONNX. - [DNN opencv module: A Definitive Guide](https://learnopencv.com/deep-learning-with-opencvs-dnn-module-a-definitive-guide/) / [A Comprehensive Guide](https://bleedai.com/deep-learning-with-opencv-dnn-module-a-comprehensive-guide/) /  [DNN](https://docs.opencv.org/4.x/d2/d58/tutorial_table_of_content_dnn.html)

### [Conversion of TensorFlow Segmentation Models and Launch with OpenCV](https://docs.opencv.org/4.x/dc/db4/tf_segm_tutorial_dnn_conversion.html) 

The key concepts involved in the transition pipeline of the TensorFlow classification and segmentation models with OpenCV API are almost equal excepting the phase of graph optimization. The initial step in conversion of TensorFlow models into cv.dnn.Net is obtaining the frozen TF model graph. Frozen graph defines the combination of the model graph structure with kept values of the required variables, for example, weights. Usually the frozen graph is saved in protobuf (.pb) files. To read the generated segmentation model .pb file with cv.dnn.readNetFromTensorflow, it is needed to modify the graph with TF graph transform tool.

### [.tflite](https://github.com/opencv/opencv/issues/13918)

Not supported [yet](https://github.com/opencv/opencv/wiki/OE-35.-TFLite-support), but [should be convertible to `.pb`](https://github.com/opencv/opencv/issues/13918#issuecomment-763715736)

{% highlight cpp %}
$ bazel run -c opt //tensorflow/lite/toco:toco -- --input_file=palm_detection.tflite --output_file=graph.pb --input_format=TFLITE --output_format=TENSORFLOW_GRAPHDEF{% endhighlight %}

### [Conversion of PyTorch Segmentation Models and Launch with OpenCV ](https://docs.opencv.org/4.x/d7/d9a/pytorch_segm_tutorial_dnn_conversion.html)

The key points involved in the transition pipeline of the PyTorch classification and segmentation models with OpenCV API are equal. The first step is model transferring into ONNX format with PyTorch torch.onnx.export built-in function. Further the obtained .onnx model is passed into cv.dnn.readNetFromONNX, which returns cv.dnn.Net object ready for DNN manipulations.
