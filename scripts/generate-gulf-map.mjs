// Generates the homepage "Our reach" map (public/images/map/gulf-map-region*.webp) in a shaded-relief atlas
// style: blue sea, sand-coloured land, relief shading on the real mountain ranges, pink country borders,
// city dots and labels. Light and dark versions.
//
// Data: Natural Earth 1:50m countries (public domain) via the world-atlas TopoJSON package (ISC).
// Usage:
//   1. Download https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json to any folder.
//   2. node scripts/generate-gulf-map.mjs <path-to-countries-50m.json>
// It prints the pixel positions of the four ReachMap pins (Doha, Riyadh, Abu Dhabi, Kuwait City):
// copy them into reachSection in src/content/home.ts if the view or size changes.
import fs from 'node:fs'

const input = process.argv[2]
if (!input) throw new Error('Usage: node scripts/generate-gulf-map.mjs <countries-50m.json>')
const topology = JSON.parse(fs.readFileSync(input, 'utf8'))

// ---------- view: Mercator projection of the Arabian Peninsula and the Gulf (the original homepage map framing) ----------
const W = 1200
const LON0 = 29.7
const LON1 = 72.3
const LAT0 = 13.53
const LAT1 = 34.68
const mercY = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
const H = Math.round((W * (mercY(LAT1) - mercY(LAT0))) / (((LON1 - LON0) * Math.PI) / 180))
const project = ([lon, lat]) => [
  ((lon - LON0) / (LON1 - LON0)) * W,
  ((mercY(LAT1) - mercY(lat)) / (mercY(LAT1) - mercY(LAT0))) * H,
]
const r1 = (n) => Math.round(n * 10) / 10

// ---------- TopoJSON decoding ----------
const { scale, translate } = topology.transform
const decodedArcs = topology.arcs.map((arc) => {
  let x = 0
  let y = 0
  return arc.map(([dx, dy]) => {
    x += dx
    y += dy
    return [x * scale[0] + translate[0], y * scale[1] + translate[1]]
  })
})
const arcPoints = (i) => (i < 0 ? [...decodedArcs[~i]].reverse() : decodedArcs[i])
const ringPoints = (ring) => ring.flatMap((i, k) => (k === 0 ? arcPoints(i) : arcPoints(i).slice(1)))

// countries / arcs that come near the view
const near = (pts) => pts.some(([lon, lat]) => lon > LON0 - 3 && lon < LON1 + 3 && lat > LAT0 - 3 && lat < LAT1 + 3)
const geometries = topology.objects.countries.geometries.filter((g) => {
  const polys = g.type === 'Polygon' ? [g.arcs] : g.type === 'MultiPolygon' ? g.arcs : []
  return polys.some((poly) => poly.some((ring) => near(ringPoints(ring))))
})

// Douglas–Peucker simplification in pixels (keeps the file small; 0.45px is invisible at display size)
function simplify(pts, tolerance) {
  if (pts.length < 3) return pts
  const keep = new Uint8Array(pts.length)
  keep[0] = keep[pts.length - 1] = 1
  const stack = [[0, pts.length - 1]]
  while (stack.length) {
    const [a, b] = stack.pop()
    const [ax, ay] = pts[a]
    const [bx, by] = pts[b]
    const len = Math.hypot(bx - ax, by - ay) || 1
    let maxD = 0
    let idx = -1
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs((bx - ax) * (ay - pts[i][1]) - (ax - pts[i][0]) * (by - ay)) / len
      if (d > maxD) {
        maxD = d
        idx = i
      }
    }
    if (maxD > tolerance && idx > 0) {
      keep[idx] = 1
      stack.push([a, idx], [idx, b])
    }
  }
  return pts.filter((_, i) => keep[i])
}

// Projected, clamped to just outside the view (anything beyond is invisible anyway), simplified.
const PAD = 12
const clamp = ([x, y]) => [Math.min(W + PAD, Math.max(-PAD, x)), Math.min(H + PAD, Math.max(-PAD, y))]
const toPath = (pts, close) => {
  const all = pts.map((p) => clamp(project(p)))
  // closed rings start and end on the same point, which Douglas–Peucker can't use as a baseline:
  // simplify the two halves separately
  const mid = Math.floor(all.length / 2)
  const projected =
    close && all.length > 4
      ? [...simplify(all.slice(0, mid + 1), 0.45), ...simplify(all.slice(mid), 0.45).slice(1)]
      : simplify(all, 0.45)
  let d = ''
  let last = ''
  projected.forEach(([px, py], k) => {
    const xy = `${r1(px)} ${r1(py)}`
    if (xy === last) return
    d += (k === 0 ? 'M' : 'L') + xy
    last = xy
  })
  return close ? d + 'Z' : d
}

// land = every country polygon; borders = arcs shared by two countries; coast = arcs used once
let land = ''
const arcUse = new Map()
for (const g of geometries) {
  const polys = g.type === 'Polygon' ? [g.arcs] : g.arcs
  for (const poly of polys) {
    for (const ring of poly) {
      land += toPath(ringPoints(ring), true)
      for (const i of ring) {
        const k = i < 0 ? ~i : i
        arcUse.set(k, (arcUse.get(k) ?? 0) + 1)
      }
    }
  }
}
let borders = ''
let coast = ''
for (const [k, n] of arcUse) {
  const pts = decodedArcs[k]
  if (!near(pts)) continue
  if (n > 1) borders += toPath(pts, false)
  else coast += toPath(pts, false)
}

// ---------- mountain ranges (where the relief shading shows) ----------
// [lon, lat] polylines along the main ranges, drawn thick and blurred into a mask
const ranges = [
  { w: 95, pts: [[45.5, 35], [47, 33], [49, 31.5], [51, 30], [53, 29], [55.5, 27.8], [57.5, 27]] }, // Zagros
  { w: 120, pts: [[53, 32.5], [56, 31], [58.5, 29.5], [60.5, 28.5]] }, // central / eastern Iran
  { w: 60, pts: [[57.5, 26.4], [59, 26.1], [60.8, 25.9]] }, // Makran
  { w: 55, pts: [[56.2, 26.1], [56.3, 24.8], [57.4, 23.5], [58.8, 22.6]] }, // Hajar (Oman / UAE)
  { w: 40, pts: [[53, 17.3], [54.5, 17.3], [55.3, 17.6]] }, // Dhofar
  { w: 70, pts: [[35.1, 29.6], [36, 27.6], [37.4, 25.2], [38.9, 22.6], [40.4, 20.1], [42, 18], [43.4, 16.2], [44.2, 15]] }, // Hejaz / Asir
  { w: 90, pts: [[43.6, 16.6], [44.4, 15.4]] }, // Yemen highlands
  { w: 55, pts: [[33.9, 28.6], [35.3, 30.4], [35.7, 32.1]] }, // Sinai / Jordan rift
  { w: 28, pts: [[40.8, 27.6], [42.6, 27.3]] }, // Jabal Shammar
  { w: 24, pts: [[46.2, 26.4], [46.6, 24.4], [46.1, 21.6]] }, // Tuwaiq escarpment
]
const rangePaths = ranges
  .map((r) => `<path d="${toPath(r.pts, false)}" stroke-width="${r.w}"/>`)
  .join('')

// ---------- places ----------
// Cities shown on the map. The four ReachMap pins (Doha, Riyadh, Abu Dhabi, Kuwait City) are drawn by the
// page itself, so they are not labelled here.
const cities = [
  { name: 'Jeddah', lon: 39.1925, lat: 21.4858, dx: -13, anchor: 'end' },
  { name: 'Medina', lon: 39.5692, lat: 24.5247 },
  { name: 'Muscat', lon: 58.3829, lat: 23.588, capital: true },
  { name: "Sana'a", lon: 44.191, lat: 15.3694, capital: true },
  { name: 'Baghdad', lon: 44.3661, lat: 33.3152, capital: true },
  { name: 'Shiraz', lon: 52.5837, lat: 29.5918 },
  { name: 'Cairo', lon: 31.2357, lat: 30.0444, capital: true },
  { name: 'Karachi', lon: 67.0011, lat: 24.8607 },
]
const countries = [
  { name: 'IRAN', lon: 55.5, lat: 31.6 },
  { name: 'IRAQ', lon: 43.4, lat: 31.4 },
  { name: 'EGYPT', lon: 30.1, lat: 24.6, anchor: 'start' },
  { name: 'OMAN', lon: 56.9, lat: 20.7 },
  { name: 'YEMEN', lon: 47.2, lat: 15.9 },
  { name: 'PAKISTAN', lon: 66.8, lat: 28.4 },
]

const pins = {
  QA: [51.531, 25.2854], // Doha
  SA: [46.6753, 24.7136], // Riyadh
  AE: [54.3773, 24.4539], // Abu Dhabi
  KW: [47.9774, 29.3759], // Kuwait City
}

// ---------- palettes ----------
const themes = {
  light: {
    seaTop: '#86b9de',
    seaBottom: '#6fa6d3',
    shallow: '#bfe0f3',
    land: '#efe3c8',
    landEdge: '#e6d6b2',
    shade: [0.42, 0.33, 0.22],
    coast: '#6d9cc3',
    border: '#e0909c',
    city: '#3a3a3a',
    halo: '#f6efdd',
    country: '#9a8a6c',
  },
  dark: {
    seaTop: '#13243e',
    seaBottom: '#0f1d33',
    shallow: '#1f3a5e',
    land: '#2a2f3b',
    landEdge: '#30364300',
    shade: [0.05, 0.06, 0.09],
    coast: '#3b5f8a',
    border: '#9c5d6c',
    city: '#c9d1e0',
    halo: '#2a2f3b',
    country: '#7f889b',
  },
}

function svg(t) {
  const cityMarks = cities
    .map((c) => {
      const [x, y] = project([c.lon, c.lat]).map(r1)
      const mark = c.capital
        ? `<rect x="${r1(x - 5.5)}" y="${r1(y - 5.5)}" width="11" height="11" fill="${t.city}"/>`
        : `<circle cx="${x}" cy="${y}" r="5.4" fill="${t.halo}" stroke="${t.city}" stroke-width="2.2"/>`
      const tx = r1(x + (c.dx ?? 13))
      const ty = r1(y + (c.dy ?? 7))
      return `${mark}<text x="${tx}" y="${ty}" text-anchor="${c.anchor ?? 'start'}">${c.name.replace("'", '&#8217;')}</text>`
    })
    .join('')
  const countryLabels = countries
    .map((c) => {
      const [x, y] = project([c.lon, c.lat]).map(r1)
      return `<text x="${x}" y="${y}" text-anchor="${c.anchor ?? 'middle'}">${c.name}</text>`
    })
    .join('')
  const [sr, sg, sb] = t.shade

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<!-- Generated by scripts/generate-gulf-map.mjs. Natural Earth data (public domain). -->
<defs>
<linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.seaTop}"/><stop offset="1" stop-color="${t.seaBottom}"/></linearGradient>
<filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>
<filter id="wide" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="26"/></filter>
<filter id="relief" x="0" y="0" width="${W}" height="${H}" filterUnits="userSpaceOnUse">
<feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="4" seed="11" result="noise"/>
<feDiffuseLighting in="noise" lighting-color="#fff" surfaceScale="5" diffuseConstant="1" result="lit"><feDistantLight azimuth="315" elevation="42"/></feDiffuseLighting>
<feColorMatrix in="lit" type="matrix" values="0 0 0 0 ${sr}  0 0 0 0 ${sg}  0 0 0 0 ${sb}  -2.8 0 0 0 1.95"/>
</filter>
<path id="landShape" d="${land}"/>
<clipPath id="land"><use href="#landShape"/></clipPath>
<mask id="mountains" maskUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}">
<rect width="${W}" height="${H}" fill="#2b2b2b"/>
<g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" filter="url(#wide)">${rangePaths}</g>
</mask>
</defs>
<rect width="${W}" height="${H}" fill="url(#sea)"/>
<path d="${coast}" fill="none" stroke="${t.shallow}" stroke-width="16" stroke-linejoin="round" filter="url(#soft)"/>
<use href="#landShape" fill="${t.land}"/>
<g clip-path="url(#land)"><rect width="${W}" height="${H}" filter="url(#relief)" mask="url(#mountains)"/></g>
<path d="${coast}" fill="none" stroke="${t.coast}" stroke-width="1.1" stroke-linejoin="round"/>
<path d="${borders}" fill="none" stroke="${t.border}" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
<g font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="23" letter-spacing="6" font-weight="600" fill="${t.country}" opacity="0.85">${countryLabels}</g>
<g font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="20" fill="${t.city}" stroke="${t.halo}" stroke-width="4" paint-order="stroke" stroke-linejoin="round">${cityMarks}</g>
</svg>
`
}

// ---------- render ----------
// The relief shading is an SVG filter: too heavy to ask every visitor's browser to compute, so the SVG is
// rendered once here (headless browser, 2× for sharp text on high-density screens) and saved as WebP.
const { chromium } = await import('playwright')
const sharp = (await import('sharp')).default
const os = await import('node:os')
const path = await import('node:path')

const browser = await chromium.launch({ channel: 'msedge' })
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 })
// New file name whenever the view changes: Next's image optimizer and browsers cache images by URL.
for (const [name, theme] of [['gulf-map-region', themes.light], ['gulf-map-region-dark', themes.dark]]) {
  const svgFile = path.join(os.tmpdir(), `${name}.svg`)
  fs.writeFileSync(svgFile, svg(theme))
  await page.goto('file:///' + svgFile.replace(/\\/g, '/'))
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: W, height: H }, timeout: 180000 })
  const out = `public/images/map/${name}.webp`
  await sharp(png).webp({ quality: 80 }).toFile(out)
  console.log(out, Math.round(fs.statSync(out).size / 1024) + ' KB', `(svg ${Math.round(fs.statSync(svgFile).size / 1024)} KB)`)
}
await browser.close()

console.log(`map ${W}x${H} (rendered at ${W * 2}x${H * 2}), countries ${geometries.length}`)
console.log('ReachMap pin positions for src/content/home.ts:')
for (const [code, p] of Object.entries(pins)) {
  const [x, y] = project(p).map((n) => Math.round(n))
  console.log(`  ${code}: x ${x}, y ${y}`)
}
