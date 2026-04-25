'use client';
import { forwardRef } from 'react';

const EDUCATION = [
  {
    degree: 'Master of Computer Science',
    field: 'Information Technology',
    school: 'DAIICT, Gandhinagar',
    period: 'Aug 2023 – May 2025',
    icon: '🎓',
    highlight: 'M.Sc. IT',
  },
  {
    degree: 'Bachelor of Computer Science',
    field: 'Information Technology',
    school: 'VNSGU, Surat',
    period: 'Aug 2020 – May 2023',
    icon: '📚',
    highlight: 'B.Sc. IT',
  },
];

const EducationSection = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    style={{ padding: '0 48px 80px', maxWidth: 920, margin: '0 auto', position: 'relative', zIndex: 10 }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '3px',
        color: 'var(--gold)', opacity: 0.8,
      }}>02</span>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 32, color: 'var(--text)', margin: 0,
      }}>
        The <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Foundation</em>
      </h2>

      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>

    <p style={{
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic', fontSize: 16,
      color: 'var(--text)', opacity: 0.65,
      maxWidth: 400, marginBottom: 48, lineHeight: 1.7,
    }}>
      Where curiosity met structure.
    </p>

    {/* Timeline */}
    <div style={{ position: 'relative', maxWidth: 720 }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: 32, top: 0, bottom: 0,
        width: 1, background: 'var(--border)',
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {EDUCATION.map((edu, i) => (
          <div key={i} style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
            {/* Timeline node */}
            <div style={{
              width: 64, flexShrink: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              paddingTop: 4,
            }}>
              <div style={{
                width: 14, height: 14, borderRadius: '50%',
                border: '2px solid var(--gold)',
                background: 'var(--bg)',
                position: 'relative', zIndex: 1,
              }} />
            </div>

            {/* Card */}
            <div style={{
              flex: 1,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '20px 24px',
              transition: 'border-color 0.2s',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 22 }}>{edu.icon}</span>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11, letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'var(--gold)', opacity: 0.8,
                    padding: '3px 10px',
                    border: '1px solid var(--gold)',
                    borderRadius: 100,
                  }}>
                    {edu.highlight}
                  </div>
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, color: 'var(--muted)', opacity: 0.5,
                }}>
                  {edu.period}
                </div>
              </div>

              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18, fontWeight: 700,
                color: 'var(--text)', marginBottom: 4,
              }}>
                {edu.degree}
              </div>

              <div style={{
                fontFamily: 'sans-serif', fontSize: 14,
                color: 'var(--text)', opacity: 0.6,
                marginBottom: 10,
              }}>
                {edu.field}
              </div>

              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, color: 'var(--muted)',
                letterSpacing: '1px',
              }}>
                {edu.school}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

EducationSection.displayName = 'EducationSection';
export default EducationSection;