// https://jsfiddle.net/y_duf/exnbja16/6/
document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll("h1, h2, h3");
  if (!headings.length) return;

  // Create TOC container
  const toc = document.createElement("div");
  toc.id = "toc";
  toc.style.position = "fixed";
  toc.style.top = "80px";
  toc.style.right = "20px";
  toc.style.maxHeight = "80vh";
  toc.style.overflowY = "auto";
  toc.style.width = "250px";
  toc.style.padding = "1rem";
  toc.style.fontFamily = "Arial, sans-serif";
  toc.style.zIndex = "1000";
  toc.style.borderRadius = "8px";

  // Create title with checkbox
  const titleBar = document.createElement("div");
  titleBar.id = "toc-title";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;
  checkbox.id = "toc-toggle";

  const label = document.createElement("label");
  label.htmlFor = "toc-toggle";
  label.textContent = "Table of Contents";

  titleBar.appendChild(label);
  titleBar.appendChild(checkbox);
  toc.appendChild(titleBar);

  // Function to build nested TOC
  function buildTOC(headings, startIndex, level) {
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.padding = "0";
    ul.style.margin = "0";

    let i = startIndex;
    while (i < headings.length) {
      const heading = headings[i];
      const currentLevel = parseInt(heading.tagName[1]);
      if (currentLevel < level) break;

      // Ensure each heading has an ID
      if (!heading.id) {
        heading.id = `heading-${i}`;
      }

      const li = document.createElement("li");
      li.style.marginBottom = "0.4rem";
      li.style.marginLeft = level > 1 ? `${(level-1)*1}rem` : "0";

      const a = document.createElement("a");
      a.href = `#${heading.id}`;
      a.textContent = heading.textContent;
      a.style.textDecoration = "none";
      a.style.fontSize = "0.9rem";

      // this is not mandatory
      // it only provide smooth scrolling
      // a.addEventListener("click", function (e) {
      //   e.preventDefault();
      //   document.getElementById(heading.id).scrollIntoView({ behavior: "smooth" });
      //   history.pushState(null, "", `#${heading.id}`);
      // });

      li.appendChild(a);

      // Check if next heading is a child
      const nextIndex = i + 1;
      if (nextIndex < headings.length && parseInt(headings[nextIndex].tagName[1]) > currentLevel) {
        // Has children, add toggle
        const toggle = document.createElement("span");
        toggle.textContent = "▼";
        toggle.style.cursor = "pointer";
        toggle.style.float = "right";
        toggle.style.marginLeft = "0.5rem";
        toggle.style.fontSize = "0.8rem";
        li.appendChild(toggle);

        // Create sub ul
        const subUl = buildTOC(headings, nextIndex, currentLevel + 1);
        subUl.style.display = "block"; // Initially visible
        li.appendChild(subUl);

        // Toggle event
        toggle.addEventListener("click", function() {
          if (subUl.style.display === "none") {
            subUl.style.display = "block";
            toggle.textContent = "▼";
          } else {
            subUl.style.display = "none";
            toggle.textContent = "▶";
          }
        });

        // Skip the children
        i = nextIndex;
        while (i < headings.length && parseInt(headings[i].tagName[1]) > currentLevel) {
          i++;
        }
      } else {
        i++;
      }

      ul.appendChild(li);
    }
    return ul;
  }

  // Create TOC list
  const list = buildTOC(Array.from(headings), 0, 1);
  toc.appendChild(list);
  document.body.appendChild(toc);

  // Toggle visibility of the list when checkbox changes
  checkbox.addEventListener("change", function () {
    toc.style.display = this.checked ? "block" : "none";
  });
});
