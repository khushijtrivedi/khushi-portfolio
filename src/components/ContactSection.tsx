'use client';
import { forwardRef } from 'react';
import { CONTACT, SECTION_HEADERS, HERO_CTA, SITE_META } from './data';

const ContactSection = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    style={{
      padding: 'clamp(40px, 8vw, 80px) clamp(16px, 6vw, 48px) 112px',
      maxWidth: 920, margin: '0 auto',
      position: 'relative', zIndex: 10,
    }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '3px',
        color: 'var(--gold)', opacity: 0.8,
      }}>
        {SECTION_HEADERS.contact.num}
      </span>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(24px, 4vw, 32px)',
        color: 'var(--text)', margin: 0,
      }}>
        {SECTION_HEADERS.contact.title}{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
          {SECTION_HEADERS.contact.em}
        </em>
      </h2>

      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>

    {/* Tagline */}
    <p style={{
      fontFamily: 'sans-serif', fontSize: 'clamp(14px, 2vw, 16px)',
      color: 'var(--muted)', marginBottom: 40, lineHeight: 1.7,
      maxWidth: 560,
    }}>
      {HERO_CTA.contactTagline}
    </p>

    {/* Grid — responsive: 2 cols on desktop, 1 on mobile */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
      gap: 13,
      maxWidth: 720,
    }}>
      {CONTACT.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target={c.href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          style={{
            display: 'block',
            borderRadius: 12,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            padding: 'clamp(16px, 3vw, 22px) clamp(16px, 3vw, 26px)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.transform = 'translateY(-3px)';
            el.style.borderColor = 'rgba(200,129,58,0.32)';
            el.style.background = 'rgba(200,129,58,0.05)';
            el.style.boxShadow = '0 8px 28px rgba(200,129,58,0.1)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.transform = '';
            el.style.borderColor = 'var(--border)';
            el.style.background = 'var(--surface)';
            el.style.boxShadow = '';
          }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: 9, opacity: 0.8,
          }}>
            {c.label}
          </div>
          <div style={{
            fontFamily: 'sans-serif',
            fontSize: 'clamp(13px, 2vw, 15px)',
            color: 'var(--text)', opacity: 0.9, lineHeight: 1.4,
            wordBreak: 'break-all',  // prevents email overflow on mobile
          }}>
            {c.val}
          </div>
        </a>
      ))}
    </div>

    {/* Footer */}
    <footer style={{
      marginTop: 80, paddingTop: 32,
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      fontFamily: 'sans-serif', fontSize: 12,
      letterSpacing: '1px', color: 'var(--muted)',
    }}>
      {SITE_META.footerQuip} · {SITE_META.name.toLowerCase()} · {new Date().getFullYear()}
    </footer>
  </section>
));

ContactSection.displayName = 'ContactSection';
export default ContactSection;