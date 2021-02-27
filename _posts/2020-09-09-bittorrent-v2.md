---
published: true
title: BitTorrent v2
tags: filesystem tree hash network internet p2p torrent
---
> BitTorrent v2 kick-started with an effort to transition away from SHA-1 as the hash function for pieces, shortly after google announced having produced a collision. Given a new hash function would not be backwards compatible, a few other changes were proposed as well, while we were taking the compatibility hit anyway. This post describes the new features of the BitTorrent v2 protocol. - [BitTorrent v2](https://blog.libtorrent.org/2020/09/bittorrent-v2/) / [HN](https://news.ycombinator.com/item?id=24401999)

## hash trees / per-file hash trees
![caption](https://blog.libtorrent.org/wp-content/uploads/2020/09/merkle-hash-tree.png) <!-- .element height="50%" width="50% ustify-content="left" -->
