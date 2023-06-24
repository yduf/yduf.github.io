---
published: true
title: 3dprinter Calibration & precision
tags: 3dprinter calibration calipers
---
> [Teaching Tech 3D Printer Calibration](https://teachingtechyt.github.io/calibration.html)

- [Slicer Flow Calibration](https://teachingtechyt.github.io/calibration.html#flow)

## Flow

- You cannot calibrate the flow on first layer aspect since it is correlated with Z-offset - see Elefant Foot.
- Flow can be assessed on upper layer aspect.

## Hole & horizontal expension

- [Horizontal Hole Tolerance Calibration Test](https://www.thingiverse.com/thing:4772939)

### Elephant Foot
- **Set Z-offset properly first.**

- [Adjust Initial Layer Horizontal Expansion](https://my3dlife.com/how-to-fix-elephants-foot-on-a-3d-printer-simple-guide/)
- [How to STOP Elephant's Foot on your 3D Prints](https://www.youtube.com/watch?v=zlgR3rHg4p8)


## Accurate Dimension

- [How to 3D Print Dimensionally Accurate Parts](https://www.youtube.com/watch?v=0dFThbwAx2Y)
	- overextrusion / underextrusion should not displace center
    - **filament shrinkage**, can account for 0.6% measurement innaccuracy
    	- can be calibrated on specific print to reach expected dimension.
    
- [A Better Way To Calibrate Your 3D Printer. Importance of Dimensionally Accurate 3D Printed Products](https://www.youtube.com/watch?v=lYmFXrmC5p0) - 20 mm cube are within a range of 0.3% precision on an ender3 => goto a 100mm test print
	- [100mm Calibration Print](https://www.thingiverse.com/thing:5020524)

## Wall ordering

- [Why your 3d printed stuff doesn't fit together and how to fix it!](https://www.youtube.com/watch?v=yzPqBt2SrcE) - if interior wall is printed first, it will push away the external wall.

## Clearance & Tolerance

## Corner

FDM does not make perfect corner

- pressure advance may help

## Test
- [Can you Conquer the Clearance Castle?](https://www.youtube.com/watch?v=hueVDUQUQng)
	- 0.5, 0.3, 0.15 clearance test