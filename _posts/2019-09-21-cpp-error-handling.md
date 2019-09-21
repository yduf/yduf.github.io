---
published: true
title: Systematic Error Handling in C++ (2012 - Andrei)
tags: c++ error_handling software exception
---
## [C++ and Beyond 2012](https://www.youtube.com/watch?v=kaI4R0Ng4E8)
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

### Expected<T>
- either T
- or the reason T was not created

### Dislocation + Nestng = Fail
- scope_guard
  - encapsulate control flow
  - scope_guard composition
  - put action at top level
