---
published: true
title: How to print a tree structure?
tags: algorithm  graph tree c++
---
> With Recursion - [SO](https://stackoverflow.com/questions/1649027/how-do-i-print-out-a-tree-structure/8567550#8567550) / [How to print binary tree diagram?](https://stackoverflow.com/questions/4965335/how-to-print-binary-tree-diagram)

{% highlight cpp %}
template<class Node>
void printTree(const Node& tree, const string& indent = "", bool last = true)
{
    cout << indent << "+- " << tree.to_s() << endl;
    auto new_indent = indent + ( last ? "   " : "|  ");

    for (int i = 0; i < tree.child_size(); ++i) {
        bool last = i == (tree.child_size() - 1);
        printTree( tree.childs()[i], new_indent, last);
    }
}
                                          
// call with
printTree( tree);
{% endhighlight %}
                          
Output look likes:                                         
{% highlight cpp %}
+- root
   +- branch-A
   |  +- sibling-X
   |  |  +- grandchild-A
   |  |  +- grandchild-B
   |  +- sibling-Y
   |  |  +- grandchild-C
   |  |  +- grandchild-D
   |  +- sibling-Z
   |     +- grandchild-E
   |     +- grandchild-F
   +- branch-B
      +- sibling-J
      +- sibling-K
{% endhighlight %}
