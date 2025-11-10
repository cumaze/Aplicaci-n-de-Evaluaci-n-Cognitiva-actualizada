import { NextResponse } from "next/server";
import type { Question } from "@/lib/types";
import { CAREERS } from "@/lib/data";

// 👉 Manejo de solicitudes GET (para que no muestre 405 en el navegador)
export async function GET() {
  return NextResponse.json({
    ok: false,
    message: "Usa POST para iniciar la evaluación (no GET).",
  });
}

// 👉 Lógica principal de la API (método POST)
export async function POST(req: Request) {
  try {
    const { career, level } = (await req.json()) as { career: string; level: string };
    const selectedCareer = CAREERS.find((c) => c.key === career);

    if (!selectedCareer) {
      return NextResponse.json(
        { success: false, error: "Carrera no encontrada" },
        { status: 404 }
      );
    }

    const questions: Question[] = selectedCareer.competencies.map((competency, index) => {
      let questionText = "";

      switch (competency) {
        case "Liderazgo":
        case "Liderazgo Transformacional":
          questionText = `Describe una situación donde demostraste ${competency.toLowerCase()} en tu área profesional`;
          break;
        case "Trabajo en Equipo":
          questionText = "¿Cómo manejas los conflictos dentro de un equipo de trabajo? Describe tu enfoque.";
          break;
        case "Planificación":
        case "Planificación y Organización":
          questionText = "Cuando enfrentas múltiples proyectos simultáneos, ¿cómo organizas tu trabajo? Proporciona un ejemplo.";
          break;
        case "Resolución de Problemas":
        case "Solución de Problemas":
          questionText = "Describe tu proceso para abordar problemas complejos en tu área profesional.";
          break;
        case "Comunicación Escrita":
          questionText = "Describe una situación donde tu comunicación escrita fue crucial para el éxito de un proyecto.";
          break;
        case "Innovación":
          questionText = "Proporciona un ejemplo de cómo has implementado ideas innovadoras en tu trabajo.";
          break;
        case "Adaptabilidad":
          questionText = "Describe cómo manejas los cambios inesperados en los proyectos o prioridades.";
          break;
        case "Pensamiento Estratégico":
          questionText = "Explica cómo incorporas la visión a largo plazo en tus decisiones diarias.";
          break;
        case "Perspicacia Financiera":
          questionText = "Describe una situación donde tu comprensión financiera impactó positivamente una decisión.";
          break;
        case "Gestión de Recursos":
          questionText = "¿Cómo optimizas los recursos disponibles para maximizar resultados? Proporciona un ejemplo.";
          break;
        default:
          questionText = `Describe tu experiencia y enfoque en ${competency.toLowerCase()}`;
      }

      return {
        id: (index + 1).toString(),
        competency,
        question: questionText,
        area: selectedCareer.area,
        type: "text",
      };
    });

    return NextResponse.json({ success: true, questions });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, error: e?.message || "Error interno" },
      { status: 500 }
    );
  }
}
