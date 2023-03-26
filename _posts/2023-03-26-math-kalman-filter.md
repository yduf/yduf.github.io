---
published: true
title: Kalman Filter
tags: math opencv
---
> The Kalman Filter is one of the most important and common estimation algorithms. The Kalman Filter produces estimates of hidden variables based on inaccurate and uncertain measurements. Also, the Kalman Filter predicts the future system state based on past estimations. - [kalmanfilter.net](https://www.kalmanfilter.net/default.aspx)



[![caption](https://www.kalmanfilter.net/img/AlphaBeta/ex1_estimationAlgorithm.png)](https://www.kalmanfilter.net/alphabeta.html)

[![caption](https://www.kalmanfilter.net/img/AlphaBeta/ex1_MeasVsTrueVsEst.png)](https://www.kalmanfilter.net/alphabeta.html)

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

### Static System

A static system is a system that doesn't change its state over a reasonable period. For instance, the static system could be a tower, and the state would be its height. 

Example of measuring gold:
rewriting mean,so that it can be computed from previous estimation and new measurement (without recomputing it fully each time).

$^n,n=1n∑ni=1(zi)=x^n,n−1+1n(zn−x^n,n−1) $ // TBD

The above equation is one of the five Kalman filter equations. It is called the State Update Equation. It means the following: 



[![caption](https://www.kalmanfilter.net/img/AlphaBeta/ex1_stateUpdate.png)](https://www.kalmanfilter.net/alphabeta.html)

in "Kalman Filter language," this factor is called the Kalman Gain. It is denoted by $K_n$. The subscript n indicates that the Kalman Gain can change with every iteration. 

**Initial guess** - Before we make the first measurement, we can guess (or rough estimate) the gold bar weight simply by reading the stamp on the gold bar. It is called the Initial Guess, and it is our first estimate.

The Kalman Filter requires the initial guess as a preset, which can be very rough. 
 
### Dynamic System
 
### see also
- [Kalman Filter Using OpenCV in Python](https://www.delftstack.com/howto/python/opencv-kalman-filter/) / [SO](https://stackoverflow.com/questions/42904509/opencv-kalman-filter-python)