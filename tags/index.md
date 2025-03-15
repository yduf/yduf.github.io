---
layout: page
title: Tags
---

[//]: # ( https://jsfiddle.net/y_duf/r3dup56f/6/ )
[//]: # ( https://chatgpt.com/share/67d4209c-94f0-800d-9cb2-b38c22a052e7 )


<style>
  body {
    font-family: Arial, sans-serif;
  }
  
  /* Floating Graph Container */
  #graph-container {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 10px;
    z-index: 1000;
  }

  /* Topic Sections */
  .topic-section {
  /*
    padding: 50px;
    margin: 50px 0;
    border: 1px solid #ddd;
    background: #f9f9f9;
  */}
</style>

<!-- site_tags:  -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- tag_words sorted: -->
{% assign tag_words = site_tags | split:',' | sort_natural %}

<!-- Floating Graph Container -->
<div id="graph-container">
  <svg width="400" height="400">
    <g id="zoomLayer"></g> <!-- Zoomable container -->
  </svg>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>


<div id="tags">
<!--
  <ul class="tag-box inline">
  {% for tag in tag_words %}
    <li><a href="#{{ tag | slugify }}-ref">{{ tag | replace: '-', ' ' }} <span>{{ site.tags[tag] | size }}</span></a></li>
  {% endfor %}
  </ul>
 -->

  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <div id="{{ this_word | slugify }}-ref"  class="topic-section">
    <h2>{{ this_word }}</h2>
    <ul class="posts">
      {% assign sortedPosts = site.tags[this_word] | sort_natural: 'title' %}
      {% for post in sortedPosts %}{% if post.title != null %}
      <li itemscope>
          <a href="{{ post.url }}">{{ post.title }}</a>
            <span class="entry-date">
                <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
                  {{ post.date | date: "%B %d, %Y" }}
                </time>
            </span> 
        </li>
      {% endif %}{% endfor %}
    </ul>
  </div>
  {% endunless %}
  {% endfor %}

</div>

<script>
    const width = 400, height = 400;

    const data = {
      "nodes": [
    {% for tag in tag_words %}
        { "name": "{{ tag }}", "size": {{ site.tags[tag] | size | times: 1.4 | plus: 10 }}, "id": "{{ tag | slugify }}-ref" },
    {% endfor %}
      ],
      "links": [
       // { "source": "Machine Learning", "target": "Artificial Intelligence" },
      ]
    };
    

    const svg = d3.select("svg");
    const zoomLayer = d3.select("#zoomLayer");

    // Define zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.1, 5])  // Min 50%, Max 500% zoom
      .on("zoom", (event) => {
        zoomLayer.attr("transform", event.transform);
      });

    svg.call(zoom)  // Apply zoom & pan to SVG
      .call(zoom.transform, d3.zoomIdentity.translate(width / 4, height / 4)); // Initial position
    
    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id(d => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = zoomLayer.append("g")
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 2);

    const node = zoomLayer.append("g")
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("r", d => Math.sqrt(d.size) * 2)
      .attr("fill", "steelblue")
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        // Scroll to the relevant section
        document.getElementById(d.id).scrollIntoView({ behavior: "smooth" });
      })
      .call(d3.drag()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded));

    const labels = zoomLayer.append("g")
      .selectAll("text")
      .data(data.nodes)
      .join("text")
      .text(d => d.name)
      .attr("font-size", "10px")
      .attr("fill", "black")
      .join("text")

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

      labels
        .attr("x", d => d.x + 8)
        .attr("y", d => d.y);
    });

    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Function to focus the graph on a topic
    function focusOnTopic(topicId) {
      const topic = data.nodes.find(node => node.id === topicId);
      if (!topic) return;

      const scale = 2;  // Zoom in factor
      const x = topic.x;
      const y = topic.y;

      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity.translate(width / 2 - scale * x, height / 2 - scale * y).scale(scale)
      );
    }

    // Attach click event to topic sections
    document.querySelectorAll('.topic-section').forEach(header => {
      header.addEventListener('click', function () {
        const topicId = this.id;
        focusOnTopic(topicId);
      });
    });
  </script>