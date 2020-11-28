---
published: true
title: reMarkable 2
tags: epaper hardware
---
> The reMarkable is a paper tablet for those who prefer writing on paper, rather than keyboards. Its remarkably fast paper-white display, Linux based operating system and awesome community make it highly attractive amongst hackers and developers. - [r/RemarkableTablet](https://www.reddit.com/r/RemarkableTablet/)

## Tips
- [Wifi icon](https://www.reddit.com/r/RemarkableTablet/comments/jxopfn/wifi_icon/) - Pressing the lower left corner opens the Settings. It's useful to quickly toggle Airplane mode, so you can turn on wifi only when you actually need to sync your documents.
- [Writing through paper](https://www.reddit.com/r/RemarkableTablet/comments/jxc3a5/this_blew_my_mind_today_someone_please_explain/) - The stylus communicates wirelessly. The pressure sensitivity is in the stylus itself. The screen ALSO has touch sensitivity for buttons etc, but it's separate tech. see [Wacom EMR](https://www.wacom.com/en-us/for-business/technologies/emr).

## Integration
- [SSH Access](https://remarkablewiki.com/tech/ssh) - [yduf/ssh]({% post_url 2019-04-29-ssh %})
- [Evidlo/remarkable_printer](https://github.com/Evidlo/remarkable_printer) - Print natively to your reMarkable with no extensions or reMarkable cloud.
- Linux access through Nemo/ssh
	- [nick8325/remarkable-fs](https://github.com/nick8325/remarkable-fs) - A FUSE filesystem driver for reMarkable => **not working**
- [Rocketbook](https://www.reddit.com/r/RemarkableTablet/comments/k0tl0m/remarkablerocket_lol_i_mean_now_i_have/) - using a [Rocketbook template](https://getrocketbook.co.uk/pages/rocketbook-for-free) => Google/Dropbox Integration
- [bordaigorl/remy](https://github.com/bordaigorl/remy) - a reMarkable tablet manager app
	- can use [Mathpix OCR](https://mathpix.com/ocr) API
- [remarkable_mouse](https://github.com/Evidlo/remarkable_mouse)

- [reMarkable Connection Utility (RCU)](https://www.reddit.com/r/RemarkableTablet/comments/imwov3/remarkable_connection_utility_rcu_is_out_allinone/)
	- [highlighting added PDF annotations](https://www.reddit.com/r/RemarkableTablet/comments/is4x80/wouldnt_it_be_nice_if_highlighting_added_pdf/)
    - [export pdf with layer](https://www.reddit.com/r/RemarkableTablet/comments/jpqsus/export_picture_with_layers/)
- [quality export Drawing](https://www.reddit.com/r/RemarkableTablet/comments/jpuhdo/is_there_no_way_to_export_full_quality_drawings/gbh0ap2/) / [vecteezy](https://www.reddit.com/r/RemarkableTablet/comments/jpy6d5/after_noticing_how_harsh_the_pdf_exports_of_my/)



![caption](https://preview.redd.it/sp0e1a4gaex51.jpg?width=640&crop=smart&auto=webp&s=de4e46cff9a739175965e561c5f561720660413c)

## Customization
- [Neurone/reMarkable](https://github.com/Neurone/reMarkable) - Automatically change your poweroff and suspend screens every 5 minutes / [Customizing the Splashscreens](https://remarkablewiki.com/tips/splashscreens)
	- could be enhanced to use [suspend event](https://askubuntu.com/questions/226278/run-script-on-wakeup) rather than timer.
- [ddvk/remarkable-hacks](https://github.com/ddvk/remarkable-hacks) - various UI/Gesture enhancement.

- [evidlo/remarkable_entware](https://github.com/evidlo/remarkable_entware) - a lightweight package manager and software repo for embedded devices. [list of available packages](http://bin.entware.net/armv7sf-k3.2/)

## Template
- [Customizing the Templates](https://remarkablewiki.com/tips/templates)
	- [Tired of trying to find custom templates? Just added a new category in the JSON file!](https://www.reddit.com/r/RemarkableTablet/comments/jr9jn3/tired_of_trying_to_find_custom_templates_just/)
- [Online Generator](https://templarian.github.io/remarkable/)

## [Applications](https://github.com/reHackable/awesome-reMarkable#applications)
- [syncthing](https://github.com/evidlo/remarkable_syncthing) - Syncthing on reMarkable
- [reMarkable_mouse](https://github.com/evidlo/remarkable_mouse) - Use your reMarkable as a graphics tablet.
- [Plato](https://github.com/darvin/plato) ebook reader
- [fingerterm](https://github.com/dixonary/fingerterm-reMarkable) - touch terminal
- [wikipedia](https://github.com/dps/remarkable-wikipedia) offline


## [Hardware (rM2)](https://remarkable.com/store/remarkable-2) 
[Spec](https://remarkable.com/#Specifications)
- 1.2 GHz dual core ARM
- 1 GB LPDDR3 SDRAM
- 8 GB internal storage
- 10.3” monochrome 1872 x 1404 resolution (226 DPI)
- Wi-Fi 2.4GHz and 5GHz
- USB-C
- Accessory port - [Pogo connector](https://www.reddit.com/r/RemarkableTablet/comments/j9g1d5/rm2_with_an_external_keyboard_accessory_port_usage/) - dot on left side is in fact a [host usb connector](https://imgur.com/gallery/TRuN0jc).

### Early price: Total 459€ (vs 597€)
- 1x Book Folio – Polymer weave – Gray: €20
- 1x Marker Plus: €40
- 1x reMarkable 2: €399

- [remarkable-keywriter](https://github.com/dps/remarkable-keywriter)
	- [with a bluetooth keyboard](https://www.reddit.com/r/RemarkableTablet/comments/e8p22h/remarkablekeywriter_with_a_bluetooth_keyboard/)

- [reMarkable 2 sources are published](https://www.reddit.com/r/RemarkableTablet/comments/jp9gq9/remarkable_2_sources_are_published/)
	- [rM2 3rd party apps progress](https://www.reddit.com/r/RemarkableTablet/comments/jp2h4s/rm2_3rd_party_apps_progress/)

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

## [Filesystem / Document format](https://remarkablewiki.com/tech/filesystem)
> You will also notice that there are no human readable filenames and that each “document” has a number of associated files with it, depending on the document type. Human readable information is stored within the .metadata files (described further below). 

- [.lines format](https://plasma.ninja/blog/devices/remarkable/binary/format/2017/12/26/reMarkable-lines-file-format.html)

## Dev / [Awesome reMarkable](https://awesomeopensource.com/project/reHackable/awesome-reMarkable)
- [libremarkable](https://github.com/canselcik/libremarkable) - A Framework for Remarkable Tablet
	- [using with Qt](https://github.com/canselcik/libremarkable/issues/12)
- [Developing for the reMarkable tablet](https://dragly.org/2017/12/01/developing-for-the-remarkable/)

## Alternative OS
- [Parabola-rM](http://www.davisr.me/projects/parabola-rm/)

## Review 
- [Remarkable 2: Unboxing And First Impressions](https://www.youtube.com/watch?v=ihlhuDsc5-g)
	- [small storage (6.4Gb)](https://youtu.be/wpwbVwfWIKE?t=1439) / No bluetooth
    - exact same system as hardware v1.0
    - [pdf reader not very good](https://www.youtube.com/watch?v=iD5wTA96wNg) as well as epub

## Resources
- [HN](https://news.ycombinator.com/item?id=22604597) 
	- [HN](https://news.ycombinator.com/item?id=21040343)
- [remarkable.engineering](https://remarkable.engineering/)
- [remarkablewiki](https://remarkablewiki.com/start)
	- [tips](https://remarkablewiki.com/tips/start)
	- [tech](https://remarkablewiki.com/tech/start)
- [reMarkable2 Teardown](https://fccid.io/2AMK2-RM110/Internal-Photos/Internal-photos-4523960)
- [reMarkable](https://duckpond.ch/nix/bash/2020/01/08/reMarkable.html)

## Tools
- [ddvk/remarkable2-recovery](https://github.com/ddvk/remarkable2-recovery) - reMarkable 2 Recovery / Unbricking. Tools for recovery (works only under Linux).

## Alternatives
- [Onyx Boox Max Air](https://www.youtube.com/watch?v=EdQ5sXTJRMI)
- [Onyx Boox Max Lumi](https://www.youtube.com/watch?v=0SIRcxobTnA) / [Home](https://www.boox.com/maxlumi/)
	- [in depth review](https://www.youtube.com/watch?v=B8X7JPdgsh0)
- [Onyx Boox Poke 2 **Color**](https://www.youtube.com/watch?v=aYjsjHHzhD0) / [Home](https://www.boox.com/poke2/)
