/**
 * Animated SVG flames with real SMIL path morphing.
 * Each flame shape smoothly interpolates between 3 states:
 *   normal → taller/thinner → shorter/wider → normal
 * Layered by color: deep red (outer) → orange → gold → bright core.
 */

const BASE = 300; // bottom of the viewBox
const VIEW_W = 800;

const FLAMES = [
  // Outer dark flames — widest, slowest
  { cx: 60, h: 200, w: 72, color: '#9A2000', dur: 2.4, delay: 0 },
  { cx: 180, h: 240, w: 80, color: '#9A2000', dur: 2.7, delay: 0.3 },
  { cx: 330, h: 260, w: 90, color: '#9A2000', dur: 2.2, delay: 0.1 },
  { cx: 480, h: 235, w: 78, color: '#9A2000', dur: 2.5, delay: 0.4 },
  { cx: 630, h: 210, w: 72, color: '#9A2000', dur: 2.3, delay: 0.2 },
  { cx: 740, h: 190, w: 68, color: '#9A2000', dur: 2.6, delay: 0.15 },

  // Middle orange flames
  { cx: 100, h: 180, w: 58, color: '#C44D04', dur: 1.9, delay: 0.15 },
  { cx: 230, h: 215, w: 66, color: '#E8650A', dur: 1.7, delay: 0.35 },
  { cx: 380, h: 235, w: 72, color: '#E8650A', dur: 2.0, delay: 0.05 },
  { cx: 530, h: 205, w: 62, color: '#C44D04', dur: 1.8, delay: 0.25 },
  { cx: 680, h: 175, w: 56, color: '#E8650A', dur: 1.9, delay: 0.45 },

  // Inner gold flames
  { cx: 160, h: 165, w: 44, color: '#D4A017', dur: 1.4, delay: 0.2 },
  { cx: 300, h: 195, w: 52, color: '#F5C842', dur: 1.5, delay: 0.1 },
  { cx: 450, h: 180, w: 48, color: '#D4A017', dur: 1.6, delay: 0.3 },
  { cx: 600, h: 155, w: 42, color: '#F5C842', dur: 1.3, delay: 0.4 },

  // Core bright flames — thinnest, fastest
  { cx: 260, h: 155, w: 32, color: '#FFE4A0', dur: 1.1, delay: 0.15 },
  { cx: 400, h: 165, w: 34, color: '#FFE4A0', dur: 1.2, delay: 0.25 },
  { cx: 540, h: 145, w: 30, color: '#FFE4A0', dur: 1.0, delay: 0.35 },
];

function makePath(cx, h, w, variation) {
  const hw = w / 2;
  let hMod, wMod;
  if (variation === 0) {
    hMod = 1;
    wMod = 1;
  } else if (variation === 1) {
    hMod = 1.18;
    wMod = 0.65;
  } else {
    hMod = 0.82;
    wMod = 1.25;
  }

  const top = BASE - h * hMod;
  const w2 = hw * wMod;

  return [
    `M ${cx},${BASE}`,
    `C ${cx - w2},${BASE - h * 0.3} ${cx - w2 * 0.6},${BASE - h * 0.7} ${cx},${top}`,
    `C ${cx + w2 * 0.6},${BASE - h * 0.7} ${cx + w2},${BASE - h * 0.3} ${cx},${BASE}`,
    'Z',
  ].join(' ');
}

export default function AnimatedFlames() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 pointer-events-none"
      style={{ height: '65%' }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${BASE}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
        style={{ opacity: 0.14, filter: 'blur(3px)' }}
      >
        <defs>
          <filter id="flameGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {FLAMES.map((f, i) => {
          const d1 = makePath(f.cx, f.h, f.w, 0);
          const d2 = makePath(f.cx, f.h, f.w, 1);
          const d3 = makePath(f.cx, f.h, f.w, 2);

          return (
            <path key={i} fill={f.color} filter="url(#flameGlow)">
              <animate
                attributeName="d"
                values={`${d1};${d2};${d3};${d1}`}
                dur={`${f.dur}s`}
                begin={`${f.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.75;0.6"
                dur={`${f.dur * 0.7}s`}
                begin={`${f.delay}s`}
                repeatCount="indefinite"
              />
            </path>
          );
        })}
      </svg>
    </div>
  );
}
