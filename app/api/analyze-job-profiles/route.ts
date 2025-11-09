import { NextResponse } from 'next/server';
import { analyzeJobProfilesAction } from '@/app/actions';

export async function POST(req: Request) {
  try {
    const { userData, grades, jobProfiles } = await req.json();
    const result = await analyzeJobProfilesAction({ userData, grades, jobProfiles });
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e?.message || 'Error interno' }, { status: 500 });
  }
}