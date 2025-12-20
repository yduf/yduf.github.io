---
title: 'Generic core, specific shell'
published: true
tags: software architecture mental-model
---
> Business layer should be on top - [HN](https://news.ycombinator.com/item?id=45726855)

**"Functional core, imperative shell" (FCIS)** is a matter of implementing individual software components that need to engage with side-effects --- that is, they have some impact on some external resources. Rather than threading representations of the external resources throughout the implementation, FCIS tells us to expel those concerns to the boundary. This makes the bulk of the component easier to reason about, being concerned with pure values and mere descriptions of effects, and minimizes the amount of code that must deal with actual effects (i.e. turning descriptions of effects into actual effects). It's a matter of comprehensibility and testability, which I'll clumsily categorize as "verification": "Does it do what it's supposed to do?"

**"Generic core, specific shell" (GCSS)** is a matter of addressing needs in context. The problems we need solved will shift over time; rather than throwing away a solution and re-solving the new problem from scratch, we'd prefer to only change the parts that need changing. GCSS tells us we shouldn't simply solve the one and only problem in front of us; we should use our eyes and ears and human brains to understand the context in which that problem exists. We should produce a generic core that can be applied to a family of related problems, and adapt that to our specific problem at any specific time using a, yes, specific shell. It's a matter of adaptability and solving the right problem, which I'll clumsily categorize as "validation": "Is what it's supposed to do what we actually need it to do?"
