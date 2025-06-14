---
published: true
title: Treetop (parser)
tags: ruby parser AST
toc: true
---
> Treetop is a Ruby library that allows you to create parsers easily by describing them using a Parsing Expression Grammar (PEG). - [A quick intro](http://thingsaaronmade.com/blog/a-quick-intro-to-writing-a-parser-using-treetop.html) / [github](https://github.com/cjheath/treetop?tab=readme-ov-file#support)

<link rel="shortcut icon" href="https://icon-library.com/images/tree-icon/tree-icon-17.jpg" type="image/x-icon" />

[![treetop logo](https://cjheath.github.io/treetop/images/top_background.png)](https://cjheath.github.io/treetop/)

### see also
- [Visualizing Packrat Parsing](https://dubroy.com/blog/visualizing-packrat-parsing/)
- [Understanding parser combinators: a deep dive - Scott Wlaschin](https://www.youtube.com/watch?v=RDalzi7mhdY)

# [Home](https://github.com/cjheath/treetop?tab=readme-ov-file#support) (still alive)

- performance are good [compared to other](http://blog.absurd.li/2011/02/02/parslet_and_its_friends.html)
- [Performance of parsers: PEG vs LALR(1) or LL(k)](https://stackoverflow.com/questions/11373644/performance-of-parsers-peg-vs-lalr1-or-llk) - PEG parsers can use unlimited lookahead (while maintaining linear parse time on average, via packrat) unlike (default) LL(k), or LR(k) parsers which use limited lookahead, while maintining linear parse time.

## [Tutorials](https://github.com/cjheath/treetop?tab=readme-ov-file#tutorial)

They are 3 kind of objects to implements:
- the Parser itself, by levaring treetop, that where we will have a `parse` method.
- the grammar, which will layout how we will parse and build the tree
- the node extension classes, which is optional, but will allows to customize the AST tree to host pertient information regarding what has been parsed.

### The Parser

It would look like

{% highlight ruby %}
# In file parser.rb
require 'treetop'

# Load our custom syntax node classes so the parser can use them
require_relative 'node_extensions.rb'

class Parser
  
  # Load the Treetop grammar from the 'sexp_parser' file, and create a new
  # instance of that parser as a class variable so we don't have to re-create
  # it every time we need to parse a string
  Treetop.load( 'python3_parser.treetop')
  @@parser = Python3Parser.new
  tree = @@parser.parse("some compliant code") # return -> tree if parsed or nil 
  
end
{% endhighlight %}

### The Grammar

It require a least one rule (the root node), to make the above code work:

{% highlight ruby %}
# python3_parser.treetop
grammar Python3
  rule hello
    'hello chomsky'
  end
end
{% endhighlight %}

### The Nodes

TBD

see also
- [A quick intro](http://thingsaaronmade.com/blog/a-quick-intro-to-writing-a-parser-using-treetop.html) / [github](https://github.com/aarongough/treetop-sexp-parser)

## Doc / 
- [Turning a parse tree into an abstract syntax tree (AST)](https://stackoverflow.com/questions/24209732/turning-a-treetop-parse-tree-into-an-abstract-syntax-tree-ast)
	- [filtering parse tree to get an ast](https://groups.google.com/g/treetop-dev/c/8tzdfWxGY0k/m/YBdQu-hHmVUJ)
	  - [Treetop's Confusing Behavior](https://www.flydata.com/blog/treetops-confusing-behaviors/)
      - [class vs module](https://groups.google.com/g/treetop-dev/c/8tzdfWxGY0k/m/lYpiLh7ZC2QJ)
    	- use rule ( subrule1 / subrule2 ) \<class object\> see [1](https://groups.google.com/g/treetop-dev/c/8tzdfWxGY0k/m/i618WdSTO9sJ)
  		- treetop will inject several definition so using module is more general and adviced, see [2](https://groups.google.com/g/treetop-dev/c/8tzdfWxGY0k/m/dqrimyfUFckJ)

{% highlight ruby %}
rule foo; 	a <A_In_Foo> / b <B_In_Foo>; end

rule a; 	something <A>;	end

rule b;	something_else <B>; end
{% endhighlight %}

In the case where "foo" matches "something_else", the SyntaxNode for "something_else"
will have two mixed-in modules (both "B" and "B_In_Foo"). Use parentheses around a list
of alternates if you want to mix in the same module regardless of which possibility is matched.
  
- [Treetop: Typical Errors](https://whitequark.org/blog/2011/09/08/treetop-typical-errors/)
	- **error reporting à la clang**
    - Matching whitespaces
    - prevent AST squashing: use 1..1
- [Doc](http://cjheath.github.io/treetop/index.html)
  - [Semantic Interpretation](http://cjheath.github.io/treetop/semantic_interpretation.html)
      - Methods Available on [Treetop::Runtime::SyntaxNode](https://github.com/cjheath/treetop/blob/master/lib/treetop/runtime/syntax_node.rb)
      	- **elements** elements of the matched sequence
      - labels: for subexpression, like citrus
  - [Syntactic Recognition](http://cjheath.github.io/treetop/syntactic_recognition.html)
      - c like comment grammar
  - [keywords](https://stackoverflow.com/questions/32373050/treetop-boolean-logic-operations/32490728#32490728)
  	  - [Striping spaces in a SQL parser](https://groups.google.com/g/treetop-dev/c/viXM1S-q5m8/m/qSUjBzStGcEJ)
      - keywords must not be immediately followed by a symbol character. I use negative lookahead for this.
      - The top rule consumes leading whitespace, then almost every rule consumes following whitespace (this is my policy). You should test your grammar with minimum and maximum whitespace.
  - [Advanced Techniques](http://cjheath.github.io/treetop/pitfalls_and_advanced_techniques.html)
      - Matching a Keyword But Not Words Prefixed Therewith

- Debugging
	- [using in ruby](http://cjheath.github.io/treetop/using_in_ruby.html)
      - parser options: start from a different rule / continue
      - debugging option
      - AST guideline
  	- [Advanced Grammar debugging](https://stackoverflow.com/a/6109101/51386)
  		- Generating grammar, and instrumenting code

- [google groups (2018)](https://groups.google.com/g/treetop-dev)
	- [custom data for syntax node](https://groups.google.com/g/treetop-dev/c/m60jgGU-HeU) =>  his is a significant weakness in the design of Treetop.
I made a custom proxy for the "input" and attached my Context
to it. You might get away with doing something [similar](https://github.com/cjheath/activefacts-cql/blob/master/lib/activefacts/cql/parser.rb#L203-L249) 

- Ruby Conference 2007 Treetop: Syntactic Analysis with Ruby by Nathan Sobo

[![caption](https://img.youtube.com/vi/v5tTDZSIVrg/0.jpg)](https://www.youtube.com/watch?v=v5tTDZSIVrg)

### Some treetop example

[_Why you should not use (f)lex, yacc and bison (ANTLR)_](https://tomassetti.me/why-you-should-not-use-flex-yacc-and-bison/)
  
- Clifford Heath [CQL](https://github.com/cjheath/activefacts-cql)
- my sql grammar POC [sql](https://github.com/yduf/sql-treetop)
- [A “grue”some look at Statemachine and Treetop](http://matthewkwilliams.com/index.php/2008/09/05/a-gruesome-look-at-statemachine-and-treetop/)  
  
### [Alternatives](https://www.ruby-forum.com/t/which-library-to-write-a-parser/215786/11)
- [parslet](http://kschiess.github.io/parslet/)
	- [compared to other](http://blog.absurd.li/2011/02/02/parslet_and_its_friends.html)
    - [Get started](http://kschiess.github.io/parslet/get-started.html)
    - [Stack Traces in Parslet](http://blog.absurd.li/2011/01/11/stack_traces_in_parslet.html)
- [whittle ?](https://github.com/d11wtq/whittle)
	- [Whittle: the new, powerful, easy-to-use Parser on the ruby block (all ruby, all the time, based on the LALR(1) algorithm)](https://www.reddit.com/r/ruby/comments/msgn9/whittle_the_new_powerful_easytouse_parser_on_the/)
- [rexical](https://github.com/tenderlove/rexical/tree/master) / [racc](https://github.com/ruby/racc/wiki)
	- example [sql-parser](https://github.com/kissmetrics/sql-parser)
    	- [sqlite-parser (js)](https://github.com/codeschool/sqlite-parser)
    

