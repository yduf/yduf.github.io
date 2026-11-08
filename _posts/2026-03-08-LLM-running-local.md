---
title: Running Local LLM 🤖
tags: LLM local-mode at_home offline
toc: true
---
> Running Model locally - [Cursor@Home]({% post_url 2025-12-17-llm-cursor-at-home %})


**see also**
- [ 4-node AMD cluster](https://www.youtube.com/watch?v=32cjdHVoSRo) - runing 512GB Model locally / needs $$$$
  - 4-node Minisforum MS-S1 Max Strix Halo cluster
- [tokenspeed](https://mikeveerman.github.io/tokenspeed/?rate=30.1&mode=code) / [HN](https://news.ycombinator.com/item?id=48174920)
  
# [ Models  ⮺](https://huggingface.co/models)

<div class="encart blue" markdown="1">
[ Bob-Bench Tier List - 31 Local Coding LLMs Ranked ](https://www.youtube.com/watch?v=fx_t8RL2bbU)
</div>

- [Deepseek V4.1 Flash vs Qwen 3.8 Flash, GLM 5.3 Flash, Gemini 3.8 Flash](https://www.youtube.com/watch?v=mzothrIi0cE)

**see also**
- [Model benchmarks](https://lukesdevlab.com/)
- [Top Model by task](https://openrouter.ai/rankings#task-spend)
- [The Best Local Agentic Coding Workflow (Complete Guide)](https://www.youtube.com/watch?v=UngVdAsQEiU)


| rank | Model               |  Size | Speed | Comments |
| --- | ---                  | ---  | ---    | --- |
|  | [Qwen3.8 27B](#qwen-38) |  15.9Go = 13Go + cont 46k   | 6t/s | LM Studio 4.24 |
|  | [Qwen3.6 27B](https://news.ycombinator.com/item?id=48247535) |  | |  |  |
|  | [**Qwen3(?) 14B**](#qwen3-14b-claude-45-opus-high-reasoning-distill) |  15.9Go = 9Go + cont 46k | 80t/s  |  |
|  | qwen3-14b-claude-4.5-opus-high-reasoning-distill   | 9GB | 80 tok/sec | LM Studio 4.12 |
|  | unsloth/qwen3-coder-30b-a3b-instruct   | 11GB/12.4GB | 55.46 tok/sec - 1019 tokens - 0.03s to first token | LM Studio 3.6 |
|  | llmfan46/Qwen3.6-35B-A3B-uncensored-heretic-NVFP4-Experts-Only-GGUF  | 12.5GB | 10 tok/sec - 2898 tokens - 1.16s to first token | LM Studio 4.12 |
|  | llmfan46/Qwen3.6-35B-A3B-uncensored-heretic-NVFP4-Experts-Only-GGUF  | 12.5GB | 10 tok/sec - 2898 tokens - 1.16s to first token | LM Studio 4.12 |


## Security

[	Agentic backdoors via pretraining poisoning ](https://news.ycombinator.com/item?id=50341334) - Of course this is authored by people at Anthropic. Continuing their narrative that open sourced models are dangerous and that people should trust the closed sourced providers.
- [Your Open Source Model Could Have a Hidden Time-Release Backdoor](https://morgin.ai/articles/your-open-source-model-could-have-a-hidden-time-release-backdoor.html) - demonstrate that harness context can be used to trigger a different answer in controlled condition.

# Qwen 3.8

<div class="encart blue" markdown="1">
Testing
- [ Qwen3.8-27B-i1-IQ4_XS-GGUF-Smaller  ](https://www.youtube.com/watch?v=X32wgScxTtY){: .reference-only}
  - 100 000 tokens de contexte avec un KV Cache en Q4 on RX 7800
  -  65 000 on RTX 5070Ti
- [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) 13Gb with -mtp 
  - Quantization: IQ3_S - [Benchmark](https://www.youtube.com/watch?v=jFHu6wx_TMQ){: .reference-only}
</div>

- [	I gave Qwen 3.8 27B a reverse-engineering job and it finished in 30 minutes](https://news.ycombinator.com/item?id=49407507)


## 16 Go

### [ Qwen3.8-27B-i1-IQ4_XS-GGUF-Smaller  ⮺](https://www.youtube.com/watch?v=X32wgScxTtY){: .reference-only}

- [Qwen3.8-27B-i1-IQ4_XS-GGUF-Smaller](https://huggingface.co/jrell/Qwen3.8-27B-i1-IQ4_XS-GGUF-Smaller) - A custom hybrid quantization of the Qwen3.8-27B base model, specifically designed to fit Multi-Token Prediction (MTP) and long context into a strict 16GB VRAM hardware budget (like consumer RTX 4080 / RTX 5080 cards).
- [mmproj-Qwen3.8-27B-f16.gguf](https://huggingface.co/bartowski/Qwen3.8-27B-GGUF/blob/main/mmproj-Qwen3.8-27B-f16.gguf?utm_source=chatgpt.com) - vision to text
- Le quant Q4_XS_Smaller : un 27B dense sur 16 Go de VRAM
- Le KV Cache en Q4 : 100 000 tokens de contexte, avec vision et MTP activés
- 100k tokens de contexte avec un KV Cache en Q4 - en theorie => [65k sur Nvdia]({% post_url 2023-12-03-llm-llama %}#where-the-vram-goes)

```bash
$ llama-server \
  --model Qwen3.8-27B-i1-IQ4_XS-GGUF-Smaller.gguf \
  --mmproj mmproj-Qwen3.8-27B-f16.gguf \               # vision support
  --ctx-size 100000 \
  --n-gpu-layers 999 \
  --cache-type-k q4_0 --cache-type-v q4_0 \
  --spec-type draft-mtp --spec-draft-n-max 3 \
  --parallel 1 \
  --reasoning-preserve \
  --host 0.0.0.0 --port 8080 \
  --alias "Qwen3.8-27B-i1"
```

## see also
- [Qwen 3.8 27B sur 16 Go de VRAM : il a résolu le bug que DeepSeek V4 Flash a raté](https://www.youtube.com/watch?v=X32wgScxTtY){: .reference-only}
- [ Qwen3.8 Flash: Over 7x Faster First Token ](https://www.youtube.com/watch?v=RlsxXB5q-cA){: .reference-only} -  llama.cpp vs SGLang vs FreeToken. Benchmarked! (96GB)

- [ Qwen 3.8 27B GSQ RCO tested - 16GB Local LLM setup ](https://www.youtube.com/watch?v=jFHu6wx_TMQ){: .reference-only} -  from ISTA DAS Lab Austria,
  - [ Qwen 3.8 27B Quantizations Q1 - Q8 compared ](https://www.youtube.com/watch?v=WNMnbba35VI){: .reference-only}
  - [ Qwen 3.8 27B Reasoning Levels Tested - Not What I Expected ](https://www.youtube.com/watch?v=z64J6bC16iQ){: .reference-only}
  - [ Qwen 3.8 27B Cold Fusion tested - 16GB Local LLM setup ](https://www.youtube.com/watch?v=wR_cLfRLBDs){: .reference-only}

# [Qwen3.6 ⮺](https://ollama.com/library/qwen3.6:35b-a3b-coding-nvfp4)

This release delivers substantial upgrades, particularly in

- Agentic Coding: the model now handles frontend workflows and repository-level reasoning with greater fluency and precision.

- Thinking Preservation: we’ve introduced a new option to retain reasoning context from historical messages, streamlining iterative development and reducing overhead.

**see also**
- [ Qwen 3.6 Locally: Can I use it for my daily tasks? ](https://www.youtube.com/watch?v=7ejQSGaiyQE)
  - 27B - better on coding task (but dense)
  - 35B - faster
  - [Prompt Vault](https://github.com/w512/Prompt-Vault#prompt-vault) - a curated collection of structured coding prompts and challenges designed for testing Large Language Models (LLMs)
- [ QWEN 3.6 27B sur 16GB VRAM : La meilleure configuration ](https://www.youtube.com/watch?v=YElKs1ihn3M)
  - [	RTX 5080 and RTX 3090 Setup: 80 Tok/s on Qwen 3.6 27B Q8](https://news.ycombinator.com/item?id=48515454)


# [Qwen3.5 ⮺](https://news.ycombinator.com/item?id=47292522)

Qwen3.5 is Alibaba’s new model family, including Qwen3.5-35B-A3B, 27B, 122B-A10B and 397B-A17B and the new Small series: Qwen3.5-0.8B, 2B, 4B and 9B. The multimodal hybrid reasoning LLMs deliver the strongest performances for their sizes. They support 256K context across 201 languages, have thinking + non-thinking, and excel in agentic coding, vision, chat, and long-context tasks. The 35B and 27B models work on a 22GB Mac / RAM device.

See all [GGUFs here](https://huggingface.co/collections/unsloth/qwen35).
- [How to run Qwen 3.5 locally ](https://news.ycombinator.com/item?id=47292522)

# Qwen3

## qwen3-14b-claude-4.5-opus-high-reasoning-distill

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


# DeepSeek v4.1 Flash

<div class="encart blue" markdown="1">
 Every day I envy the version of me that bought the 5090 instead of the 5070 before I really learned how important the onboard ram was. 
</div>

- [ I Run Full DeepSeek v4.1 Flash on a 12GB GPU ](https://www.youtube.com/watch?v=nkb4mfa3S0A)

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

## GSQ-RCO

A particular quantization method/format intended to preserve quality at very low bit rates

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


## -mtp

-mtp build (about 0.35 GB larger) that carries the model's Multi-Token Prediction head for speculative decoding in llama.cpp. The weights are otherwise identical, so quality is unchanged.

you're adding machinery that can make decoding faster.

And the MTP speedup only happens when your inference engine actually supports/activates MTP. This repo specifically targets llama.cpp's draft-mtp speculative decoding.

## [instruct ⮺](https://chatgpt.com/share/6985a9bb-67b0-800d-8a87-83d97db2f72b) 

This refers to a model that is specifically trained or fine-tuned to follow instructions from users in a helpful, safe, and coherent way.


## [DFlash ⮺](https://github.com/z-lab/dflash#dflash-block-diffusion-for-flash-speculative-decoding) 

DFlash is a novel speculative decoding method that utilizes a lightweight block diffusion model for drafting. It enables efficient, high-quality parallel drafting that pushes the limits of inference speed.

## Uncensored
- [ Uncensored AI Costs $5 to Make. Nobody Can Stop It. ](https://www.youtube.com/watch?v=EArYx3GZSlQ)
  - [Heretic: Fully automatic censorship removal for language models](https://github.com/p-e-w/heretic#heretic-fully-automatic-censorship-removal-for-language-models---) - a tool that removes censorship (aka "safety alignment") from transformer-based language models without expensive post-training. It combines an advanced implementation of directional ablation, also known as "abliteration" (Arditi et al. 2024, Lai 2025 (1, 2)), with a TPE-based parameter optimizer powered by Optuna.


## GGUF

- [What's in a GGUF, besides the weights - and what's still missing?](https://nobodywho.ooo/posts/whats-in-a-gguf/) / [HN](https://news.ycombinator.com/item?id=48138332)