---
title: Game Replay
published: true
tags: game-engine
---
> [Developing Your Own Replay System](https://www.gamedeveloper.com/programming/developing-your-own-replay-system) / [SO](https://gamedev.stackexchange.com/questions/6080/how-to-design-a-replay-system)

One approach (low memory)
- your game has to be deterministic.
- it records the initial state of the game systems on the first frame, and only the player input during gameplay.
- quantize inputs to lower # of bits. Ie. represent floats within various ranges (eg. [0, 1] or [-1 , 1] range within less bits. Quantized inputs have to be obtained during actual game play too.
- use a single bit to determine whether an input stream has new data. Since some streams won't change frequently, this exploits temporal coherence in the inputs.