---
published: true
title: LilyPond (Music sheet)
tags: music write guitar tab drums vscode
---
> LilyPond is a music engraving program, devoted to producing the highest-quality sheet music possible - [lilypond.org](http://lilypond.org/)

![caption](http://lilypond.org/pictures/bwv861-lilypond.png)


## Install / [online](https://www.hacklily.org/)

### [Front-end Applications](http://lilypond.org/easier-editing.html)
- [Denemo](http://denemo.org/)
- [Frescobaldi](https://www.frescobaldi.org/) - sheet music text editor.

### [VSLilyPond](https://github.com/lhl2617/VSLilyPond) - [Music IDE: Lilypond in Visual Studio Code](https://blog.anonymous-function.net/2017/10/24/music-ide-lilypond-in-visual-studio-code/)
- [Setup Guide](https://github.com/lhl2617/VSLilyPond/blob/HEAD/docs/INSTALL.md)

## [Aternatives](http://linuxmao.org/Le+coin+des+guitaristes)
- [TuxGuitar](http://tuxguitar.com.ar/) - easier edit for Tabs
 	- [Exporting tabs from TuxGuitar to Lilypond](https://music.stackexchange.com/questions/101453/exporting-tabs-from-tuxguitar-to-lilypond) - and [fixing them](https://piware.de/post/2018-09-16-gavis-song/) with [convert-ly](https://lilypond.org/doc/v2.18/Documentation/usage/updating-files-with-convert_002dly.en.html)
{% highlight bash %}
convert-ly tuxguitar_export.ly > converted.ly
{% endhighlight %}

- [MuseScore](https://musescore.org/en)

## Doc
- [intro](https://lilypond.org/website/text-input.html)
	- Notes are encoded with letters and numbers. 
    - Alterations are made with different names: add -`is` for sharp, and -`es` for flat.
    - enclose pitches in `< >` for chords
    - Special commands are entered with backslashes.
- [tutorial](http://lilypond.org/doc/v2.22/Documentation/learning/simple-notation)

- [Line breaking](http://lilypond.org/doc/v2.18/Documentation/notation/line-breaking) ` \break`
*
## [Drums](https://lilypond.org/doc/v2.21/Documentation/notation/common-notation-for-percussion)

With the exception of the snare and bass drum, there seems to be no consensus about where individual sound sources should be placed on the staff. - [Customizing Note Layout](https://lilypondcookbook.com/post/74735874981/drum-music-4-customizing-note-layout)

![caption](https://64.media.tumblr.com/ab9a01eb87df7f315a9818b134f59ada/tumblr_inline_p8ane5clc81synrls_500.png){:width="50%"}

- [Drum Music 1 - Getting Started](https://lilypondcookbook.com/post/74312396803/drum-music-1-getting-started)
- [Noting a buzz roll](https://lilypondcookbook.com/post/108846925424/noting-a-buzz-roll)
- [Showing "4/4" instead of "C"](https://lists.gnu.org/archive/html/lilypond-user/2010-11/msg00326.html) -  [`\numericTimeSignature`](http://lilypond.org/doc/v2.12/Documentation/user/lilypond/Displaying-rhythms#Time-signature)
- [Isolated percent repeats](https://lilypond.org/doc/v2.22/Documentation/snippets/repeats#repeats-isolated-percent-repeats)

## Guitar
![caption](https://lilypond.org/doc/v2.22/Documentation/24/lily-9d3837f7.png)


- [Guitar ref](http://lilypond.org/doc/v2.19/Documentation/notation/common-notation-for-fretted-strings.en.html)
	- [tablatures](https://lilypond.org/doc/v2.22/Documentation/notation/common-notation-for-fretted-strings#default-tablatures)
    - [Fret](https://lilypond.org/doc/v2.22/Documentation/notation/common-notation-for-fretted-strings#custom-tablatures)
		- [Fret diagram](https://lsr.di.unimi.it/LSR/Search?q=fret-diagram) / [\fret-diagram](https://lilypond.org/doc/v2.19/Documentation/notation/instrument-specific-markup.en.html)
	- [fingers](https://lilypond.org/doc/v2.19/Documentation/notation/common-notation-for-fretted-strings.en.html#right_002dhand-fingerings)
    - [String Specific Notation](https://lilypondcookbook.com/post/83531286313/fretted-strings-3-string-specific-notation) - hammer - pulloff - bend
	- [chords](https://lilypond.org/doc/v2.22/Documentation/notation/chord-notation)
    	- [chord with different note lengths (half and quarter)](https://music.stackexchange.com/questions/92313/music-engraving-chord-with-different-note-lengths-half-and-quarterlil)
    - [tuplet](https://lilypond.org/doc/v2.19/Documentation/notation/writing-rhythms.en.html#tuplets)
    - [4/4 vs C](https://www.mymusictheory.com/learn-music-theory/reference/347-time-signatures-4-4-or-c)
    - [key signature](https://lilypond.org/doc/v2.18/Documentation/learning/accidentals-and-key-signatures.en.html)
    
- [advanced tutorial](http://www.artsulger.com/2007/03/lilypond-notation-program.html)



