// app/api/generate-job-profiles/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ReqBody = {
  existingJobs?: string[];
  targetLower?: number;
  targetUpper?: number;
  career?: string;
  forceSim?: boolean;
};

type BareItem = { job: string; description: string };

const BANKS: Record<string, { lower: string[]; upper: string[]; desc: string }> = {
  administracion: {
    lower: [
      "Asistente Administrativo",
      "Auxiliar Contable",
      "Analista Junior de Datos",
      "Coordinador Operativo",
      "Gestor de Cobros",
      "Asistente de Compras",
    ],
    upper: ["Jefe de Administración", "Gerente Financiero", "Líder de Operaciones", "Controller"],
    desc:
      "Rol enfocado en eficiencia operativa, control de información y soporte a la toma de decisiones.",
  },
  marketing: {
    lower: [
      "Ejecutivo de Marketing Junior",
      "Asistente de Contenidos",
      "Analista Junior de Mercado",
      "Community Manager",
      "Coordinador de Activaciones",
      "Analista SEO Junior",
    ],
    upper: ["Líder de Marca", "Gerente de Mercadeo", "Head of Growth", "Director Comercial"],
    desc:
      "Rol orientado a posicionamiento, campañas y medición de impacto para crecimiento del negocio.",
  },
  ventas: {
    lower: [
      "Ejecutivo de Ventas Junior",
      "Representante Comercial",
      "Asesor de Cuentas",
      "Coordinador de Ventas",
      "Inside Sales",
      "Preventa",
    ],
    upper: ["Gerente de Ventas", "KAM Senior", "Head of Sales", "Director de Cuentas"],
    desc:
      "Rol centrado en prospección, relación con clientes y cumplimiento de objetivos comerciales.",
  },
  sistemas: {
    lower: [
      "Soporte TI",
      "QA Junior",
      "Desarrollador Junior",
      "Analista de Datos Junior",
      "Coordinador de Soporte",
      "Implementador",
    ],
    upper: ["Líder de Proyectos TI", "Arquitecto de Soluciones", "Dev Lead", "CTO (PME)"],
    desc:
      "Rol orientado a desarrollo, soporte, automatización y mejora continua de soluciones tecnológicas.",
  },
};

function pickN<T>(arr: T[], n: number) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function simulate(career: string, targetLower: number, targetUpper: number) {
  const bank = BANKS[career] ?? BANKS["administracion"];
  const lowerTitles = pickN(bank.lower, Math.min(targetLower, bank.lower.length));
  const upperTitles = pickN(bank.upper, Math.min(targetUpper, bank.upper.length));
  const makeItem = (title: string): BareItem => ({ job: title, description: bank.desc });

  return {
    success: true,
    mode: "simulated",
    reason: "no_key_or_forced_or_error",
    lower: lowerTitles.map(makeItem),
    upper: upperTitles.map(makeItem),
  };
}

async function generateWithProvider(
  apiKey: string,
  career: string,
  targetLower: number,
  targetUpper: number
) {
  const bank = BANKS[career] ?? BANKS["administracion"];

  const prompt = `
Devuelve JSON **estricto** con el shape:
{
  "lower": [{"job": string, "description": string}],
  "upper": [{"job": string, "description": string}]
}

Reglas:
- EXACTAMENTE ${targetLower} puestos en "lower" (mandos medios hacia abajo).
- EXACTAMENTE ${targetUpper} puestos en "upper" (mandos medios hacia arriba).
- Evita duplicados. Descripciones concisas (1–2 frases) según el área "${career || "administración"}".
- Si hay duda, usa títulos razonables del área.
- Ejemplo de descripción base: "${bank.desc}"
`;

  // Detecta proveedor
  const useOpenRouter = !!process.env.OPENROUTER_API_KEY;
  const endpoint = useOpenRouter
    ? "https://openrouter.ai/api/v1/chat/completions"
    : "https://api.deepseek.com/v1/chat/completions";
  const model = useOpenRouter ? "deepseek/deepseek-chat" : "deepseek-chat";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  if (useOpenRouter) {
    headers["HTTP-Referer"] = "https://aplicaci-n-de-evaluaci-n-cognitiva.vercel.app";
    headers["X-Title"] = "Evaluación Cognitiva";
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    }),
  });

  if (!res.ok) throw new Error(`${useOpenRouter ? "OpenRouter" : "DeepSeek"} HTTP ${res.status}`);

  const data = await res.json();
  const text: string =
    data?.choices?.[0]?.message?.content ??
    data?.output?.[0]?.content?.[0]?.text ??
    "";

  let parsed: { lower: BareItem[]; upper: BareItem[] } | null = null;
  try {
    parsed = JSON.parse(text);
  } catch {
    const match = typeof text === "string" ? text.match(/\{[\s\S]*\}/) : null;
    if (match) parsed = JSON.parse(match[0]);
  }
  if (!parsed) throw new Error("AI returned non-JSON");

  const normalize = (arr: BareItem[], needed: number, kind: "lower" | "upper"): BareItem[] => {
    const safe = (arr || []).filter(Boolean).slice(0, needed);
    if (safe.length < needed) {
      const fillBank = simulate(career, needed, needed)[kind].slice(0, needed - safe.length);
      return [...safe, ...fillBank];
    }
    return safe;
  };

  const lower = normalize(parsed.lower || [], targetLower, "lower");
  const upper = normalize(parsed.upper || [], targetUpper, "upper");

  return { success: true, mode: "real", lower, upper };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReqBody;
    const targetLower = body.targetLower ?? 5;
    const targetUpper = body.targetUpper ?? 3;
    const career = (body.career || "").toLowerCase().trim();
    const forceSim = !!body.forceSim;

    const apiKey = process.env.OPENROUTER_API_KEY ?? process.env.DEEPSEEK_API_KEY;

    if (forceSim || !apiKey) {
      return NextResponse.json(simulate(career, targetLower, targetUpper));
    }

    try {
      const real = await generateWithProvider(apiKey, career, targetLower, targetUpper);
      return NextResponse.json(real);
    } catch (err: any) {
      const sim = simulate(career, targetLower, targetUpper);
      (sim as any).mode = "simulated_due_to_error";
      (sim as any).reason = err?.message || "ai_error";
      return NextResponse.json(sim);
    }
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || "Unexpected error" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
