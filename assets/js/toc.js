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
  toc.style.background = "#fff";
  toc.style.border = "1px solid #ddd";
  toc.style.padding = "1rem";
  toc.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
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

  // Create list container
  const list = document.createElement("ul");
  list.id = "toc-list";
  list.style.listStyle = "none";
  list.style.padding = "0";
  list.style.margin = "0";

  headings.forEach((heading, index) => {
    // Ensure each heading has an ID
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const li = document.createElement("li");
    li.style.marginBottom = "0.4rem";
    li.style.marginLeft = heading.tagName === "H2" ? "1rem" : heading.tagName === "H3" ? "2rem" : "0";

    const a = document.createElement("a");
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    a.style.textDecoration = "none";
    a.style.color = "#007BFF";
    a.style.fontSize = "0.9rem";

    // this is not mandatory
    // it only provide smooth scrolling
    // a.addEventListener("click", function (e) {
    //   e.preventDefault();
    //   document.getElementById(heading.id).scrollIntoView({ behavior: "smooth" });
    //   history.pushState(null, "", `#${heading.id}`);
    // });

    li.appendChild(a);
    list.appendChild(li);
  });

  toc.appendChild(list);
  document.body.appendChild(toc);

  // Toggle visibility of the list when checkbox changes
  checkbox.addEventListener("change", function () {
    toc.style.display = this.checked ? "block" : "none";
  });
});
