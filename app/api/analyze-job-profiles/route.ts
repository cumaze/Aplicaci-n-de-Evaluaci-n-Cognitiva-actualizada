import { NextResponse } from 'next/server';
import type { UserData, CompetencyGrade, JobProfile, JobProfileAnalysis } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const { userData, grades, jobProfiles } = (await req.json()) as {
      userData: UserData;
      grades: CompetencyGrade[];
      jobProfiles: JobProfile[];
    };

    // Lógica temporal - reemplaza con tu lógica real
    const analyses: JobProfileAnalysis[] = (jobProfiles || []).map((jp) => ({
      title: jp.title || jp.name || 'Puesto',
      description: jp.description || 'Descripción no disponible.',
      atenencia: 'Alta',
      pertinencia: 'Media',
      recurrencia: 'Alta',
    }));

    return NextResponse.json({ success: true, analyses });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || 'Error interno' },
      { status: 500 },
    );
  }
}