---
published: true
title: LilyPond
tags: music write guitar tab
---
> LilyPond is a music engraving program, devoted to producing the highest-quality sheet music possible - [lilypond.org](http://lilypond.org/)

- [Front-end Applications](http://lilypond.org/easier-editing.html)
	- [Frescobaldi](https://www.frescobaldi.org/) - sheet music text editor.
    - [VSLilyPond](https://github.com/lhl2617/VSLilyPond) - [Music IDE: Lilypond in Visual Studio Code](https://blog.anonymous-function.net/2017/10/24/music-ide-lilypond-in-visual-studio-code/)
    - [online](https://www.hacklily.org/)
    - [Denemo](http://denemo.org/)
    
 - [TuxGuitar](http://tuxguitar.com.ar/) - easier edit for Tabs
 	- [Exporting tabs from TuxGuitar to Lilypond](https://music.stackexchange.com/questions/101453/exporting-tabs-from-tuxguitar-to-lilypond) - and [fixing them](https://piware.de/post/2018-09-16-gavis-song/) with [convert-ly](https://lilypond.org/doc/v2.18/Documentation/usage/updating-files-with-convert_002dly.en.html)
{% highlight bash %}
convert-ly tuxguitar_export.ly > converted.ly
{% endhighlight %}

## Doc
- [intro](https://lilypond.org/website/text-input.html)
	- Notes are encoded with letters and numbers. 
    - Alterations are made with different names: add -`is` for sharp, and -`es` for flat.
    - enclose pitches in `< >` for chords
    - Special commands are entered with backslashes.
- [tutorial](http://lilypond.org/doc/v2.22/Documentation/learning/simple-notation)
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

## [Aternative](http://linuxmao.org/Le+coin+des+guitaristes)

![caption](http://lilypond.org/pictures/bwv861-lilypond.png)
