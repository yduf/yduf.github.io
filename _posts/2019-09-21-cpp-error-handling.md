---
published: true
title: Systematic Error Handling in C++ (2012 - Andrei)
tags: c++ error_handling software
---
## [C++ and Beyond 2012](https://www.youtube.com/watch?v=kaI4R0Ng4E8)
- scope_guard
- error handling is about error in the inputs, not bug.
	- hardware work
    - program is correct
	- opposed tp general reliability
    - but consider
    	- network error
        - device error
        - data error
        
### Hypothesis
- bad error handling engenders errors
- insufficient testing make improbable error scenario
- legit error lead to corrupt programs

