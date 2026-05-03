---
published: true
title: KDenlive (Video Editor) 🎬
tags: video editor renderfarm broadcast
toc: true
---
> Kdenlive is an open source video editor. - [Home](https://kdenlive.org/fr/) / [ r/kdenlive ](https://www.reddit.com/r/kdenlive/)

# [Kdenlive in 30 Minutes ⮺](https://www.youtube.com/watch?v=zYD0b8LpiQA)

Video Editing Basics
- [Change Speed](https://www.youtube.com/watch?v=zYD0b8LpiQA#:~:text=Change%20Speed,-27) - Ctrl+click allow to redimension by changing speed instead of cropping
- [Extract Frame to project](https://docs.kdenlive.org/en/tips_and_tricks/tips_and_tricks/extract_frame_to_project.html)
  - [Freeze Frame](https://docs.kdenlive.org/en/effects_and_filters/video_effects/motion/freeze.html) / [demo](https://www.youtube.com/watch?v=eV3IHCmCYhs)
- [Overlay Clips](https://www.youtube.com/watch?v=zYD0b8LpiQA&t=651s)
  - [Animated Overlay](https://www.youtube.com/watch?v=p6_iuULZ42o)

## Transition
- [method 1](https://www.youtube.com/watch?v=voSkdnoAsZg) - vertical transition
- [method 2](https://www.youtube.com/watch?v=zYD0b8LpiQA&t=797s) - horizontal transition  



- [ I make all my videos using Linux. Here's how. ](https://www.youtube.com/watch?v=PEFqdqRr18E)
  - kdenlive + [obs]({% post_url 2018-02-23-screen-recorder %}) - recommend flathub
  - 2 Audio recording + auto sync audio track
  - auto caption
  - video thumbnail / preview
    - Futura font pipewire
  - Hardware
    - Audio -
    - Photo - as camera Lumix

## [Sequence ⮺](https://www.youtube.com/watch?v=zYD0b8LpiQA&t=1407s)
- create sequence from selection
- creat new sequence

## Title
- [ How to Create Smooth Subtitle Animation - Kdenlive Tutorial ](https://www.youtube.com/watch?v=44ufamHGIgQ)
rus

## Vertical Video
- [ Convert Horizontal Videos To Vertical - Kdenlive Tutorial ](https://www.youtube.com/watch?v=ymJ3jaBmwDY)

## Audio

### [Workflow  ⮺](https://chatgpt.com/share/69ecfc33-0eb0-83eb-a91a-7f282e555e59)

[Simple recommended setup](https://www.reddit.com/r/obs/comments/l6yt0c/best_obs_mic_settings_for_any_mic_obs_filters/)

**In OBS:**
- Noise Gate
- Noise suppression → ON
- Compressor → light
- Limiter → ON

**In Kdenlive:**
- EQ → adjust voice tone
- Normalize loudness → final step

If you had to prioritize:
- Always enable basic cleanup in OBS
- Avoid heavy stylistic processing there (keep it flexible for editing)

see [EasyEffect  ⮺]([title]({% post_url 2026-04-25-audio-easyeffects %}))


- [Capturing Audio](https://docs.kdenlive.org/en/project_and_asset_management/capturing_audio.html) - You can use Kdenlive to capture audio with a microphone while you are playing your project in the project monitor.
	- Depending on your recording device, this may record stereo audio. You can mix it down to mono using the Audio effect [Copy Channels to Stereo](https://docs.kdenlive.org/en/effects_and_filters/audio_effects/channels/copy_channels_to_stereo.html).

**see also**
- [How to add audio effects to your voice in Linux with PipeWire and Carla](https://www.youtube.com/watch?v=JtMSLkolITE)
- [LES FILTRES OBS QUE TU DOIS METTRE SUR TON MICRO](https://www.youtube.com/watch?v=K4U9-yw0qfE)

### Troubleshooting
- [Audio recording not working ](https://www.reddit.com/r/kdenlive/comments/gy4pi8/audio_recording_not_working/)
	- `$ sudo apt install libqt5multimedia5-plugins`
    
    
- opening existing project is crashing
=> try removing preview folder in kdenlive directory

Try using an [older version without the bug](https://www.reddit.com/r/kdenlive/comments/1gilu7a/kdenlive_always_crashes_while_opening_a_project/)
- [24.8](https://download.kde.org/stable/kdenlive/24.08/linux/) - 24.08.1 is more stable
- [previous release](https://download.kde.org/Attic/kdenlive/)


## Video
- Can do screen grab as well.

- Markers & Guides
	- [Markers](https://docs.kdenlive.org/en/cutting_and_assembling/markers.html) can be used for certain points in a clip that are important.
    - [Guides](https://docs.kdenlive.org/en/cutting_and_assembling/guides.html#guides) - Guides can be used to define regions for rendering
    
- [Sequence](https://www.youtube.com/watch?v=fWaGG8xY51M)
	- [BUG: No audio from sequence when created from clips in main timeline ](https://www.reddit.com/r/kdenlive/comments/1b2pifa/bug_no_audio_from_sequence_when_created_from/) - just reinsert them in the main sequence


### Renderfarm
- [render notes](https://gist.github.com/glilco/952a54520ec3dc93394c4c80e1d44a2e)
- [Render farm for kdenlive 20.12.1 ](https://www.reddit.com/r/kdenlive/comments/l1ucks/render_farm_for_kdenlive_20121/)

### Atlernatives
- [DaVinci Resolve 18]({% post_url 2023-07-01-video-davinci %}) / [HN](https://news.ycombinator.com/item?id=31142560) - For a small 30-second clip I like the more approachable, simple workflow of Kdenlive but holiday videos with a hundred or more cuts work much better with Davinci for me.
- [OpenShot](https://www.openshot.org/) - Multiplatorm
- [Teleprompter](https://imaginary.tech/teleprompter/) / [linux Mag](https://www.linux-magazine.com/Issues/2020/237/Imaginary-Teleprompter)
