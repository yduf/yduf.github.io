---
published: true
title: ChatGPT / Emergent world représentation
tags: LLM test c++ mental-model
toc: true
---
> These People fail to realize that an AI outscoring a human on a test does not mean it can actually do the thing the test measures. - [GPT-4 Is Not Getting Worse](https://coagulopath.com/gpt-4-is-not-getting-worse/) / [HN](https://news.ycombinator.com/item?id=37532522)

> We were conflating a lot of things with the word intelligence. - [OpenVoice](https://research.myshell.ai/open-voice)

ChatGPT is a _development limité_ of human knowledge, you can get a good initial point, but when conversing with it, you are derivating farther away from the a valid human interaction. - yduf

# LLM

- [	A History of Large Language Models](https://news.ycombinator.com/item?id=45488892)
- [What's wrong with LLMs and what we should be building instead](https://www.youtube.com/watch?v=cEyHsMzbZBs)
- [	2025: The Year in LLMs](https://news.ycombinator.com/item?id=46449643)

## Transformer

Why [Attention Is All You Need](https://arxiv.org/abs/1706.03762) ? (And what is the novelty of tranformer)
explained by [ChatGPT](https://chatgpt.com/share/69624150-2120-800d-af2a-cc957e6011b3):

_Before this paper, language models and sequence-to-sequence systems typically used_:
- Recurrent Neural Networks (RNNs) — process tokens one by one, carrying a hidden state forward.
- LSTM/GRU — RNN variants that mitigate some long-term memory problems, but still inherently sequential.

The Transformer made three major shifts:
- Self-attention replaces recurrence
- Parallel computation
- Scalable building blocks

see also
- [Let's build GPT: from scratch, in code, spelled out.](https://www.youtube.com/watch?v=kCc8FmEb1nY)
	- [Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE)
    	- [tiktokenizer]( https://tiktokenizer.vercel.app) - online syntax coloring token extraction
        - [Byte Pair algorithm](https://en.wikipedia.org/wiki/Byte_pair_encoding) - identify most used pairs in a sequence
	- [Let's reproduce GPT-2 (124M)](https://www.youtube.com/watch?v=l8pRSuU81PU)
- [	Llama from scratch, or how to implement a paper without crying](https://news.ycombinator.com/item?id=37059479)
- [The Geometry of Truth: Do LLM's Know True and False](https://news.ycombinator.com/item?id=37945961)
- [whisper.cpp](https://github.com/ggerganov/whisper.cpp#whispercpp) - High-performance inference of OpenAI's Whisper automatic speech recognition (ASR) model
- [Attention Wasn't All We Needed](https://news.ycombinator.com/item?id=44075105)
- [	The Q, K, V Matrices](https://news.ycombinator.com/item?id=46523887) - At the core of the attention mechanism in LLMs are three matrices: Query, Key, and Value. These matrices are how transformers actually pay attention to different parts of the input. In this write-up, we will go through the construction of these matrices from the ground up.
	- [HN](https://news.ycombinator.com/item?id=46535549) - Attention is a reinvention of Kernel Smoothing (for what it means?)

# see also
- [Êtes-vous WEIRD? - La chronique d'Albert Moukheiber dans "La dernière"](https://www.youtube.com/watch?v=NAXS8N7JbsU) - ChatGPT est W.E.I.R.D
	- **W**estern
    - **E**ducated
	- **I**ndustrialized
	- **R**ich
	- **D**emocratic
- [AI to replace 2.4 million jobs in the US by 2030, many fewer than other forms of automation](https://www.theregister.com/2023/09/06/generative_ai_jobs_forrester_report/)
- [C++hatGPT & AI Tools' Impact](https://www.youtube.com/watch?v=trGJsOcA4hY) - explores the inner workings of large language models with an eye for leveraging them effectively for coding tasks. 
	- Good art is skill + taste + creativy 
		- With chatGPT skill is out of the table, because it's brought by chatGPT at Human scale
		- taste: chatGPT has some from existing code
		- creativity: chatGPT has some by pattern combination, but not there yet. - see [for future plan](https://youtu.be/zjkBMFhNj_g?feature=shared&t=2105)
	- success stories of using chatGPT : use your taste&creativity + feedback from chatGPT to complete your lack of knowledge of particular techhnology.
		- [UnitTest](https://youtu.be/trGJsOcA4hY?feature=shared&t=2916) - test framework shown in the presentation - chatGPT has no planning, no leaping to unknown, not got to what was not done.
		- chatGDB - when a program failed it tell you why.
- [ChatGPT rêve-t-il de cavaliers électriques ? (Mr Phi)](https://www.youtube.com/watch?v=6D1XIbkm4JE) - ChatGPT3.5 reach 1800ELO playing chess / not just a stochastic parrots.
	- chatGPT 4 is less good, for unkwnown reason.
    - Emergent world representation (like chessboard)
    - game history play a lot in ability to play in a good way
    	- random play history lead to pour play
        - good play history lead to better play
- [La preuve définitive que ChatGPT ne comprend rien (Mr Phi)](https://www.youtube.com/watch?v=_XJsAQsT0Bo) - la chambre chinoise
	- le fonctionnalisme / le computationisme
    	- la seule execution d'un algorithme ne suffit pas a générer de la compréhension - subjectif vs objectif (l'experience de la chambre chinoise) - "la vraie comprehension" ? / la conscience
        - une comprehension objective sans comprehension subjective
	- agrument enormément critiqué (de part et d'autre)
[![caption](https://www.monkeyuser.com/assets/images/2020/191-reverse-turing-test.png)](https://www.monkeyuser.com/2020/reverse-turing-test/)
		- l'homme processeur ne comprend rien,
        - mais le systeme (la chambre chinoise) est le detenteur de la comprehension.
        - l'exceptionalité humaine sans justification (les machines (toutes) ne pensent pas (toujours))
	- prediction fausse de Yann Lecun - le telephone sur la table
    - model entrainée sur des textes - capable de generé des images (via programmes) et dessine un mouton / une licorne.
