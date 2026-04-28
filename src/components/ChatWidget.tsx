'use client';
import { useState, useRef, useEffect } from 'react';
import { SITE_META } from './data';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What's your strongest technical skill?",
  "Are you open to remote roles?",
  "What kind of team are you looking for?",
  "Tell me about your AI experience",
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWidget({ isOpen, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi! I'm Khushi's portfolio assistant. Ask me anything about her experience, skills, or what she's looking for. ☕`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply || "Sorry, I couldn't get a response. Try emailing Khushi directly!",
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Something went wrong. You can reach Khushi directly at ${SITE_META.email}`,
      }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 900,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease',
        }}
      />

      {/* Chat panel */}
      <div style={{
        position: 'fixed',
        bottom: 'clamp(16px, 4vw, 32px)',
        right: 'clamp(16px, 4vw, 32px)',
        width: 'min(92vw, 420px)',
        height: 'min(80vh, 580px)',
        zIndex: 901,
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
        animation: 'slideUp 0.25s ease',
      }}>
        <style>{`
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(24px) }
            to   { opacity: 1; transform: translateY(0) }
          }
          .chat-msg-user {
            align-self: flex-end;
            background: var(--gold);
            color: var(--bg);
            border-radius: 16px 16px 4px 16px;
          }
          .chat-msg-ai {
            align-self: flex-start;
            background: var(--surface);
            border: 1px solid var(--border);
            color: var(--text);
            border-radius: 16px 16px 16px 4px;
          }
          .chat-input:focus { outline: none; }
          .chat-scroll::-webkit-scrollbar { width: 4px; }
          .chat-scroll::-webkit-scrollbar-track { background: transparent; }
          .chat-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
          .dot-pulse {
            display: inline-flex; gap: 4px; align-items: center; padding: 4px 0;
          }
          .dot-pulse span {
            width: 6px; height: 6px; border-radius: 50%;
            background: var(--gold); opacity: 0.4;
            animation: dotBounce 1.2s ease-in-out infinite;
          }
          .dot-pulse span:nth-child(2) { animation-delay: 0.2s; }
          .dot-pulse span:nth-child(3) { animation-delay: 0.4s; }
          @keyframes dotBounce {
            0%,80%,100% { transform: translateY(0); opacity: 0.4; }
            40%          { transform: translateY(-6px); opacity: 1; }
          }
          .suggested-btn {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 100px;
            color: var(--muted);
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            padding: 6px 12px;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.15s;
            letter-spacing: 0.3px;
          }
          .suggested-btn:hover {
            border-color: var(--gold);
            color: var(--gold);
          }
        `}</style>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Avatar */}
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'rgba(200,129,58,0.15)',
              border: '1px solid var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16,
            }}>
              ☕
            </div>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 14, fontWeight: 700, color: 'var(--text)',
              }}>
                Ask about Khushi
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9, color: 'var(--gold)', opacity: 0.7,
                letterSpacing: '2px', textTransform: 'uppercase',
              }}>
                portfolio assistant · online
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: 8, width: 30, height: 30,
              cursor: 'pointer', color: 'var(--muted)',
              fontSize: 16, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--gold)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--gold)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)';
            }}
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div
          className="chat-scroll"
          style={{
            flex: 1, overflowY: 'auto',
            padding: '16px',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={msg.role === 'user' ? 'chat-msg-user' : 'chat-msg-ai'}
              style={{
                maxWidth: '85%',
                padding: '10px 14px',
                fontSize: 14, lineHeight: 1.6,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {msg.content}
            </div>
          ))}

          {/* Loading dots */}
          {loading && (
            <div className="chat-msg-ai" style={{ padding: '10px 14px' }}>
              <div className="dot-pulse">
                <span/><span/><span/>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggested questions — only show when just 1 message (initial) */}
        {messages.length === 1 && (
          <div style={{
            padding: '0 16px 12px',
            display: 'flex', gap: 6, flexWrap: 'wrap',
            flexShrink: 0,
          }}>
            {SUGGESTED_QUESTIONS.map(q => (
              <button
                key={q}
                className="suggested-btn"
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input area */}
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid var(--border)',
          display: 'flex', gap: 8, alignItems: 'center',
          flexShrink: 0,
        }}>
          <input
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me anything..."
            style={{
              flex: 1,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 100,
              padding: '10px 16px',
              fontSize: 14,
              color: 'var(--text)',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'border-color 0.15s',
            }}
            onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
            onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            style={{
              width: 38, height: 38,
              borderRadius: '50%',
              background: input.trim() && !loading ? 'var(--gold)' : 'var(--surface)',
              border: '1px solid var(--border)',
              cursor: input.trim() && !loading ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, transition: 'all 0.15s',
              flexShrink: 0,
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </>
  );
}