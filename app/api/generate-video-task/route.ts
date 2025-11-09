import { NextResponse } from 'next/server';
import type { Answers, VideoTask } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const { answers } = (await req.json()) as { answers: Answers };
    const keys = Object.keys(answers || {});
    const pick = keys.slice(0, 3);

    const tasks: VideoTask[] = pick.map((competency) => ({
      competency,
      task: 'Graba un video de 1–2 minutos con un ejemplo concreto (situación, acciones, resultado) que evidencie esta competencia en un contexto laboral.',
    }));

    return NextResponse.json({ success: true, tasks });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || 'Error interno' },
      { status: 500 },
    );
  }
}