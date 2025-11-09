import { NextResponse } from 'next/server';
import { generateVideoTaskAction } from '@/app/actions';

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();
    const result = await generateVideoTaskAction({ answers });
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e?.message || 'Error interno' }, { status: 500 });
  }
}