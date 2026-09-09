const fs = require('fs');
const { PNG } = require('pngjs');

const files = process.argv.slice(2);
for (const file of files) {
  const png = PNG.sync.read(fs.readFileSync(file));
  const { data, width, height } = png;
  function px(x, y) {
    const i = (y * width + x) * 4;
    return [data[i], data[i + 1], data[i + 2]];
  }
  let ox = 0, oy = 0, oc = 0;
  // collect all colored pixels
  const blue = [], green = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b] = px(x, y);
      const isOrange = r > 200 && g > 120 && g < 185 && b < 60;
      if (isOrange) { ox += x; oy += y; oc++; }
      else if (b > 180 && g < 60 && r < 60) blue.push([x, y]);
      else if (g > 110 && r < 60 && b < 60) green.push([x, y]);
    }
  }
  const C = { x: ox / oc, y: oy / oc };
  function handAngle(pts, name) {
    // principal axis via moments of pixels (excluding near-center 20px)
    let mx = 0, my = 0, n = pts.length;
    pts.forEach(([x, y]) => { mx += x; my += y; });
    mx /= n; my /= n;
    let sxx = 0, sxy = 0, syy = 0;
    pts.forEach(([x, y]) => { sxx += (x - mx) ** 2; sxy += (x - mx) * (y - my); syy += (y - my) ** 2; });
    const theta = 0.5 * Math.atan2(2 * sxy, sxx - syy);
    // direction: pick the end farther from center
    let dx = Math.cos(theta), dy = Math.sin(theta);
    const endA = { x: mx + dx * 100, y: my + dy * 100 };
    const endB = { x: mx - dx * 100, y: my - dy * 100 };
    const dA = Math.hypot(endA.x - C.x, endA.y - C.y);
    const dB = Math.hypot(endB.x - C.x, endB.y - C.y);
    const dir = dA > dB ? 1 : -1;
    let deg = (Math.atan2(dir * dx, -(dir * dy)) * 180 / Math.PI + 360) % 360;
    console.log(`  ${name}: centroid=${mx.toFixed(2)},${my.toFixed(2)} axis-angle=${deg.toFixed(2)} center=${C.x.toFixed(2)},${C.y.toFixed(2)}`);
  }
  console.log(file);
  handAngle(blue, 'minutes(blue)');
  handAngle(green, 'seconds(green)');
}
