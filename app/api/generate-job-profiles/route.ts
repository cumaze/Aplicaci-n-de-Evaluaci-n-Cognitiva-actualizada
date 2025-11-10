import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { existingJobs } = await req.json();

    // Clasificación base por nivel jerárquico
    const levels = {
      operativo: ["asiste", "ejecuta", "procesa", "cumple"],
      medio: ["coordina", "supervisa", "controla", "organiza"],
      alto: ["define", "dirige", "planifica", "estrategia", "presupuesta"],
    };

    // Diccionario simplificado de competencias
    const competenciesByLevel = {
      operativo: [
        "Responsabilidad",
        "Atención al Detalle",
        "Cumplimiento de Normas",
        "Adaptabilidad",
        "Trabajo en Equipo",
        "Comunicación Asertiva",
        "Orientación al Cliente",
        "Aprendizaje Continuo",
        "Disciplina",
        "Colaboración",
      ],
      medio: [
        "Liderazgo",
        "Planificación y Organización",
        "Gestión de Procesos",
        "Comunicación Efectiva",
        "Toma de Decisiones",
        "Orientación a Resultados",
        "Resolución de Problemas",
        "Delegación",
        "Motivación de Equipo",
        "Gestión del Tiempo",
      ],
      alto: [
        "Pensamiento Estratégico",
        "Gestión de Recursos",
        "Innovación",
        "Gestión del Cambio",
        "Impacto e Influencia",
        "Negociación",
        "Orientación al Logro",
        "Visión Global",
        "Desarrollo de Talento",
        "Dirección Estratégica",
      ],
    };

    // Si faltan puestos intermedios, crear algunos automáticamente
    const newProfiles = [];

    if (existingJobs.includes("Auxiliar Contable") && existingJobs.includes("Gerente Financiero")) {
      newProfiles.push({
        job: "Coordinador Contable",
        description:
          "Supervisa al equipo contable, consolida reportes financieros y asegura el cumplimiento de políticas internas.",
        competencies: pickRandom(competenciesByLevel.medio, 10),
      });
    }

    if (existingJobs.includes("Vendedor") && existingJobs.includes("Gerente de Ventas")) {
      newProfiles.push({
        job: "Supervisor de Ventas Regional",
        description:
          "Coordina y supervisa equipos de ventas zonales, garantiza cumplimiento de objetivos y apoya la estrategia comercial.",
        competencies: pickRandom(competenciesByLevel.medio, 10),
      });
    }

    // Si no hay huecos detectados, genera uno genérico aleatorio
    if (newProfiles.length === 0) {
      newProfiles.push({
        job: "Coordinador General",
        description:
          "Gestiona recursos humanos y materiales, coordina actividades interdepartamentales y asegura cumplimiento de metas.",
        competencies: pickRandom(competenciesByLevel.medio, 10),
      });
    }

    return NextResponse.json({ success: true, newProfiles });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// --- Función auxiliar ---
function pickRandom(array: string[], count: number): string[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
