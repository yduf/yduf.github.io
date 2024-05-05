---
title: OpenCV + GPU
published: true
tags: opencv gpu
---
> running OpenCV on a gpu.

- [OpenCL](https://opencv.org/opencl/) - AMD GPUs are supported through OpenCV’s ubiquitous OpenCL support
	- [access opencv on amd gpu with opencl](https://answers.opencv.org/question/5994/access-opencv-on-amd-gpu-with-opencl/)
    - [Running OpenCV on an AMD processor](https://stackoverflow.com/questions/60725403/running-opencv-on-an-amd-processor)
    - [AMD OpenCV Extension (vx_opencv)](https://rocm.docs.amd.com/projects/MIVisionX/en/latest/amd_openvx_extensions/amd_opencv/README.html) - an [OpenVX](https://registry.khronos.org/OpenVX/specs/1.3/html/OpenVX_Specification_1_3.html) module that implements a mechanism to access OpenCV functionality as OpenVX kernels.
		- [What are the connections and differences between OpenCV and OpenVX](https://medium.com/@reza_mahmoudi/what-are-the-connections-and-differences-between-opencv-and-openvx-a074f32f4a1a) - OpenVX implements cross-platform accelerated processing. 
       
- [CUDA](https://opencv.org/platforms/cuda/) - OpenCV GPU module is written using CUDA