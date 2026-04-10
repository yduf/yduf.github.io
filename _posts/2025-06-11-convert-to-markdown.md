---
title: Convert to Markdown
published: true
tags: markdown pdf doc LLM
toc: true
---
> converting various files to Markdown for use with LLMs and related text analysis pipelines. 

# [PDF ⮺](https://chatgpt.com/share/69d183af-96cc-832b-b285-323e0a3af632)

## [Marker ⮺](https://github.com/datalab-to/marker?tab=readme-ov-file#marker)

Marker converts documents to markdown, JSON, chunks, and HTML quickly and accurately.

Marker benchmarks favorably compared to cloud services like Llamaparse and Mathpix, as well as other open source tools.

### Install
**Install using** [nix flake](https://github.com/yduf/CUDA-Marker/tree/master?tab=readme-ov-file#system-gpucuda--nix-python--uv-pytorch)

{% highlight bash %}
# Convert a single file
$ marker_single --output_dir . /path/to/file.pdf # or image
{% endhighlight %}

## [MarkItDown ⮺](https://github.com/microsoft/markitdown?tab=readme-ov-file#markitdown)

is a lightweight Python utility for converting various files to Markdown for use with LLMs and related text analysis pipelines. To this end, it is most comparable to textract, but with a focus on preserving important document structure and content as Markdown (including: headings, lists, tables, links, etc.) While the output is often reasonably presentable and human-friendly, it is meant to be consumed by text analysis tools -- and may not be the best option for high-fidelity document conversions for human consumption.

# [HTML ⮺](https://chatgpt.com/share/69d37bd6-2af4-832b-9028-81ad4ecf46c9)

## Pandoc

{% highlight bash %}
# Convert a single file
$ pandoc -f html -t markdown input.html -o output.md
{% endhighlight %}

# see also
- [Show HN: Defuddle, an HTML-to-Markdown alternative to Readability](https://news.ycombinator.com/item?id=44067409) - parse and extract the main content and metadata from web pages. It can also return the content as Markdown.