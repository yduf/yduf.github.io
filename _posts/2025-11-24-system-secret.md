---
title: System Secrets
published: true
tags: system secret
---
> while blog didn't talk about doing anything difficult but setting ENVVAR standards, I will point out all replacements are just as frustrating especially when talking about secrets. - [HN](https://news.ycombinator.com/item?id=45571370)

_Anything involving vaults where Application reaches out to specific secret vault like Hashicorp Vault/OpenBao/Secrets Manager quickly becomes massive vendor lock in where replacement is very difficult due to library replacement and makes vault uptime extremely important. This puts Ops in extremely difficult place when it becomes time to upgrade or do maintenance.

_Config files have problem of you have secrets, how do you get them into config file since config files are generally kept in public systems? Most of the time it's some form of either "Template replacement by privileged system before handing it to application" or "Entire Config File gets loaded into secret vault and passed into application". Templating can be error prone and loading entire config files into secret manager is frustrating as well since someone could screw up the load.

_Speaking of config files, since most systems are running containers, and unless you are at Ops discipline company, these config files are never in the right place, it becomes error prone for Ops to screw up the mounting. Also, whatever format you use, JSON/YAML/TOML is ripe for some weird config file bug to emerge like Norway problem in YAML.

_Getting secrets from Kubernetes Secrets API I've seen done but lock in again. I'd strongly not recommend this approach unless you are designing a Kubernetes operator or other such type system.

_I will say I've seen Subprocess thing bite people but I've seen less and less subprocess generation these days. Most teams go with message bus type system instead of sub processing since it's more robust and allows independent scaling.
	
