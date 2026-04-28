'use client'
import { SITE_META, STAR_WARS_INTRO } from './data'

interface Props { onSkip: () => void; started: boolean }

const stars = Array.from({ length: 120 }, (_, i) => {
  const size = Math.random() * 2.2 + 0.4
  return {
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: size, height: size,
    d: `${(Math.random() * 4 + 2).toFixed(1)}s`,
    dl: `${(Math.random() * 4).toFixed(1)}s`,
  }
})

const SW_CSS = `
  .sw-stars { position:absolute; inset:0; pointer-events:none; }
  .sw-star {
    position:absolute; border-radius:50%; background:#fff; opacity:0;
    animation: swTwinkle var(--d,3s) var(--dl,0s) infinite ease-in-out;
  }
  @keyframes swTwinkle {
    0%,100% { opacity:0; transform:scale(0.6); }
    50%      { opacity:1; transform:scale(1); }
  }
  .sw-neb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }

  /* Logo — sits at top, never clips */
  .sw-logo {
    position:absolute;
    top: clamp(12px, 5%, 40px);
    left:50%; transform:translateX(-50%);
    text-align:center;
    animation:swFadeIn 1.6s ease forwards;
    white-space:nowrap;
    z-index: 3;
  }
  .sw-name {
    font-family:'Cinzel','Georgia',serif;
    font-size:clamp(1rem, 4vw, 2.6rem);
    font-weight:700; letter-spacing:clamp(2px,1vw,6px);
    color:#ffe87c; text-transform:uppercase;
  }
  .sw-sub {
    margin-top:4px;
    font-size:clamp(0.6rem, 2vw, 1rem);
    letter-spacing:clamp(1px,0.8vw,4px);
    color:#c8813a; text-transform:uppercase;
  }

  /* Crawl container */
  .sw-crawl-wrap {
    position:absolute; inset:0;
    display:flex; align-items:flex-end; justify-content:center;
    perspective: clamp(200px, 40vw, 380px);
    overflow:hidden;
  }
  .sw-crawl {
    width: min(88vw, 640px);
    padding-bottom: clamp(2rem, 6vw, 4rem);
    transform-origin:50% 100%;
    transform:rotateX(22deg);
    animation:swCrawl 36s linear forwards;
    animation-delay:0.4s; opacity:0;
  }
  @keyframes swCrawl {
    0%   { opacity:1; transform:rotateX(22deg) translateY(0); }
    100% { opacity:0; transform:rotateX(22deg) translateY(-260%); }
  }

  .sw-ep {
    text-align:center;
    font-size:clamp(0.65rem, 2vw, 1rem);
    letter-spacing:clamp(2px,1vw,6px);
    color:#ffe87c; text-transform:uppercase; margin-bottom:0.5rem;
  }
  .sw-title {
    text-align:center;
    font-family:'Cinzel','Georgia',serif;
    font-size:clamp(1.2rem, 4vw, 3rem);
    font-weight:700; color:#ffe87c;
    letter-spacing:clamp(1px,0.8vw,3px);
    margin-bottom:clamp(1rem,3vw,2.5rem);
    line-height:1.2;
  }
  .sw-body {
    color:#d4b483;
    font-size:clamp(0.75rem, 2vw, 1.2rem);
    line-height:2; text-align:justify;
  }
  .sw-body p { margin-bottom:clamp(0.8rem,2vw,1.6rem); }
  .sw-body em { color:#ffe87c; font-style:normal; font-weight:600; }

  /* Black bars to hide crawl edges */
  .sw-top, .sw-bot {
    position:absolute; left:0; right:0;
    background:#000; z-index:2; pointer-events:none;
  }
  .sw-top { top:0; height: clamp(50px, 12%, 80px); }
  .sw-bot { bottom:0; height:60px; }
  .sw-side {
    position:absolute; top:0; bottom:0; width:100%;
    background:linear-gradient(to right,#000 0%,transparent 8%,transparent 92%,#000 100%);
    z-index:2; pointer-events:none;
  }

  /* Skip button */
  .sw-skip {
    position:absolute;
    bottom: clamp(16px, 5%, 72px);
    right: clamp(12px, 4%, 28px);
    z-index:10;
    background:transparent;
    border:1px solid rgba(255,232,124,.4);
    color:rgba(255,232,124,.75);
    padding: clamp(4px,1vw,6px) clamp(10px,2vw,18px);
    font-size:clamp(0.7rem,2vw,0.85rem);
    letter-spacing:2px; cursor:pointer;
    border-radius:2px; transition:all 0.2s ease;
  }
  .sw-skip:hover {
    background:rgba(255,232,124,.1);
    border-color:#ffe87c; color:#ffe87c;
  }

  @keyframes swFadeIn {
    from { opacity:0; transform:translateX(-50%) translateY(-10px); }
    to   { opacity:1; transform:translateX(-50%) translateY(0); }
  }
`

export default function StarWarsIntro({ onSkip, started }: Props) {
  const { episode, title, paragraphs, highlightWords } = STAR_WARS_INTRO

  // Helper to wrap highlight words in <em>
  function highlight(text: string) {
    let result = text
    highlightWords.forEach(word => {
      result = result.replace(word, `<em>${word}</em>`)
    })
    return result
  }

  return (
    <div style={{
      position:'fixed', inset:0, background:'#000',
      display:'flex', alignItems:'center', justifyContent:'center',
      overflow:'hidden', zIndex:1000,
    }}>
      <style>{SW_CSS}</style>

      {/* Stars */}
      <div className="sw-stars">
        {stars.map(s => (
          <div key={s.id} className="sw-star" style={{
            left:s.left, top:s.top,
            width:s.width, height:s.height,
            ['--d' as string]:s.d,
            ['--dl' as string]:s.dl,
          }}/>
        ))}
      </div>

      {/* Nebula orbs */}
      <div className="sw-neb" style={{ width:480,height:480,background:'rgba(200,129,58,.07)',top:'-8%',right:'-8%' }}/>
      <div className="sw-neb" style={{ width:380,height:380,background:'rgba(107,58,31,.09)',bottom:'5%',left:'-6%' }}/>

      {started && (
        <>
          {/* Logo — uses data */}
          <div className="sw-logo">
            <div className="sw-name">{SITE_META.name}</div>
            <div className="sw-sub">{SITE_META.role}</div>
          </div>

          {/* Crawl — uses data */}
          <div className="sw-crawl-wrap">
            <div className="sw-crawl">
              <div className="sw-ep">{episode}</div>
              <div className="sw-title">{title}</div>
              <div className="sw-body">
                {paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: highlight(p) }} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="sw-top"/>
      <div className="sw-bot"/>
      <div className="sw-side"/>

      <button className="sw-skip" onClick={onSkip}>Skip ›</button>
    </div>
  )
}