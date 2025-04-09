document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) return; // skip creating the TOC on mobile
  
  const headings = document.querySelectorAll("h1, h2, h3");
  if (!headings.length) return;

  const toc = document.createElement("div");
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

  const tocTitle = document.createElement("div");
  tocTitle.textContent = "Table of Contents";
  tocTitle.style.fontWeight = "bold";
  tocTitle.style.marginBottom = "0.5rem";
  toc.appendChild(tocTitle);

  const list = document.createElement("ul");
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
});
