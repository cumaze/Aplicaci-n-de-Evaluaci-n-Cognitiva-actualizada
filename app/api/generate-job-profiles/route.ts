import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { existingJobs = [], grades = [] } = await req.json();

    // Top 3 blandas
    const sorted = grades.sort((a: any, b: any) => b.score - a.score).slice(0, 3);
    const topBlandas = sorted.map((g: any) => g.competency);

    const hardSkills = ["Análisis de datos", "Gestión financiera", "Programación", "Planificación estratégica", "Diseño UX/UI", "Liderazgo técnico", "Negociación", "Contabilidad avanzada"];

    function randomPick(arr: string[], n: number) {
      return arr.sort(() => 0.5 - Math.random()).slice(0, n);
    }

    const generateProfile = (job: string) => ({
      job,
      description: `Rol clave para aplicar las competencias evaluadas y fortalecer la ejecución estratégica dentro del área de ${job}.`,
      criterios: {
        atinencia: "El rol está directamente vinculado con el desempeño observable en la dinámica del puesto.",
        pertinencia: "Su ejecución es crucial y tiene impacto directo en los resultados de la organización.",
        recurrencia: "Representa un patrón constante de comportamiento dentro del proceso laboral.",
      },
      blandasDominantes: topBlandas,
      durasEvaluadas: randomPick(hardSkills, 3),
      durasSugeridas: randomPick(hardSkills.filter(s => !topBlandas.includes(s)), 3),
    });

    const lower = existingJobs.slice(0, 5).map(generateProfile);
    const upper = existingJobs.slice(-3).map(generateProfile);

    return NextResponse.json({ success: true, lower, upper });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
