---
published: true
title: Reversing Lua
tags: reverse lua
---
> Lua is a lightweight embeddable scripting language that is commonly used in a variety of applications. Because Lua has C bindings, it is very easy to embed. As a result of this, Lua is widely used in many applications(especially games). - [Reversing Lua’s C API](https://colton1skees.github.io/posts/LuaReversal.html) / [r/lua](https://www.reddit.com/r/lua/comments/p1fj4t/decompiling_lua_files/)

[First bytes of the compiled Lua file tell the version where the script was compiled in.](https://stackoverflow.com/questions/64943979/how-to-decompile-a-lua-file)
The Lua bytecode is not stable between versions, you'll need to know which version of Lua they were compiled against.

- [LuaDec](https://github.com/viruscamp/luadec) - a Lua decompiler for lua 5.1 , and experimental for lua 5.2 and 5.3.
- [unluac ](https://sourceforge.net/projects/unluac/) -  a decompiler for Lua 5.0 through 5.4. It runs on Lua chunks that have been compiled with the standard Lua compiler. It requires that debugging information has not been stripped from the chunk.