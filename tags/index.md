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
    display: none; /* Initially hide the graph */

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
        
  .toggle-btn {
      position: fixed;
      top: 10px;
      right: 10px;
      padding: 8px 12px;
      background: steelblue;
      color: white;
      border: none;
      cursor: pointer;
  }
  .toggle-checkbox {
      margin: 0 5px;
  }


  /* Topic Sections */
  .topic-section {
  /*
    padding: 50px;
    margin: 50px 0;
    border: 1px solid #ddd;
    background: #f9f9f9;
  */}

/* Style for the floating window */
.floating-window {
  position: fixed;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  color: white;
  z-index: 1000; /* Ensure the button is on top of other content */
}
</style>

<!-- site_tags:  -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- tag_words sorted: -->
{% assign tag_words = site_tags | split:',' | sort_natural %}


<!-- tags relationship: -->
{% assign all_tags = site_tags %}
{% assign tag_list = tag_words %}

<!-- Toggle Button for Graph Visibility -->
<div class="floating-window">
<label>
    <input type="checkbox" class="toggle-checkbox" id="toggleGraph" />
    Show Graph
</label>
</div>

<!-- Floating Graph Container -->
<div id="graph-container">
  <svg width="400" height="400">
    <g id="zoomLayer"></g> <!-- Zoomable container -->
  </svg>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>


<div id="tags">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <div id="{{ this_word | slugify }}-ref"  class="topic-section">
    <h2>{{ this_word }}</h2>
<!-- other tags appearing in posts related to this tag -->
      {% assign related_tags = "" %}
      
      {% for post in site.tags[this_word] %}
          {% for related_tag in post.tags %}
            {% unless related_tag == this_word or related_tags contains related_tag %}
              {% assign related_tags = related_tags | append: related_tag | append: "," %}
            {% endunless %}
          {% endfor %}
      {% endfor %}
      
      {% assign related_tag_list = related_tags | split: "," | sort_natural %}
<details>
    <summary style="font-size: 0.8em;">related tags</summary>
      <p style="font-size: 0.8em;">
      {% for related_tag in related_tag_list %}
        {% if related_tag != "" %}
          <a href="#{{ related_tag | slugify }}-ref">{{ related_tag }}</a>{% unless forloop.last %},{% endunless %}
        {% endif %}
      {% endfor %}
      </p>
</details>

<!-- posts related to main tag -->
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
    {% for tag in tag_list %}
      {% assign related_tags = "" %}
      
      {% for post in site.tags[tag] %}
          {% for related_tag in post.tags %}
            {% unless related_tag == tag or related_tags contains related_tag %}
              {% assign related_tags = related_tags | append: related_tag | append: "," %}
            {% endunless %}
          {% endfor %}
      {% endfor %}
      
      {% assign related_tag_list = related_tags | split: "," | sort %}
      
{% for related_tag in related_tag_list %}{% if related_tag != "" %}
{ "source": "{{ tag | slugify }}-ref", "target": "{{ related_tag | slugify }}-ref" },{% endif %}{% endfor %}{% endfor %}
      ]
    };
    
    const graphContainer = document.getElementById("graph-container");
    const toggleGraphCheckbox = document.getElementById("toggleGraph");

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
      .force("charge", d3.forceManyBody().strength(-200))
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
        highlightNode(d);
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

  highlightNode( topic);

  const scale = 2;  // Zoom in factor
  const x = topic.x;
  const y = topic.y;

  svg.transition().duration(750).call(
    zoom.transform,
    d3.zoomIdentity.translate(width / 2 - scale * x, height / 2 - scale * y).scale(scale)
  );
}

  // Function to highlight a node and its neighbors
function highlightNode(selectedNode) {
  const neighbors = new Set();
  data.links.forEach(link => {
    if (link.source.id === selectedNode.id) neighbors.add(link.target.id);
    if (link.target.id === selectedNode.id) neighbors.add(link.source.id);
  });

  // Change node colors
  node.transition().duration(300)
    .attr("fill", d => d.id === selectedNode.id ? "orange" : (neighbors.has(d.id) ? "red" : "lightgray"));

  // Change link colors
  link.transition().duration(300)
    .attr("stroke", d => (d.source.id === selectedNode.id || d.target.id === selectedNode.id) ? "red" : "#ddd")
    .attr("stroke-width", d => (d.source.id === selectedNode.id || d.target.id === selectedNode.id) ? 3 : 1);

  // Move selected node and neighbors to the front
  node.filter(d => d.id === selectedNode.id || neighbors.has(d.id)).each(function () {
    d3.select(this).raise(); // Bring to top
  });

  // Move labels on top too
  labels.filter(d => d.id === selectedNode.id || neighbors.has(d.id)).each(function () {
    d3.select(this).raise();
  });

  // Increase attraction between selected node and neighbors
  simulation.force("link")
    .strength(d => (d.source.id === selectedNode.id || d.target.id === selectedNode.id) ? 1 : 0.1)
    .distance(d => (d.source.id === selectedNode.id || d.target.id === selectedNode.id) ? 60 : 100);

  // Reduce repulsion force for selected node and its neighbors
  simulation.force("charge")
    .strength(d => (d.id === selectedNode.id || neighbors.has(d.id)) ? -50 : -200);

  // Restart simulation with new forces
  simulation.alpha(1).restart();
}

// Attach click event to topic sections
document.querySelectorAll('.topic-section').forEach(header => {
  header.addEventListener('click', function () {
    const topicId = this.id;
    focusOnTopic(topicId);
  });
});

// Show/Hide Graph Based on Checkbox
function hideGraph(enabled) {
    if (enabled) {
        // Show the graph container
        graphContainer.style.display = "block";
        simulation.alpha(1).restart(); // Restart the simulation if shown
        // drawGraph();
    } else {
        // Hide the graph container
        graphContainer.style.display = "none";
        simulation.stop(); // Stop the simulation if hidden
    }
}

toggleGraphCheckbox.addEventListener("change", () => {
  hideGraph(toggleGraphCheckbox.checked )
});

// Optional: Save user preference for graph visibility (localStorage)
const savedPreference = localStorage.getItem("graphVisibility");
if (savedPreference === "shown") {
    toggleGraphCheckbox.checked = true;
    hideGraph(toggleGraphCheckbox.checked )
} else {
    toggleGraphCheckbox.checked = false;
    hideGraph(toggleGraphCheckbox.checked )
}

// Save the preference when the user toggles the checkbox
toggleGraphCheckbox.addEventListener("change", () => {
    const visibility = toggleGraphCheckbox.checked ? "shown" : "hidden";
    localStorage.setItem("graphVisibility", visibility);
});

</script>