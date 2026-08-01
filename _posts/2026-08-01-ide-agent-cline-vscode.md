---
title: Cline 🤖
tags: agentic-AI vscode 
toc: true
---
> Cline is an open source AI coding agent that brings frontier AI models directly to your IDE. Unlike autocomplete tools, Cline is a true coding agent that can understand entire codebases, plan complex changes, and execute multi-step tasks. - [Cline](https://docs.cline.bot/introduction/welcome) / [github](https://github.com/cline/cline?tab=readme-ov-file#cline) / [👤](https://app.cline.bot/dashboard/account?tab=credits)

<link rel="icon" href="https://cline.bot/assets/branding/favicons/favicon-16x16.png" sizes="16x16" type="image/png">

- [Getting Started with Cline—The Best VS Code AI Plugin](https://www.youtube.com/watch?v=f33Fw6NiPpw)

**see also** 
- [Cline vs Cursor](https://chatgpt.com/share/69446ae1-4990-800d-b80a-bd62c220adb1)

Long session are coslty because of the increased input token.

| Rank  | [Model Leaderboard ⮺](https://vercel.com/ai-gateway/leaderboards) |  | Plan | Act | Price | Comment |
| ---   | --- | --- | --- | --- | --- | --- |
| ★★★★★ | deepseek/deepseek-flash  | 2026-06-01 | 📝 | ▶ | Context:&nbsp;1.0M _free_ with a daily&nbsp;cap | [cheapest](https://artificialanalysis.ai/models/deepseek-v4-flash) / [HN](https://news.ycombinator.com/item?id=49120299) |
| ★★★★☆ | deepseek/deepseek-v4-pro | 2026-05-17 |    | ▶ | Context:&nbsp;1.0M Input:&nbsp;$0.43/M Output:&nbsp;$0.87/M | cheap |
|       | z-ai/glm-4.6             | 2026-04-03 | 📝 |  |  |  |
|       | moonshotai/kimi-k2.6     | 2026-05-17 |    | ▶ | Context:&nbsp;262K Input:&nbsp;$0.73/M Output:&nbsp;$3.49/M |  |
|       | x-ai/grok-code-fast-1    | 2026-04-03 |    | ▶ |  |  |
| [☆☆☆☆☆](https://www.youtube.com/watch?v=BGZjs1dQfsk) |Gemma4 12B Coder | 2026-04-03 |  | ▶ |  | 16GB Local LLM setup |

## Notes

<div class="encart blue
" markdown="1">
### [Skills ⮺]({% post_url 2026-06-05-usefull-prompt %})

Unlike Claude Code, which supports explicit commands such as `/skill-name`, Cline's public documentation describes automatic triggering rather than a user-facing command to invoke a skill by name. If you want to ensure a particular skill is used, the recommended approach is to phrase your request so it clearly matches that skill's description.

</div>

## Setup
- Native tools: 
- Background edit: enabled

<div class="encart orange
" markdown="1">
### Terminal
- background execution mode (avoid messing & be stuck within VSCode)

</div>

## [CLI ⮺](https://docs.cline.bot/getting-started/installing-cline#cli)

prerequesite: needs Node 20+, see [isntallation]({% post_url 2020-11-29-node-js %})
[Getting Started](https://docs.cline.bot/cline-cli/getting-started)

`cline`
- [config](https://docs.cline.bot/cline-cli/cli-reference#cline-config) - Opens an interactive configuration view

{% highlight bash %}
$ npm install -g cline
$ cline auth
{% endhighlight %}
