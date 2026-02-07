---
title: LM Studio
published: true
tags: LLM ghidra reverse
toc: true
---
> a desktop application that allows you to run large language models (LLMs) locally on your computer, without needing an internet connection or cloud services. - [Home](https://lmstudio.ai/) / [chatGPT](https://chatgpt.com/share/69271a38-1cc0-800d-961a-0f7530e249bb)

- [LM Studio 0.4 ](https://news.ycombinator.com/item?id=46799477)

## [Performance](https://chatgpt.com/share/693d9f4e-6920-800d-a207-ca84d8263e1e)
They can be accessed and tailored by model

**Memory**
- context length may have huge impact on memory consumption if going above 8k

**Performance**
- cpu thread can be choose on custom model preference
- as well as GPU Layer offloading


## Server
On prompt UI (green term):
- enable Server 🟢 (Status running) and configure Server settings
	- Serve on Local Network 🟠 -> allow remote access
    - Server port 1234
    - Make sure a model is loaded
    
Test it works

{% highlight bash %}
$ curl http://yves-lab:1234/v1/chat/completions \
                       -H "Content-Type: application/json" \
                       -d '{
                     "model": "qwen3",
                     "messages": [
                       {"role": "user", "content": "Hello, respond with one word"}
                     ]
                   }'
{% endhighlight %}
        
                                       
<details>
    <summary>answer</summary>
    <p>
{% highlight bash %}
{
  "id": "chatcmpl-udbu6gq8kshmddzqmhcrwq",
  "object": "chat.completion",
  "created": 1765637850,
  "model": "qwen/qwen3-vl-8b",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello",
        "reasoning_content": "",
        "tool_calls": []
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 14,
    "completion_tokens": 2,
    "total_tokens": 16
  },
  "stats": {},
  "system_fingerprint": "qwen/qwen3-vl-8b"
}⏎ 
{% endhighlight %}
  </p>
</details>

## [Tools](https://lmstudio.ai/docs/developer/openai-compat/tools)

Enable LLMs to interact with external functions and APIs.

## [Skills](https://news.ycombinator.com/item?id=46253591)

LLMs need prompts. Prompts can get very big very quickly. The so called "skills" are simply a mechanism to extend the prompt dynamically. 

## Models

### [Devstral 2](https://lmstudio.ai/models/devstral-2)

Second-generation Devstral for agentic coding. Built for tool use to explore codebases, edit multiple files, and power software engineering agents with newly added vision support.

see also
- [	The unexpected effectiveness of one-shot decompilation with Claude](https://news.ycombinator.com/item?id=46080498)

# Plan then Execute
- [Implement plan-then-execute strategy](https://chatgpt.com/share/692984d0-9c00-800d-a913-fb8c3ee328f1)
- [Replicating Cursor’s Agent Mode with E2B and AgentKit](https://e2b.dev/blog/replicating-cursors-agent-mode-with-e2b-and-agentkit)


[![localworkflow](https://research.aimultiple.com/wp-content/uploads/2025/11/AI-agents-landscape-22-1.jpg.webp)](https://research.aimultiple.com/local-ai-agent/?utm_source=chatgpt.com)

## LangFuse
- [Langfuse LM Studio integration](https://chatgpt.com/share/692ab6ce-a274-800d-a00e-fd1db9253e13) - helps you trace, monitor, debug, evaluate, and analyze what your LLM-based application (or agent system) does.
	- [LocalAGI vs LangFuse](https://chatgpt.com/share/692abcf2-4df4-800d-9b50-46141e1ee6ab) - 
    


## Goose
- [Goose](https://research.aimultiple.com/local-ai-agent/?utm_source=chatgpt.com) - an open-source AI agent designed primarily to help developers by automating engineering tasks: generating code, executing commands, debugging, running workflows, integrating with tools (e.g. version control, APIs, file system), etc. 

## LocalAGI
- [LocalAGI](https://www.linkedin.com/pulse/localagi-create-run-ai-agents-locally-without-writing-palethorpe-wpqve/) / [github](https://github.com/mudler/LocalAGI) - a self-hostable agent orchestration platform. It lets you build & run autonomous / semi-autonomous “agents” (or even teams of agents) on your own hardware (CPU or GPU), without needing cloud APIs or external services.
	- [User Guide](https://deepwiki.com/mudler/LocalAGI/4-user-guide#user-guide) - using LocalAGI, a self-hosted AI agent platform that runs 100% locally. It covers creating and managing agents, working with agent groups, interacting with agents, monitoring agent activities, and using browser agents. 

# see also
- [Dolphin LLM](https://chatgpt.com/share/69271a59-6e24-800d-89f0-a4e516fabb41)
	- [Top 10 Uncensored LLMs You Can Try Now](https://anakin.ai/blog/uncensored-llms/)
- [What is Ollama](https://chatgpt.com/share/69271a8f-e8c4-800d-b648-55c924457f29)
- [Build Ghidra agent](https://chatgpt.com/share/692ac141-c734-800d-85f2-a2965ed30618)
- [Heretic](https://news.ycombinator.com/item?id=45945587) - Automatic censorship removal for language models
- [Gemma 3 270M From Scratch](https://news.ycombinator.com/item?id=44962059)
- [The security paradox of local LLMs ](https://quesma.com/blog/local-llms-security-paradox/) / [HN](https://news.ycombinator.com/item?id=45668264)
