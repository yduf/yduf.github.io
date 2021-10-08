---
published: true
title: 64bits integer value (sqlite)
tags: sqlite 64bits
---
> Be careful when you need to store large numbers in SQLite. - [SQLite, 64-bit integers, and the impossible number](http://jakegoulding.com/blog/2011/02/06/sqlite-64-bit-integers/)

SQLite is pretty straight-forward about this. From the [datatype reference](https://www.sqlite.org/datatype3.html) in SQLite (emphasis mine):

- INTEGER. The value is a **signed** integer, stored in 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value.

That is, you can only store values from -2^63 to 2^63-1.
What does SQLite do for a value outside of this range? As we saw earlier, it switches over into floating point.

Signed 64bits:  
[ -9223372036854775808 (-2^63), 9223372036854775807 (2^63-1)]

Unsigned 64bits:  
[ 0, 18446744073709551615 (2^64-1)]

### Note
you can query the underlying type use for storage

{% highlight sql %}
INSERT INTO file VALUES (18446744073709551615, 9223372036854775807, -9223372036854775808, 9223372036854775808);
SELECT typeof(h1), typeof(h2), typeof(h3) FROM file;
{% endhighlight %}
