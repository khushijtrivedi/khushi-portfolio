'use client';
import { SITE_META, HERO_PILLS, HERO_CTA } from './data';

const pillStyles: Record<'gold' | 'cream' | 'rust', React.CSSProperties> = {
  gold:  { borderColor: 'rgba(200,129,58,0.45)', color: 'var(--gold)' },
  cream: { borderColor: 'rgba(232,200,154,0.35)', color: 'var(--cream)' },
  rust:  { borderColor: 'rgba(160,82,45,0.45)',   color: '#b06830' },
};

interface Props { onWork: () => void; onContact: () => void }

export default function HeroSection({ onWork, onContact }: Props) {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'clamp(80px, 10vh, 120px) clamp(16px, 6vw, 48px)',
      zIndex: 1,
    }}>

      {/* Role tag */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)',
      }}>
        <span style={{ width: 44, height: 1, background: 'var(--gold)', opacity: 0.3 }} />
        {SITE_META.roleShort}
        <span style={{ width: 44, height: 1, background: 'var(--gold)', opacity: 0.3 }} />
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        fontSize: 'clamp(40px, 9vw, 106px)',
        lineHeight: 0.92,
        letterSpacing: -3,
        color: 'var(--text)',
        marginBottom: 14,
      }}>
        {SITE_META.name.split(' ')[0]}{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
          {SITE_META.name.split(' ')[1]}
        </em>
      </h1>

      {/* Tagline */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(14px, 2.3vw, 22px)',
        color: 'var(--muted)',
        marginBottom: 26,
      }}>
        {SITE_META.tagline}
      </p>

      {/* Bio */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 'clamp(14px, 2vw, 18px)',
        lineHeight: 1.8,
        color: 'var(--text)',
        opacity: 0.85,
        marginBottom: 44,
        maxWidth: 600,
        whiteSpace: 'pre-line',
      }}>
        {SITE_META.bio}
      </p>

      {/* Pills */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 8,
        justifyContent: 'center', marginBottom: 44,
        maxWidth: 700,
        padding: '0 8px',
      }}>
        {HERO_PILLS.map(({ label, color }) => (
          <span key={label} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(8px, 1.5vw, 10px)',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            padding: '6px 15px', borderRadius: 100,
            border: '1px solid', cursor: 'default',
            ...pillStyles[color],
          }}>
            {label}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex', gap: 14,
        flexWrap: 'wrap', justifyContent: 'center',
        padding: '0 16px',
      }}>
        <button onClick={onWork} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
          padding: 'clamp(10px, 2vw, 13px) clamp(20px, 4vw, 32px)',
          borderRadius: 100,
          background: 'var(--gold)', color: 'var(--bg)',
          border: 'none', fontWeight: 700, cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}>
          {HERO_CTA.primary}
        </button>
        <button onClick={onContact} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
          padding: 'clamp(10px, 2vw, 13px) clamp(20px, 4vw, 32px)',
          borderRadius: 100,
          background: 'transparent', color: 'var(--gold)',
          border: '1px solid rgba(200,129,58,0.5)', cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}>
          {HERO_CTA.secondary}
        </button>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
        opacity: 0.35, animation: 'cue 2.5s ease-in-out infinite',
      }}>
        <style>{`
          @keyframes cue {
            0%,100% { transform:translateX(-50%) translateY(0) }
            50%      { transform:translateX(-50%) translateY(8px) }
          }
          @media (max-width: 640px) {
            .hero-bio { font-size: 14px !important; }
          }
        `}</style>
        <div style={{ width: 1, height: 38, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, letterSpacing: 3,
          textTransform: 'uppercase', color: 'var(--gold)',
        }}>scroll</span>
      </div>
    </section>
  );
}