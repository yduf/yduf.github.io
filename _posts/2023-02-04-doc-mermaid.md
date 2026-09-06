---
title: Mermaid 🧜‍♀️
tags: doc UML diagram markdown online
toc: true
---
> Sequence diagrams, the only good thing UML brought to software development - [HN](https://news.ycombinator.com/item?id=36342931) / [2](https://news.ycombinator.com/item?id=31273777) / [online](https://mermaid.live)

<div class="encart blue" markdown="1">

Mermaid in Markdown is [rendered directly](https://news.ycombinator.com/item?id=32653602) in  [Forgejo](http://localhost:3000/yves/_TODO/src/branch/master/mermaid-text.md)
as well as in [github](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/)/gitea/gitlab - [github](https://github.com/mermaid-js/mermaid) 

- [Howto example in this page](https://chatgpt.com/share/6a9d9f3b-dc08-83ed-a7bd-947df82ce645)
</div>

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

  mermaid.initialize({
    startOnLoad: true
  });
</script>

<style>
.mermaid-example {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: start;
}

.mermaid-code {
  min-width: 0; /* important for allowing overflow inside a grid item */
}

.mermaid-code pre {
  overflow-x: auto;
  max-width: 100%;
  white-space: pre;
}

@media (max-width: 800px) {
  .mermaid-example {
    grid-template-columns: 1fr;
  }
}
</style>


# [Entity–Relationship ⮺](https://chatgpt.com/share/6a9d9222-89d4-83eb-a13e-5af063b5e780)

The symbols describe cardinality:
- **\|\|** = exactly one
- **o\|** = zero or one
- **\|\{** = one or many
- **o\{** = zero or many

{% capture er-diagram %}
erDiagram
    CUSTOMER ||--o{ ORDER : places

    CUSTOMER {
        bigint id PK
        string name
    }

    ORDER {
        bigint id PK
        bigint customer_id FK
    }
{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ er-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ er-diagram }}</pre>
  </div>
</div>

# [ Sequence ⮺](https://mermaid.live)

{% capture sequence-diagram %}
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!

{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ sequence-diagram}}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ sequence-diagram}}</pre>
  </div>
</div>

# [ Gantt ⮺](https://mermaid.live)

{% capture gantt-diagram %}
gantt
    title Product Launch Plan
    dateFormat YYYY-MM-DD
    section Planning
        Market research      :done, research, 2024-03-01, 10d
        Define requirements  :done, reqs, after research, 7d
    section Build
        Design prototype     :active, proto, after reqs, 14d
        User testing         :testing, after proto, 7d
    section Launch
        Marketing campaign   :marketing, after proto, 14d
        Release day          :milestone, after testing, 0d
{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ gantt-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ gantt-diagram }}</pre>
  </div>
</div>

# [ Ishikawa ⮺](https://mermaid.live)

{% capture ishikawa-diagram %}
ishikawa-beta
    Late Food Delivery
    Process
        Orders batched too long
        Kitchen queue not prioritized
    People
        Not enough drivers on shift
        New cook still in training
    Equipment
        Oven capacity too small
        Delivery bags lose heat
    Environment
        Heavy rain
        Road construction on main route
    Measurement
        No alert when prep time exceeds target

{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ ishikawa-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ ishikawa-diagram }}</pre>
  </div>
</div>

# [ Packet ⮺](https://mermaid.live)

{% capture packet-diagram %}
packet
title UDP Packet
+16: "Source Port"
+16: "Destination Port"
+16: "Length"
+16: "Checksum"
64-95: "Data (variable length)"
{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ packet-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ packet-diagram }}</pre>
  </div>
</div>

# [ Grammar ⮺](https://mermaid.live)

{% capture grammar-diagram %}
railroad-peg-beta
    title Identifiers (keywords excluded)

    Identifier <- !Keyword Letter Letter* ;
    Keyword <- "if" / "else" / "while" ;
    Letter <- "a" / "b" / "c" / "_" ;
{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ grammar-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ grammar-diagram }}</pre>
  </div>
</div>

# [ Treemap ⮺](https://mermaid.live)

{% capture treemap-diagram %}
---
config:
  treemap:
    valueFormat: '$0,0'
---
treemap-beta
"Monthly Budget"
    "Housing"
        "Rent": 1400
        "Utilities": 220
        "Internet": 60
    "Food"
        "Groceries": 480
        "Dining out": 180
    "Transport"
        "Car payment": 320
        "Fuel": 140
    "Savings"
        "Emergency fund": 300
        "Retirement": 400
{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ treemap-diagram}}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ treemap-diagram}}</pre>
  </div>
</div>

# [ Sankey ⮺](https://mermaid.live)

{% capture sankey-diagram %}
sankey-beta

Salary,Budget,3000
Freelance work,Budget,1200
Budget,Rent,1300
Budget,Groceries,600
Budget,Transport,250
Budget,Fun,350
Budget,Savings,1700

{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ sankey-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ sankey-diagram }}</pre>
  </div>
</div>


# [ Kanban ⮺](https://mermaid.live)

{% capture kanban-diagram %}
---
config:
  kanban:
    ticketBaseUrl: 'https://github.com/mermaid-js/mermaid/issues/#TICKET#'
---
kanban
  todo[Todo]
    docs[Create documentation]
    blog[Write blog post about the new diagram]@{ priority: 'Low' }
  inProgress[In progress]
    renderer[Improve renderer for edge cases]@{ assigned: 'knsv', priority: 'High' }
  readyForTest[Ready for test]
    parserTests[Create parsing tests]@{ ticket: 2038, assigned: 'K.Sveidqvist', priority: 'High' }
  done[Done]
    grammar[Design grammar]@{ assigned: 'knsv' }
    longTitle[Title of diagram is more than 100 chars when user duplicates diagram with 100 char]@{ ticket: 2036, priority: 'Very High' }
    dbFunction[Update DB function]@{ ticket: 2037, assigned: 'knsv', priority: 'High' }

{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ kanban-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ kanban-diagram }}</pre>
  </div>
</div>

# [ Git ⮺](https://mermaid.live)

{% capture git-diagram %}
gitGraph
    commit id: "a3f82c1"
    branch develop
    checkout develop
    commit id: "b7e41d9"
    commit id: "c9d52e4"
    checkout main
    merge develop id: "d4e8f3a"
    commit id: "e1b6c90"
    branch feature
    checkout feature
    commit id: "f2a8d17"
    commit id: "a8c3f54"
    checkout main
    merge feature id: "b9d7e21"
{% endcapture %}

<div class="mermaid-example">
  <div class="mermaid-code">
    {% highlight mermaid %}{{ git-diagram }}{% endhighlight %}
  </div>

  <div class="mermaid-rendered">
    <pre class="mermaid">{{ git-diagram }}</pre>
  </div>
</div>

# see also
- [Mermaid Cheat Sheet ](https://news.ycombinator.com/item?id=34906378) - already built into Github Markdown [0], where you can include a diagram by just going ```mermaid <code>```
- [Jekkyll + Github + Mermaid](https://news.ycombinator.com/item?id=31277389)
