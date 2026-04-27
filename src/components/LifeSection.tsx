'use client';
import { forwardRef } from 'react';
import { HOBBIES, SECTION_HEADERS, HERO_CTA, SITE_META } from './data';

const LifeSection = forwardRef<HTMLElement>((_, ref) => (
  <>
    {/* CTA Banner */}
    <div style={{
      position: 'relative', zIndex: 10,
      textAlign: 'center',
      padding: 'clamp(60px, 10vw, 100px) clamp(16px, 6vw, 48px) 80px',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '6px',
        textTransform: 'uppercase',
        color: 'var(--gold)', opacity: 0.55,
        marginBottom: 24,
      }}>
        {HERO_CTA.openBadge}
      </div>

      <div style={{
        width: 1, height: 88,
        background: 'linear-gradient(to bottom, var(--gold), transparent)',
        margin: '0 auto 40px',
      }} />

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(28px, 5vw, 58px)',
        fontWeight: 900, color: 'var(--gold)',
        marginBottom: 20, lineHeight: 1.1,
      }}>
        {SECTION_HEADERS.cta.title}
      </h2>

      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(15px, 2vw, 18px)',
        lineHeight: 1.85,
        color: 'var(--text)', opacity: 0.78,
        maxWidth: 520, margin: '0 auto 40px',
      }}>
        {SECTION_HEADERS.cta.sub}
      </p>

      <a href={SITE_META.emailHref} style={{ textDecoration: 'none' }}>
        <button
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '4px',
            textTransform: 'uppercase', fontWeight: 700,
            padding: 'clamp(10px,2vw,14px) clamp(20px,4vw,32px)',
            borderRadius: 100, border: 'none', cursor: 'pointer',
            background: 'var(--gold)', color: 'var(--bg)',
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
          {HERO_CTA.contactButton}
        </button>
      </a>
    </div>

    {/* Hobbies Section */}
    <section ref={ref} style={{
      position: 'relative', zIndex: 10,
      maxWidth: 960, margin: '0 auto',
      padding: 'clamp(20px,4vw,40px) clamp(16px, 6vw, 48px) 120px',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'baseline',
        gap: 16, marginBottom: 20,
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--gold)', opacity: 0.55,
        }}>
          {SECTION_HEADERS.life.num}
        </span>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(22px, 4vw, 44px)',
          fontWeight: 900, color: 'var(--text)', lineHeight: 1,
        }}>
          {SECTION_HEADERS.life.title}{' '}
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
            {SECTION_HEADERS.life.em}
          </em>
        </h2>

        <div style={{ flex: 1, height: 1, background: 'var(--border)', marginLeft: 8 }} />
      </div>

      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(14px, 2vw, 17px)',
        lineHeight: 1.85, color: 'var(--text)', opacity: 0.72,
        maxWidth: 520, marginBottom: 44,
      }}>
        {SECTION_HEADERS.life.sub}
      </p>

      {/* Hobby cards — 2 cols desktop, 1 col mobile */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
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

type Hobby = { name: string; icon: string; desc: string; color: string };

function HobbyCard({ hobby: h }: { hobby: Hobby }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 26px) clamp(18px, 3vw, 26px)',
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
        fontSize: 'clamp(15px, 2vw, 18px)',
        fontWeight: 700, color: 'var(--text)',
        marginBottom: 10, lineHeight: 1.2,
      }}>
        {h.name}
      </div>

      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 'clamp(13px, 1.8vw, 15px)',
        lineHeight: 1.75, color: 'var(--text)', opacity: 0.72,
      }}>
        {h.desc}
      </div>
    </div>
  );
}