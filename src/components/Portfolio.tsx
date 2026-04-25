'use client';
import { useState, useEffect, useRef } from 'react';
import StarWarsIntro   from './StarWarsIntro';
import HeroSection     from './HeroSection';
import WorkSection     from './WorkSection';
import EducationSection from './EducationSection';
import SkillsSection   from './SkillsSection';
import LifeSection     from './LifeSection';
import ContactSection  from './ContactSection';
import { globalStyles } from './styles';

type Theme = 'dark' | 'light';
type Nav   = 'home' | 'work' | 'education' | 'skills' | 'life' | 'contact';

const NAV_ITEMS: Nav[] = ['home', 'work', 'education', 'skills', 'life', 'contact'];

// Generate stars once at module level
const SITE_STARS = Array.from({ length: 80 }, (_, i) => {
  const size = Math.random() * 2 + 0.8;
  return {
    id: i,
    left: `${Math.random() * 100}%`,
    top:  `${Math.random() * 100}%`,
    width: size,
    height: size,
    sd:  `${(Math.random() * 5 + 3).toFixed(1)}s`,
    sdl: `${(Math.random() * 6).toFixed(1)}s`,
    sop: (Math.random() * 0.4 + 0.15).toFixed(2),
  };
});

export default function Portfolio() {
  const [introOver,    setIntroOver]    = useState(false);
  const [introStarted, setIntroStarted] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroStarted(true), 400);
    const t2 = setTimeout(() => setIntroOver(true), 20000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!introOver) return (
    <StarWarsIntro onSkip={() => setIntroOver(true)} started={introStarted} />
  );
  return <MainSite />;
}

function MainSite() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [active, setActive] = useState<Nav>('home');
  const dark = theme === 'dark';

  const homeRef      = useRef<HTMLElement>(null);
  const workRef      = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef    = useRef<HTMLElement>(null);
  const lifeRef      = useRef<HTMLElement>(null);
  const contactRef   = useRef<HTMLElement>(null);

  const refs: Record<Nav, React.RefObject<HTMLElement | null>> = {
    home:      homeRef,
    work:      workRef,
    education: educationRef,
    skills:    skillsRef,
    life:      lifeRef,
    contact:   contactRef,
  };

  function scrollTo(s: Nav) {
    setActive(s);
    refs[s].current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id as Nav);
      }),
      { threshold: 0.25 }
    );
    Object.entries(refs).forEach(([id, r]) => {
      if (r.current) { r.current.id = id; obs.observe(r.current); }
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{
      ['--bg'      as string]: dark ? '#0e0905' : '#f5ede2',
      ['--bg2'     as string]: dark ? '#1a0e05' : '#ede4d6',
      ['--surface' as string]: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
      ['--border'  as string]: dark ? 'rgba(232,200,154,0.14)' : 'rgba(107,58,31,0.14)',
      ['--text'    as string]: dark ? '#f0e6d6' : '#1e0f04',
      ['--muted'   as string]: dark ? 'rgba(240,230,214,0.70)' : 'rgba(30,15,4,0.60)',
      ['--gold'    as string]: '#c8813a',
      ['--cream'   as string]: '#e8c99a',
      background: 'var(--bg)', color: 'var(--text)',
      minHeight: '100vh', position: 'relative',
      transition: 'background .3s, color .3s',
    }}>
      <style>{globalStyles(dark)}</style>

      {/* Grain */}
      <div className="grain pointer-events-none z-0"/>

      {/* Stars */}
      <div className="site-stars pointer-events-none z-0">
        {SITE_STARS.map(s => (
          <div key={s.id} className="site-star" style={{
            left: s.left, top: s.top,
            width: s.width, height: s.height,
            ['--sd'  as string]: s.sd,
            ['--sdl' as string]: s.sdl,
            ['--sop' as string]: s.sop,
          }}/>
        ))}
      </div>

      {/* Ambient orbs */}
      <div className="orb pointer-events-none z-0" style={{ width:560,height:560,background:dark?'rgba(200,129,58,.06)':'rgba(200,129,58,.07)',top:'4%',right:'-10%' }}/>
      <div className="orb pointer-events-none z-0" style={{ width:440,height:440,background:dark?'rgba(107,58,31,.07)':'rgba(107,58,31,.05)',top:'58%',left:'-8%' }}/>

      {/* Nav */}
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding:'14px 48px',
        backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
        background: dark ? 'rgba(14,9,5,.80)' : 'rgba(245,237,226,.82)',
        borderBottom:'1px solid var(--border)',
        transition:'background .3s',
      }}>
        <div style={{
          fontFamily:"'Playfair Display',serif",
          fontSize:22, fontWeight:900,
          color:'var(--gold)', fontStyle:'italic',
        }}>
          KT
        </div>

        <div style={{ display:'flex', gap:4, alignItems:'center' }}>
          {NAV_ITEMS.map(s => (
            <button key={s} onClick={() => scrollTo(s)} style={{
              fontFamily:"'JetBrains Mono',monospace",
              fontSize: 10, letterSpacing:'2px',
              textTransform:'uppercase',
              color: active === s ? 'var(--gold)' : 'var(--muted)',
              background: active === s ? 'rgba(200,129,58,.1)' : 'none',
              border:'none', cursor:'pointer',
              padding:'7px 14px', borderRadius:4,
              transition:'all .2s',
            }}>
              {s}
            </button>
          ))}

          <button
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            style={{
              fontFamily:"'JetBrains Mono',monospace", fontSize:10,
              background:'none', border:'1px solid var(--border)', borderRadius:100,
              padding:'6px 14px', cursor:'pointer', color:'var(--muted)',
              marginLeft:4, transition:'all .2s',
            }}
          >
            {dark ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
      </nav>

      {/* Sections */}
      <div ref={homeRef as React.RefObject<HTMLDivElement>} id="home">
        <HeroSection onWork={() => scrollTo('work')} onContact={() => scrollTo('contact')} />
      </div>

      <WorkSection      ref={workRef} />
      <EducationSection ref={educationRef} />
      <SkillsSection    ref={skillsRef} />
      <LifeSection      ref={lifeRef} />
      <ContactSection   ref={contactRef} />
    </div>
  );
}