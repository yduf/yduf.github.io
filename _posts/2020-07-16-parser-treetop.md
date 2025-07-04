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
- [ruby-ast-explorer](https://github.com/rajasegar/ruby-ast-explorer?tab=readme-ov-file#ruby-ast-explorer)

# [Home](https://github.com/cjheath/treetop?tab=readme-ov-file#support) (still alive)

- performance are good [compared to other](http://blog.absurd.li/2011/02/02/parslet_and_its_friends.html)
- [Performance of parsers: PEG vs LALR(1) or LL(k)](https://stackoverflow.com/questions/11373644/performance-of-parsers-peg-vs-lalr1-or-llk) - PEG parsers can use unlimited lookahead (while maintaining linear parse time on average, via packrat) unlike (default) LL(k), or LR(k) parsers which use limited lookahead, while maintining linear parse time.

## [Tutorials](https://github.com/cjheath/treetop?tab=readme-ov-file#tutorial)

They are 3 kind of objects to implements:
- [**the Parser**](#the-parser) itself, by levaring treetop, that where we will have a `parse` method.
- [**the Grammar**](#the-grammar), which will layout how we will parse and build the tree
- [**the Node**](#the-nodes) extension classes, which is optional, but will allows to customize the AST tree to host pertient information regarding what has been parsed.

Output
- [**the Tree**](#the-tree) - if parsing succeed, this will be your result.

### The Parser

It would look like

{% highlight ruby %}
# In file parser.rb
require 'treetop'

# Load our custom syntax node classes so the parser can use them
require_relative 'node_extensions.rb'

class Parser
  
  # Load the Treetop grammar from the 'python3_parser.treetop' file -> produce <grammar name>Parser
  # and then create a new instance of that parser as a class variable so we don't have to re-create
  # it every time we need to parse a string
  Treetop.load( 'python3_parser.treetop')
  @@parser = Python3Parser.new
  tree = @@parser.parse("some compliant code") # return -> tree if parsed or nil 
  
end
{% endhighlight %}

### [The Grammar](https://cjheath.github.io/treetop/syntactic_recognition.html)

It require a least one rule (the root node), to make the above code work:
The first rule becomes the root of the grammar, causing its expression to be matched when a parser for the grammar is fed a string. 

{% highlight ruby %}
# python3_parser.treetop
grammar Python3
  rule hello
    'hello chomsky'
  end
end
{% endhighlight %}
  
Contrary to Lex/yacc approach, here the grammar directly integrate the lexer. It works directly on the stream of characters.
  
**Notes**
- only base expression are considered terminals (like "hello", [Az]*) each one them will lead to a Node being created.
- fortunately Treetop [now support regexp](https://github.com/cjheath/treetop?tab=readme-ov-file#terminal-symbols) / [2](https://groups.google.com/g/treetop-dev/c/q3FcsQYlfn8) as terminals, so it can helps to reduce number of nodes created. eg: using `"([\t ]*\n)+"r` to replace `([\t ]* "\n")` in a rule (otherwise you got 3 nodes created with the latter: 1 parent \<-\> 2 children.
- [how to handle spaces?](https://stackoverflow.com/questions/46612712/treetop-parser-how-to-handle-spaces?rq=3) - because there is no lexer, **you need to includes space in your grammar**
	- It's not enough to define the space rule, you have to use it anywhere there might be space
	- Because this occurs often, I usually use a shorter rule name **S** for mandatory space, and the lowercase version **s** for optional space. - [cliffordheath](https://stackoverflow.com/a/46615369/51386)

### [The Nodes](https://cjheath.github.io/treetop/semantic_interpretation.html)

The parser run by Treetop follow the grammar rules and build a Tree of [`Treetop::Runtime::SyntaxNode`](https://github.com/cjheath/treetop/blob/master/lib/treetop/runtime/syntax_node.rb).
The grammar allows to instanciate differente kind of Node if you like to. To do it, you just need to provide the class in bracket inside the rule, like so:
  
{% highlight ruby %}
# python3_parser.treetop
grammar Python3
   rule a
     something <A>
   end
end
{% endhighlight %}
  
Then in `node_extensions.rb`
  
{% highlight ruby %}
# node_extensions.rb

class A < Treetop::Runtime::SyntaxNode
    def initialize( input, interval, elements = nil)
        super( input, interval, elements)
    end
end
{% endhighlight %}

**Notes** 
- the `SyntaxNode` has some [usefull methods](https://cjheath.github.io/treetop/semantic_interpretation.html) like `terminal?`
- Ruby being ruby, you can extend `Treetop::Runtime::SyntaxNode`, and even their instance (using the block mechanism supported by the grammar)
- **see below to advice about using module to provide these Node class.**
                                      
**Inline Method Definition**

So rather than instanciating new Nodes, you can overide default method or add custom members directly to the `SyntaxNode` like so:

{% highlight ruby %}
# python3_parser.treetop
rule abc
  a b c {
    # overide the to_s method of the instanciated nodes of abc rule
    def to_s   
      a.to_s + b.to_s + c.to_s
    end
  }
end
{% endhighlight %}
                                      
[**Labels**](https://cjheath.github.io/treetop/semantic_interpretation.html)

Subexpressions can be given an explicit label to have an element accessor method defined for them. The labeled expressions could have been extracted to their own rules, but if they aren't used elsewhere, labels still enable them to be referenced by a name within the expression's methods.

{% highlight ruby %}
# python3_parser.treetop
rule labels
  first_letter:[a-z] rest_letters:(', ' letter:[a-z])* {
    def letters
      [first_letter] + rest_letters.elements.map do |comma_and_letter|
        comma_and_letter.letter
      end
    end
  }
end
{% endhighlight %}

You can then override the element accessor produced by label with access to the super keyword. 

{% highlight ruby %}
# python3_parser.treetop
rule labels
  first_letter:[a-z] rest_letters:(', ' letter:[a-z])* {
    def letters
      [first_letter] + rest_letters
    end

    def rest_letters
      super.elements.map { |comma_and_letter| comma_and_letter.letter }
    end
  }
end
{% endhighlight %}

see also
- [A quick intro](http://thingsaaronmade.com/blog/a-quick-intro-to-writing-a-parser-using-treetop.html) / [github](https://github.com/aarongough/treetop-sexp-parser)
- my [sql grammar POC](https://github.com/yduf/sql-treetop) - for demos of principle above

                                      
### The Tree

TBD

### Debuging

Enable error messages: Check parser.failure_reason and parser.failure_line if parsing fails.
You can even [implement something like that](https://github.com/yduf/sql-treetop/blob/master/sql.rb) (from [Treetop: Typical Errors](https://whitequark.org/blog/2011/09/08/treetop-typical-errors/)† )
{% highlight ruby %}
  parser.failure_reason =~ /^(Expected .+) after/m
  puts "ERROR: #{$1.gsub("\n", '$NEWLINE')}:"
  puts input.lines.to_a[ parser.failure_line - 1]
  puts "#{'~' * ( parser.failure_column - 1)}^"     
{% endhighlight %}

Which will output, the exact point where grammar diverge from input:
{% highlight bash %}
# python3_parser.treetop
ERROR: Expected "(" at line 1, column 8 (byte 8):
def foo[]):
~~~~~~~^
{% endhighlight %}
                                      
When tree is build, you can also inspect it
{% highlight ruby %}
# python3_parser.treetop
puts tree    # will iterate on to_s
p    tree    # will iterate on inspect
{% endhighlight %}

<pre>
Parsed successfully!
SyntaxNode+Program0 offset=0, "def foo():\n":
  SyntaxNode offset=0, ""
  SyntaxNode offset=0, "def foo():\n":
    FuncDef+Funcdef0 offset=0, "def foo():\n" (s1,s2,name,S,s3):
      SyntaxNode offset=0, "def"
      SyntaxNode offset=3, " "
      Name+Name0 offset=4, "foo" (s):
        SyntaxNode offset=4, "foo"
        SyntaxNode offset=7, ""
      SyntaxNode offset=7, "("
      SyntaxNode offset=8, ""
      SyntaxNode offset=8, ")"
      SyntaxNode offset=9, ""
      SyntaxNode offset=9, ":"
      SyntaxNode offset=10, ""
      SyntaxNode offset=10, "\n"
</pre>

| **Method**      | **Output Style**                  | **Uses Which Method?** | **Adds Newline?** | **Purpose**                              |
| ----------- | ----------------------------- | ------------------ | ------------- | ------------------------------------ |
| `puts node` | Human-readable string         | Calls `to_s`       | Yes           | For clean user-facing output         |
| `p node`    | Debug-style (raw Ruby syntax) | Calls `inspect`    | Yes           | For debugging and inspecting objects |

                                      
## [Doc](https://cjheath.github.io/treetop/syntactic_recognition.html)

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
  
- Clifford Heath [CQL](https://github.com/cjheath/activefacts-cql)
- my sql grammar POC [sql](https://github.com/yduf/sql-treetop)
- [A “grue”some look at Statemachine and Treetop](http://matthewkwilliams.com/index.php/2008/09/05/a-gruesome-look-at-statemachine-and-treetop/)  
  

## Advanced Techniques

### [Semantic Predicates](https://github.com/cjheath/treetop?tab=readme-ov-file#semantic-predicates)

Sometimes, you need to run external Ruby code to decide whether this syntax rule should continue or should fail. You can do this using either positive or negative semantic predicates. These are Ruby code blocks (lambdas) which are called when the parser reaches that location. 

{% highlight ruby %}
rule reserved
  word &{ |s| symbol_reserved?(s[0].text_value) } # positive predicate
  word !{ |s| symbol_reserved?(s[0].text_value) } # negative predicate
end
{% endhighlight %}

**Notes**  
- the semantic predicate `&{ ... }` syntax while close to the Node extension `{ ... }` is fundamentally different in behavior.

# [Alternatives](https://www.ruby-forum.com/t/which-library-to-write-a-parser/215786/11)

[_Why you should not use (f)lex, yacc and bison (from ANTLR)_](https://tomassetti.me/why-you-should-not-use-flex-yacc-and-bison/)

Lex and Yacc were the first popular and efficient lexers and parsers generators, flex and Bison were the first widespread open-source versions compatible with the original software. Each of these software has more than 30 years of history, which is an achievement in itself.
- Stability and Development of New Features - they are stable and maintained software but there is no active development.
- Separation between Grammar and Code - flex and Bison maintain an old-school design with little support for readability or productivity.
- Unicode Support - flex does not directly support Unicode 
- Grammar Format - Bison only supports BNF, which makes grammars more complicated 
- Features of Lexing Algorithms - flex supports regular expressions to define rules, which works for most elements, but adds complexity
- Features of Parsing Algorithms - Bison supports two parsing algorithms that cover all ranges of performance and languages. It gives cryptic error messages 
  
- [parslet](http://kschiess.github.io/parslet/)
	- [compared to other](http://blog.absurd.li/2011/02/02/parslet_and_its_friends.html) - uses the PEG formalism for its grammars
    - [Get started](http://kschiess.github.io/parslet/get-started.html)
    - [Stack Traces in Parslet](http://blog.absurd.li/2011/01/11/stack_traces_in_parslet.html)
- [whittle ?](https://github.com/d11wtq/whittle) - A little LALR(1) Parser in Pure Ruby
	- [Whittle: the new, powerful, easy-to-use Parser on the ruby block (all ruby, all the time, based on the LALR(1) algorithm)](https://www.reddit.com/r/ruby/comments/msgn9/whittle_the_new_powerful_easytouse_parser_on_the/)
- [rexical](https://github.com/tenderlove/rexical/tree/master) / [racc](https://github.com/ruby/racc/wiki)
	- example [sql-parser](https://github.com/kissmetrics/sql-parser)
    	- [sqlite-parser (js)](https://github.com/codeschool/sqlite-parser)
