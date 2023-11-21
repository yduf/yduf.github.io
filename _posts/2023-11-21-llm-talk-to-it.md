---
published: true
title: Talk to it like a Human
tags: LLM
---
> I see lots of people trying to prompt with incomplete sentences, not capitalizing, using slang, bad grammar, imprecise terminology etc. And it still works. However, I find that you get a noticable a quality boost if you use proper English and treat it more like a human. - [HN](https://news.ycombinator.com/item?id=38357413)

_"i want a python app that calculates a roadtrip for me"_

vs

_"Please write me a Python program using a map API that measures the distance between two locations as a car would drive. Think carefully about the program architecture and be sure to use a human readable Pythonic style. Please show me the complete program in it's entirety."_

The former game me a high level overview with a ton of explanation and didn't write any code. You can try to walk it through the process of all the steps it needs, but it will write "confused", albeit working, code after a few prompts. The latter just wrote working code on the first response. Moving forward, the context is just so more concise and correct that everything after will be of much higher quality.

I rarely go past 5-10 responses due to what I'd call "context poisoning". If it makes a simple syntax error or something small, I'll shoot it the error and let it correct itself. But as soon as it invents a function or otherwise hallucinates, it gets copy pasted into a new prompt saying "here's some bad code, fix this" and it is far more likely to come up with an elegant solution rather that rewriting everything or making huge changes to solve a one off error or something it's previous context was preventing it from grasping.