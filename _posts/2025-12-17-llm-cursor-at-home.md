---
title: Cursor@Home
published: true
tags: LLM agentic-AI at_home vscode
toc: true
---
> How to make your own cursor - [ChatpGPT](https://chatgpt.com/share/694288eb-9fd4-800d-9753-9c1f39b2f9b6)

- [Local Models Overview](https://docs.cline.bot/running-models-locally/overview#recommended-models)
- Integration with [LM Studio](https://docs.cline.bot/running-models-locally/lm-studio)


[![hal](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indiewire.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fshutterstock_5886285ag.jpg&f=1&nofb=1&ipt=61da107b61b197cb912c7883d9872f5007700d023551d84c8b1b2f7bb171f504)](https://duckduckgo.com/?q=2001+l%27odyss%C3%A9+hal&iar=images&t=lm&iai=https%3A%2F%2Fwww.indiewire.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fshutterstock_5886285ag.jpg)

**see also**
- [How to code Claude Code in 200 lines of code](https://news.ycombinator.com/item?id=46545620)
- [La bulle IA est monstrueuse et cela va tout péter !!](https://www.youtube.com/watch?v=d2qDKx6JVdQ)
<details markdown="1"><summary>summary</summary>
- on paye 5x a 10x plus chere l'IA sur le cloud
  - les bulles explosent toujours plus fort et plus tard qu'anticipé.
  - l'IA ce n'est pas que des LLM sur le cloud
  - renforcer la resilience des entreprise grace a l'IA est une vraie valeur ajoutée
  - l'automatisation par l'IA n'est pas forcement meilleurs que via les RPA 
  - mais cela ne marche que sur des solutions complexes (qui sinon ne sont pas rentable)
  - ex le passage des avions a helices au jet n'a pas été juste un changement de moteur (repensé le process: vol pressurisé en haute altitude / controleur aerien / securité).
- la detection de fraude est usage pertinent
- [10000 Euros par mois grace à l'IA ! Oui et alors ? ](https://www.youtube.com/watch?v=N_FAUkAOK_I) - a propos de [N8N](https://n8n.io/)
- le marché de l'automation est déjà saturé et surévalué
  - on ne sait pas remplacer talent humain par de l'IA
  - on sait faire que les mauvais deviennent moyen.
</details>


# [The Session You Cannot Take With You ⮺ 🔒](https://earendil.com/posts/session-portability/)
_The original promise of an inference API was wonderfully simple: send some input, receive some output. If you kept both, you had the conversation. You could inspect it, archive it, replay it, or give it to a different model._ - [HN](https://news.ycombinator.com/item?id=49118781)

**Inference APIs are frustratingly moving away from that property, at least somewhat. They increasingly return a mixture of text and provider-bound state that is very intentionally non-portable.**
- provider-sealed state.
- No Reasoning For You
- Hidden Searches
- Opaque Compaction
- Subagents Come With Hidden Instructions
    
# [Skills ⮺]({% post_url 2026-06-05-usefull-prompt %})

**Notes**: depending on agent used, skill may be trigger differently.

eg: Unlike Claude Code, which supports explicit commands such as `/skill-name`, [Cline's]({% post_url 2026-08-01-ide-agent-cline-vscode %}) public documentation describes automatic triggering rather than a user-facing command to invoke a skill by name.

# Price 💲

[ Coding LLM Prices Comparison: My 5 Takeaways ](https://www.youtube.com/watch?v=3AaCSGBWj7E), per prompt:

| Model           | Rank |  Cost |
| --------------- | ----: | ----: |
| Sonnet 4.6      |    15 | $0.47 |
| Composer 2.5    |    17 | $0.18 |
| deepseek-V4-Pro |     9 | $0.11 |
| Qwen 3.6 Plus   |     6 | $0.07 |

# VSCode

- [VSCode + Cline + Continue](https://www.youtube.com/watch?v=7AImkA96mE8) NEVER PAY for CURSOR again. Use this OPEN SOURCE & LOCAL Alternative

[Cline vs Continue](https://chatgpt.com/share/6985a625-e1d0-800d-b494-2773a91cf209)

| Aspect                      | [**Cline**](#cline--)     | [**Continue**](#continuedev) |
| --------------------------- | ------------------------- | ---------------------- |
| Core idea                   | Autonomous AI agent       | AI coding copilot      |
| Autonomy                    | Very high                 | Low–medium             |
| Can run terminal commands   | ✅ Yes (with approval)     | ❌ No                   |
| Can edit many files at once | ✅ Yes                     | ⚠️ Limited             |
| Can create/delete files     | ✅ Yes                     | ⚠️ Mostly edits        |
| Interaction style           | Task-driven agent         | Inline assistant       |
| Risk level                  | Higher (powerful)         | Lower (controlled)     |
| Best for                    | Big refactors, automation | Day-to-day coding help |


# [continue.dev ⮺](https://chatgpt.com/share/694288eb-9fd4-800d-9753-9c1f39b2f9b6)

Using:
- vscode + [continue.dev](https://marketplace.visualstudio.com/items?itemName=Continue.continue) vscode extension
- [Qwen2.5-Coder-7B-Instruct](https://model.lmstudio.ai/download/lmstudio-community/Qwen2.5-Coder-7B-Instruct-GGUF)

# [Cline ⮺ 🤖]({% post_url 2026-08-01-ide-agent-cline-vscode %})

[Cline]({% post_url 2026-08-01-ide-agent-cline-vscode %}) is an open source AI coding agent that brings frontier AI models directly to your IDE. Unlike autocomplete tools, Cline is a true coding agent that can understand entire codebases, plan complex changes, and execute multi-step tasks.

# [pi.dev  ⮺](https://pi.dev/)

An open-source, terminal-based AI coding agent designed around a minimalist philosophy - (github)[https://github.com/earendil-works/pi#pi-agent-harness-mono-repo] / [HN](https://news.ycombinator.com/item?id=47143754).

Pi provides:

- AI coding assistance directly in the terminal: it can read files, edit files, write code, and run shell commands inside a project.
- Broad model support: it connects to 15+ providers and hundreds of models, including OpenAI, Anthropic, Google, local/self-hosted models, and others.

**see also**
- [What is Pi](https://chatgpt.com/share/6a339260-e8d0-83eb-bd35-9b5eee4c75c7)
- [ Code Isn't Free — Mario Zechner on the Hard Truths of Coding With AI (creator of Pi) ](https://www.youtube.com/watch?v=GhjU-KvXtT0)
- [A coding agent with the IDE wired in. omp.sh](https://github.com/can1357/oh-my-pi)

# [Hermes ⮺ 🔱]({% post_url 2026-07-23-agent-hermes %})
# Claude

Did you know that it is named _Claude_ in reference to _Claude Shanon_ the man that defined _anthropie_ of information content (and the company is named antropic...)

- [Claude Code Unpacked](https://ccunpacked.dev/#agent-loop) / [HN](https://news.ycombinator.com/item?id=47597085) - overview of Claude implementation and behavior
    - [Claude Code Leaks](https://www.ccleaks.com/)
- [The Claude Code Source Leak: fake tools, frustration regexes, undercover mode, and more](https://alex000kim.com/posts/2026-03-31-claude-code-source-leak/) / [HN](https://news.ycombinator.com/item?id=47586778) / [github](https://github.com/alex000kim/claude-code/tree/main/src)
    - Anti-distillation: injecting fake tools to poison copycats
    - Frustration detection via regex (yes, regex)
    - Native client attestation below the JS runtime /  the binary itself cryptographically proves it’s the real Claude Code client.
    - 250,000 wasted API calls per day
    - KAIROS: the unreleased autonomous agent mode

**see also**
- [Claude Code Is Steganographically Marking Requests](https://thereallo.dev/blog/claude-code-prompt-steganography) / [HN](https://news.ycombinator.com/item?id=48734373) - claude code todays date differently depending on local configuration to tweek behavior depending on users
  - [Claude Code now allows Anthropic to remotely inject system prompts](https://news.ycombinator.com/item?id=48259288)
  - To summarize what they've already been doing:
    - filtering out people from the wrong side of "all humanity", years before it was demanded by the government
    - downgrading their models in arbitrary ways (later saying "sorry but not really")
    - actively sabotaging the replies, as in covertly modifying them to feed the users incorrect results
- [Claude Conway](https://chatgpt.com/share/6a4573cd-e6e8-83eb-9347-2c9c10a582e5) - instead of a normal chatbot that waits for you to type something, Conway would act more like a persistent background assistant that keeps running and can continue working over time. supposed to spy on you;

# [Codex ⮺](https://github.com/openai/codex?tab=readme-ov-file#quickstart)
- [	Unrolling the Codex agent loop](https://news.ycombinator.com/item?id=46737630) – Codex CLI is open source.

# Alternatives
- [	Aider: AI pair programming in your terminal](https://news.ycombinator.com/item?id=39995725)
- [OpenCode](https://github.com/anomalyco/opencode) - very similar to Claude Code in terms of capability.
	- [Unauthenticated remote code execution in OpenCode](https://news.ycombinator.com/item?id=46581095)

# Model provider
- [ New #1 open-source AI model is here! ](https://www.youtube.com/watch?v=6d__WOpZswY)
  - GLM 5.2 - Zcode

## [Deepseek  ⮺ 👤](https://platform.deepseek.com/usage)
