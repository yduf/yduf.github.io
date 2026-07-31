---
title: "/skills & prompt ❯"
tags: LLM prompt agentic-AI
excerpt_separator: ""
toc: true
---

### `/drill_me`

-  [AI Agent can Teach/Quiz You While Writing Code: I Tried This Skill](https://www.youtube.com/watch?v=CZCxdDXyoyo)

<details markdown="1"><summary>Teaching prompt</summary>
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
</details>

### [`/handoff` ⮺](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md)

- [ /handoff is my new favourite skill ](https://www.youtube.com/watch?v=dtAJ2dOd3ko)

<details markdown="1"><summary>handoff skill</summary>
{% highlight markdown %}
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
{% endhighlight %}
</details>