'use client';
import { forwardRef } from 'react';
import { HOBBIES } from './data';

const LifeSection = forwardRef<HTMLElement>((_, ref) => (
  <>
    {/* ── Mission / CTA banner ─────────────────────────────── */}
    <div style={{
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '100px 48px 80px',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        letterSpacing: '6px',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        opacity: 0.55,
        marginBottom: 24,
      }}>
        currently open to new roles
      </div>

      {/* Vertical rule */}
      <div style={{
        width: 1,
        height: 88,
        background: 'linear-gradient(to bottom, var(--gold), transparent)',
        margin: '0 auto 40px',
      }} />

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(34px, 5vw, 58px)',
        fontWeight: 900,
        color: 'var(--gold)',
        marginBottom: 20,
        lineHeight: 1.1,
      }}>
        Let&apos;s Build Something
      </h2>

      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 18,
        lineHeight: 1.85,
        color: 'var(--text)',
        opacity: 0.78,
        maxWidth: 520,
        margin: '0 auto 40px',
      }}>
        I&apos;m looking for a team that moves fast, trusts engineers to
        own their work end-to-end, and builds products that matter.
        If that&apos;s you, let&apos;s talk.
      </p>

      <a href="mailto:khushi.trivedi.j@gmail.com" style={{ textDecoration: 'none' }}>
        <button style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontWeight: 700,
          padding: '14px 32px',
          borderRadius: 100,
          border: 'none',
          cursor: 'pointer',
          background: 'var(--gold)',
          color: 'var(--bg)',
          transition: 'opacity .2s, transform .2s',
        }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.opacity = '0.85';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.opacity = '1';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
          }}
        >
          ✦ Send a Transmission ✦
        </button>
      </a>
    </div>

    {/* ── Hobbies / Beyond the Code ────────────────────────── */}
    <section ref={ref} style={{
      position: 'relative',
      zIndex: 10,
      maxWidth: 960,
      margin: '0 auto',
      padding: '0 48px 120px',
    }}>
      {/* Section heading */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 16,
        marginBottom: 20,
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          opacity: 0.55,
        }}>02</span>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 900,
          color: 'var(--text)',
          lineHeight: 1,
        }}>
          Beyond the{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Code</em>
        </h2>

        <div style={{ flex: 1, height: 1, background: 'var(--border)', marginLeft: 8 }} />
      </div>

      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 17,
        lineHeight: 1.85,
        color: 'var(--text)',
        opacity: 0.72,
        maxWidth: 520,
        marginBottom: 44,
      }}>
        What I do when I&apos;m not at a keyboard shapes how I think when I am.
      </p>

      {/* Hobby cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
        maxWidth: 760,
      }}>
        {HOBBIES.map(h => (
          <HobbyCard key={h.name} hobby={h} />
        ))}
      </div>
    </section>
  </>
));

LifeSection.displayName = 'LifeSection';
export default LifeSection;

/* ── Hobby card with hover ─── */

type Hobby = {
  name: string;
  icon: string;
  desc: string;
  color: string;
};

function HobbyCard({ hobby: h }: { hobby: Hobby }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: '24px 26px 26px',
        transition: 'transform .2s, border-color .2s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-4px)';
        el.style.borderColor = h.color;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.borderColor = '';
      }}
    >
      <span style={{ fontSize: 24, display: 'block', marginBottom: 12 }}>{h.icon}</span>

      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: 10,
        lineHeight: 1.2,
      }}>
        {h.name}
      </div>

      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 15,
        lineHeight: 1.75,
        color: 'var(--text)',
        opacity: 0.72,
      }}>
        {h.desc}
      </div>
    </div>
  );
}