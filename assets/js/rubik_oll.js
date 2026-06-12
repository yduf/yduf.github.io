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

  // ---- polygon helper ----
  function poly(pts, fill, stroke, extra) {
    var s = '  <polygon points="';
    for (var i = 0; i < pts.length; i += 2) {
      if (i > 0) s += ' ';
      s += pts[i] + ',' + pts[i+1];
    }
    s += '" fill="' + fill + '" stroke="' + stroke +
      '" stroke-width="' + SW + '"';
    if (extra) s += extra;
    s += '/>\n';
    return s;
  }

  // ============================================================
  //  drawF2L  —  isometric F2L diagram (U + F + R faces)
  // ============================================================
  //
  // state format:
  //   top:  3×3  U-face stickers  (Y = yellow = correctly placed on top)
  //   side: 3 rows × [front_row, right_row]
  //         each row =  [c0, c1, c2]   (3 stickers, no strip)
  //
  window.drawF2L = function (containerId, state, size) {
    var ctr = document.getElementById(containerId);
    if (!ctr) return;

    var S   = size || 24;
    var dx  = Math.round(S * 0.866);          // cos30 ≈ 0.866
    var dy  = Math.round(S * 0.5);            // sin30 = 0.5
    var MG  = Math.max(3, Math.round(S / 5)); // margin between faces

    var top  = state.top;
    var side = state.side;

    // ---- isometric projection ----
    // Cube coords: x(0..3) left→right, y(0..3) front→back, z(0..3) bottom→top
    // screen: sx = (x - y) * dx,  sy = -z*S + (x + y) * dy
    function sx(x, y) { return (x - y) * dx; }
    function sy(x, y, z) { return -z * S + (x + y) * dy; }

    // origin so the whole shape is centered with enough margin
    // U back-upper-left corner  iso(0,3,3) = (-3dx, -3S + 3dy)
    // F front-bottom-left     iso(0,0,0) = (0, 0)
    // R front-bottom-right    iso(3,0,0) = (3dx, 0)
    var ox = 3 * dx + MG;
    var oy = 3 * S + MG;

    var WW = 6 * dx + 2 * MG;
    var HH = oy + 3 * S + MG;
    var svg = '<svg xmlns="http://www.w3.org/2000/svg"' +
      ' width="' + WW + '" height="' + HH + '"' +
      ' viewBox="0 0 ' + WW + ' ' + HH + '">\n';

    // helper: sticker colour
    function stkFill(col, isTop) {
      if (isTop && col !== 'Y') return '#E8E8E8';
      return clr(col);
    }
    function stkStroke(col, isTop) {
      if (isTop && col !== 'Y') return '#AAA';
      return STROKE;
    }
    function stkDash(col, isTop) {
      if (isTop && col !== 'Y') return ' stroke-dasharray="' + Math.round(S/6) + ',' + Math.round(S/12) + '"';
      return '';
    }

    // ---- F face  back plane (y=3, x=c → left side of diamond) ----
    // shares vertical edge (x=3,y=3,z∈[0,3]) with R face
    // c=0 → leftmost (x=0), c=2 → rightmost near shared edge (x=2..3)
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        var col = side[r][0][c];
        var y = 3;
        var x0 = c;                 // left
        var x1 = c + 1;             // right (x=3 at shared edge when c=2)
        var z0 = 3 - r, z1 = 2 - r;
        // vertex order: top-near(right) → top-far(left) → bottom-far → bottom-near
        var pts = [
          ox + sx(x1, y), oy + sy(x1, y, z0),
          ox + sx(x0, y), oy + sy(x0, y, z0),
          ox + sx(x0, y), oy + sy(x0, y, z1),
          ox + sx(x1, y), oy + sy(x1, y, z1)
        ];
        svg += poly(pts, stkFill(col, false), stkStroke(col, false), stkDash(col, false));
      }
    }

    // ---- R face  (x=3, z = 3-r, y = 3-c) — drawn second ----
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        var col = side[r][1][c];
        var x = 3;
        var y0 = 3 - c, y1 = 2 - c;
        var z0 = 3 - r, z1 = 2 - r;
        var pts = [
          ox + sx(x, y1), oy + sy(x, y1, z0),
          ox + sx(x, y0), oy + sy(x, y0, z0),
          ox + sx(x, y0), oy + sy(x, y0, z1),
          ox + sx(x, y1), oy + sy(x, y1, z1)
        ];
        svg += poly(pts, stkFill(col, false), stkStroke(col, false), stkDash(col, false));
      }
    }

    // ---- U face  (z=3, y = 2-r, x = c) — drawn last (top layer) ----
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        var col = top[r][c];
        var x0 = r, x1 = r + 1;
        var y0 = 2 - c, y1 = 3 - c;
        var z = 3;
        var pts = [
          ox + sx(x0, y1), oy + sy(x0, y1, z),
          ox + sx(x1, y1), oy + sy(x1, y1, z),
          ox + sx(x1, y0), oy + sy(x1, y0, z),
          ox + sx(x0, y0), oy + sy(x0, y0, z)
        ];
        svg += poly(pts, clr(col), STROKE, '');
      }
    }

    svg += '</svg>';
    ctr.innerHTML = svg;
  };
})();
