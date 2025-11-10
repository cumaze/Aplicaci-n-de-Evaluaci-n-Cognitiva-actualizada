"use client";

import { useState, useEffect } from "react";
import type { UserData, CompetencyGrade } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Mail, Download, Video, Link as LinkIcon, RefreshCcw, CheckCircle2 } from "lucide-react";
import SuggestedJobsAccordion, { SuggestedJob } from "@/components/SuggestedJobsAccordion";
import { useToast } from "@/components/ui/use-toast";

interface ReportProps {
  userData: UserData;
  summary: string;
  grades: CompetencyGrade[];
  onRestart: () => void;
}

export default function Report({ userData, summary, grades, onRestart }: ReportProps) {
  const [showVideoTask, setShowVideoTask] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [jobsError, setJobsError] = useState<string | null>(null);
  const [lowerJobs, setLowerJobs] = useState<SuggestedJob[]>([]);
  const [upperJobs, setUpperJobs] = useState<SuggestedJob[]>([]);
  const { toast } = useToast();

  const averageScore = grades.length
    ? grades.reduce((acc, g) => acc + g.score, 0) / grades.length
    : 0;

  // --- Helpers para PDF / correo ---
  const handlePrint = () => {
    const fileName = `Informe_Evaluacion_${userData.name}_${new Date().toISOString().split("T")[0]}.pdf`;
    const originalTitle = document.title;
    document.title = fileName;
    window.print();
    document.title = originalTitle;
  };

  const handlePrintVideoTask = () => {
    const fileName = `Tarea_Validacion_Video_${userData.name}_${new Date().toISOString().split("T")[0]}.pdf`;
    const originalTitle = document.title;
    document.title = fileName;
    window.print();
    document.title = originalTitle;
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Reporte de Evaluación - ${userData.name}`);
    const body = encodeURIComponent(
      `¡Hola ${userData.name}!

INSTRUCCIONES PARA GUARDAR TU REPORTE:

1) Haz clic en "Imprimir o Descargar PDF".
2) En la impresora, selecciona "Guardar como PDF".
3) Nómbralo: Informe_Evaluacion_${userData.name}.pdf

📊 TUS DATOS
- Carrera: ${userData.career}
- Fecha: ${new Date().toLocaleDateString()}

¡Listo! Adjunta ese PDF y envíalo.

Saludos,
Evaluación Cognitiva`
    );
    window.open(`mailto:${userData.email || ""}?subject=${subject}&body=${body}`);
  };

  // ---------- utilidades ----------
  function topSoftCompetencies(count = 3): string[] {
    const sorted = [...grades].sort((a, b) => b.score - a.score);
    const names = sorted.map((g) => g.competency);
    return Array.from(new Set(names)).slice(0, count);
  }

  function hardEvaluatedPool(careerKey: string): string[] {
    switch (careerKey) {
      case "sistemas":
        return ["SQL básico", "Git & Versionado", "Testing/QA"];
      case "marketing":
        return ["Google Analytics/GA4", "SEO On-Page", "Gestión de Ads"];
      case "ventas":
        return ["CRM (p. ej., HubSpot)", "Prospección B2B", "Negociación Comercial"];
      default:
        return ["Excel Avanzado", "Contabilidad Básica", "Análisis de Datos"];
    }
  }

  function hardSuggestedPool(careerKey: string): string[] {
    switch (careerKey) {
      case "sistemas":
        return ["Docker/CI-CD", "TypeScript", "Cloud Basics (AWS/GCP)"];
      case "marketing":
        return ["Copywriting", "Email Automation", "Attribution Modeling"];
      case "ventas":
        return ["SPIN Selling", "Gestión de Pipeline", "Análisis de Competencia"];
      default:
        return ["Power BI/Looker", "Costeo & Presupuestos", "ERP Básico"];
    }
  }

  function distinctWithout(list: string[], exclude: Set<string>, want: number): string[] {
    const out: string[] = [];
    for (const x of list) {
      if (!exclude.has(x)) {
        out.push(x);
        if (out.length === want) break;
      }
    }
    return out;
  }

  // ===== NUEVO: helpers con toast =====
  function encodeStateToLink() {
    const snapshot = {
      user: { name: userData.name, career: userData.career },
      summary,
      grades,
      ts: Date.now(),
    };
    const json = JSON.stringify(snapshot);
    const b64 = typeof window !== "undefined" ? btoa(unescape(encodeURIComponent(json))) : "";
    const safe = b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
    const base = typeof window !== "undefined" ? window.location.origin : "";
    return `${base}/view?d=${safe}`;
  }

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() =>
        toast({
          title: "Enlace copiado",
          description: "El enlace del reporte se copió al portapapeles.",
          icon: <CheckCircle2 className="text-green-500 w-5 h-5" />,
        })
      )
      .catch(() =>
        toast({
          title: "Error",
          description: "No se pudo copiar el enlace.",
          variant: "destructive",
        })
      );
  }

  function handleShareWithStudent() {
    const email = prompt("Correo del alumno:");
    if (!email) return;

    const link = encodeStateToLink();
    const subject = `Tu Reporte de Evaluación Cognitiva`;
    const body = `Hola,\n\nTe compartimos tu reporte de evaluación. Abre este enlace para verlo:\n\n${link}\n\nSaludos,\nEvaluación Cognitiva`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const win = window.open(gmailUrl, "_blank");
    if (!win) {
      window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }

    toast({
      title: "Correo preparado",
      description: "Se abrió Gmail o tu cliente de correo con el enlace listo.",
      icon: <CheckCircle2 className="text-green-500 w-5 h-5" />,
    });
  }

  // ===== GENERAR JOBS (sin cambios) =====
  async function generateJobs() {
    try {
      setJobsError(null);
      setLoadingJobs(true);

      const key = (userData?.career || "").toLowerCase().trim();
      const resp = await fetch("/api/generate-job-profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ existingJobs: [], targetLower: 5, targetUpper: 3, career: key }),
      });
      const data = await resp.json();
      setLowerJobs(data?.lower ?? []);
      setUpperJobs(data?.upper ?? []);
    } catch {
      setJobsError("Modo simulado local");
    } finally {
      setLoadingJobs(false);
    }
  }

  useEffect(() => {
    generateJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 print:bg-white">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6 print:shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">📊 Reporte de Evaluación Cognitiva</CardTitle>
            <CardDescription className="text-lg">
              Resultados para {userData.name} — {userData.career}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* ... resto del contenido igual ... */}

        <Card className="print:hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">🚀 Acciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button onClick={handlePrint} className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Imprimir / PDF
              </Button>

              <Button onClick={handleShareWithStudent} variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> Enviar a Alumno (link)
              </Button>

              <Button
                onClick={() => copyToClipboard(encodeStateToLink())}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <LinkIcon className="w-4 h-4" /> Copiar enlace del Reporte
              </Button>

              <Button
                onClick={() => {
                  try {
                    window.location.href = "/";
                  } catch {
                    onRestart();
                  }
                }}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCcw className="w-4 h-4" /> Realizar Nueva Evaluación
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Button onClick={() => setShowVideoTask(true)} variant="secondary" className="flex items-center gap-2">
                <Video className="w-4 h-4" /> Tarea de Validación por Video
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
