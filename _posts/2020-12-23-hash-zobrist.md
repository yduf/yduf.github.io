---
published: true
tytle: Zobrist Hash
tags: chess xor hash  search
title: Zobrist Hash
---
> Zobrist Hashing, a technique to transform a board position of arbitrary size into a number of a set length, with an equal distribution over all possible numbers. - [chessprogramming.org](https://www.chessprogramming.org/Zobrist_Hashing) 

The concept is the following:
- identify uniquely each board position through an incrementally computable hash (**Zobrist Hash**)
- use a **transposition table**, so that give same hash you can go back to previously observed state

## Zobrist hash

Zobrist hashing starts by randomly generating bitstrings for each possible element of a board game, i.e. for each combination of a piece and a position... Now any board configuration can be broken up into independent piece/position components, which are mapped to the random bitstrings generated earlier. The final Zobrist hash is computed by combining those bitstrings using bitwise [`XOR`](https://en.wikipedia.org/wiki/Exclusive_or). - [wikipedia](https://en.wikipedia.org/wiki/Zobrist_hashing)

### Updating hash
Because of XOR properties - [(which is commutative and associative)](https://chatgpt.com/share/67221960-dc24-800d-92dc-9c959e42755e), the hash can be _delta_ updated in any order:
- by xoring (out) the bitstring of removed events,
- by xoring (in) the bitstring of new events.
Xoring in/out being the same `XOR` operation, it onlys express the intent.

### [Pseudo code](https://en.wikipedia.org/wiki/Zobrist_hashing)
Example pseudocode for the game of chess
{% highlight python %}
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

## [Transposition table](https://adamberent.com/transposition-table-and-zobrist-hashing/)

When the search encounters a transposition, it is beneficial to 'remember' what was determined the last time the position was examined, rather than redoing the entire search again. For this reason, chess programs have a transposition table, which is a large hash table storing information about positions previously searched, how deeply they were searched, and what we concluded about them. Even if the depth (draft) of the related transposition table entry is not big enough, or does not contain the right bound for a cutoff, a best (or good enough) move from a previous search can improve move ordering, and save search time. This is especially true inside an iterative deepening framework, where one gains valuable table hits from previous iterations.  - [CPW](https://www.chessprogramming.org/Transposition_Table)

### Replacement Schemes
Since your Transposition Table can’t hold all the moves searched in a game you will have to start replacing your entries fairly soon.   In the same time you don’t simply want to replace all entries regardless of their usefulness.  For this reason in the event that I find an entry that is useful (was used in a lookup), I set a Boolean flag Ancient to false, meaning doesn’t replace.  This way you always replace entries that are unused and keep the ones that were historically useful.  To prevent your table from filling up with Ancient nodes from 10 turns ago, the Ancient flag gets set to true for every entry after every search. 

### Table Lookup

The last problem we have to find is how to we quickly search a Zobrist Table.  We can’t just do a for loop.  This would be slow.  The trick is actually in how we store the entries in the first place.  Rather than simply adding an entry in the order we received them we calculate the entry index as follows: 

Table Entry Index =  Hash mod TableSize 

This way when we search the table to see if a certain Hash exists we know there is only one place it could be stored Table[Hash mod TableSize] 

see also
- [Transposition Table and Zobrist Hashing](https://adamberent.com/transposition-table-and-zobrist-hashing/)
- [Transposition tables?](https://stackoverflow.com/questions/20009796/transposition-tables)

### References
- [Zobrist Hashing](https://iq.opengenus.org/zobrist-hashing-game-theory/) - You won't be encountering this algorithm until and unless you are facing a really large board. Some thing like 8x8 (chess) or 16x16 (ultimate tic-tac-toe)
- [An Efficient Work Distribution Method for ParallelBest-First Search](https://jinnaiyuu.github.io/pdf/papers/AAAI-16%20Jinnai-Fukunaga.pdf)
- [Transposition Table and Zobrist Hashing](https://www.adamberent.com/2019/03/02/transposition-table-and-zobrist-hashing/)
- [Zobrist Hashing](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-5-zobrist-hashing/)
- [Correctly Implementing Zobrist Hashing](https://stackoverflow.com/questions/10067514/correctly-implementing-zobrist-hashing)
- [Zobrist Hashing](https://dev.to/larswaechter/zobrist-hashing-72n)

### see also
- [Compressing Chess Moves Even Further, To 3.7 Bits Per Move](https://lichess.org/@/marcusbuffett/blog/compressing-chess-moves-even-further-to-37-bits-per-move/YgugQc42) / [HN](https://news.ycombinator.com/item?id=46554652)