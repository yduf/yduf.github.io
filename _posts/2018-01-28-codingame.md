---
title: '# Codingame'
published: true
tags: codingame AI puzzle c++
toc: true
excerpt_separator: ""
---
[![banner](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.i-programmer.info%2Fimages%2Fstories%2FNews%2F2016%2FApril%2FB%2Fsmashcodebanner.jpg&f=1&nofb=1&ipt=ebe0c26fe83ace25dfab3072e748ddd267d433dae2e73b8461babf8b1dd8bd2b)](https://duckduckgo.com/?q=codingame+banner+&iar=images&t=lm&iai=https%3A%2F%2Fwww.i-programmer.info%2Fimages%2Fstories%2FNews%2F2016%2FApril%2FB%2Fsmashcodebanner.jpg)

# Learnings

| Algorithm   | Description |
|------------|------------|
| Random search | Play randomly one or more action and keep the best according to a fitness / heuristic function|
| Genetic algorithm | Generate random sequence, evaluate them, merge them and let evolution pick the best one  |
| [MCTS (Monte Carlo Tree Search)]({% post_url 2018-05-20-montecarlo-mcts-tree-search %}) | Designed for turn-based games. It builds a search tree using random simulations (playouts) to evaluate moves, balancing exploration and exploitation to find strong decisions over time. |
| [Smitsimax]({% post_url 2018-12-14-mcts-smitsimax %})  | An adaptation of MCTS for simultaneous-move games. Instead of assuming alternating turns, it accounts for both players acting at the same time, often modeling uncertainty about the opponent’s choice. |
| [Beam Search]({% post_url 2020-05-21-beam-search %}) | A heuristic search algorithm that explores a limited set (beam width) of the most promising nodes at each depth. It focuses on deep exploration of likely good paths, with less emphasis on modeling or anticipating opponent strategies. |

**see also**
- [	Games of Coding ](https://github.com/michelpereira/awesome-games-of-coding) / [HN](https://news.ycombinator.com/item?id=13566247) – A curated list of games that teach you a programming language 

# HW Limits
> Your program is compiled and run in a Linux environment on a _64bit_ multi-core architecture. - [Environment/lang](https://www.codingame.com/faq)

- 1 cpu
- Memory limits is 768MB - [forum](https://forum.codingame.com/t/killed-on-c-memory-reservations/140640/77)
- source code is 100k characters

# [C++ flags ⮺](https://forum.codingame.com/t/languages-update/1574/264)  (2024-09-25)

<div class="encart orange" markdown="1">
<span style="color:red">**SIGSEGV will often been seen as Timeout by the Codingame engine (without any clue given).**</span>  
see [Stacktrace]({% post_url 2022-12-08-cpp-stacktrace %}) - for a quick Signal handler that could help diagnosing this situation.
</div>

[**compiler**](https://www.codingame.com/playgrounds/40701/help-center/languages-versions): g++ 11.2.0 mode C++20  
**flags**: -std=gnu++17 -Werror=return-type -g -pthread  
**libraries**: -lm -lpthread -ldl -lcrypt  

[**Optimization trick**](https://www.codingame.com/forum/t/c-and-the-o3-compilation-flag/1670/15)

<details markdown="1"><summary>#pragma GCC</summary>
{% highlight cpp %}
// trigger optimisation from source file
#pragma GCC optimize("O3")
#pragma GCC optimize("inline")
#pragma GCC optimize("omit-frame-pointer")
#pragma GCC optimize("unroll-loops") //Optimization flags

#pragma GCC optimize("Ofast")

#pragma GCC option("arch=native","tune=native","no-zero-upper") //Enable AVX
#pragma GCC target("avx")  //Enable AVX
#pragma GCC target "bmi2"
#include <x86intrin.h> //AVX/SSE Extensions
{% endhighlight %}
</details>

# Ruby 3.1.2  (2024-09-25)


# Arena

- [psyleague](https://github.com/FakePsyho/psyleague?tab=readme-ov-file#main-features) - cmd-line league system for bot contests.
	- recommended by smits

## Referee

For Legacy games:
- [codinGame](https://github.com/SpiritusSancti5/codinGame/tree/master/Referees) - These are the actual codingame referees, written by CG staff.
- [eulerscheZah](https://github.com/eulerscheZahl/RefereeCollection) -  unofficial collection of referee

[**CSB / Mad Pod**]({% post_url 2017-12-10-CG-coder-strike-back %})  
- [Agade Arena](https://github.com/Agade09/CSB-Runner-Arena)
- [loicmarie](https://github.com/loicmarie/cg-csb-referee-cpp) - Referee for the CodinGame contest Coders Strike Back, written in CPP

# External Playground
- [Cg-brutaltester](https://www.codingame.com/forum/t/cg-brutaltester-because-you-love-to-be-brutal/2716) / [github](https://github.com/dreignier/cg-brutaltester)
	- [latest adatper](https://github.com/Akarachudra/brutaltester-spring-challenge-2020/commit/762330b5f559fca3aca0e03998e4b8a3ea7e7edb)
    - older  / [Github](https://github.com/dreignier/cgstats)
    
- [The Game Runner](https://www.codingame.com/playgrounds/25775/codingame-sdk-documentation/game-runner) - The Game Runner lets you run your game locally during developement. It comes with a handy HTML package to watch each game's replay. The parameters you set to the Game Runner will not affect the final contribution.

# Using Codingame playground
- [CG Benchmark](https://github.com/s-vivien/CGBenchmark#cg-benchmark) - A benchmark tool for CodinGame:
    - don't need to have your browser open
    - you can queue several codes to run big fat batches of games and compare results easily.

- [CG Spunk](https://www.codingame.com/forum/t/introducing-cg-spunk/1895) / [Github](https://github.com/danBhentschel/CGSpunk) 

## Last Battle history
- [CG stats](http://cgstats.magusgeek.com/app)
- [Using match history](https://www.codingame.com/playgrounds/53705/contest-tools-and-workflow/introduction) - We will explore the CodinGame API to understand how to download replays. Then we will parse them to extract the data we are looking for. We will then feed it into our bot to debug a specific action.

## Codingame API
- [Contest tools and workflow](https://www.codingame.com/playgrounds/53705/contest-tools-and-workflow)

- [How to download the JSON files used to store replays on CG?](https://www.codingame.com/forum/t/how-to-download-the-json-files-used-to-store-replays-on-cg/2894)

## Firefox Extension
- [CG Enhancer](https://www.codingame.com/forum/t/cg-enhancer/59441) / [github](https://github.com/Azkellas/cgenhancer) - enhance Codingame IDE

- [CG Local](https://www.codingame.com/forum/t/cg-local/10359) -  basically a copy of CG Sync that works with both Chrome and Firefox, and instead of a Chrome App it uses a Java application to watch the selected file for changes. Besides that, it also makes it easier to work in different files for different puzzles and is completely open-source. / [github](https://github.com/jmerle/cg-local-app)
	- [issues & workaround](https://forum.codingame.com/t/cg-local/10359/6?u=yduf)
    
## Chrome Extension
- [sync](https://www.codingame.com/forum/t/codingame-sync-beta/614/58)

## [Merger Tools ⮺](https://github.com/yduf/CG-rubyprep?tab=readme-ov-file#c-include-files-packer)

<div class="encart blue" markdown="1">
Use [my own](https://github.com/yduf/CG-rubyprep?tab=readme-ov-file#c-include-files-packer).
</div>


- [Merge C++ files into a single source file](https://stackoverflow.com/questions/5995773/merge-c-files-into-a-single-source-file/46373134#46373134)

# Cheating
- [CG-Send-Binary](https://github.com/Agade09/CG-Send-Binary?tab=readme-ov-file#cg-send-binary) -  Flagged as a cheat during contests since Wondev Woman


# Technical details
- [Magus](https://forum.codingame.com/t/public-api-for-statistics-or-other-useful-things/1247/6)
- [API](https://www.codingame.com/forum/t/api-the-place-to-ask-for-improvements-in-cg-api/2514)

# [CodinGame SDK ⮺](https://www.codingame.com/playgrounds/25775/codingame-sdk-documentation/introduction)
The CodinGame SDK is a Java project that allows you to write programming games for CodinGame.

# Maybe old
[Rest API](http://forum.canardpc.com/threads/103495-Codingame-La-programmation-hant%C3%A9e-Concours-de-fant%C3%B4mes-dans-la-console-fin-Fevrier?s=d6a666218d62c51b4465647a91f8cdc5&p=10273198&viewfull=1#post10273198)

liste des agents des participants au concours:
`curl -H "Content-Type: application/json" https://www.codingame.com/services/LeaderboardsRemoteService/getChallengeLeaderboard --data '["hypersonic",null,"global"]'`

Ca renvoie une liste JSON de tous les participants, et chaque participant a un champ "agentId".

Pour chaque "agentId", on peut récupérer toutes ses batailles, par exemple pour l'agent 707853:

`curl -H "Content-Type: application/json" https://www.codingame.com/services/gamesPlayersRankingRemoteService/findLastBattlesAndProgressByAgentId --data '[707853,null]'`

Ca renvoie encore une autre liste JSON avec toutes les parties jouées, et le résultat. (Y'a aussi la partie à jouer dans le replay de la page mais on s'en fout). Chaque partie a un champ "gameId".

Pour chaque "gameId", on peut enfin récupérer le déroulement complet, avec stdin et stdout de tous les joueurs. C'est ce qui est envoyé au player web, donc le format est peut être pas 100% équivalent au format d'entrée / sortie de l'agent, mais toutes les infos sont là à ce que j'ai pu voir sur les challenges précédents. Par exemple pour la partie 136874087:

`curl -H "Content-Type: application/json" https://www.codingame.com/services/gameResultRemoteService/findByGameId --data '[136874087,null]'`

Pour la dernière vu que le format des données change pour chaque challenge, il faut faire un parser spécifique à chaque fois, et je n'en ai pas fait.
