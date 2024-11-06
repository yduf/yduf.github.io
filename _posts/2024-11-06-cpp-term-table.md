---
title: Tabulate
published: true
tags: c++ single-header term table format
---
> Table Maker for Modern C++ - [github](https://github.com/p-ranav/tabulate/tree/master)

see also
- [C++ Table Printing Libraries](https://chatgpt.com/share/672b5f62-72a8-800d-9839-8d3692fb4d23)

To generate row content dynamically, use the Row_t type which behave like a `vector<string>`:
{% highlight cpp %}
Table::Row_t title = {"initial"};

for( int k = 0; k < beam.size(); ++k) {
  title.push_back( to_s(k));

Table table;
table.add_row( title);
{% endhighlight %}