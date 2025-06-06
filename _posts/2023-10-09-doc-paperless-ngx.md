---
published: true
title: Paperless-ngx
tags: doc text docker systemd nas
toc: true
---
> A Clutter-Free Life: Going Paperless with Paperless-ngx - [article](https://nerdyarticles.com/a-clutter-free-life-with-paperless-ngx/) / [HN](https://news.ycombinator.com/item?id=37800951) / [Home](https://docs.paperless-ngx.com/) / [github](https://github.com/paperless-ngx/paperless-ngx) / [local](http://tronaut:8000)

<link rel="shortcut icon" href="https://docs.paperless-ngx.com/assets/favicon.png" type="image/x-icon" />

[![caption](https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards.png#only-light)](https://docs.paperless-ngx.com)

## Troubleshoot
- [Pdf is rotated after consume #3368](https://github.com/paperless-ngx/paperless-ngx/issues/3368)
	- [ [BUG] OCR slightly tilting scanned Document #2201 ](https://github.com/paperless-ngx/paperless-ngx/issues/2201)
- [not all pdf files can be imported successfully]()
	- [ [BUG] PDF gets scrambled while being imported #4016 ](https://github.com/paperless-ngx/paperless-ngx/issues/4016)

## Usage

> Paperless converts your documents from regular PDFs to PDF/A which is a subset of the PDF standard. This subset is designed for long-term storage. - [Over-engineering my document storage system with Paperless-ngx](https://skerritt.blog/how-i-store-physical-documents/)

if a PDF document already contains a layer of text (as it has been OCR'd) it will use that and not OCR the document. If your OCR tool isn't the best it is better to set `PAPERLESS_OCR_MODE=redo`

### [Consume](https://docs.paperless-ngx.com/usage/#usage-recommended-workflow) && [tagging](https://skerritt.blog/how-i-store-physical-documents/#tagging)

- Create an **inbox tag**. This means that all newly consumed documents are assigned the inbox tag and you can then go through all the new documents and update their names, metadata, tags etc.

- Create a **Saved View** which shows on your homepage of new documents so you have a little list.

### [Storage Path](https://docs.paperless-ngx.com/advanced_usage/#storage-paths)

- [File name handling](https://docs.paperless-ngx.com/advanced_usage/#file-name-handling)
- [Physical documents](https://skerritt.blog/how-i-store-physical-documents/#physical-documents)
	- [Barcodes](https://docs.paperless-ngx.com/advanced_usage/#barcodes)

### [Backup](https://docs.paperless-ngx.com/administration/#backup)

[**Managing your own documents also means having to manage the backups of documents.**]((https://skerritt.blog/how-i-store-physical-documents/#backups)
)


### Email sync - TBD 

## [Setup](https://github.com/yduf/ppngx#ppngx-podman--paperless-ngx)

Podman install derived from  [ppngx: Podman + Paperless-ngx](https://github.com/jdoss/ppngx).

{% highlight bash %}
$ podman play kube ./paperless.yaml
or 
$ systemctl --user start paperless.service
{% endhighlight %}

### see also
- [Paperless, paperless-ng, paperless-ngx ... where are we going ...?](https://www.reddit.com/r/selfhosted/comments/100gm61/paperless_paperlessng_paperlessngx_where_are_we/) - paperless-ngx is the only version/fork of paperless that is currently developped.
- [paperless-ngx/docker/compose](https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.sqlite.yml)
- [podman/systemd setup](https://www.reddit.com/r/selfhosted/comments/16z8c9y/comment/k3esxcv/?utm_source=share&utm_medium=web2x&context=3)
- [“Go Green, Go Paperless”
Messages Are Misleading
The Facts About Greenwashing](https://twosidesna.org/wp-content/uploads/sites/16/2021/08/2021-TSNA-Greenwash-Fact-Sheet-FINAL2.pdf)
