---
published: true
title: Naming Computer
tags: name gps
---
> Choosing a Name for Your Computer - [HN](https://news.ycombinator.com/item?id=36028410)

If you're going to be naming a lot of computers, it's surprisingly important to pick a naming format that is (1) expandable and (2) trivially parseable. The naming scheme that seems simple when you're in a garage can be constraining when there's too many to track in a spreadsheet.

Alternatives that don't work as well:

* Don't use a fixed-width field anywhere. Google used two-letter cluster names, and when those ran out they discovered that the two-letter assumption had worked its way into every layer of the stack. One of the important core services had `uint16_t cluster` in its wire protocol.

* Don't make up your own cluster names. Don't use names like "northwest" or "east". IATA codes are your friend and you will love them because someone else already decided what they should be and wrote them down.
	- UN/LOCODE may be more appropriate
		- https://en.wikipedia.org/wiki/UN/LOCODE
        - https://unece.org/trade/cefact/unlocode-code-list-country-and-territory

* Don't use fields without delimiters. Being able to say "read digits until the next non-digit" is incredibly useful when writing ad-hoc parsers in shell scripts, because those parsers won't break when you bring up the first datacenter with more than 99 racks. If you tell people not to write hacky ad-hoc parsers in shell scripts, they will (1) do so anyway and (2) not tell you.

* Don't leave off the cluster number. Yes, you only have one cluster in us-west-2 right now, but maybe in five years you'll need to have more than one because you want to run 30,000 EC2 instances there but all your per-cluster infrastructure software falls over at 20,000 instances. Then you can just turn up "pdx2" instead of trying to explain to Hashicorp engineers why you want to run the world's biggest Consul cluster.

* Do not put the production hostnames under a subdomain of your corporate website. If you are ACME LLC then your hostnames should end with `.acme-prod.com` instead of `.prod.acme.com`. The same is true of corporate IT assets like laptops or workstations (`acme-corp.com` -- NEVER `.corp.acme.com`). Why? Browser cookies.
