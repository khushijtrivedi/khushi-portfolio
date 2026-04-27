'use client';
import { forwardRef } from 'react';
import { SKILL_GROUPS, SECTION_HEADERS } from './data';

const SkillsSection = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    style={{
      padding: 'clamp(40px, 8vw, 80px) clamp(16px, 6vw, 48px)',
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
        {SECTION_HEADERS.skills.num}
      </span>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(24px, 4vw, 32px)',
        color: 'var(--text)', margin: 0,
      }}>
        {SECTION_HEADERS.skills.title}{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
          {SECTION_HEADERS.skills.em}
        </em>
      </h2>

      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>

    {/* Sub heading */}
    <p style={{
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic',
      fontSize: 'clamp(14px, 2vw, 16px)',
      color: 'var(--text)', opacity: 0.65,
      maxWidth: 440, marginBottom: 48, lineHeight: 1.7,
    }}>
      {SECTION_HEADERS.skills.sub}
    </p>

    {/* Skill groups grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
      gap: 16,
    }}>
      {SKILL_GROUPS.map((group) => (
        <div
          key={group.category}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 'clamp(16px, 3vw, 20px) clamp(16px, 3vw, 22px)',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,129,58,0.3)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
          }}
        >
          {/* Category header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: 18 }}>{group.icon}</span>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--gold)', opacity: 0.7,
            }}>
              {group.category}
            </div>
          </div>

          {/* Skill pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {group.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 'clamp(9px, 1.5vw, 11px)',
                  padding: '5px 12px',
                  borderRadius: 100,
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  opacity: 0.8,
                  letterSpacing: '0.3px',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
));

SkillsSection.displayName = 'SkillsSection';
export default SkillsSection;