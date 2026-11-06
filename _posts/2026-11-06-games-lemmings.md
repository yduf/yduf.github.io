---
title: "Lemmings 🚶"
tags: games
---
> [Walker playground](https://markblah.github.io/lemmings/) / [HN](https://news.ycombinator.com/item?id=50375354)

<div id="walker-counter">0 walkers</div>

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

<!-- live walker counter -->
<style>
  #walker-counter {
    position: fixed;
    top: 80px;
    right: 20px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    font: 600 14px/1 system-ui, -apple-system, sans-serif;
    z-index: 2147483646; /* just under the walker overlay (2147483647) */
    pointer-events: none;
    user-select: none;
  }
</style>

<!-- walker engine from https://github.com/MarkBlah/lemmings (https://markblah.github.io/lemmings/walker.min.js) -->
<script src="{{ '/assets/js/lemmings/walker.min.js' | relative_url }}"></script>
<script>
  (function () {
    var MAX_WALKERS = 100;

    // add one walker every second, up to MAX_WALKERS
    setInterval(function () {
      if (!window.__walker) return;
      if (walkerCount() >= MAX_WALKERS) return;
      window.__walker.add();
    }, 1000);

    // show how many walkers are on the page: the engine keeps one .wrap
    // element per walker inside an open shadow root on a direct <html> child
    var counter = document.getElementById('walker-counter');
    var lastCount = -1;

    function walkerCount() {
      var host = Array.prototype.find.call(document.documentElement.children, function (el) {
        return el.shadowRoot && el.tagName === 'DIV';
      });
      return host ? host.shadowRoot.querySelectorAll('.wrap').length : 0;
    }

    function updateCounter() {
      if (!counter) return;
      var n = walkerCount();
      if (n !== lastCount) {
        lastCount = n;
        counter.textContent = n + (n === 1 ? ' walker' : ' walkers');
      }
    }

    setInterval(updateCounter, 500);
    updateCounter();
  })();
</script>