---
published: true
tytle: Zobrist Hash
tags: chess hash xor
title: Zobrist Hash
---
> Zobrist Hashing, a technique to transform a board position of arbitrary size into a number of a set length, with an equal distribution over all possible numbers. - [chessprogramming.org](https://www.chessprogramming.org/Zobrist_Hashing) 

[**wikipedia**](https://en.wikipedia.org/wiki/Zobrist_hashing): Zobrist hashing starts by randomly generating bitstrings for each possible element of a board game, i.e. for each combination of a piece and a position... Now any board configuration can be broken up into independent piece/position components, which are mapped to the random bitstrings generated earlier. The final Zobrist hash is computed by combining those bitstrings using bitwise [`XOR`](https://en.wikipedia.org/wiki/Exclusive_or).

## Updating hash
Because of XOR properties, the hash can be _delta_ updated:
- by xoring (out) the bitstring of removed events,
- by xoring (in) the bitstring of new events.
Xoring in/out being the same `XOR` operation, it onlys express the intent.

## [Pseudo code](https://en.wikipedia.org/wiki/Zobrist_hashing)
Example pseudocode for the game of chess
{% highlight cpp %}
constant indices
    white_pawn := 1
    white_rook := 2
    # etc.
    black_king := 12

function init_zobrist():
    # fill a table of random numbers/bitstrings
    table := a 2-d array of size 64×12
    for i from 1 to 64:  # loop over the board, represented as a linear array
        for j from 1 to 12:      # loop over the pieces
            table[i][j] := random_bitstring()

function hash(board):
    h := 0
    for i from 1 to 64:      # loop over the board positions
        if board[i] ≠ empty:
            j := the piece at board[i], as listed in the constant indices, above
            h := h XOR table[i][j]
    return h
{% endhighlight %}

## References
- [An Efficient Work Distribution Method for ParallelBest-First Search](https://jinnaiyuu.github.io/pdf/papers/AAAI-16%20Jinnai-Fukunaga.pdf)
- [Transposition Table and Zobrist Hashing](https://www.adamberent.com/2019/03/02/transposition-table-and-zobrist-hashing/)
- [Zobrist Hashing](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-5-zobrist-hashing/)
- [Correctly Implementing Zobrist Hashing](https://stackoverflow.com/questions/10067514/correctly-implementing-zobrist-hashing)
- [Zobrist Hashing](https://dev.to/larswaechter/zobrist-hashing-72n)
