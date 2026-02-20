---
title: Language Charts
tags: lang c++ rust zig go java ruby python typescript js lua string
toc: true
---
> Main features comparison

# Dynamic

## String
<table>
{% for row in site.data.lang-charts-dynamic-string %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] | markdownify }}
    {% endtablerow %}
{% endfor %}
</table>

**\***: [Ruby has symbol and frozen string, but string are mutable by default](https://chatgpt.com/share/69983c32-1880-800d-b244-53f09d2d37cc)

# Static
## String

<table>
{% for row in site.data.lang-charts-static-string %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] | markdownify }}
    {% endtablerow %}
{% endfor %}
</table>

**\~**: It can only be achieved by Convention.
