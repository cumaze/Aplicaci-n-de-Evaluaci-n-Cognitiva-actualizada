import { NextResponse } from 'next/server';
import type { Question } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const { career, level } = (await req.json()) as { career: string; level: string };

    // Lógica temporal - reemplaza con tu lógica real
    const questions: Question[] = [
      {
        competency: 'Comunicación',
        question: 'Describe una situación donde tuviste que comunicar una idea compleja a un equipo.'
      },
      {
        competency: 'Liderazgo', 
        question: 'Cuenta sobre un proyecto que lideraste y cómo motivaste al equipo.'
      },
      {
        competency: 'Resolución de problemas',
        question: 'Explica cómo abordaste un problema difícil en tu trabajo.'
      }
    ];

    return NextResponse.json({ success: true, questions });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || 'Error interno' },
      { status: 500 },
    );
  }
}