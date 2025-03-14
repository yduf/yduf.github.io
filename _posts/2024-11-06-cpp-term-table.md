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

Output Example (some issue with color control code)
{% highlight bash %}
## depth 2, beam size 18
## Beam id 183
## depth 2, beam size 18
Nb Player 3
+---------------+---------------+----------------------------+
| initial       | 0             | 1                          |
+---------------+---------------+----------------------------+
| ..ab1...1*C.* | ..ab1...1*... | ..ab1...1*... |
| .X.X0X.X0X.X. | .X.X0X.X0X.X. | .X.X0X.X0X.X.              |
| 12*0011100*21 | 12*0011100*2r | 12*0011100*2r |
| .X0X.X0X.X0X. | .X0X.X0X.X0X. | .X0X.X0X.X0X.              |
| .21.02.20.12. | .21.02.20.12. | .21.02.20.12.              |
| .X.X1X.X1X.X. | .X.X1X.X1X.X. | .X.X1X.X1X.X.              |
| .21.02.20.12. | .21.02.20.12. | .21.02.20.12.              |
| .X0X.X0X.X0X. | .X0X.X0X.X0X. | .X0X.X0X.X0X.              |
| 12*0011100221 | 12*0011100221 | 12*0011100221              |
| .X.X0X.X0XbX. | .X.X0X.X0XbX. | .X.X0X.X0XbX.              |
| ..db1...12... | ..db1...12... | ..db1...12... |
+---------------+---------------+----------------------------+
| 12,0 1|3      | 10,2 4|3      |                            |
| 10,2 5|3      | 2,2 5|3       |                            |
| 2,2 6|3       | 2,8 5|3       |                            |
| 2,8 6|3       | 9,0 7|3       |                            |
| 9,0 8|3       |               |                            |
+---------------+---------------+----------------------------+
|               | WAIT          | WAIT                       |
+---------------+---------------+----------------------------+
| 13.8853       | -985.675      | -985.266                   |
+---------------+---------------+----------------------------+
| WAIT, DOWN,   | WAIT, BWAIT,  |                            |
| RIGHT         | DOWN, BDOWN,  |                            |
|               | RIGHT, BRIGHT |                            |
+---------------+---------------+----------------------------+
k= 2, 129ms, fitness -984.834, depth 3, beam size 108/500
{% endhighlight %}

