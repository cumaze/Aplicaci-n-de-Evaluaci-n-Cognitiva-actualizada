import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const messages = body?.messages ?? [{ role: "user", content: "ping" }];

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        choices: [{ message: { role: "assistant", content: "🧪 [SIMULADO] Perfiles generados localmente." } }]
      });
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages,
        temperature: 0.2,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: { status: res.status, body: err } }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e:any) {
    return NextResponse.json({ error: e?.message ?? "Unexpected error" }, { status: 500 });
  }
}
