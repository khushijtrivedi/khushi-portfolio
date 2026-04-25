'use client';
import { forwardRef } from 'react';

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    icon: '🖼️',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'REST APIs', 'Microservices', 'Flask', 'Python'],
  },
  {
    category: 'AI & LLM',
    icon: '🤖',
    skills: ['LangChain', 'Mastra', 'LLM Integrations', 'Agentic Workflows', 'Prompt Engineering'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['MySQL', 'SQL'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS S3', 'AWS Lambda', 'AWS SQS', 'Serverless', 'Docker', 'Capacitor'],
  },
  {
    category: 'Auth & Payments',
    icon: '🔐',
    skills: ['BetterAuth', 'Passkey', '2FA', 'Stripe API'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub'],
  },
];

const SkillsSection = forwardRef<HTMLElement>((_, ref) => (
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
        The <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Stack</em>
      </h2>

      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>

    <p style={{
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic', fontSize: 16,
      color: 'var(--text)', opacity: 0.65,
      maxWidth: 440, marginBottom: 48, lineHeight: 1.7,
    }}>
      The tools I reach for. Earned through shipping, not just learning.
    </p>

    {/* Skill groups */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 16,
    }}>
      {SKILL_GROUPS.map((group) => (
        <div
          key={group.category}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '20px 22px',
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
                  fontSize: 11,
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