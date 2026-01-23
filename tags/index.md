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

  #graph-container .graph-header {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;
  }

  #graph-container .graph-header label {
    font-size: 14px;
    cursor: pointer;
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
  <div class="graph-header">
    <label>
      <input type="checkbox" class="toggle-checkbox" id="toggleGraphInContainer" />
      Show Graph
    </label>
  </div>
  <svg width="400" height="380">
    <g id="zoomLayer"></g> <!-- Zoomable container -->
  </svg>
</div>

<!-- <script src="https://d3js.org/d3.v7.min.js"></script> -->
<script src="{{ '/assets/js/d3.v7.min.js' | relative_url }}"></script>


<div id="tags">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <div id="{{ this_word | slugify }}"  class="topic-section">
    <h2>{{ this_word }}</h2>
<!-- posts related to main tag -->
    <ul class="posts">{% assign sortedPosts = site.tags[this_word] | sort_natural: 'title' %}{% for post in sortedPosts %}{% if post.title != null %}
      <li itemscope><a href="{{ post.url }}">{{ post.title }}</a> <span class="entry-date"><time datetime=" {{ post.date | date_to_xmlschema }}" itemprop="datePublished"> {{ post.date | date: "%B %d, %Y" }}</time></span> </li>{% endif %}{% endfor %}
    </ul>
  </div>{% endunless %}{% endfor %}
</div>

<script>
/**
 * Slugifies a string much like Jekyll does:
 * - Lowercases
 * - Transliterates accents via Unicode normalization
 * - Removes non-alphanumeric characters (except hyphens and whitespace)
 * - Replaces whitespace with hyphens
 * - Collapses multiple hyphens
 * - Trims hyphens from the ends
 */
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u00C0-\u017F\s-]/g, '-') // allow basic Latin + Latin-1 Supplement diacritics
                                                // Remove punctuation (allow letters, digits, spaces, hyphens)
    .replace(/[\s-]+/g, '-')         // Replace spaces and consecutive hyphens with single hyphen
    .replace(/^-+|-+$/g, '');        // Trim hyphens from start and end
}

function appendToMapArray(map, key, value) {
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(value);
}


    const width = 400, height = 400;

    // Select all h2 elements
    const h2Elements = document.querySelectorAll('h2');

    let posts_tags = new Map();

    const nodes = Array.from(h2Elements).map(h2 => {
      let list = null;
      let el = h2.nextElementSibling;

      // Walk through siblings until we find a list or another h2
      while (el && el.tagName !== 'H2') {
        if (el.tagName === 'UL' || el.tagName === 'OL') {
          list = el;
          break;
        }
        el = el.nextElementSibling;
      }

      const tag_name = h2.textContent.trim();
      const tag_ref = slugify( tag_name);

      // Count <li> items if a list is found
      const itemCount = list ? list.querySelectorAll('li').length : 0;

      // recover posts tags
      if( list) {
        list.querySelectorAll('li').forEach(item => {
            // Find the <a> tag inside the current <li>
            const link = item.querySelector('a');
            if (link) {
              appendToMapArray( posts_tags, link.getAttribute('href'), // original value, e.g., "/tintin-rocket/"
              tag_name);
            }
          });
      }

      return {
        id: tag_ref,
        size: itemCount*1.4+10,
        name: tag_name
      };
    });

// { "name": "{{ tag }}", "size": {{ site.tags[tag] | size | times: 1.4 | plus: 10 }}, "id": "{{ tag | slugify }}" }


    // rescan h2 & list in order to consolidate child post tags
    let links = [];

    Array.from(h2Elements).forEach(h2 => {
      let list = null;
      let el = h2.nextElementSibling;

      // Walk through siblings until we find a list or another h2
      while (el && el.tagName !== 'H2') {
        if (el.tagName === 'UL' || el.tagName === 'OL') {
          list = el;
          break;
        }
        el = el.nextElementSibling;
      }

      const tag_name = h2.textContent.trim();
      const tag_ref = slugify( tag_name);

      // Count <li> items if a list is found
      const itemCount = list ? list.querySelectorAll('li').length : 0;

      // rescan posts to aggregate tags
      if( list) {
        // merge tags
        let tag_list = [];

        list.querySelectorAll('li').forEach(item => {
            // Find the <a> tag inside the current <li>
            const link = item.querySelector('a');
            if (link) {
              tag_list.push( ...posts_tags.get(link.getAttribute('href')) );
            }
          });

        // generate each link per tag
        const mergedUnique = [...new Set(tag_list)];

        // sort & remove h2 from tag list
        const tags = mergedUnique.filter(item => item !== tag_name)
                        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

        tags.forEach( item => {
          links.push({  source: tag_ref,
                        target: slugify(item)
                    });
          });

        // generate the details field for this h2
        const details = document.createElement("details");

        // Create the <summary>
        const summary = document.createElement("summary");
        summary.style.fontSize = "0.8em";
        summary.textContent = "related tags";
        details.appendChild(summary);

        // Create the <p> for links
        const p = document.createElement("p");
        p.style.fontSize = "0.8em";

        // Add links from the list
        tags.forEach((tag, index) => {
          const a = document.createElement("a");
          a.href = `#${slugify(tag)}`;
          a.textContent = tag;
          p.appendChild(a);

          // Add comma and space except after the last tag
          if (index < tags.length - 1) {
            p.appendChild(document.createTextNode(", "));
          }
        });

        details.appendChild(p);

        // Insert <details> just after the <h2>
        h2.insertAdjacentElement("afterend", details);
      }
    });

    const data = {
      "nodes": nodes,
      "links": links
    };
    
    const graphContainer = document.getElementById("graph-container");
    const toggleGraphCheckbox = document.getElementById("toggleGraph");
    const toggleGraphInContainerCheckbox = document.getElementById("toggleGraphInContainer");

    // Graph components - will be initialized lazily
    let svg, zoomLayer, zoom, simulation, link, node, labels;
    let graphInitialized = false;

    // Initialize the graph (lazy loading)
    function initializeGraph() {
      if (graphInitialized) return;
      
      svg = d3.select("svg");
      zoomLayer = d3.select("#zoomLayer");

      // Define zoom behavior
      zoom = d3.zoom()
        .scaleExtent([0.1, 5])  // Min 50%, Max 500% zoom
        .on("zoom", (event) => {
          zoomLayer.attr("transform", event.transform);
        });

      svg.call(zoom)  // Apply zoom & pan to SVG
        .call(zoom.transform, d3.zoomIdentity.translate(width / 4, height / 4)); // Initial position
      
      simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(80))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2));

      link = zoomLayer.append("g")
        .selectAll("line")
        .data(data.links)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 2);

      node = zoomLayer.append("g")
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

      labels = zoomLayer.append("g")
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

      graphInitialized = true;
    }

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
  if (!graphInitialized) return;
  
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
  if (!graphInitialized) return;
  
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
function setGraphVisibility(enabled) {
    if (enabled) {
        // Initialize graph if not already done
        if (!graphInitialized) {
          initializeGraph();
        }
        // Show the graph container
        graphContainer.style.display = "block";
        if (simulation) {
          simulation.alpha(1).restart(); // Restart the simulation if shown
        }
    } else {
        // Hide the graph container
        graphContainer.style.display = "none";
        if (simulation) {
          simulation.stop(); // Stop the simulation if hidden
        }
    }
}

// Synchronize checkboxes - when one changes, update the other
function syncCheckboxes(sourceCheckbox, targetCheckbox) {
  targetCheckbox.checked = sourceCheckbox.checked;
  setGraphVisibility(sourceCheckbox.checked);
  // Save preference
  const visibility = sourceCheckbox.checked ? "shown" : "hidden";
  localStorage.setItem("graphVisibility", visibility);
}

// Add event listeners to both checkboxes
toggleGraphCheckbox.addEventListener("change", () => {
  syncCheckboxes(toggleGraphCheckbox, toggleGraphInContainerCheckbox);
});

toggleGraphInContainerCheckbox.addEventListener("change", () => {
  syncCheckboxes(toggleGraphInContainerCheckbox, toggleGraphCheckbox);
});

// Load user preference and initialize
const savedPreference = localStorage.getItem("graphVisibility");
const shouldShowGraph = savedPreference === "shown";

// Set both checkboxes to the saved state
toggleGraphCheckbox.checked = shouldShowGraph;
toggleGraphInContainerCheckbox.checked = shouldShowGraph;

// Only initialize and show graph if enabled
if (shouldShowGraph) {
  setGraphVisibility(true);
}

</script>
