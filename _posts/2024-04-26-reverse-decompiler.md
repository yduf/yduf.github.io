---
title: De-compiler (REA)
tags: LLM reverse compiler decompiler ghidra blog-code project
toc: true
---
> Decompiling Binary Code with LLM - [ Reverse Engineer Anything (REA) Explained: The Software Industry Will Never Be the Same ](https://www.youtube.com/watch?v=gjCBASA-1as) / [github](https://github.com/morluto/rea#rea-reverse-engineer-anything)

- [ /reverse-engineer-anything (REA) expliqué en 4 minutes ](https://www.youtube.com/watch?v=lczZBPO6ITk)
- [ReVa - Ghidra MCP Server for AI-Powered Reverse Engineering](https://github.com/cyberkaida/reverse-engineering-assistant?tab=readme-ov-file#reva---ghidra-mcp-server-for-ai-powered-reverse-engineering)

**see also**
- [Decompiling a Nintendo 64 Game in 84 Days](https://blog.chrislewis.au/decompiling-a-nintendo-64-game-in-84-days/) / [HN](https://news.ycombinator.com/item?id=49466006) -  the original Snowboard Kids is now 100% decompiled! This means that all functions1 have matching C implementations that, when compiled, produce identical machine code to the original game.
- [	LLM4Decompile](https://github.com/albertan017/LLM4Decompile?tab=readme-ov-file#llm4decompile) / [HN](https://news.ycombinator.com/item?id=39733275)

# [How Rea Works  ⮺](https://github.com/morluto/rea#how-rea-works)

<div class="encart green" markdown="1">
**Which agents can use REA?**
Any agent that supports local MCP servers. Setup configures the supported agents; other clients can use [manual MCP registration](https://github.com/morluto/rea/blob/main/docs/installation.md#mcp-registry).

</div>

Your agent calls REA through MCP to inspect the target and trace relevant code. REA returns findings with their evidence. The agent uses them to ask follow-up questions, explain the behavior, or write and test an implementation. CLI commands use the same workflows.

[![diagram](https://github.com/morluto/rea/raw/main/website/public/assets/figures/rea-investigation-flow.svg)](https://github.com/morluto/rea#how-rea-works)


# REA Setup 📥 🚧 

<div class="encart orange" markdown="1">
How to setup with cline or OpenFox?
</div>

```bash
$ npx rea-agents setup
# select agent or none => then continue
# install skills
```

**Register the MCP server manually**

```bash
# get version installed
$ npm view rea-agents dist-tags.latest
6.5.0
```

Use it in MCP definition
```json
{
  "mcpServers": {
    "rea": {
      "command": "npx",
      "args": [
        "-y",
        "rea-agents@6.5.0",
        "mcp"
      ]
    }
  }
}
```



## Cline vs. Cursor vs. OpenFox

| Feature                    | Cline                                  | Cursor                               | OpenFox                    |
| -------------------------- | -------------------------------------- | ------------------------------------ | -------------------------- |
| MCP integration            | Native                                 | Native                               | Depends on build           |
| Standard `SKILL.md` skills | Supported                              | Supported                            | Must verify                |
| REA MCP access             | Manual setup if not directly supported | REA-supported setup                  | Manual setup if compatible |
| REA workflow instructions  | Install skill                          | Install skill or use supported setup | Depends on skill discovery |

### Cline



## Tools

- [Ghidra 🐉]({% post_url 2020-11-07-reverse-ghidra %})

# Java

More modern choices are [JADX](https://github.com/skylot/jadx) or [Vineflower](https://github.com/Vineflower/vineflower). - [HN](https://news.ycombinator.com/item?id=46016579)

# see also
- [OpenAI is good at unminifying code](https://news.ycombinator.com/item?id=41389185)

[![caption](https://github.com/albertan017/LLM4Decompile/raw/main/samples/pipeline.png)](https://github.com/albertan017/LLM4Decompile?tab=readme-ov-file#llm4decompile)
