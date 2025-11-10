import { NextResponse } from "next/server";

/**
 * Utilidades simples
 */
function sample<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < n && copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}
function uniq(arr: string[]) {
  return Array.from(new Set(arr));
}

/**
 * Catálogos base para “inventar” perfiles
 */
const LOWER_TITLES = [
  "Asistente Administrativo",
  "Auxiliar Contable",
  "Analista de Datos Jr.",
  "Ejecutivo de Soporte",
  "Asistente de Proyectos",
  "Coordinador Operativo Jr.",
  "Analista de Calidad Jr.",
  "Ejecutivo de Servicio al Cliente",
  "Asistente de Compras",
  "Analista Jr. de Marketing",
];

const UPPER_TITLES = [
  "Coordinador Sr. de Proyectos",
  "Jefe de Operaciones",
  "Gerente de Mercadeo",
  "Líder de Transformación",
  "Especialista Sr. en Innovación",
  "Gerente de Planeación",
  "Jefe de Talento Humano",
  "Gerente Financiero",
];

const SOFT_SKILLS_POOL = [
  "Liderazgo",
  "Trabajo en Equipo",
  "Comunicación Efectiva",
  "Orientación a Resultados",
  "Planificación y Organización",
  "Pensamiento Analítico",
  "Resolución de Problemas",
  "Adaptabilidad",
  "Gestión del Tiempo",
  "Atención al Detalle",
  "Negociación",
  "Orientación al Cliente",
  "Creatividad e Innovación",
  "Pensamiento Estratégico",
];

const HARD_SKILLS_BY_HINT: Record<string, string[]> = {
  contable: ["Excel avanzado", "NIIF básicas", "Conciliaciones bancarias"],
  datos: ["SQL básico", "Google Sheets / Excel", "Visualización (Looker/Data Studio)"],
  proyectos: ["Gestión de Proyectos (PMI/Agile)", "Confluence/Jira", "Diagramas Gantt"],
  marketing: ["Google Analytics", "Gestión de campañas", "Copywriting básico"],
  operaciones: ["5S/Lean básico", "KPIs operativos", "ERP (módulo inventarios)"],
  financiero: ["Modelación financiera", "Análisis de estados", "Presupuestación"],
  talento: ["Entrevista por competencias", "OKRs / KPIs", "Legislación laboral básica"],
  innovación: ["Design Thinking", "Benchmarking", "Gestión de portafolio de ideas"],
  servicio: ["CRM básico", "Manejo de conflictos", "SLA/CSAT"],
};

function inferHardSkills(job: string): string[] {
  const j = job.toLowerCase();
  const picks: string[] = [];
  if (j.includes("conta")) picks.push(...HARD_SKILLS_BY_HINT.contable);
  if (j.includes("dato")) picks.push(...HARD_SKILLS_BY_HINT.datos);
  if (j.includes("proyecto")) picks.push(...HARD_SKILLS_BY_HINT.proyectos);
  if (j.includes("market") || j.includes("mercadeo"))
    picks.push(...HARD_SKILLS_BY_HINT.marketing);
  if (j.includes("operac")) picks.push(...HARD_SKILLS_BY_HINT.operaciones);
  if (j.includes("finan")) picks.push(...HARD_SKILLS_BY_HINT.financiero);
  if (j.includes("talento") || j.includes("humano")) picks.push(...HARD_SKILLS_BY_HINT.talento);
  if (j.includes("innov")) picks.push(...HARD_SKILLS_BY_HINT.innovación);
  if (j.includes("servicio") || j.includes("soporte")) picks.push(...HARD_SKILLS_BY_HINT.servicio);

  // Respaldo si no detecta nada
  if (picks.length === 0) {
    picks.push("Excel intermedio", "Documentación técnica básica", "Presentaciones ejecutivas");
  }
  return sample(uniq(picks), 3);
}

function buildRationale(job: string) {
  return {
    atinencia:
      "El rol está significativamente relacionado con el puesto y es observable en la dinámica diaria del trabajo.",
    pertinencia:
      "La ejecución del rol es importante e incide directamente en los resultados y la gestión del área.",
    recurrencia:
      "No es un comportamiento aislado: se repite como patrón en más de un proceso y se generaliza en el puesto.",
  };
}

function buildDescription(job: string, seniority: "lower" | "upper") {
  if (seniority === "lower") {
    return `Apoya procesos clave del área, ejecuta tareas operativas con calidad y reporta avances periódicos. Coordina con equipos internos para asegurar continuidad del servicio.`;
  }
  return `Conduce iniciativas de impacto, coordina equipos, define métricas y asegura cumplimiento de objetivos estratégicos. Optimiza procesos y promueve la mejora continua.`;
}

function buildSoftSkills(n = 6) {
  return sample(SOFT_SKILLS_POOL, n);
}

export async function POST(req: Request) {
  try {
    const {
      existingJobs = [],
      targetLower = 5,
      targetUpper = 3,
    }: { existingJobs?: string[]; targetLower?: number; targetUpper?: number } =
      (await req.json()) ?? {};

    // Semillas mínimas deduplicadas
    const seeds = uniq(existingJobs).slice(0, 10);

    // Construye candidatos, agregando semillas al pool correcto si aplica
    const lowerPool = uniq([
      ...LOWER_TITLES,
      ...seeds.filter((s) => s.toLowerCase().includes("aux") || s.toLowerCase().includes("jr")),
    ]);
    const upperPool = uniq([
      ...UPPER_TITLES,
      ...seeds.filter(
        (s) =>
          s.toLowerCase().includes("gerente") ||
          s.toLowerCase().includes("jefe") ||
          s.toLowerCase().includes("sr") ||
          s.toLowerCase().includes("líder") ||
          s.toLowerCase().includes("lider")
      ),
    ]);

    // Garantiza exactamente 5 lower y 3 upper
    const pickedLower = sample(lowerPool, targetLower);
    const pickedUpper = sample(upperPool, targetUpper);

    const lower = pickedLower.map((job) => ({
      job,
      level: "lower" as const,
      description: buildDescription(job, "lower"),
      competencies: buildSoftSkills(6),
      hardSkills: inferHardSkills(job),
      rationale: buildRationale(job),
      match: Math.floor(70 + Math.random() * 20), // 70–89%
    }));

    const upper = pickedUpper.map((job) => ({
      job,
      level: "upper" as const,
      description: buildDescription(job, "upper"),
      competencies: buildSoftSkills(6),
      hardSkills: inferHardSkills(job),
      rationale: buildRationale(job),
      match: Math.floor(75 + Math.random() * 20), // 75–94%
    }));

    return NextResponse.json({
      success: true,
      lower,
      upper,
    });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || "Error interno" },
      { status: 500 }
    );
  }
}
