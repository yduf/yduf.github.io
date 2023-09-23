---
published: true
title: strstr()
tags: c++ fastware
---
> There's is not 2 way to write this function. The path is very narrow to write the right code. - [Andrei (Code Europe 2023 Closing Keynote)](https://youtu.be/trGJsOcA4hY?feature=shared&t=1472)

Nobody has implemented it in the past 30 years, because it's an intrinsic (because it's not possible to have portable code and compare 4bytes at once), but the code below is the optimal version for the bruteforce method in c++ (it's only 2x time slower than the intrinsic).
only a very few people are able to come to that implementation (0% over 300 interviewed by Andrei, and including himself).

Most other solutions inevitably do more work (save for advanced algorithms, nonportable code)

{% highlight cpp %}
const char* strstr(const char* haystack, const char* needle) {
	for(;; ++haystack) {
		auto h = haystack;
		for( auto n = needle; *h == *n; ++h, ++n) {
        	if( !*n) 
            	return haystack;	// no early retunn performance bug
		}
		if( !*n)		// testing !*haystack is correct but performance bug
        	break;		// using structured loop performance bug	
    }
    
    return nullPtr;
}
{% endhighlight %}



see also
- [Is strstr() Faster Than Other String Matching Algorithms?](https://saturncloud.io/blog/is-strstr-faster-than-other-string-matching-algorithms/) - compare their brute force implementation to strstr and find 20x difference performance, then assume that strstr doesn't do bruteforce and may use Boyer-Moore algorithm (BM) or the Knuth-Morris-Pratt (KMP) algorithm.
- [strstr faster than algorithms?](https://stackoverflow.com/questions/7586990/strstr-faster-than-algorithms)
	-  KMP has good theoretical characteristics in terms of the number of comparisons but in practice it’s slower than the naive search since its operations are more complex. This is known and observed (google link in comment)  - [comment of answer](https://stackoverflow.com/a/7587069/51386)
	- Horspool, KMP et al are optimal at minimizing the number of byte-comparisons. However, that's not the bottleneck on a modern processor. On an x86/64 processor, your string is being loaded into L1 cache in cache-line-width chunks. - [SO](https://stackoverflow.com/a/7857815/51386)