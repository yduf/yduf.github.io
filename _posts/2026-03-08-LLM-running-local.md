---
title: Running Local LLM
tags: LLM at_home network
toc: true
---
> Running Model locally - [Cursor@Home]({% post_url 2025-12-17-llm-cursor-at-home %})


**see also**
- [ 4-node AMD cluster](https://www.youtube.com/watch?v=32cjdHVoSRo) - runing 512GB Model locally / needs $$$$
  - 4-node Minisforum MS-S1 Max Strix Halo cluster

# [ Models  ⮺](https://huggingface.co/models)

**see also**
- [The Best Local Agentic Coding Workflow (Complete Guide)](https://www.youtube.com/watch?v=UngVdAsQEiU)

| Model | Size | Speed | Comments |
| ------------------------------------ | ----------- | -------------------------------------------------- | --- |
| qwen3-14b-claude-4.5-opus-high-reasoning-distill                    | 9GB | 80 tok/sec | LM Studio 4.12 |
| unsloth/qwen3-coder-30b-a3b-instruct                                | 11GB/12.4GB | 55.46 tok/sec - 1019 tokens - 0.03s to first token | LM Studio 3.6 |
| llmfan46/Qwen3.6-35B-A3B-uncensored-heretic-NVFP4-Experts-Only-GGUF | 12.5GB | 10 tok/sec - 2898 tokens - 1.16s to first token | LM Studio 4.12 |
| llmfan46/Qwen3.6-35B-A3B-uncensored-heretic-NVFP4-Experts-Only-GGUF | 12.5GB | 10 tok/sec - 2898 tokens - 1.16s to first token | LM Studio 4.12 |


# [Qwen3.6 ⮺](https://ollama.com/library/qwen3.6:35b-a3b-coding-nvfp4)

This release delivers substantial upgrades, particularly in

- Agentic Coding: the model now handles frontend workflows and repository-level reasoning with greater fluency and precision.

- Thinking Preservation: we’ve introduced a new option to retain reasoning context from historical messages, streamlining iterative development and reducing overhead.

**see also**
- [ Qwen 3.6 Locally: Can I use it for my daily tasks? ](https://www.youtube.com/watch?v=7ejQSGaiyQE)
  - 27B - better on coding task (but dense)
  - 35B - faster
  - [Prompt Vault](https://github.com/w512/Prompt-Vault#prompt-vault) - a curated collection of structured coding prompts and challenges designed for testing Large Language Models (LLMs)


# [Qwen3.5 ⮺](https://news.ycombinator.com/item?id=47292522)

Qwen3.5 is Alibaba’s new model family, including Qwen3.5-35B-A3B, 27B, 122B-A10B and 397B-A17B and the new Small series: Qwen3.5-0.8B, 2B, 4B and 9B. The multimodal hybrid reasoning LLMs deliver the strongest performances for their sizes. They support 256K context across 201 languages, have thinking + non-thinking, and excel in agentic coding, vision, chat, and long-context tasks. The 35B and 27B models work on a 22GB Mac / RAM device.

See all [GGUFs here](https://huggingface.co/collections/unsloth/qwen35).
- [How to run Qwen 3.5 locally ](https://news.ycombinator.com/item?id=47292522)

## Qwen3-Coder-30B-A3B-Instruct-GGUF

This is the standard instruction-tuned code model.  
Typical strengths:
- generating code from prompts
- explaining code
- quick coding tasks
- IDE autocomplete / chat coding

It’s also easier to run locally because the total model size is smaller (30B).

- [use **Qwen3 Coder 30B A3B Instruct**](https://docs.cline.bot/running-models-locally/overview#recommended-models). This model delivers strong coding performance and reliable tool use.
	- [Which local models actually work with Cline? AMD tested them all](https://cline.ghost.io/local-models-amd/)

[**RTX 5070 Ti**](https://chatgpt.com/share/69adda48-f1a0-800d-8d16-b17fa96b7e28)
- [Running 3.5 9B on my ASUS 5070ti 16G with lm studio](https://news.ycombinator.com/item?id=47294937)

## [Qwen3-Coder-Next ⮺](https://chatgpt.com/share/69ade4d7-b610-800d-a969-78b61b8c503f)

Much larger model: ~80B parameters total / ~3B active per token 
- very sparse Mixture-of-Experts
- optimized for fast repeated calls in agent loops

Designed for coding agents that run loops:
- read repo
- plan changes
- edit files
- run tests
- debug
- repeat

It was trained with environment interaction and executable coding tasks, so it learns from test results and feedback loops.  
Typical strengths:
- repo-scale refactors
- debugging from logs
- multi-step tool use
- IDE agents (Cline, Claude Code, etc.)

# Quantisation

## [Q4_K_M ⮺](https://chatgpt.com/share/69addc61-4328-800d-b04c-3c3f1c1ae897)

Q4_K_M is a compressed 4-bit version of an AI model that balances small size with good accuracy.

**Q4** - means each model weight uses 4 bits instead of 16 bits, reducing memory usage by about 4×.
- smaller files
- faster inference
- lower RAM/VRAM requirements

**K** stands for K-block quantisation, an improved quantisation method used in GGML/GGUF models.  
Instead of compressing each weight independently, it compresses blocks of weights together, which:
  - preserves more information
  - improves accuracy compared to older Q4 formats

**M** a variant of the quantisation scheme  (S (small) / M (Medium) / L (Large) precision)

# Model Parameters

## [A3B ⮺](https://chatgpt.com/share/69addea8-9148-800d-92e3-67c4e0926a2b)

Some newer models use a Mixture-of-Experts (MoE) architecture.  
**A3B** → Active 3B parameters during inference.

Instead of using all parameters every time, the model:
- Contains a large total parameter count (e.g., 35B).
- Activates only a subset of them per token using a router that selects a few “experts.”

Example

| Model name        | Total parameters | Active parameters |
| ----------------- | ---------------- | ----------------- |
| Qwen3.5-35B-A3B   | 35B              | ~3B active        |
| ERNIE-4.5-21B-A3B | 21B              | ~3B active        |


## [instruct ⮺](https://chatgpt.com/share/6985a9bb-67b0-800d-8a87-83d97db2f72b) 

This refers to a model that is specifically trained or fine-tuned to follow instructions from users in a helpful, safe, and coherent way.


## [DFlash ⮺](https://github.com/z-lab/dflash#dflash-block-diffusion-for-flash-speculative-decoding) 

DFlash is a novel speculative decoding method that utilizes a lightweight block diffusion model for drafting. It enables efficient, high-quality parallel drafting that pushes the limits of inference speed.

## GGUF

- [What's in a GGUF, besides the weights - and what's still missing?](https://nobodywho.ooo/posts/whats-in-a-gguf/) / [HN](https://news.ycombinator.com/item?id=48138332)