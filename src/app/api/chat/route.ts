import { NextRequest, NextResponse } from 'next/server';
import { getGeminiReply, type ChatMessage } from '@/lib/gemini'; // adjust path if needed

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    // ── Basic validation ──────────────────────────────────────────────────────
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'messages array is required and must not be empty.' },
        { status: 400 },
      );
    }

    const lastMsg = messages[messages.length - 1];
    if (lastMsg.role !== 'user' || !lastMsg.content?.trim()) {
      return NextResponse.json(
        { error: 'Last message must be a non-empty user message.' },
        { status: 400 },
      );
    }

    // ── Delegate to Gemini service ────────────────────────────────────────────
    const reply = await getGeminiReply(messages);
    return NextResponse.json({ reply });

  } catch (err) {
    console.error('[/api/chat] Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}