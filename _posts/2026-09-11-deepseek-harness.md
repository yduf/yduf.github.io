---
title: "Deepseek 🐋"
tags: agentic-AI harness
---
> [ Qwen3.8 27B: Same Model, Three Harnesses, One Clear Winner ](https://www.youtube.com/watch?v=sSySOPGNdjw&t=1210s) - 1. Deepseek, 2. Pi, 3. Hermes  - [github](https://github.com/deepseek-ai/deepseek-harness?utm_source=chatgpt.com#deepseek-harness)


# [API Pricing ⮺](https://chatgpt.com/share/6ae715a5-22ec-83eb-be69-848e828f67dd)

## [Off-peak ⮺](https://deepseek-off-peak-hours.sivaram.dev/index.do)


<div id="deepseek-day" class="ds-day">
  <div class="ds-top">
    <div>
      <div class="ds-title">Your day, priced</div>
      <div class="ds-date" id="ds-date"></div>
    </div>
    <div class="ds-current" id="ds-current">Checking...</div>
  </div>

  <div class="ds-controls">
    <button type="button" id="ds-prev" aria-label="Previous day">‹</button>
    <input type="date" id="ds-picker">
    <button type="button" id="ds-next-day" aria-label="Next day">›</button>
    <button type="button" id="ds-today">Today</button>
  </div>

  <div class="ds-clock">
    <span id="ds-time">--:--</span>
    <span>FRANCE · EUROPE/PARIS</span>
  </div>

  <div class="ds-timeline-wrap">
    <div class="ds-timeline" id="ds-timeline">
      <div class="ds-marker" id="ds-marker">
        <div class="ds-marker-label">NOW</div>
        <div class="ds-marker-line"></div>
      </div>
    </div>
    <div class="ds-hours">
      <span>00:00</span>
      <span>06:00</span>
      <span>12:00</span>
      <span>18:00</span>
      <span>24:00</span>
    </div>
  </div>

  <div class="ds-legend">
    <span><i class="ds-dot green"></i> Off-peak</span>
    <span><i class="ds-dot red"></i> Peak</span>
    <span id="ds-next"></span>
  </div>

  <div class="ds-prices">
    <div class="ds-price-card offpeak" id="ds-off-card">
      <div class="ds-price-heading">OFF-PEAK</div>
      <div class="ds-price-main">$0.15</div>
      <div class="ds-price-unit">Input / 1M tokens</div>
      <div class="ds-price-detail">
        <span>Cached input</span>
        <strong>$0.003</strong>
      </div>
      <div class="ds-price-detail">
        <span>Output</span>
        <strong>$0.60</strong>
      </div>
    </div>

    <div class="ds-price-card peak" id="ds-peak-card">
      <div class="ds-price-heading">PEAK</div>
      <div class="ds-price-main">$0.30</div>
      <div class="ds-price-unit">Input / 1M tokens</div>
      <div class="ds-price-detail">
        <span>Cached input</span>
        <strong>$0.006</strong>
      </div>
      <div class="ds-price-detail">
        <span>Output</span>
        <strong>$1.20</strong>
      </div>
    </div>
  </div>

  <div class="ds-source">
    Prices in USD per million tokens ·
    <a href="https://api-docs.deepseek.com/quick_start/pricing/"
       target="_blank" rel="noopener">DeepSeek official pricing</a>
  </div>
</div>

<style>
.ds-day {
  --green: #23965b;
  --green-bg: #e2f4e9;
  --red: #d64d4d;
  --red-bg: #fbe6e4;
  --muted: #888;
  color: inherit;
  border: 1px solid var(--ds-border, #ddd);
  border-radius: 14px;
  padding: 20px;
  margin: 24px 0;
  font-family: inherit;
}
.ds-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.ds-title {
  font-size: 1.35rem;
  font-weight: 750;
}
.ds-date {
  color: var(--muted);
  font-size: .85rem;
  margin-top: 4px;
}
.ds-current {
  font-size: .75rem;
  font-weight: 750;
  padding: 7px 11px;
  border-radius: 30px;
  background: var(--green-bg);
  color: var(--green);
  white-space: nowrap;
}
.ds-current.peak {
  background: var(--red-bg);
  color: var(--red);
}
.ds-current.future {
  background: #e8e8e8;
  color: #555;
}
.ds-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  flex-wrap: wrap;
}
.ds-controls button,
.ds-controls input {
  font: inherit;
  font-size: .85rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  background: transparent;
  color: inherit;
  padding: 7px 10px;
}
.ds-controls button {
  cursor: pointer;
}
.ds-controls button:hover {
  background: #8882;
}
.ds-controls input {
  min-width: 0;
}
.ds-clock {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 24px 0 14px;
}
.ds-clock span:first-child {
  font-size: 1.9rem;
  font-weight: 750;
  font-variant-numeric: tabular-nums;
}
.ds-clock span:last-child {
  font-size: .65rem;
  letter-spacing: .7px;
  color: var(--muted);
}
.ds-timeline-wrap {
  padding-top: 17px;
}
.ds-timeline {
  height: 35px;
  display: flex;
  position: relative;
  border-radius: 7px;
  overflow: visible;
  background: #ddd;
}
.ds-segment {
  height: 100%;
  flex-shrink: 0;
}
.ds-segment.green { background: var(--green); }
.ds-segment.red { background: var(--red); }
.ds-marker {
  position: absolute;
  z-index: 2;
  top: -17px;
  bottom: -7px;
  width: 2px;
  background: #222;
  transform: translateX(-1px);
  pointer-events: none;
}
.ds-marker-label {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  font-weight: 800;
  background: #222;
  color: white;
  padding: 3px 5px;
  border-radius: 3px;
}
.ds-marker-line {
  position: absolute;
  top: 18px;
  bottom: 0;
  width: 2px;
  background: #222;
}
.ds-hours {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: .7rem;
  margin-top: 11px;
}
.ds-legend {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  font-size: .75rem;
  margin: 17px 0 21px;
}
.ds-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ds-legend span:last-child {
  color: var(--muted);
  margin-left: auto;
}
.ds-dot {
  width: 9px;
  height: 9px;
  border-radius: 3px;
}
.ds-dot.green { background: var(--green); }
.ds-dot.red { background: var(--red); }
.ds-prices {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.ds-price-card {
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 15px;
  transition: opacity .2s;
  opacity: .65;
}
.ds-price-card.active { opacity: 1; }
.ds-price-card.offpeak { background: var(--green-bg); }
.ds-price-card.offpeak.active { border-color: var(--green); }
.ds-price-card.peak { background: var(--red-bg); }
.ds-price-card.peak.active { border-color: var(--red); }
.ds-price-heading {
  font-size: .75rem;
  font-weight: 800;
}
.ds-price-main {
  font-size: 1.8rem;
  font-weight: 800;
  margin-top: 8px;
}
.ds-price-unit {
  font-size: .72rem;
  opacity: .7;
  margin-bottom: 14px;
}
.ds-price-detail {
  display: flex;
  justify-content: space-between;
  gap: 6px;
  font-size: .8rem;
  padding-top: 7px;
  margin-top: 7px;
  border-top: 1px solid #8884;
}
.ds-source {
  font-size: .72rem;
  color: var(--muted);
  margin-top: 17px;
}
.ds-source a { color: inherit; }
@media (max-width: 420px) {
  .ds-day { padding: 14px; }
  .ds-price-card { padding: 11px; }
  .ds-price-main { font-size: 1.5rem; }
}
</style>

<script>
(function () {
  const root = document.getElementById('deepseek-day');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';

  const $ = id => root.querySelector('#ds-' + id);
  const zone = 'Europe/Paris';

  function franceParts(date) {
    const result = {};
    new Intl.DateTimeFormat('en-GB', {
      timeZone: zone,
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(date).forEach(x => result[x.type] = x.value);
    return result;
  }

  function localDateKey(date) {
    const p = franceParts(date);
    return p.year + '-' + p.month + '-' + p.day;
  }

  function addDays(key, amount) {
    const [y,m,d] = key.split('-').map(Number);
    const date = new Date(Date.UTC(y,m-1,d+amount));
    return date.toISOString().slice(0,10);
  }

  // Convert France local midnight to a UTC Date.
  function localMidnight(key) {
    const [y,m,d] = key.split('-').map(Number);
    const target = Date.UTC(y,m-1,d,0,0);
    let guess = new Date(target);

    for (let i=0; i<4; i++) {
      const p = franceParts(guess);
      const shown = Date.UTC(
        +p.year, +p.month-1, +p.day,
        +p.hour, +p.minute
      );
      guess = new Date(guess.getTime() + target - shown);
    }
    return guess;
  }

  function isPeak(date) {
    const day = date.getUTCDay();
    const hour = date.getUTCHours();

    return day >= 1 && day <= 5 &&
      ((hour >= 1 && hour < 4) ||
       (hour >= 6 && hour < 10));
  }

  let selectedDate = localDateKey(new Date());

  function render() {
    const now = new Date();
    const today = localDateKey(now);
    const isToday = selectedDate === today;
    const start = localMidnight(selectedDate);
    const end = localMidnight(addDays(selectedDate, 1));
    const duration = end - start;

    $('picker').value = selectedDate;
    $('date').textContent = new Intl.DateTimeFormat('en-GB', {
      timeZone: zone,
      weekday: 'long', day: 'numeric',
      month: 'long', year: 'numeric'
    }).format(start).toUpperCase();

    const selectedNoon = new Date(start.getTime() + duration/2);
    const weekday = selectedNoon.getUTCDay();
    const isHolidayUnknown = false;

    const peak = isToday ? isPeak(now) : null;

    $('current').textContent = isToday
      ? (peak ? '● PEAK PRICING' : '● OFF-PEAK PRICING')
      : 'SCHEDULE PREVIEW';

    $('current').className = 'ds-current' +
      (isToday && peak ? ' peak' : '') +
      (!isToday ? ' future' : '');

    $('time').textContent = isToday
      ? new Intl.DateTimeFormat('en-GB', {
          timeZone: zone, hour: '2-digit', minute: '2-digit'
        }).format(now)
      : '24h schedule';

    const timeline = $('timeline');
    timeline.querySelectorAll('.ds-segment').forEach(x => x.remove());

    // Draw the timeline in UTC minutes, displayed in France local time.
    const steps = Math.ceil(duration / 60000);
    let segmentStart = 0;
    let previous = isPeak(start);

    for (let minute = 1; minute <= steps; minute++) {
      const instant = new Date(
        start.getTime() + Math.min(minute*60000,duration)
      );
      const current = minute === steps
        ? !previous
        : isPeak(instant);

      if (current !== previous) {
        const segment = document.createElement('div');
        segment.className = 'ds-segment ' +
          (previous ? 'red' : 'green');
        segment.style.width =
          ((minute*60000-segmentStart)/duration*100) + '%';
        timeline.insertBefore(segment,$('marker'));
        segmentStart = minute*60000;
        previous = current;
      }
    }

    if (segmentStart < duration) {
      const segment = document.createElement('div');
      segment.className = 'ds-segment ' +
        (previous ? 'red' : 'green');
      segment.style.width =
        ((duration-segmentStart)/duration*100) + '%';
      timeline.insertBefore(segment,$('marker'));
    }

    const marker = $('marker');
    if (isToday) {
      const position = Math.max(0,Math.min(100,
        (now-start)/duration*100));
      marker.style.display = '';
      marker.style.left = position + '%';
    } else {
      marker.style.display = 'none';
    }

    $('off-card').classList.toggle('active',
      isToday && !peak);
    $('peak-card').classList.toggle('active',
      isToday && peak);

    // Find next pricing transition within the selected date.
    let transitions = [];
    let last = isPeak(start);

    for (let minute=1; minute<=steps; minute++) {
      const t = new Date(start.getTime()+minute*60000);
      if (minute === steps) break;
      const current = isPeak(t);
      if (current !== last) {
        transitions.push(t);
        last = current;
      }
    }

    if (isToday) {
      const next = transitions.find(t => t > now);
      $('next').textContent = next
        ? 'Next change ' + new Intl.DateTimeFormat('en-GB', {
            timeZone: zone, hour: '2-digit', minute: '2-digit'
          }).format(next)
        : 'No more changes today';
    } else {
      $('next').textContent =
        transitions.length + ' pricing changes';
    }
  }

  function changeDate(amount) {
    selectedDate = addDays(selectedDate, amount);
    render();
  }

  $('picker').addEventListener('change', function () {
    if (this.value) {
      selectedDate = this.value;
      render();
    }
  });

  $('prev').addEventListener('click', () => changeDate(-1));
  $('next-day').addEventListener('click', () => changeDate(1));

  $('today').addEventListener('click', () => {
    selectedDate = localDateKey(new Date());
    render();
  });

  render();
  setInterval(render, 30000);
})();
</script>

| Usage                        | DeepSeek Direct (Off-peak) | DeepSeek Direct (Peak) | ClinePass Reference |
| ---------------------------- | -------------------------- | ---------------------- | ------------------- |
| Input (per 1M tokens)        | $0.15                      | $0.30                  | $0.30               |
| Cached input (per 1M tokens) | $0.003                     | $0.006                 | $0.006              |
| Output (per 1M tokens)       | $0.60                      | $1.20                  | $1.20               |

Prices in USD per 1 million tokens.


# Harness
_It is built on an everything-is-a-plugin architecture and powered by Cordis, whose design is described in  [A Programming Paradigm for Spatiotemporal Composability](https://arxiv.org/abs/2608.25512)._

## VSCode

- [DeepSeek Harness for VS Code](https://marketplace.visualstudio.com/items?itemName=skymecode.deepseek-harness-for-vscode&utm_source=chatgpt.com)

## Setup

```bash
$ node --expose-internals \
  /home/yves/.npm/_npx/1e7f6d9597241db0/node_modules/@deepseek-ai/dsh/lib/bin.js \
  web --no-open # --no-open prevent opening the page in browser
```

## LM Studio

To use LM Studio with this harness you have to configure a custom adapter.

<div class="encart blue" markdown="1">
**need to put a password in the API key**
It won't be used, but it has to be filled so the harness work.

<pre>
Provider ID:   lmstudio  
Display name:  LM Studio  
Base URL:      http://yves-lab:1234/v1  
API protocol:  openai-completions  
API key:       generate a password
</pre>
</div>

# v4.1 Flash (LLM)

- [DeepSeek choque encore toute l'industrie de l'IA (actu IA)](https://www.youtube.com/watch?v=nqFhLLELd4o)
  - KV Cache sur SSD

## Running Local
- [ Every Way to Get 256 GB of VRAM for Local AI at Full Context ](https://www.youtube.com/watch?v=JPHT9AvoPSA){: .reference-only}

## 12GB GPU
- [ Run FULL DeepSeek v4.1 Flash on a 12GB GPU ](https://www.youtube.com/watch?v=_gIEJHWAG34) - at 7 token / s.

## see also
- [DeepInfer](https://github.com/deepseek-ai/DeepInfer)