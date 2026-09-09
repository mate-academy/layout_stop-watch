const fs = require('fs');
const { PNG } = require('pngjs');

function analyze(file) {
  const png = PNG.sync.read(fs.readFileSync(file));
  const { data, width, height } = png;
  function px(x, y) {
    const i = (y * width + x) * 4;
    return [data[i], data[i + 1], data[i + 2]];
  }
  // Center = orange pixel cluster
  let ox = 0, oy = 0, oc = 0;
  let bx = 0, by = 0, bc = 0;
  let gx = 0, gy = 0, gc = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b] = px(x, y);
      const isOrange = r > 200 && g > 120 && g < 185 && b < 60;
      const isBlue = b > 180 && g < 60 && r < 60;
      const isGreen = g > 110 && r < 60 && b < 60;
      if (isOrange) { ox += x; oy += y; oc++; }
      else if (isBlue) { bx += x; by += y; bc++; }
      else if (isGreen) { gx += x; gy += y; gc++; }
    }
  }
  function centroid(x, y, c) {
    if (!c) return { x: 0, y: 0, c: 0 };
    const cx = x / c, cy = y / c;
    return { x: cx, y: cy, c };
  }
  const C = centroid(ox, oy, oc);
  const Bc = centroid(bx, by, bc);
  const Gc = centroid(gx, gy, gc);
  // hand tip: farthest pixel of each color from center
  function tip(col) {
    let bestR = 0, bestX = 0, bestY = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const [r, g, b] = px(x, y);
        const isC = col === 'blue' ? (b > 180 && g < 60 && r < 60) : (g > 110 && r < 60 && b < 60);
        if (isC) {
          const d = Math.hypot(x - C.x, y - C.y);
          if (d > bestR) { bestR = d; bestX = x; bestY = y; }
        }
      }
    }
    const dx = bestX - C.x, dy = bestY - C.y;
    const deg = ((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360;
    return { deg, len: bestR };
  }
  console.log(file);
  console.log('  center orange:', JSON.stringify(C));
  console.log('  blue centroid:', JSON.stringify(Bc), 'tip:', JSON.stringify(tip('blue')));
  console.log('  green centroid:', JSON.stringify(Gc), 'tip:', JSON.stringify(tip('green')));
}

analyze(process.argv[2]);
