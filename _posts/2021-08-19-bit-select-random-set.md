---
published: true
title: Random select bit set
tags: bits rand
---
>  You can use [“Select the bit position“](https://graphics.stanford.edu/~seander/bithacks.html) function from the [Bit Twiddling Hacks](https://graphics.stanford.edu/~seander/bithacks.html#SelectPosFromMSBRank) page to select random set bit efficiently. - [SO](https://stackoverflow.com/a/54304770/51386)

{% highlight cpp %}
std::bitset<32> word(0x1028);
unsigned long ulWord = word.to_ulong();    // ulWord == 0x1028

unsigned int bitcnt = word.count();
unsigned int randomSetBitIndex = 63-selectBit(ulWord, random() % bitcnt + 1);
unsigned long randomSetBit = 1 << randomSetBitIndex;
{% endhighlight %}
