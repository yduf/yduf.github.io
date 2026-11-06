---
title: "Lemmings 🚶"
tags: games
---
> [Walker playground](https://markblah.github.io/lemmings/) / [HN](https://news.ycombinator.com/item?id=50375354)

<!-- Wrap the playground markup in a <div class="lemmings"> so these styles only apply here, not to the rest of the page -->
<style>
  .lemmings {
    --ink: #333;
    --block: #c44;
    --plat: #48a;
    font: 16px/1.5 system-ui;
    padding: 24px 4% 0;
    background: #fafafa;
    color: #222;
  }
  .lemmings h1, .lemmings h2 { margin: 0 0 8px; }
  .lemmings section { position: relative; margin: 0 0 120px; }
  .lemmings .hint { color: #666; max-width: 60ch; }
  .lemmings .floor { border-top: 3px solid var(--ink); }

  /* every step is 8px = 2 sprite px, low enough to walk up; the tall ones block */
  .lemmings .stairs { display: flex; align-items: flex-end; height: 140px; }
  .lemmings .stairs div { flex: 1; background: var(--ink); }
  .lemmings .stairs.tall div:nth-child(odd) { background: var(--block); }

  /* platforms sized in % so they move when the window is resized */
  .lemmings .sky { height: 520px; }
  .lemmings .sky div { position: absolute; height: 6px; background: var(--plat); border-radius: 3px; }

  .lemmings .pit { display: flex; gap: 18%; align-items: flex-end; height: 80px; }
  .lemmings .pit div { flex: 1; height: 12px; background: var(--ink); }

  .lemmings .walls { display: flex; justify-content: space-between; align-items: flex-end; height: 160px; }
  .lemmings .walls div { width: 10px; background: var(--block); }

  .lemmings .cards { display: flex; flex-wrap: wrap; gap: 24px; }
  .lemmings .card { flex: 1 1 220px; border: 2px solid var(--ink); border-radius: 6px; padding: 12px 16px; }
  .lemmings .card button { margin-top: 8px; }

  .lemmings .cage { border: 3px solid var(--ink); height: 200px; display: flex; align-items: center; justify-content: center; }
  .lemmings .cage img { width: 30%; height: 50px; }
  .lemmings .prose { column-width: 28ch; column-gap: 32px; }
  .lemmings .gh { float: right; display: flex; gap: 8px; margin: 0 0 8px 16px; }
</style>

<!-- walker engine from https://github.com/MarkBlah/lemmings (https://markblah.github.io/lemmings/walker.min.js) -->
<script src="{{ '/assets/js/lemmings/walker.min.js' | relative_url }}"></script>
<script>
  // add one walker every second
  setInterval(function () {
    if (window.__walker) window.__walker.add();
  }, 1000);
</script>