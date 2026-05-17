---
title: DNS
published: true
tags: network home security
toc: true
---
> Why is DNS still hard to learn? - [jvns](https://news.ycombinator.com/item?id=36909427)

# Setup

- [	You can run a DNS server (2025)](https://news.ycombinator.com/item?id=47453738)
	- The ISP's blackhole the IP for some blocked domains. So changing your DNS to 8.8.8.8 will resolve the domain, but the IP won't work. A VPN avoids this, since the traffic goes via the VPN IP. - [HN](https://news.ycombinator.com/item?id=46426560)
	- 
- [Your ISP Is Watching Everything - Fix It With DNS Filtering!](https://www.youtube.com/watch?v=DqJz3lVowCQ)
	- use a thirdparty DNS
    	- nextDNS
    - piHole - dns forwarder
    - run your own dns resolver
    	- unbound + piHoles
    
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
