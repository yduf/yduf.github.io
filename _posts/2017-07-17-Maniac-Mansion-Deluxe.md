---
published: true
tags: games 8bit adventure
---
## [lucasfan2004](http://www.adventuregamestudio.co.uk/site/games/game/401/)
[Your goal](http://web.archive.org/web/20050629234845/www.lucasfangames.de/games_eng.htm) is to direct a team of three local college students (including Sandy's boyfriend Dave) through the mansion to rescue Sandy. As you explore, you'll meet all the strange inhabitants of the mansion, and you'll discover Dr. Fred's ambition to control the world - one teenage at a time.

![caption](https://www.old-games.com/screenshot/1446-9-maniac-mansion-deluxe.jpg)

To make it work on linux:
- require wine
- download/unzip archive
- create config manually [acsetup.cfg](https://appdb.winehq.org/objectManager.php?sClass=version&iId=9721)

{% highlight cpp %}
[sound]
digiid=-1
midiid=-1
digiwin=1096302880
midiwin=-1
digiindx=0
midiindx=0
digiwinindx=0
midiwinindx=0
[misc]
gamecolordepth=16
defaultres=1
screenres=1
letterbox=0
windowed=0
refresh=0
[language]
translation=English
{% endhighlight %}


- install timidity + freepats (for backgroudn music)
- [run timitidy in background](https://doc.ubuntu-fr.org/tutoriel/wine_et_midi)

{% highlight cpp %}
timidity -iA -B2,8 -Os -EFreverb=0&
{% endhighlight %}


- launch game (can be configured through autexe.run)

- enjoy!

- f5 - to load/save quit (does not work sometimes alt-tab might make it works)

## [solution](http://gamesolutions.efzeven.nl/maniac-mansion-deluxe-walkthrough-lucasfan2004/)

## alternative to wine [ags player on linux](https://github.com/adventuregamestudio/ags/blob/master/debian/README.md)

## voices ?

## Ref
- [old-game.com](https://www.old-games.com/download/1446/maniac-mansion-deluxe)