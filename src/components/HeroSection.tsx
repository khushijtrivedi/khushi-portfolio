'use client';

interface Props { onWork: () => void; onContact: () => void }

const PILLS: [string, 'gold' | 'cream' | 'rust'][] = [
  ['React · Next.js · TS', 'gold'],
  ['LangChain · Mastra · LLMs', 'cream'],
  ['AWS S3 · Lambda · SQS', 'gold'],
  ['Agentic Workflows', 'cream'],
  ['Stripe · BetterAuth · 2FA', 'rust'],
  ['Node.js · Microservices', 'rust'],
];

const pillStyles: Record<'gold' | 'cream' | 'rust', React.CSSProperties> = {
  gold:  { borderColor: 'rgba(200,129,58,0.45)', color: 'var(--gold)' },
  cream: { borderColor: 'rgba(232,200,154,0.35)', color: 'var(--cream)' },
  rust:  { borderColor: 'rgba(160,82,45,0.45)',   color: '#b06830' },
};

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
      padding: '80px 48px',
      zIndex: 1,
    }}>

      {/* Tag */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        letterSpacing: 4, textTransform: 'uppercase', color: 'var(--gold)',
      }}>
        <span style={{ width: 44, height: 1, background: 'var(--gold)', opacity: 0.3 }} />
        full stack engineer
        <span style={{ width: 44, height: 1, background: 'var(--gold)', opacity: 0.3 }} />
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        fontSize: 'clamp(52px, 9vw, 106px)',
        lineHeight: 0.92,
        letterSpacing: -3,
        color: 'var(--text)',
        marginBottom: 14,
      }}>
        Khushi <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Trivedi</em>
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(15px, 2.3vw, 22px)',
        color: 'var(--muted)',
        marginBottom: 26,
      }}>
        Building AI-powered products from Surat to the stars
      </p>

      {/* Bio */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 18,
        lineHeight: 1.8,
        color: 'var(--text)',
        opacity: 0.85,
        marginBottom: 44,
        maxWidth: 600,
      }}>
        React · Next.js · TypeScript · LangChain · AWS · Mastra<br />
        Shipping features that real people use every day.<br />
        Master&apos;s from DAIICT · Agentic AI · Things that actually work.
      </p>

      {/* Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 44, maxWidth: 700 }}>
        {PILLS.map(([label, color]) => (
          <span key={label} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, letterSpacing: 1.5,
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
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={onWork} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
          padding: '13px 32px', borderRadius: 100,
          background: 'var(--gold)', color: 'var(--bg)',
          border: 'none', fontWeight: 700, cursor: 'pointer',
        }}>
          View My Work ↓
        </button>
        <button onClick={onContact} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
          padding: '13px 32px', borderRadius: 100,
          background: 'transparent', color: 'var(--gold)',
          border: '1px solid rgba(200,129,58,0.5)', cursor: 'pointer',
        }}>
          Get In Touch
        </button>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
        opacity: 0.35, animation: 'cue 2.5s ease-in-out infinite',
      }}>
        <style>{`@keyframes cue{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}`}</style>
        <div style={{ width: 1, height: 38, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)' }}>scroll</span>
      </div>
    </section>
  );
}