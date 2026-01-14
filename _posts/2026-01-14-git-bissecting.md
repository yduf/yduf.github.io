---
title: Bissecting (Git)
published: true
tags: git diff search
---
> I have worked on several codebases where it was enforced that the commit be rebased off of whatever the main branch was, all units of work squashed to a single commit, and only "working" code be checked into the main branch. This gives you a really good linear history, and when you're disciplined about writing good final commit messages and tagging them to a ticket, it means bisecting to find challenging bugs later becomes tractable, as each commit nominally should work and should be ready to deploy for testing. I've personally solved a number of challenging regressions this way. - [HN](https://news.ycombinator.com/item?id=46530920)
