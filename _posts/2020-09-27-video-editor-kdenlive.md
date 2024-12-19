---
published: true
title: Video Editor
tags: video editor
---
> Kdenlive is an open source video editor. - [Kdenlive](https://kdenlive.org/en/features/) / [ r/kdenlive ](https://www.reddit.com/r/kdenlive/)

- [Learn Kdenlive in 30 Minutes](https://www.youtube.com/watch?v=zYD0b8LpiQA) - Video Editing Basics

- [Capturing Audio](https://docs.kdenlive.org/en/project_and_asset_management/capturing_audio.html) - You can use Kdenlive to capture audio with a microphone while you are playing your project in the project monitor.
	- Depending on your recording device, this may record stereo audio. You can mix it down to mono using the Audio effect [Copy Channels to Stereo](https://docs.kdenlive.org/en/effects_and_filters/audio_effects/channels/copy_channels_to_stereo.html).

- Can do screen grab as well.

- Markers & Guides
	- [Markers](https://docs.kdenlive.org/en/cutting_and_assembling/markers.html) can be used for certain points in a clip that are important.
    - [Guides](https://docs.kdenlive.org/en/cutting_and_assembling/guides.html#guides) - Guides can be used to define regions for rendering
    
- [Sequence](https://www.youtube.com/watch?v=fWaGG8xY51M)
	- [BUG: No audio from sequence when created from clips in main timeline ](https://www.reddit.com/r/kdenlive/comments/1b2pifa/bug_no_audio_from_sequence_when_created_from/) - just reinsert them in the main sequence

### Troubleshooting
- [Audio recording not working ](https://www.reddit.com/r/kdenlive/comments/gy4pi8/audio_recording_not_working/)
	- `$ sudo apt install libqt5multimedia5-plugins`
    
    
- opening existing project is crashing
=> try removing preview folder in kdenlive directory

Try using an [older version without the bug](https://www.reddit.com/r/kdenlive/comments/1gilu7a/kdenlive_always_crashes_while_opening_a_project/)
- [24.8](https://download.kde.org/stable/kdenlive/24.08/linux/) - 24.08.1 is more stable
- [previous release](https://download.kde.org/Attic/kdenlive/)

### Atlernatives
- [DaVinci Resolve 18]({% post_url 2023-07-01-video-davinci %}) / [HN](https://news.ycombinator.com/item?id=31142560) - For a small 30-second clip I like the more approachable, simple workflow of Kdenlive but holiday videos with a hundred or more cuts work much better with Davinci for me.
- [OpenShot](https://www.openshot.org/) - Multiplatorm
- [Teleprompter](https://imaginary.tech/teleprompter/) / [linux Mag](https://www.linux-magazine.com/Issues/2020/237/Imaginary-Teleprompter)
