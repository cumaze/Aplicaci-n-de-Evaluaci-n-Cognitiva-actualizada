import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    info: "Usa POST con { existingJobs: [...] }",
    sample: { existingJobs: ["Auxiliar Contable", "Gerente Financiero"] }
  });
}

export async function POST(req: Request) {
  try {
    const { existingJobs } = await req.json();

    const competenciesByLevel = {
      operativo: [
        "Responsabilidad","Atención al Detalle","Cumplimiento de Normas","Adaptabilidad",
        "Trabajo en Equipo","Comunicación Asertiva","Orientación al Cliente","Aprendizaje Continuo",
        "Disciplina","Colaboración",
      ],
      medio: [
        "Liderazgo","Planificación y Organización","Gestión de Procesos","Comunicación Efectiva",
        "Toma de Decisiones","Orientación a Resultados","Resolución de Problemas","Delegación",
        "Motivación de Equipo","Gestión del Tiempo",
      ],
      alto: [
        "Pensamiento Estratégico","Gestión de Recursos","Innovación","Gestión del Cambio",
        "Impacto e Influencia","Negociación","Orientación al Logro","Visión Global",
        "Desarrollo de Talento","Dirección Estratégica",
      ],
    };

    const newProfiles: any[] = [];

    if (existingJobs?.includes("Auxiliar Contable") && existingJobs?.includes("Gerente Financiero")) {
      newProfiles.push({
        job: "Coordinador Contable",
        description:
          "Supervisa al equipo contable, consolida reportes y asegura cumplimiento de políticas internas.",
        competencies: pickRandom(competenciesByLevel.medio, 10),
      });
    }

    if (existingJobs?.includes("Vendedor") && existingJobs?.includes("Gerente de Ventas")) {
      newProfiles.push({
        job: "Supervisor de Ventas Regional",
        description:
          "Coordina equipos zonales, da seguimiento a metas y apoya la estrategia comercial.",
        competencies: pickRandom(competenciesByLevel.medio, 10),
      });
    }

    if (newProfiles.length === 0) {
      newProfiles.push({
        job: "Coordinador General",
        description:
          "Gestiona recursos y actividades interdepartamentales para asegurar el logro de metas.",
        competencies: pickRandom(competenciesByLevel.medio, 10),
      });
    }

    return NextResponse.json({ success: true, newProfiles });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

function pickRandom(arr: string[], n: number) {
  const copy = [...arr];
  const out: string[] = [];
  while (out.length < n && copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}
