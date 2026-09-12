---
title: "Deepseek Harness 🐋"
tags: agentic-AI harness
---
> [ Qwen3.8 27B: Same Model, Three Harnesses, One Clear Winner ](https://www.youtube.com/watch?v=sSySOPGNdjw&t=1210s) - 1. Deepseek, 2. Pi, 3. Hermes 

# VSCode

- [DeepSeek Harness for VS Code](https://marketplace.visualstudio.com/items?itemName=skymecode.deepseek-harness-for-vscode&utm_source=chatgpt.com)

# Setup

```bash
$ node --expose-internals \
  /home/yves/.npm/_npx/1e7f6d9597241db0/node_modules/@deepseek-ai/dsh/lib/bin.js \
  web --no-open # --no-open prevent opening the page in browser
```

# LM Studio

To use LM Studio with this harness you have to configure a custom adapter.

<div class="encart blue" markdown="1">
**need to put a password in the API key**
It won't be used, but it has to be filled so the harness work.

<pre>
Provider ID:   lmstudio  
Display name:  LM Studio  
Base URL:      http://yves-lab:1234/v1  
API protocol:  openai-completions  
API key:       generate a password
</pre>
</div>

