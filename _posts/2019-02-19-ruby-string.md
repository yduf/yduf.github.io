---
published: true
title: String litterals (Ruby)
tags: ruby string
---
> [Heredocs](https://en.wikipedia.org/wiki/Here_document) are cool & useful - [C++,D,Ruby,Python](https://en.wikipedia.org/wiki/Here_document)

## [String literal without need to escape backslash](https://stackoverflow.com/questions/29124058/string-literal-without-need-to-escape-backslash/29124475#29124475)

{% highlight ruby %}
config=<<'_'
{
    "key1": "{ \"key2\": \"123\"}"
}
_
{% endhighlight %}

## [squiggly heredoc (ruby 2.3)](https://infinum.co/the-capsized-eight/multiline-strings-ruby-2-3-0-the-squiggly-heredoc)

{% highlight ruby %}
class Subscription
  def warning_message
    <<~HEREDOC
      Subscription expiring soon!
      Your free trial will expire 
      in #{days_until_expiration} days.
      Please update your billing information.
    HEREDOC
  end
end
{% endhighlight %}

squiggly heredoc [remove indentation](https://www.rubyguides.com/2018/11/ruby-heredoc/) from the actual string.

{% highlight ruby %}
data = JSON.parse(<<-DATA, symbolize_names: true)
page = <<-HTML
  Heredocs are cool & useful
HTML

-> "  Heredocs are cool & useful\n"

page = <<~HTML
  Heredocs are cool & useful
HTML

-> "Heredocs are cool & useful\n"

page = <<~HTML.strip
  Heredocs are cool & useful
HTML

-> "Heredocs are cool & useful"
{% endhighlight %}

## [Heredoc on next line](https://github.com/yuki24/object_mapper)
{% highlight ruby %}
data = JSON.parse(<<-DATA, symbolize_names: true)
[
  {
    "id": "12345",
    "type": "New repository created",
    "repo": {
      "id": 3,
      "name": "yuki24/object_mapper"
    }
]
DATA
{% endhighlight %}


## [Alternate Syntax](https://www.thoughtco.com/string-literals-2908302)
As with most other literals, Ruby provides an alternate syntax for string literals. If you're using a lot of quote characters inside your literals, for example, you may want to use this syntax. When you use this syntax is a matter of style, they're usually not needed for strings.

Use the following sequence for single-quoted strings %q{ … }. Similarly, use the following syntax for double-quoted strings %Q{ … }. 

You can use any characters you with instead of braces. If you use a brace, square bracket, angle bracket or parenthesis, then the matching character will end the literal. If you don't want to use matching characters, you can use any other symbol (anything not a letter or number). The literal will be closed with another of the same symbol.

The alternate syntax also works as a multi-line string.

- No variable expension, no need to escape single quote
{% highlight ruby %}
%q{#{no expension} single'quote}
{% endhighlight %}
