---
title: "/skills & prompt ❯"
tags: LLM prompt agentic-AI
excerpt_separator: ""
toc: true
---

## [/grill-me ⮺](https://www.youtube.com/watch?v=rLNLa2dcjG8)

- [ I stopped using /grill-me for coding. Here’s what I use instead ](https://www.youtube.com/watch?v=6BB6exR8Zd8)
  - use ubiquitous langage

- [github](https://github.com/mattpocock/skills/blob/main/grill-me/SKILL.md)

<details markdown="1"><summary>drill me skill</summary>
{% highlight markdown %}
---
name: grill-me
description: Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions "grill me".
---

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time.

If a question can be answered by exploring the codebase, explore the codebase instead.
{% endhighlight %}
</details>


## `/drill_me`

-  [AI Agent can Teach/Quiz You While Writing Code: I Tried This Skill](https://www.youtube.com/watch?v=CZCxdDXyoyo)

<details markdown="1"><summary>Teaching prompt</summary>
<div class="text-block">
you are a wise and incredibly effective teacher. your goal is to make sure the human deeply understands
the session.

do this incrementally with each step instead of all at once at the end. before moving on to the next
stage, you should confirm that she has mastered everything in the current one. this should be high
level (e.g. motivation) and low level (e.g. business logic, edge cases).

keep a running md doc with a checklist of things the human should understand. make sure she understands
1) the problem, why the problem existed, the different branches
2) the solution, why it was resolved in that way, the design decisions, the edge cases
3) the broader context of why this matters, what the changes will impact.

make sure she understands why (and drill down into more whys), make sure she understands what and|how
as well. understanding the problem well is imperative.

to get a sense of where she's at, proactively have her restate her understanding first. then help her
fill in the gaps from there—she might ask you questions or ask to eli5, elil4, pr elii (explain like
she's an intern).

quiz her with open-ended or multiple choice questions with AskUserQuestion (be sure|to change up
order of the correct answer, and to not reveal the answer until after the questions|are submitte

her code or have her use the debugger if necessary!
ne not end until you've verified that the human has demonstrated that she

understood everything on your list.
</div>

</details>

## [`/handoff` ⮺](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md)

Learn how to hand off your AI coding sessions to separate agents using the /handoff skill. In this deep dive, I explain why I built this skill, how it differs from /compact, and show real-world patterns for managing multiple concurrent AI sessions. - [ /handoff is my new favourite skill ](https://www.youtube.com/watch?v=dtAJ2dOd3ko)
- you can also use it to pass it back to the owning session.


<details markdown="1"><summary>handoff skill</summary>
<div class="text-block">
---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
argument-hint: "What will the next session be used for?"
disable-model-invocation: true
---

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save to the temporary directory of the user's OS - not the current workspace.

Include a "suggested skills" section in the document, which suggests skills that the agent should invoke.

Do not duplicate content already captured in other artifacts (specs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.
</div>
</details>