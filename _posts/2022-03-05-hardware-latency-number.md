---
published: true
title: Latency
tags: cpu hardware latency fastware
---
> [How Jeff Dean's “Latency Numbers Everybody Should Know” decreased from 1990–2020](https://news.ycombinator.com/item?id=30546995) / [github](https://colin-scott.github.io/personal_website#/research/interactive_latency.html)

see also
- [ "How NOT to Measure Latency" by Gil Tene ](https://www.youtube.com/watch?v=lJ8ydIuPFeU) / [	
	Measuring Latency (2015)](https://news.ycombinator.com/item?id=46000303)
    - talk only about the good
	- time windows measure problem / missing percentile
    - coordinated omission problem
    	- long operations only get measured once
        - delays outside of timing window do not get measured at all
        
[![slide](https://imgopt.infoq.com/fit-in/1288x0/filters:quality(80)/presentations/latency-response-time/en/slides/sl45.jpg)](https://www.infoq.com/presentations/latency-response-time/)