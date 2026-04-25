'use client';

interface Props { onSkip: () => void; started: boolean }

const stars = Array.from({ length: 120 }, (_, i) => {
  const size = Math.random() * 2.2 + 0.4;
  return {
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: size,
    height: size,
    d: `${(Math.random() * 4 + 2).toFixed(1)}s`,
    dl: `${(Math.random() * 4).toFixed(1)}s`,
  };
});

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

  .sw-logo {
    position:absolute; top:6%; left:50%; transform:translateX(-50%);
    text-align:center; animation:swFadeIn 1.6s ease forwards; white-space:nowrap;
  }
  .sw-name {
    font-family:'Cinzel','Georgia',serif;
    font-size:clamp(1.4rem,4vw,2.6rem);
    font-weight:700; letter-spacing:6px; color:#ffe87c; text-transform:uppercase;
  }
  .sw-sub {
    margin-top:4px; font-size:clamp(0.7rem,2vw,1rem);
    letter-spacing:4px; color:#c8813a; text-transform:uppercase;
  }

  .sw-crawl-wrap {
    position:absolute; inset:0; display:flex; align-items:flex-end;
    justify-content:center; perspective:380px; overflow:hidden;
  }
  .sw-crawl {
    width:min(640px,88vw); padding-bottom:4rem;
    transform-origin:50% 100%; transform:rotateX(22deg);
    animation:swCrawl 36s linear forwards; animation-delay:0.4s; opacity:0;
  }
  @keyframes swCrawl {
    0%   { opacity:1; transform:rotateX(22deg) translateY(0); }
    100% { opacity:0; transform:rotateX(22deg) translateY(-260%); }
  }

  .sw-ep {
    text-align:center; font-size:clamp(0.75rem,2vw,1rem);
    letter-spacing:6px; color:#ffe87c; text-transform:uppercase; margin-bottom:0.5rem;
  }
  .sw-title {
    text-align:center; font-family:'Cinzel','Georgia',serif;
    font-size:clamp(1.6rem,5vw,3rem); font-weight:700; color:#ffe87c;
    letter-spacing:3px; margin-bottom:2.5rem; line-height:1.2;
  }
  .sw-body {
    color:#d4b483; font-size:clamp(0.9rem,2.2vw,1.2rem);
    line-height:2.1; text-align:justify;
  }
  .sw-body p { margin-bottom:1.6rem; }
  .sw-body em { color:#ffe87c; font-style:normal; font-weight:600; }

  .sw-top, .sw-bot {
    position:absolute; left:0; right:0; height:60px;
    background:#000; z-index:2; pointer-events:none;
  }
  .sw-top { top:0; }
  .sw-bot { bottom:0; }
  .sw-side {
    position:absolute; top:0; bottom:0; width:100%;
    background:linear-gradient(to right,#000 0%,transparent 8%,transparent 92%,#000 100%);
    z-index:2; pointer-events:none;
  }

  .sw-skip {
    position:absolute; bottom:72px; right:28px; z-index:10;
    background:transparent; border:1px solid rgba(255,232,124,.4);
    color:rgba(255,232,124,.75); padding:6px 18px;
    font-size:0.85rem; letter-spacing:2px; cursor:pointer;
    border-radius:2px; transition:all 0.2s ease;
  }
  .sw-skip:hover { background:rgba(255,232,124,.1); border-color:#ffe87c; color:#ffe87c; }

  @keyframes swFadeIn {
    from { opacity:0; transform:translateX(-50%) translateY(-10px); }
    to   { opacity:1; transform:translateX(-50%) translateY(0); }
  }
`;

export default function StarWarsIntro({ onSkip, started }: Props) {
  return (
    <div style={{
      position:'fixed', inset:0, background:'#000',
      display:'flex', alignItems:'center', justifyContent:'center',
      overflow:'hidden', zIndex:1000,
    }}>
      <style>{SW_CSS}</style>

      <div className="sw-stars">
        {stars.map((s) => (
          <div key={s.id} className="sw-star" style={{
            left:s.left, top:s.top, width:s.width, height:s.height,
            ['--d' as string]:s.d, ['--dl' as string]:s.dl,
          }}/>
        ))}
      </div>

      <div className="sw-neb" style={{ width:480,height:480,background:'rgba(200,129,58,.07)',top:'-8%',right:'-8%' }}/>
      <div className="sw-neb" style={{ width:380,height:380,background:'rgba(107,58,31,.09)',bottom:'5%',left:'-6%' }}/>

      {started && (
        <>
          <div className="sw-logo">
            <div className="sw-name">Khushi Trivedi</div>
            <div className="sw-sub">Full Stack Engineer</div>
          </div>

          <div className="sw-crawl-wrap">
            <div className="sw-crawl">
              <div className="sw-ep">Episode I</div>
              <div className="sw-title">A New Engineer</div>
              <div className="sw-body">
                <p>
                  I&apos;m a Full Stack Engineer from <em>Surat, Gujarat</em>.
                  I graduated from DAIICT with an M.Sc. in Information Technology
                  and I build things that actually work.
                </p>
                <p>
                  My stack: <em>React, Next.js, TypeScript</em> on the frontend.
                  Node.js, microservices, AWS Lambda, S3, SQS on the back.
                  LangChain and Mastra for the AI pieces.
                </p>
                <p>
                  At <em>NewVariable Inc.</em> I helped take a SaaS from
                  zero to paid — Stripe subscriptions, passkey auth,
                  agentic workflows, a mobile app via Capacitor.
                  20+ features shipped. 8,000+ users.
                </p>
                <p>
                  I&apos;m looking for a team that moves fast,
                  trusts engineers to own their work,
                  and builds things that matter.
                </p>
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
  );
}