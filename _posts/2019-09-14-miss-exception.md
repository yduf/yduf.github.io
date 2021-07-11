---
published: true
title: Misunderstanding Exceptions
tags: error-handling lang java exception c++
---
> It is funny how people think that the important thing about exceptions is handling them. That is not the important thing about exceptions. In a well-written application there's a ratio of ten to one, in my opinion, of try finally to try catch. - [Anders Hejlsberg](https://www.artima.com/intv/handcuffs2.html), designer of Turbo Pascal, Delphi, and C# 

found on [apenwarr](https://apenwarr.ca/log/20070823)

This apply particulariy to Java checked exception, and is amplified when using lambda:
- [The Trouble with Checked Exceptions](https://www.artima.com/intv/handcuffs.html)
- [Exceptions in Java 8 Lambda Expressions](https://www.baeldung.com/java-lambda-exceptions)
	- [Sneakily Throwing Exceptions in Lambda Expressions in Java](https://4comprehension.com/sneakily-throwing-exceptions-in-lambda-expressions-in-java/)
- [How to Handle Checked Exceptions With Lambda Expression](https://dzone.com/articles/how-to-handle-checked-exception-in-lambda-expressi)
