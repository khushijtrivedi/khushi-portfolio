import { ImageResponse } from 'next/og';
import { SITE_META, HERO_PILLS } from '../components/data'

export const runtime = 'edge';
export const alt = `${SITE_META.name} — ${SITE_META.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0e0c0a',
          position: 'relative',
          padding: '0 80px',
        }}
      >
        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,129,58,0.12) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
        }} />

        {/* Role tag */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28,
          fontFamily: 'monospace', fontSize: 13,
          letterSpacing: 6, textTransform: 'uppercase', color: '#c8813a',
        }}>
          <div style={{ width: 44, height: 1, background: '#c8813a', opacity: 0.3, display: 'flex' }} />
          {SITE_META.roleShort}
          <div style={{ width: 44, height: 1, background: '#c8813a', opacity: 0.3, display: 'flex' }} />
        </div>

        {/* Name */}
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 20,
          marginBottom: 18,
        }}>
          <span style={{
            fontFamily: 'serif', fontWeight: 900,
            fontSize: 108, color: '#f5ede0', letterSpacing: -3, lineHeight: 1,
          }}>
            {SITE_META.name.split(' ')[0]}
          </span>
          <span style={{
            fontFamily: 'serif', fontWeight: 900, fontStyle: 'italic',
            fontSize: 108, color: '#c8813a', letterSpacing: -3, lineHeight: 1,
          }}>
            {SITE_META.name.split(' ')[1]}
          </span>
        </div>

        {/* Tagline */}
        <div style={{
          fontFamily: 'serif', fontStyle: 'italic',
          fontSize: 22, color: '#c8a97a', opacity: 0.75,
          marginBottom: 36,
        }}>
          {SITE_META.tagline}
        </div>

        {/* Pills */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10,
          justifyContent: 'center', maxWidth: 800,
        }}>
          {HERO_PILLS.map(({ label }) => (
            <div key={label} style={{
              display: 'flex',
              fontFamily: 'monospace', fontSize: 11,
              letterSpacing: 2, textTransform: 'uppercase',
              padding: '7px 18px', borderRadius: 100,
              border: '1px solid rgba(200,129,58,0.45)',
              color: '#c8813a',
            }}>
              {label}
            </div>
          ))}
        </div>

        {/* Open to work */}
        <div style={{
          position: 'absolute', bottom: 36,
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'monospace', fontSize: 11,
          letterSpacing: 4, textTransform: 'uppercase',
          color: '#c8813a', opacity: 0.55,
        }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4caf50', display: 'flex' }} />
          currently open to new roles
        </div>
      </div>
    ),
    { ...size }
  );
}