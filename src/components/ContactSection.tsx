'use client';
import { forwardRef } from 'react';

const CONTACT = [
  { label: 'Email', val: 'khushi.trivedi.j@gmail.com', href: 'mailto:khushi.trivedi.j@gmail.com' },
  { label: 'LinkedIn', val: 'linkedin.com/in/khushitrivedij', href: 'https://linkedin.com/in/khushitrivedij' },
  { label: 'GitHub', val: 'github.com/khushijtrivedi', href: 'https://github.com/khushijtrivedi' },
  { label: 'Location', val: 'Surat, Gujarat, India', href: '#' },
];

const ContactSection = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    style={{ padding: '0 48px 112px', maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 10 }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '3px',
        color: 'var(--gold)', opacity: 0.8,
      }}>03</span>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 32, color: 'var(--text)', margin: 0,
      }}>
        Find <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Me</em>
      </h2>

      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>

    <p style={{
      fontFamily: 'sans-serif', fontSize: 16,
      color: 'var(--muted)', marginBottom: 40, lineHeight: 1.7,
      maxWidth: 560,
    }}>
      Whether you have a role, a project, or just want to talk about crochet patterns —
      I&apos;m easy to reach.
    </p>

    {/* Grid */}
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 13, maxWidth: 720,
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
            padding: '22px 26px',
            textDecoration: 'none',  /* removes underline */
            color: 'inherit',         /* kills blue link color */
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
            fontFamily: 'sans-serif', fontSize: 15,
            color: 'var(--text)', opacity: 0.9, lineHeight: 1.4,
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
      built with ☕ yarn &amp; way too many tabs open · khushi trivedi · {new Date().getFullYear()}
    </footer>
  </section>
));

ContactSection.displayName = 'ContactSection';
export default ContactSection;