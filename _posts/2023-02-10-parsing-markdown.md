---
published: true
title: Parsing Markdown
tags: markdown compiler
---
> [kramdown](https://kramdown.gettalong.org/) - fast, pure-Ruby Markdown-superset converter

ChatGPT is able to mostly code that parser itself while guided.

{% highlight ruby %}
# mostly written by ChatGPT
require 'kramdown'

def extract_urls(el, urls)
    if el.type == :a
        urls << "#{el.attr['href']} - (#{  el.children[0].value})"
    end

    el.children.each { |child| extract_urls(child, urls) }
end
  
  def extract_markdown_urls(markdown_text)
    doc = Kramdown::Document.new(markdown_text)
    urls = []
    extract_urls(doc.root, urls)
    urls
  end

markdown_text = File.read("input.md")
urls = extract_markdown_urls(markdown_text)

puts urls
{% endhighlight %}

Alternatives 
- [ redcarpet](https://github.com/vmg/redcarpet) - a Ruby library for Markdown processing

see also
- [What is Markdown?](https://www.markdownguide.org/getting-started) - Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.

