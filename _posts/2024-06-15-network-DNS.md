---
title: DNS
published: true
tags: network
---
> Why is DNS still hard to learn? - [jvns](https://news.ycombinator.com/item?id=36909427)

- [Useful Tools to Troubleshoot DNS Name Resolution Problems](https://www.tecmint.com/troubleshoot-dns-in-linux/)

Advice from [ChatGPT](https://chatgpt.com/share/a1cca0b9-cfed-4aab-9f78-d903874d0689)

if nslookup works (give an ip).
Check that your gateway (your router is reachable) `curl -v https://github.com`

If this not the case "network is unreachable" error suggests there may be an issue with your network configuration or connectivity. 
I sometimes failed to put the right adress .255 vs .254.

### [DNS leak test](https://www.dnsleaktest.com/what-is-transparent-dns-proxy.html)
- from [\[HN\]](https://news.ycombinator.com/item?id=13037858)

### Alternative DNS
- [CloudFlare](https://blog.cloudflare.com/dns-resolver-1-1-1-1/) - [1.1.1.1](https://1.1.1.1/)

### DNSMask
- [Five Nines with Dnsmasq](https://news.ycombinator.com/item?id=27916548)

- [What domain name to use for your home network](https://news.ycombinator.com/item?id=28192247)


### See also
- [Malaysia started mandating ISPs to redirect DNS queries to local servers ](https://news.ycombinator.com/item?id=41471510)