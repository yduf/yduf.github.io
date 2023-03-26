---
published: true
title: Kalman Filter
tags: math opencv
---
> The Kalman Filter is one of the most important and common estimation algorithms. The Kalman Filter produces estimates of hidden variables based on inaccurate and uncertain measurements. Also, the Kalman Filter predicts the future system state based on past estimations. - [kalmanfilter.net](https://www.kalmanfilter.net/default.aspx)

**System state** - input needed for the prediction algorithm
**Dynamic Model** - the relation between input and output
**Measurement Noise** + **Process Noise**

### [Mean vs Expected Value](https://www.kalmanfilter.net/background.html)

Mean and Expected Value are closely related terms. However, there is a difference. 
Mean is computed on observed value.

The expected value is the value you would expect your hidden variable to have over a long time or many trials. 

### Variance vs Standard Deviation

The Variance is a measure of the spreading of the data set from its mean. 

The Standard Deviation is the square root of the variance. 

 
### see also
- [Kalman Filter Using OpenCV in Python](https://www.delftstack.com/howto/python/opencv-kalman-filter/) / [SO](https://stackoverflow.com/questions/42904509/opencv-kalman-filter-python)