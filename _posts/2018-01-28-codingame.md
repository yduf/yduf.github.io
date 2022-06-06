---
title: Codingame
published: true
tags: codingame AI puzzle
---
see also
- [	Games of Coding ](https://github.com/michelpereira/awesome-games-of-coding) / [HN](https://news.ycombinator.com/item?id=13566247) – A curated list of games that teach you a programming language 

## Arena
### External
- [Cg-brutaltester](https://www.codingame.com/forum/t/cg-brutaltester-because-you-love-to-be-brutal/2716) / [github](https://github.com/dreignier/cg-brutaltester)
	- [latest adatper](https://github.com/Akarachudra/brutaltester-spring-challenge-2020/commit/762330b5f559fca3aca0e03998e4b8a3ea7e7edb)
    - older  / [Github](https://github.com/dreignier/cgstats)
    
- [The Game Runner](https://www.codingame.com/playgrounds/25775/codingame-sdk-documentation/game-runner) - The Game Runner lets you run your game locally during developement. It comes with a handy HTML package to watch each game's replay. The parameters you set to the Game Runner will not affect the final contribution.

### using Codingame playground
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

## Merger Tools
- [Merge C++ files into a single source file](https://stackoverflow.com/questions/5995773/merge-c-files-into-a-single-source-file/46373134#46373134)

## Technical details
- [Magus](https://forum.codingame.com/t/public-api-for-statistics-or-other-useful-things/1247/6)
- [API](https://www.codingame.com/forum/t/api-the-place-to-ask-for-improvements-in-cg-api/2514)

# [CodinGame SDK](https://www.codingame.com/playgrounds/25775/codingame-sdk-documentation/introduction)
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
