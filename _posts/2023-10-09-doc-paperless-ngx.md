---
published: true
title: Paperless-ngx
tags: doc text
---
> A Clutter-Free Life: Going Paperless with Paperless-ngx - [article](https://nerdyarticles.com/a-clutter-free-life-with-paperless-ngx/) / [HN](https://news.ycombinator.com/item?id=37800951) / [Home](https://docs.paperless-ngx.com/) / [github](https://github.com/paperless-ngx/paperless-ngx)

## Setup

> Paperless converts your documents from regular PDFs to PDF/A which is a subset of the PDF standard. This subset is designed for long-term storage. - [Over-engineering my document storage system with Paperless-ngx](https://skerritt.blog/how-i-store-physical-documents/)

if a PDF document already contains a layer of text (as it has been OCR'd) it will use that and not OCR the document. If your OCR tool isn't the best it is better to set `PAPERLESS_OCR_MODE=redo`

### Consume & [tagging](https://skerritt.blog/how-i-store-physical-documents/#tagging)

- Create an **inbox tag**. This means that all newly consumed documents are assigned the inbox tag and you can then go through all the new documents and update their names, metadata, tags etc.

- Create a **Saved View** which shows on your homepage of new documents so you have a little list.

### Storage Path - TBD

- [Physical documents](https://skerritt.blog/how-i-store-physical-documents/#physical-documents)

### [Backup](https://skerritt.blog/how-i-store-physical-documents/#backups)

**Managing your own documents also means having to manage the backups of documents.**

### Email sync - TBD 

## Installation - TBD

### [ppngx: Podman + Paperless-ngx](https://github.com/jdoss/ppngx)

`start.sh`  
`podman pod stop paperless` 

see also
- [Paperless, paperless-ng, paperless-ngx ... where are we going ...?](https://www.reddit.com/r/selfhosted/comments/100gm61/paperless_paperlessng_paperlessngx_where_are_we/) - paperless-ngx is the only version/fork of paperless that is currently developped.
- [paperless-ngx/docker/compose](https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.sqlite.yml)
- [podman/systemd setup](https://www.reddit.com/r/selfhosted/comments/16z8c9y/comment/k3esxcv/?utm_source=share&utm_medium=web2x&context=3)

[![caption](https://docs.paperless-ngx.com/assets/screenshots/documents-smallcards.png#only-light)](https://docs.paperless-ngx.com)
