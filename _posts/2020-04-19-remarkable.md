---
published: true
title: reMarkable 2
tags: epaper hardware stylus remarkable
---
> The reMarkable is a paper tablet for those who prefer writing on paper, rather than keyboards. Its remarkably fast paper-white display, Linux based operating system and awesome community make it highly attractive amongst hackers and developers. - [r/RemarkableTablet](https://www.reddit.com/r/RemarkableTablet/)

see also 
- [reMarkable Developper Notes]({% post_url 2021-02-04-remarkable-dev %})
- [reMarkable Hardware]({% post_url 2021-02-05-remarkable-hardware %})

> If you start messing with the device and something doesnt work out, <span style="color:red">**DONT do a FACTORY RESET**</span> - [(1)](https://www.reddit.com/r/RemarkableTablet/comments/kmae1e/if_you_start_messing_with_the_device_and/) / [Bricked](https://www.reddit.com/r/RemarkableTablet/comments/km1mgy/bricked_i_have_my_root_password_but_cant_log_in/)
- [How I bricked then recovered my reMarkable 2](https://operand.ca/2021/09/27/how_i_bricked_then_recovered_my_remarkable_2.html) / [HN](https://news.ycombinator.com/item?id=28671743)

## Tips
- [Wifi icon](https://www.reddit.com/r/RemarkableTablet/comments/jxopfn/wifi_icon/) - Pressing the lower left corner opens the Settings. It's useful to quickly toggle Airplane mode, so you can turn on wifi only when you actually need to sync your documents.
- [Writing through paper](https://www.reddit.com/r/RemarkableTablet/comments/jxc3a5/this_blew_my_mind_today_someone_please_explain/) / [erasing with a coin](https://www.reddit.com/r/RemarkableTablet/comments/jsgry1/so_i_discovered_an_eraser_feature_out_of_the/)
- [Funkey's Jagged Lines Fix](https://github.com/funkey/recept/) / [My Deep Guide](https://www.youtube.com/watch?v=P770-5E-IFs&feature=emb_logo)

## Integration
- [SSH Access](https://remarkablewiki.com/tech/ssh) - [yduf/ssh]({% post_url 2019-04-29-ssh %})
	- The reMarkable uses [dropbear](https://matt.ucc.asn.au/dropbear/dropbear.html) (via busybox) for its ssh server. / [github](https://github.com/mkj/dropbear)
- [Evidlo/remarkable_printer](https://github.com/Evidlo/remarkable_printer) - Print natively to your reMarkable with no extensions or reMarkable cloud.
- [Rocketbook](https://www.reddit.com/r/RemarkableTablet/comments/k0tl0m/remarkablerocket_lol_i_mean_now_i_have/) - using a [Rocketbook template](https://getrocketbook.co.uk/pages/rocketbook-for-free) => Google/Dropbox Integration
- [Remarkable Uploader Android App](https://play.google.com/store/apps/details?id=org.remadroid) / [r/RemarkableTablet](https://www.reddit.com/r/RemarkableTablet/comments/kcfht6/remarkable_uploader_android_app/)

- Share your screen / [project realtime annotations](https://www.reddit.com/r/RemarkableTablet/comments/lxluv7/is_there_any_way_to_project_realtime_annotations/)
	- [rm2canvas](https://github.com/flomlo/rm2canvas) -  html canvas based screencasting server for the reMarkable.
	- [reStream](https://github.com/rien/reStream) - reMarkable screen sharing over SSH. - [now work on reMarkable 2](https://github.com/rien/reStream/issues/28) / [r/RemarkableTablet](https://www.reddit.com/r/RemarkableTablet/comments/kobr55/restream_now_supports_the_remarkable_2/) - remarkable screen can be seen as a webcam.
	- [rMview](https://github.com/bordaigorl/rmview) - is apparently faster (using vnc under the hood)
    - [Share Your Screen Using Live View](https://www.youtube.com/watch?v=x2D3xXnTfGk) - using wifi + cloud + desktop app
    
- SVG Export
	- [Fineliner and highlighter are single path strokes](https://www.reddit.com/r/RemarkableTablet/comments/kvdrbi/fineliner_and_highlighter_are_single_path_strokes/)

- [Use as a Tablet/Mouse]({% post_url 2021-03-21-remarkable-mouse  %})

![caption](https://preview.redd.it/sp0e1a4gaex51.jpg?width=640&
crop=smart&auto=webp&s=de4e46cff9a739175965e561c5f561720660413c)

### Calendar
- [ReCalendar](https://recalendar.me/) / [r/RemarkableTablet](https://www.reddit.com/r/RemarkableTablet/comments/odpl07/recalendar_opensource_highly_customizable/?utm_source=share&utm_medium=web2x&context=3) -   open-source, highly customizable calendar for ReMarkable tablets. Everything is done in your browser.
	- [A quiet endorsement of recalendar.me](https://www.reddit.com/r/RemarkableTablet/comments/vfcddu/a_quiet_endorsement_of_recalendarme/)

## Customization
- [ddvk/remarkable-hacks](https://github.com/ddvk/remarkable-hacks) - various UI/Gesture enhancement.
- [Customizing the Splashscreens](https://remarkablewiki.com/tips/splashscreens) `/usr/share/remarkable`
	- [Neurone/reMarkable](https://github.com/Neurone/reMarkable) - Automatically change your poweroff and suspend screens every 5 minutes / [Customizing the Splashscreens](https://remarkablewiki.com/tips/splashscreens) - doesn't work since 2.5.0.27 upgrade [only on rm1](https://github.com/ddvk/remarkable-hacks/issues/157)
		- could be enhanced to use [suspend event](https://askubuntu.com/questions/226278/run-script-on-wakeup) rather than timer.

### Untested
- Linux access through Nemo/ssh
	- [nick8325/remarkable-fs](https://github.com/nick8325/remarkable-fs) - A FUSE filesystem driver for reMarkable => **not working**

- [bordaigorl/remy](https://github.com/bordaigorl/remy) - a reMarkable tablet manager app
	- can use [Mathpix OCR](https://mathpix.com/ocr) API

- [reMarkable Connection Utility (RCU)](https://www.reddit.com/r/RemarkableTablet/comments/imwov3/remarkable_connection_utility_rcu_is_out_allinone/)
	- [highlighting added PDF annotations](https://www.reddit.com/r/RemarkableTablet/comments/is4x80/wouldnt_it_be_nice_if_highlighting_added_pdf/)
    - [export pdf with layer](https://www.reddit.com/r/RemarkableTablet/comments/jpqsus/export_picture_with_layers/)
- [quality export Drawing](https://www.reddit.com/r/RemarkableTablet/comments/jpuhdo/is_there_no_way_to_export_full_quality_drawings/gbh0ap2/) / [vecteezy](https://www.reddit.com/r/RemarkableTablet/comments/jpy6d5/after_noticing_how_harsh_the_pdf_exports_of_my/)

- [ePUB to PDF conversion on Calibre](https://www.reddit.com/r/RemarkableTablet/comments/kbqxdt/my_setup_for_epub_to_pdf_conversion_on_calibre/)
- [A4 portrait to A5 landscape script](https://www.reddit.com/r/RemarkableTablet/comments/kayu50/a4_portrait_to_a5_landscape_script_linux/)

## [Template customization](https://remarkablewiki.com/tips/templates)

The templates in the list show up in the order they are listed on the json, so if you want to change the order they show up, just change the order they are listed in. - [Tired of trying to find custom templates? Just added a new category in the JSON file!](https://www.reddit.com/r/RemarkableTablet/comments/jr9jn3/tired_of_trying_to_find_custom_templates_just/)

- [How do I change the template for an existing notebook? (all pages at once)](https://www.reddit.com/r/RemarkableTablet/comments/i5gg4b/notebook_template/)

If developing a custom template, the .png file is the image shown when drawing on the remarkable device. The .svg vector file will be used when exporting the template to .pdf via the USB web interface (Enabled under Storage Settings). Both templates must be in the exact resolution of 1404×1872 pixels regardless of whether the template is intended for portrait or landscape mode.

### Ressources
- [Black template](https://www.reddit.com/r/RemarkableTablet/comments/fvubu4/black_template_for_remarkable/)
- [Remarkable Templates](https://rm.ezb.io/)
- [Rocketbook template](https://getrocketbook.co.uk/pages/rocketbook-for-free)
- [Puzzle (Sudoku)](https://krazydad.com/)
- [5 Year journal template](https://www.reddit.com/r/RemarkableTablet/comments/k1ztqr/5_year_journal_template/)

### template synchronisation app
- [reMarkable HyUtilities](https://github.com/moovida/remarkable-hyutilities)
- [Template Helper](https://www.youtube.com/watch?v=Prdgib0hYFc&feature=youtu.be)

### Online Generator
- [Incompetech.com](https://incompetech.com/graphpaper/) - [Export Tips](https://www.reddit.com/r/RemarkableTablet/comments/jee5jg/customizable_template_resource/): When exporting click the 8.5x11 page icon. It will allow custom sizes. For reMarkable templates choose 19.5 width and 26 height (incorrect size for rm2). Change the color to gray for a less imposing template.
- [Online Generator](https://templarian.github.io/remarkable/)

# [Applications](https://github.com/reHackable/awesome-reMarkable#applications)

## [Toltec package]({% post_url 2021-06-25-remarkable-toltec %})
To use graphical app on reMarkable 2 see [Display]({% post_url 2021-06-25-remarkable-display %})

### [Apps](https://toltec-dev.org/stable/)
- [remux](https://github.com/rmkit-dev/rmkit) - Launcher / swipe up on left or right side to activate.
  	- Issue [\[remux\] battery drain](https://github.com/rmkit-dev/rmkit/issues/43)
	- you can put a binary in [`/home/root/apps`](https://github.com/rmkit-dev/rmkit/issues/94#issuecomment-778794274) and remux should list it. make sure it is `chmod +x`
{% highlight bash %}
opkg install remux
{% endhighlight %}

- [chessMarkable](https://github.com/LinusCDE/chessmarkable) - A chess game for the reMarkable tablet writting using the [pleco](https://crates.io/crates/pleco) chess library which is a port of Stockfish.
  
- [Plato](https://github.com/darvin/plato) - reader for PDF, ePUB and CBZ
	- adjustable contrast

- [koreader](https://github.com/koreader/koreader) / [review](https://www.reddit.com/r/RemarkableTablet/comments/ks80ao/koreader_gamechanger_this_completes_the/)
	- [ddvk custom version](https://www.reddit.com/r/RemarkableTablet/comments/kruyme/koreader_working_or_rm2/) / [Home](https://github.com/ddvk/remarkable-autoinstall/tree/master/rm2) - Don't use it together with the rm2fb package from toltec
  
- [rm-video-player](https://github.com/LinusCDE/rm-video-player) - LinusCDE POC

## How to
- [How to move a page from one notebook to another](https://support.remarkable.com/hc/en-us/articles/360002672298-Move-files-and-pages)
	1. Tap the Page overview button, under notebook options.
    1. Select Move in the top right menu.
- [Convert To Text Best Practices](https://www.youtube.com/watch?v=dPrEHADFG1E)
- [Associate A Notebook With A Document](https://www.youtube.com/watch?v=exRHMNzXXIU)
- [Organize And Manage Your Files](https://www.youtube.com/watch?v=jJobc3vBJ0c)
- [Use Read On Remarkable Productively](https://www.youtube.com/watch?v=GR9QnbOaxcc) - chrome extension
- [Send E-Mails](https://www.youtube.com/watch?v=IKSXs9GObDo) - you can't receive email, but you can send.
- [Share Your Screen Using Live View](https://www.youtube.com/watch?v=x2D3xXnTfGk) - using wifi + cloud + desktop app

- [TeXing your handwritten RM notes (with Math formula)](https://www.reddit.com/r/RemarkableTablet/comments/kb87v5/texing_your_handwritten_rm_notes_text/)

## Review 
- [Remarkable 2: Unboxing And First Impressions](https://www.youtube.com/watch?v=ihlhuDsc5-g)
	- [small storage (6.4Gb)](https://youtu.be/wpwbVwfWIKE?t=1439) / No bluetooth
    - exact same system as hardware v1.0
    - [pdf reader not very good](https://www.youtube.com/watch?v=iD5wTA96wNg) as well as epub

## Alternative OS
- [custom kernel](https://github.com/reMarkable/linux/issues/8#issue-736541383)
- [Parabola-rM](http://www.davisr.me/projects/parabola-rm/) can be run as chroot
  	- [Desktop Linux on reMarkable: Xournal, Doom, and more (feat. fast display updates)](https://old.reddit.com/r/RemarkableTablet/comments/gkktxy/desktop_linux_on_remarkable_xournal_doom_and_more/)

### Pen
The stylus communicates wirelessly. The pressure sensitivity is in the stylus itself. The screen ALSO has touch sensitivity for buttons etc, but it's separate tech. see [Wacom EMR](https://www.wacom.com/en-us/for-business/technologies/emr).

### Compatible pen
- [Galaxy Note 9 phone](https://www.reddit.com/r/RemarkableTablet/comments/kc1a3p/fyi_alternate_shortterm_pen/)

### [Software release](https://support.remarkable.com/hc/en-us/sections/115001534689-Software-releases)
- 2.5.0.27 Changes to xochitl
	- suspended.png graphic is loaded at power-up and is not re-loaded until the next powerup.
    - Lamy pen has become inconsistent.
    
### [Security/Confidentiality](https://www.reddit.com/r/RemarkableTablet/comments/kc1b8p/security_question_response/)

### Early price: Total 459€ (vs 597€)
- 1x Book Folio – Polymer weave – Gray: €20
- 1x Marker Plus: €40
- 1x reMarkable 2: €399

- [remarkable-keywriter](https://github.com/dps/remarkable-keywriter)
	- [with a bluetooth keyboard](https://www.reddit.com/r/RemarkableTablet/comments/e8p22h/remarkablekeywriter_with_a_bluetooth_keyboard/)

### Tools
- [ddvk/remarkable2-recovery](https://github.com/ddvk/remarkable2-recovery) - reMarkable 2 Recovery / Unbricking. Tools for recovery (works only under Linux).


## Alternatives
- [Ratta Supernote A5 X](https://youtu.be/ObU8-lxORPg?t=195) / [Best E-Ink Note Taking Reader Devices Of 2021](https://youtu.be/jvPvp5_P0o8?t=710)

- [PineNote](https://www.pine64.org/pinenote/) - **new** but **raw dev**

- [Onyx Boox Max Air (closest)](https://www.youtube.com/watch?v=EdQ5sXTJRMI) / [r/Onyx_Boox](https://www.reddit.com/r/Onyx_Boox/)
- [Onyx Boox Max Lumi](https://www.youtube.com/watch?v=0SIRcxobTnA) / [Home](https://www.boox.com/maxlumi/)
	- [in depth review](https://www.youtube.com/watch?v=B8X7JPdgsh0)
- [Onyx Boox Poke 2 **Color**](https://www.youtube.com/watch?v=aYjsjHHzhD0) / [Home](https://www.boox.com/poke2/)

> This is essentially the state of the market right now, the tradeoff is between a reMarkable which has a much more limited featureset, but what it does, it does really well (consistent and intuitive UX, low latency writing, great palm rejection).
> 
> Then you have the Onyx Boox, which thanks to its Android underpinnings, offers a lot more power in terms of broader functionality, additional apps and document support, a lot of configurability, and a somewhat familiar interface for Android users. When you spread the peanut butter over a wider surface, it's thinner throughout, and so along with that broader functionality is a lot more inconsistent (and frankly, insane UX), UX that is clear it's built for dual Chinese and Intl markets with random instances of Chinese hardcoded to menus, and the list goes on. - [r/Onyx_Boox](https://www.reddit.com/r/Onyx_Boox/comments/kaegqd/i_bought_a_boox_note_to_take_notes_and_annotate/gf9wybo/?utm_source=reddit&utm_medium=web2x&context=3)
