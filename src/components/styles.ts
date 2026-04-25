export const FONTS =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&family=JetBrains+Mono:wght@400;600&display=swap";

export function globalStyles(dark: boolean): string {
  return `
@import url('${FONTS}');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:      ${dark ? '#100a04' : '#f7f0e8'};
  --bg2:     ${dark ? '#1a0e05' : '#ede4d6'};
  --surface: ${dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'};
  --border:  ${dark ? 'rgba(232,200,154,0.12)' : 'rgba(107,58,31,0.14)'};
  --text:    ${dark ? '#f0e6d6' : '#2d1506'};
  --muted:   ${dark ? 'rgba(240,230,214,0.62)' : 'rgba(45,21,6,0.58)'};
  --gold:    #c8813a;
  --cream:   #e8c99a;
  --coffee:  #6b3a1f;
  --espresso:${dark ? '#100a04' : '#f7f0e8'};
}

/* Base — DM Sans for body, JetBrains only for labels/code */
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  overflow-x: hidden;
  transition: background .3s, color .3s;
}

/* Utility classes */
.pf  { font-family: 'Playfair Display', serif; }
.mono{ font-family: 'JetBrains Mono', monospace; }

/* Shared section heading */
.s-head { display:flex; align-items:baseline; gap:16px; margin-bottom:64px; }
.s-num  { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:2px; color:var(--gold); opacity:.55; }
.s-title{
  font-family:'Playfair Display',serif;
  font-size:clamp(28px,4.5vw,48px);
  font-weight:900; color:var(--text);
}
.s-title em { font-style:italic; color:var(--gold); }
.s-rule { flex:1; height:1px; background:var(--border); }

/* Sub-heading */
.sub-head { display:flex; align-items:baseline; gap:12px; margin-bottom:24px; }
.sub-t    { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:var(--text); }

/* Shared buttons */
.btn-fill {
  font-family:'JetBrains Mono',monospace;
  font-size:11px; letter-spacing:3px; text-transform:uppercase;
  background:var(--gold); color:#fff; border:none;
  padding:13px 34px; border-radius:3px; cursor:pointer; font-weight:700;
  transition:all .2s;
}
.btn-fill:hover { opacity:.85; transform:translateY(-2px); box-shadow:0 8px 28px rgba(200,129,58,.35); }

.btn-ghost {
  font-family:'JetBrains Mono',monospace;
  font-size:11px; letter-spacing:3px; text-transform:uppercase;
  background:transparent; color:var(--muted); border:1px solid var(--border);
  padding:13px 34px; border-radius:3px; cursor:pointer; transition:all .2s;
}
.btn-ghost:hover { border-color:var(--cream); color:var(--text); }

/* Grain */
.grain {
  position:fixed; inset:0; opacity:.028;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events:none; z-index:200;
}

/* Orbs */
.orb { position:fixed; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }

@media(max-width:640px){
  .s-head { margin-bottom:40px; }
  body { font-size:15px; }
}
`;
}