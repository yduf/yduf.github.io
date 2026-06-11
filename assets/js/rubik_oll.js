// rubik_oll.js — draw OLL case diagrams as inline SVG
// Usage: drawOLL('container-id', { back, top, front }, size)
//   top: [[left, c0, c1, c2, right], [left, c0, c1, c2, right], [left, c0, c1, c2, right]]
//   back: ['L','C','R']  — thin strips above the 3 top-face columns
//   front: ['L','C','R'] — thin strips below the 3 top-face columns
//   size: top-face square size in px (default 24)

(function () {
  const STROKE = '#333';
  const SW = 1.2;

  const COLORS = {
    Y: '#FFD500',
    W: '#FFFFFF',
    R: '#B71234',
    O: '#FF5800',
    B: '#0046AD',
    G: '#009B48',
    X: '#AAAAAA'   // grey — undefined / don't-care
  };

  function clr(c) {
    return COLORS[c] || '#AAAAAA';
  }

  function hasSide(side) {
    return side && Array.isArray(side) && side.length === 3;
  }

  window.drawOLL = function (containerId, state, size) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const S = size || 24;                  // top-face square size
    const t = Math.round(2 * S / 5);      // side-strip thin dimension (2/5 of square)
    const GAP = Math.max(2, Math.round(S / 8));  // gap between top squares
    const MG = Math.max(3, Math.round(S / 5));   // margin between side rows and U face
    const RADIUS = Math.max(1, Math.round(S / 8));
    const SR = Math.max(1, Math.round(S / 24));

    const top = state.top;
    const back = state.back;
    const front = state.front;

    const tw = 3 * S + 2 * GAP;   // width of 3×3 top face block
    const th = tw;                // height of 3×3 top face block
    const W = t + MG + tw + MG + t;
    const H = t + MG + th + MG + t;

    // positions — MG separates side strips from U face, GAP separates top squares
    function topX(c) { return t + MG + c * (S + GAP); }
    function topY(r) { return t + MG + r * (S + GAP); }

    let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '"';
    svg += ' viewBox="0 0 ' + W + ' ' + H + '">\n';

    // --- back strips (above top) ---
    if (hasSide(back)) {
      for (let c = 0; c < 3; c++) {
        svg += rect(topX(c), 0, S, t, SR, clr(back[c]), STROKE);
      }
    }

    // --- top rows with left / right strips ---
    for (let r = 0; r < 3; r++) {
      const row = top[r];

      // left strip
      svg += rect(0, topY(r), t, S, SR, clr(row[0]), STROKE);

      // top face squares
      for (let c = 0; c < 3; c++) {
        const col = row[c + 1];
        const isYellow = col === 'Y';
        const fill = isYellow ? '#FFD500' : '#E8E8E8';
        const stroke = isYellow ? STROKE : '#AAA';
        const dash = isYellow ? '' : ' stroke-dasharray="' + Math.round(S / 6) + ',' + Math.round(S / 12) + '"';
        svg += rect(topX(c), topY(r), S, S, RADIUS, fill, stroke, dash);
      }

      // right strip
      svg += rect(t + MG + tw + MG, topY(r), t, S, SR, clr(row[4]), STROKE);
    }

    // --- front strips (below top) ---
    if (hasSide(front)) {
      for (let c = 0; c < 3; c++) {
        svg += rect(topX(c), t + MG + th + MG, S, t, SR, clr(front[c]), STROKE);
      }
    }

    svg += '</svg>';
    container.innerHTML = svg;
  };

  function rect(x, y, w, h, rx, fill, stroke, extra) {
    return '  <rect x="' + x + '" y="' + y +
      '" width="' + w + '" height="' + h +
      '" rx="' + rx + '" ry="' + rx + '"' +
      ' fill="' + fill + '" stroke="' + stroke +
      '" stroke-width="' + SW + '"' +
      (extra || '') + '/>\n';
  }
})();