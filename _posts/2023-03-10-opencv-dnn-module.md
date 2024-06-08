---
published: true
title: Opencv DNN module
tags: NN opencv
---
> The OpenCV DNN module only supports deep learning inference on images and videos, but it supports loading many popular deep learning frameworks such as TensorFlow, (Py)Torch, DarkNet, Caffe, ONNX. - [DNN opencv module: A Definitive Guide](https://learnopencv.com/deep-learning-with-opencvs-dnn-module-a-definitive-guide/) / [A Comprehensive Guide](https://bleedai.com/deep-learning-with-opencv-dnn-module-a-comprehensive-guide/) /  [DNN](https://docs.opencv.org/4.x/d2/d58/tutorial_table_of_content_dnn.html)

It is able to run caffe NN, see
- [samples/dnn/openpose.cpp]() example

### PyTorch / YOLO

Pytorch model have to be [converted to ONNx first](https://docs.opencv.org/4.x/d7/d9a/pytorch_segm_tutorial_dnn_conversion.html)

The following code contains the description of the below-listed steps:
- instantiate PyTorch model
- convert PyTorch model into .onnx
- read the transferred network with OpenCV API
- prepare input data
- provide inference
- get colored masks from predictions
- visualize results

[Running pre-trained YOLO model in OpenCV](https://docs.opencv.org/4.x/da/d9d/tutorial_dnn_yolo.html) - overview of exporting pre-trained YOLO family models from PyTorch and deploying them using OpenCV's DNN framework. 
- [Why does YoloV8 perform poorly when exported to .onnx ](https://stackoverflow.com/questions/75700658/why-does-yolov8-perform-poorly-when-exported-to-onnx-and-run-with-onnxruntime-o)
  -  you need to handle the pre-processing that is done in python to create the model input.

Note that this involves a number of steps that are not necessarily trivial and need to be done in the same order as what was done to the input when the model was trained. Resize needs to use anti-aliasing. Normalization needs to use the right range (pytorch is usually float from 0..1, tensorflow is usually float from -1..1). The ordering of the data needs to be correct (channels first vs channels last, RGB vs BGR).

### [Conversion of TensorFlow Segmentation Models and Launch with OpenCV](https://docs.opencv.org/4.x/dc/db4/tf_segm_tutorial_dnn_conversion.html) 

The key concepts involved in the transition pipeline of the TensorFlow classification and segmentation models with OpenCV API are almost equal excepting the phase of graph optimization. The initial step in conversion of TensorFlow models into cv.dnn.Net is obtaining the frozen TF model graph. Frozen graph defines the combination of the model graph structure with kept values of the required variables, for example, weights. Usually the frozen graph is saved in protobuf (.pb) files. To read the generated segmentation model .pb file with cv.dnn.readNetFromTensorflow, it is needed to modify the graph with TF graph transform tool.

### [.tflite](https://github.com/opencv/opencv/issues/13918)

**Not supported [yet](https://github.com/opencv/opencv/wiki/OE-35.-TFLite-support)**, but [should be convertible to `.pb`](https://github.com/opencv/opencv/issues/13918#issuecomment-763715736)

{% highlight cpp %}
$ bazel run -c opt //tensorflow/lite/toco:toco -- --input_file=palm_detection.tflite --output_file=graph.pb --input_format=TFLITE --output_format=TENSORFLOW_GRAPHDEF
{% endhighlight %}

### [Conversion of PyTorch Segmentation Models and Launch with OpenCV ](https://docs.opencv.org/4.x/d7/d9a/pytorch_segm_tutorial_dnn_conversion.html)

The key points involved in the transition pipeline of the PyTorch classification and segmentation models with OpenCV API are equal. The first step is model transferring into ONNX format with PyTorch torch.onnx.export built-in function. Further the obtained .onnx model is passed into cv.dnn.readNetFromONNX, which returns cv.dnn.Net object ready for DNN manipulations.
