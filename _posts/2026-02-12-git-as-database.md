---
title: Git as database
tags: git db package rust nix golang
---
> Package managers keep using git as a database, it never works out - [article](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html) / [HN](https://news.ycombinator.com/item?id=46391514)

Using git as a database is a seductive idea. You get version history for free. Pull requests give you a review workflow. It’s distributed by design. GitHub will host it for free. Everyone already knows how to use it.

The same pattern shows up wherever developers try to use git as a database.

Package managers keep falling for this. And it keeps not working out.
- **Cargo** -  By April 2025, 99% of crates.io requests came from Cargo versions where sparse is the default. The git index still exists, still growing by thousands of commits per day, but most users never touch it.
- **Homebrew** - GitHub explicitly asked Homebrew to stop using shallow clones. Updating them was “an extremely expensive operation” due to the tree layout and traffic of homebrew-core and homebrew-cask.
- **CocoaPods** - CocoaPods 1.8 gave up on git entirely for most users. A CDN became the default, serving podspec files directly over HTTP. The migration saved users about a gigabyte of disk space and made pod install nearly instant for new setups.
- **Nixpkgs** - the repository itself is stress-testing GitHub’s infrastructure. In November 2025, GitHub contacted the NixOS team about periodic maintenance jobs failing and causing “issues achieving consensus between replicas.” If unresolved, the repository could have become read-only.
- **vcpkg** - The problem is that vcpkg needs to retrieve specific versions of ports by their git tree hash. When you specify a builtin-baseline in your vcpkg.json (functioning like a lockfile for reproducible builds), vcpkg looks up historical commits to find the exact port versions you need. This only works if you have the full commit history.
- **Go modules** - Grab’s engineering team went from 18 minutes for go get to 12 seconds after deploying a module proxy. That’s not a typo. Eighteen minutes down to twelve seconds.

