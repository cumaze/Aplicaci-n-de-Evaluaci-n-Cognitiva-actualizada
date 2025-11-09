import { NextResponse } from 'next/server';
import type { UserData, Answers, CompetencyGrade } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const { userData, answers } = (await req.json()) as { userData: UserData; answers: Answers };

    // Lógica temporal - reemplaza con tu lógica real
    const summary = `Resumen de evaluación para ${userData.name} en ${userData.career}. Basado en las respuestas proporcionadas, se observa un buen desempeño en las competencias evaluadas.`;

    const grades: CompetencyGrade[] = Object.keys(answers).map((competency, index) => ({
      competency,
      score: 3.0 + (index * 0.2),
      grade: 'B+',
      nivelConductual: 'Avanzado',
      justification: 'Demostró competencia sólida en esta área mediante ejemplos concretos.'
    }));

    return NextResponse.json({ success: true, summary, grades });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || 'Error interno' },
      { status: 500 },
    );
  }
}