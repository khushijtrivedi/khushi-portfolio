'use client';
import { forwardRef, useEffect, useRef, useState } from 'react';

/* ── Data ─────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'A',
    phase: 'Seed',
    title: 'Speech Lab Intern',
    tags: ['JavaScript', 'Bootstrap', 'REST APIs', 'ML'],
    desc: 'Where it started. Integrated speech recognition APIs and ML frameworks for speech disorder diagnostics — first real taste of building something that mattered.',
    icon: '🌱',
    period: 'May – Jul 2024',
    org: 'NLTM Speech Lab, Gandhinagar',
    totalFeatures: 4,
    features: [
      {
        name: 'Speech Recognition API Integration',
        category: 'Integration',
        effort: 90,
        desc: 'Wired up speech recognition APIs into research web modules, enabling real-time audio capture and transcription for clinicians.',
        tags: ['JavaScript', 'REST APIs'],
      },
      {
        name: 'ML Framework Setup',
        category: 'ML',
        effort: 80,
        desc: 'Integrated ML frameworks for speech disorder diagnostics — bridging raw audio data to model inference pipelines.',
        tags: ['ML', 'Python'],
      },
      {
        name: 'Research Web Modules',
        category: 'Frontend',
        effort: 70,
        desc: 'Built Bootstrap-based web modules used by researchers to trigger processing jobs and review diagnostic outputs.',
        tags: ['JavaScript', 'Bootstrap'],
      },
      {
        name: 'Data Processing Workflow',
        category: 'Backend',
        effort: 65,
        desc: 'Improved data processing pipelines for research testing — reduced manual steps in the audio analysis cycle.',
        tags: ['REST APIs'],
      },
    ],
  },
  {
    id: 'B',
    phase: 'Grind',
    title: 'JS Engineer Intern',
    tags: ['React', 'Next.js', 'Stripe', 'LLM'],
    desc: '12 production features. Stripe subscriptions, AI task suggestions, performance fixes. 8,000+ users depending on what I shipped.',
    icon: '⚙️',
    period: 'Jan – Jun 2025',
    org: 'NewVariable Inc',
    totalFeatures: 12,
    features: [
      {
        name: 'Stripe Subscription Model',
        category: 'Payments',
        effort: 95,
        desc: 'Designed and implemented a full Stripe subscription flow over an existing free-tier product — enabling premium tiers, plan upgrades, webhook handling, and billing management.',
        tags: ['Stripe', 'Next.js'],
      },
      {
        name: 'AI Task Suggestions',
        category: 'AI',
        effort: 88,
        desc: 'Built an LLM-powered task suggestion feature that analyzes user context and surfaces relevant action items, reducing manual effort in task creation.',
        tags: ['LLM', 'React'],
      },
      {
        name: 'Performance Optimization',
        category: 'Performance',
        effort: 82,
        desc: 'Identified and resolved a rendering bottleneck in high-volume task lists — profiled the component tree, reduced unnecessary re-renders, improving responsiveness for power users.',
        tags: ['React'],
      },
      {
        name: 'Core Task Management Features',
        category: 'Product',
        effort: 75,
        desc: '9 production features spanning task workflows, filtering, sorting, bulk actions, and status management — shipped incrementally across 5 months.',
        tags: ['React', 'Next.js'],
      },
    ],
  },
  {
    id: 'C',
    phase: 'Brew',
    title: 'Full Stack Engineer',
    tags: ['LangChain', 'Mastra', 'AWS', 'Capacitor'],
    desc: '20+ features across a finance SaaS. Agentic AI workflows, a cross-platform mobile app, auth migration, microservices. Still building — the cup isn\'t full yet.',
    icon: '☕',
    period: 'Jun 2025 – Present',
    org: 'NewVariable Inc',
    totalFeatures: 20,
    features: [
      {
        name: 'Agentic AI Workflows',
        category: 'AI',
        effort: 97,
        desc: 'Built 6 multi-step agentic workflows using LangChain and Mastra — automating financial data processing tasks that previously required manual user input across multiple screens.',
        tags: ['LangChain', 'Mastra'],
      },
      {
        name: 'Cross-Platform Mobile App',
        category: 'Mobile',
        effort: 90,
        desc: 'Shipped a Capacitor-based mobile app extending the SaaS product to iOS and Android — resolved platform-specific rendering bugs to achieve full feature parity.',
        tags: ['Capacitor'],
      },
      {
        name: 'Auth Migration (BetterAuth)',
        category: 'Auth',
        effort: 88,
        desc: 'Migrated authentication infrastructure to BetterAuth, implementing passkey login, two-factor authentication, and multi-session management across user tiers.',
        tags: ['BetterAuth', 'Passkey', '2FA'],
      },
      {
        name: 'Recurring Transactions Module',
        category: 'Product',
        effort: 85,
        desc: 'Built from scratch — full frontend + backend. Users can set up recurring income/expense rules that auto-generate entries on schedule, with editing and history tracking.',
        tags: ['Next.js', 'Node.js'],
      },
      {
        name: 'Goal Tracking Module',
        category: 'Product',
        effort: 82,
        desc: 'Designed and shipped a financial goal-setting feature — users define savings targets, link accounts, and track progress with visual indicators and milestone alerts.',
        tags: ['React', 'Node.js'],
      },
      {
        name: 'Rule-Based Automation Engine',
        category: 'AI',
        effort: 85,
        desc: 'Built a condition-action rules engine — users configure triggers (e.g. "if spending > $500 in dining") that fire automated categorizations, alerts, or workflow steps.',
        tags: ['Node.js', 'Mastra'],
      },
      {
        name: 'AWS Infrastructure (S3, SQS, Lambda)',
        category: 'Cloud',
        effort: 78,
        desc: 'Integrated AWS S3 for document storage, SQS for async job queuing, and Lambda for serverless processing — improving reliability of background tasks at scale.',
        tags: ['AWS S3', 'AWS SQS', 'AWS Lambda'],
      },
    ],
  },
];

/* ── Category color map ─────────────────────────────────────── */
const CAT_COLOR: Record<string, string> = {
  AI: '#c8813a',
  Integration: '#5a8a3a',
  ML: '#5a8a3a',
  Frontend: '#6a7fc0',
  Backend: '#8b6a3c',
  Payments: '#b87333',
  Performance: '#7a6a9a',
  Product: '#5a8a8a',
  Mobile: '#8a5a7a',
  Auth: '#9a6a5a',
  Cloud: '#4a7a9a',
};

/* ── Modal ─────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: 'min(92vw, 720px)',
          maxHeight: '88vh',
          overflowY: 'auto',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          padding: '32px',
        }}
      >
        {/* Modal header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 28 }}>{project.icon}</span>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase',
                color: 'var(--gold)', opacity: 0.6,
                padding: '4px 12px', borderRadius: 100,
                border: '1px solid var(--gold)',
              }}>
                {project.phase}
              </div>
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26, fontWeight: 900,
              color: 'var(--text)', margin: '0 0 4px',
            }}>
              {project.title}
            </h3>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: 'var(--muted)', opacity: 0.6,
            }}>
              {project.org} · {project.period}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent', border: '1px solid var(--border)',
              color: 'var(--muted)', borderRadius: 8,
              width: 32, height: 32, cursor: 'pointer',
              fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >×</button>
        </div>

        {/* Feature count bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase',
              color: 'var(--muted)', opacity: 0.6,
            }}>
              Features shipped
            </span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: 'var(--gold)',
            }}>
              {project.id === 'C' ? '20+' : project.totalFeatures}
            </span>
          </div>
          <div style={{
            width: '100%', height: 3,
            background: 'var(--border)', borderRadius: 3, overflow: 'hidden',
          }}>
            <div style={{
              width: project.id === 'C' ? '80%' : '100%',
              height: '100%',
              background: 'linear-gradient(90deg, #c8813a, #e8c99a)',
              borderRadius: 3,
            }} />
          </div>
        </div>

        {/* Category breakdown mini-chart */}
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase',
            color: 'var(--muted)', opacity: 0.6, marginBottom: 14,
          }}>
            Work breakdown
          </div>
          <div style={{ display: 'flex', gap: 4, height: 8, borderRadius: 4, overflow: 'hidden', marginBottom: 12 }}>
            {project.features.map((f, i) => (
              <div
                key={i}
                style={{
                  flex: f.effort,
                  background: CAT_COLOR[f.category] || 'var(--gold)',
                  opacity: 0.75,
                }}
                title={f.name}
              />
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: 2,
                  background: CAT_COLOR[f.category] || 'var(--gold)',
                  opacity: 0.75,
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, color: 'var(--muted)', opacity: 0.7,
                }}>
                  {f.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {project.features.map((feat, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '16px 18px',
                borderLeft: `3px solid ${CAT_COLOR[feat.category] || 'var(--gold)'}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15, fontWeight: 700,
                  color: 'var(--text)',
                }}>
                  {feat.name}
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: CAT_COLOR[feat.category] || 'var(--gold)',
                  opacity: 0.8, flexShrink: 0, marginLeft: 12,
                }}>
                  {feat.category}
                </span>
              </div>

              <p style={{
                fontSize: 13, lineHeight: 1.65,
                color: 'var(--text)', opacity: 0.7, margin: '0 0 10px',
              }}>
                {feat.desc}
              </p>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {feat.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    padding: '3px 9px', borderRadius: 100,
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {project.id === 'C' && (
          <div style={{
            marginTop: 16, padding: '12px 16px',
            borderRadius: 10, border: '1px dashed var(--border)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: 'var(--gold)', opacity: 0.5,
            textAlign: 'center', letterSpacing: '2px',
          }}>
            + more features in progress · still brewing ☕
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main Section ───────────────────────────────────────────── */
const WorkSection = forwardRef<HTMLElement>((_, ref) => {
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeModal, setActiveModal] = useState<typeof PROJECTS[0] | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = scrollTrackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trackH = el.offsetHeight;
      const viewH = window.innerHeight;
      const scrollable = trackH - viewH;
      const scrolled = -rect.top;
      setProgress(Math.min(1, Math.max(0, scrolled / scrollable)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} style={{ position: 'relative', zIndex: 10 }}>
      {activeModal && (
        <ProjectModal project={activeModal} onClose={() => setActiveModal(null)} />
      )}

      {/* Header */}
      <div style={{ textAlign: 'center', padding: '80px 48px 0' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '6px', textTransform: 'uppercase',
          color: 'var(--gold)', opacity: 0.55, marginBottom: 16,
        }}>01</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900,
          color: 'var(--text)', marginBottom: 12, lineHeight: 1.1,
        }}>
          The <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Work</em>
        </h2>
        <p style={{
          fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
          fontSize: 16, color: 'var(--text)', opacity: 0.65,
          maxWidth: 400, margin: '0 auto 48px', lineHeight: 1.7,
        }}>
          Every career is a pour-over. Seed, grind, brew.
        </p>
      </div>

      {/* 300vh scroll track */}
      <div ref={scrollTrackRef} style={{ height: '300vh', position: 'relative' }}>
        <div style={{
          position: 'sticky', top: 0, height: '100vh',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <CoffeeJourneyArt p={progress} onOpenModal={setActiveModal} />
        </div>
      </div>
    </section>
  );
});

WorkSection.displayName = 'WorkSection';
export default WorkSection;

/* ── Helpers ──────────────────────────────────────────────── */
function ramp(p: number, lo: number, hi: number) {
  return Math.min(1, Math.max(0, (p - lo) / (hi - lo)));
}

/* ── Art ─────────────────────────────────────────────────── */
function CoffeeJourneyArt({
  p,
  onOpenModal,
}: {
  p: number;
  onOpenModal: (proj: typeof PROJECTS[0]) => void;
}) {
  const opA = p < 0.36 ? 1 : 1 - ramp(p, 0.36, 0.50);
  const opB = ramp(p, 0.34, 0.48) * (p < 0.64 ? 1 : 1 - ramp(p, 0.64, 0.78));
  const opC = ramp(p, 0.62, 0.76);

  const pA = ramp(p, 0.00, 0.36);
  const pB = ramp(p, 0.34, 0.64);
  const pC = ramp(p, 0.62, 1.00) * 0.74;

  const cardIndex = p < 0.41 ? 0 : p < 0.75 ? 1 : 2;
  const project = PROJECTS[cardIndex];

  return (
    <div style={{
      width: 'min(90vw, 500px)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {/* Progress bar */}
      <div style={{
        width: '100%', height: 2, background: 'var(--border)',
        borderRadius: 2, marginBottom: 24, overflow: 'hidden',
      }}>
        <div style={{
          width: `${Math.min(p * 100, 80)}%`, height: '100%',
          background: 'linear-gradient(90deg,#c8813a,#e8c99a)',
          borderRadius: 2, transition: 'width .06s linear',
        }} />
      </div>

      {/* Phase pills */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
        {PROJECTS.map((proj, i) => {
          const active = i === cardIndex;
          return (
            <div key={proj.id} style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
              letterSpacing: '3px', textTransform: 'uppercase',
              padding: '5px 14px', borderRadius: 100, border: '1px solid',
              borderColor: active ? 'var(--gold)' : 'var(--border)',
              color: active ? 'var(--gold)' : 'var(--muted)',
              background: active ? 'rgba(200,129,58,.1)' : 'transparent',
              transition: 'all .35s',
            }}>{proj.phase}</div>
          );
        })}
      </div>

      {/* SVG art */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
        {/* Phase A: Seed */}
        <svg viewBox="0 0 400 300" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          opacity: opA, transition: 'opacity .45s',
        }}>
          <ellipse cx="200" cy="272" rx="155" ry="46" fill="rgba(90,138,58,0.10)" />
          <ellipse cx="200" cy="284" rx="80" ry="18" fill="#2a1206" />
          <ellipse cx="200" cy="278" rx="62" ry="12" fill="#3a1a08" />
          <ellipse cx="200" cy="273" rx="44" ry="7"  fill="#4a2010" />
          <ellipse cx="200" cy="268"
            rx={10 * (1 - ramp(pA, 0, 0.10))}
            ry={6  * (1 - ramp(pA, 0, 0.10))}
            fill="#6b3a1f" opacity={1 - ramp(pA, 0, 0.10)}
          />
          <line x1="200" y1="268" x2="200" y2={268 - pA * 210}
            stroke="#5a8a3a" strokeWidth="5" strokeLinecap="round" />
          <ellipse
            cx={200 - 34 * ramp(pA, 0.18, 0.54)} cy={268 - pA * 124}
            rx={32 * ramp(pA, 0.18, 0.54)} ry={12 * ramp(pA, 0.18, 0.54)}
            fill="#4a7a2a"
            transform={`rotate(-34,${200-34*ramp(pA,.18,.54)},${268-pA*124})`}
          />
          <ellipse
            cx={200 + 30 * ramp(pA, 0.42, 0.78)} cy={268 - pA * 166}
            rx={28 * ramp(pA, 0.42, 0.78)} ry={11 * ramp(pA, 0.42, 0.78)}
            fill="#5a8a3a"
            transform={`rotate(27,${200+30*ramp(pA,.42,.78)},${268-pA*166})`}
          />
          <ellipse
            cx={200 - 16 * ramp(pA, 0.68, 0.94)} cy={268 - pA * 198}
            rx={15 * ramp(pA, 0.68, 0.94)} ry={6  * ramp(pA, 0.68, 0.94)}
            fill="#6a9a3a"
            transform={`rotate(-20,${200-16*ramp(pA,.68,.94)},${268-pA*198})`}
          />
          <circle cx="200" cy={268 - pA * 210} r={10 * ramp(pA, 0.78, 1.0)} fill="#c0392b" />
          <circle cx={196} cy={268 - pA*210 - 3} r={3 * ramp(pA, 0.82, 1.0)} fill="rgba(255,255,255,0.28)" />
          <text x="200" y="26" textAnchor="middle" fill="#c8813a" fontSize="10"
            letterSpacing="4" fontFamily="'JetBrains Mono',monospace" opacity="0.6">ORIGIN</text>
        </svg>

        {/* Phase B: Grinder */}
        <svg viewBox="0 0 400 300" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          opacity: opB, transition: 'opacity .45s',
        }}>
          <ellipse cx="200" cy="196" rx="128" ry="65" fill="rgba(139,94,60,0.14)" />
          <polygon points="162,124 238,124 224,90 176,90" fill="#2a1408" stroke="#8b5e3c" strokeWidth="1.5" />
          <rect x="173" y="84" width="54" height="8" rx="4" fill="#1a0e05" stroke="#8b5e3c" strokeWidth="1" />
          {[0,1,2].map(i => {
            const by = 56 + ((pB * 46 + i * 16) % 40);
            return <ellipse key={i} cx={183+i*17} cy={by} rx="5" ry="3.5" fill="#6b3a1f" opacity={by < 92 ? 1 : 0} />;
          })}
          <rect x="158" y="124" width="84" height="114" rx="9" fill="#1a0e05" stroke="#8b5e3c" strokeWidth="1.5" />
          {[0,1,2].map(i => (
            <line key={i} x1="168" y1={148+i*14} x2="232" y2={148+i*14} stroke="#8b5e3c" strokeWidth="0.5" opacity="0.22" />
          ))}
          <circle cx="200" cy="170" r="22" fill="#1e1008" stroke="#c8813a" strokeWidth="1.5" />
          {[0,1,2,3,4,5,6,7].map(i => (
            <line key={i}
              x1={200+18*Math.cos(i*Math.PI/4)} y1={170+18*Math.sin(i*Math.PI/4)}
              x2={200+21*Math.cos(i*Math.PI/4)} y2={170+21*Math.sin(i*Math.PI/4)}
              stroke="#c8813a" strokeWidth="1" opacity="0.35" />
          ))}
          <line x1="200" y1="170"
            x2={200+14*Math.cos(-Math.PI/2+pB*Math.PI*10)}
            y2={170+14*Math.sin(-Math.PI/2+pB*Math.PI*10)}
            stroke="#c8813a" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="182" y="238" width="36" height="10" rx="4" fill="#2a1408" stroke="#8b5e3c" strokeWidth="1" />
          <ellipse cx="200" cy="260" rx={44 * ramp(pB, 0.48, 0.90)} ry={10 * ramp(pB, 0.48, 0.90)} fill="#3a1e0a" />
          <text x="200" y="26" textAnchor="middle" fill="#c8813a" fontSize="10"
            letterSpacing="4" fontFamily="'JetBrains Mono',monospace" opacity="0.6">PROCESS</text>
        </svg>

        {/* Phase C: Pour-over */}
        <svg viewBox="0 0 400 300" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          opacity: opC, transition: 'opacity .45s',
        }}>
          <defs>
            <clipPath id="cupClipFinal">
              <path d="M148,192 L158,268 Q200,280 242,268 L252,192 Z" />
            </clipPath>
            <linearGradient id="paperG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f5ede2" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#e0c9a4" stopOpacity="0.88" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="258" rx="142" ry="48" fill="rgba(200,129,58,0.12)" />
          <rect x="188" y="182" width="24" height="12" rx="3" fill="#2a1408" stroke="#8b5e3c" strokeWidth="1" />
          <rect x="178" y="191" width="44" height="4" rx="2" fill="#3a1a08" />
          <path d="M150,88 L250,88 L200,186 Z" fill="url(#paperG)" stroke="#c8a87a" strokeWidth="1.5" />
          <line x1="200" y1="88" x2="200" y2="186" stroke="#c8a87a" strokeWidth="0.8" opacity="0.5" />
          {[-1,1].map((side, i) => (
            <line key={i} x1={200+side*30} y1={96} x2={200+side*8} y2={178} stroke="#c8a87a" strokeWidth="0.6" opacity="0.28" />
          ))}
          <ellipse cx="200" cy={150 + ramp(pC,0,0.4)*6}
            rx={26 * ramp(pC,0,0.28)} ry={7 * ramp(pC,0,0.28)} fill="#3a1e0a" opacity="0.85" />
          {pC > 0.15 && (
            <ellipse cx="200" cy="140" rx={30 * ramp(pC, 0.15, 0.52)} ry={5 * ramp(pC, 0.15, 0.52)} fill="#5a2e0a" opacity="0.65" />
          )}
          <line x1="200" y1="186" x2="200" y2={186 + 10} stroke="#6b3a1f" strokeWidth="2.5" strokeLinecap="round" opacity={0.4 + Math.sin(pC * 50) * 0.35} />
          <circle cx="200" cy={196 + Math.sin(pC * 50) * 3} r="3" fill="#6b3a1f" opacity={0.5 + Math.sin(pC * 50) * 0.35} />
          <ellipse cx="200" cy="276" rx="74" ry="11" fill="#1a0e05" stroke="#8b5e3c" strokeWidth="1" />
          <path d="M148,192 L158,268 Q200,280 242,268 L252,192 Z" fill="#1a0e05" stroke="#8b5e3c" strokeWidth="1.5" />
          <rect x="134" y={268 - pC*64} width="138" height={pC*70} fill="#3a1a08" clipPath="url(#cupClipFinal)" />
          {pC > 0.18 && (
            <ellipse cx="200" cy={268 - pC*64} rx={42 * ramp(pC,0.18,0.44)} ry={5 * ramp(pC,0.18,0.44)} fill="#c8813a" opacity="0.30" />
          )}
          <path d="M252,210 Q286,210 286,238 Q286,264 252,258" fill="none" stroke="#8b5e3c" strokeWidth="8" strokeLinecap="round" />
          <text x="200" y="26" textAnchor="middle" fill="#c8813a" fontSize="10"
            letterSpacing="4" fontFamily="'JetBrains Mono',monospace" opacity="0.6">STILL BREWING</text>
          {[0,1,2].map(i => (
            <circle key={i} cx={190+i*10} cy="38" r="2" fill="#c8813a" className={`brew-dot-${i}`} />
          ))}
        </svg>
      </div>

      {/* Project card — title is now clickable */}
      <div style={{
        marginTop: 24, width: '100%',
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '20px 24px', transition: 'all .35s',
      }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>{project.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
                letterSpacing: '4px', textTransform: 'uppercase',
                color: 'var(--gold)', opacity: 0.6, marginBottom: 4,
              }}>{project.phase}</div>
              <div style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
                color: 'var(--muted)', opacity: 0.5,
              }}>{project.period}</div>
            </div>

            {/* Clickable title */}
            <button
              onClick={() => onOpenModal(project)}
              style={{
                background: 'transparent', border: 'none', padding: 0,
                cursor: 'pointer', textAlign: 'left',
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 7,
              }}
            >
              <span style={{
                fontFamily: "'Playfair Display',serif", fontSize: 17,
                fontWeight: 700, color: 'var(--text)',
                textDecoration: 'underline', textDecorationColor: 'rgba(200,129,58,0.4)',
                textUnderlineOffset: 3,
              }}>
                {project.title}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 9, color: 'var(--gold)', opacity: 0.6,
                letterSpacing: '2px',
              }}>
                → view work
              </span>
            </button>

            <div style={{
              fontSize: 14, lineHeight: 1.7,
              color: 'var(--text)', opacity: 0.72, marginBottom: 11,
            }}>{project.desc}</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {project.tags.map(t => (
                <span key={t} style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
                  padding: '3px 10px', borderRadius: 100,
                  border: '1px solid var(--border)', color: 'var(--muted)',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        marginTop: 18,
        fontFamily: "'JetBrains Mono',monospace", fontSize: 9,
        letterSpacing: '3px', textTransform: 'uppercase',
        color: 'var(--muted)', opacity: p > 0.92 ? 0 : 0.35,
        transition: 'opacity .4s',
      }}>scroll to advance ↓</div>

      <style>{`
        @keyframes brewPulse { 0%,100%{opacity:.15;} 50%{opacity:.65;} }
        .brew-dot-0{animation:brewPulse 1.4s ease-in-out infinite 0s;}
        .brew-dot-1{animation:brewPulse 1.4s ease-in-out infinite 0.35s;}
        .brew-dot-2{animation:brewPulse 1.4s ease-in-out infinite 0.7s;}
      `}</style>
    </div>
  );
}