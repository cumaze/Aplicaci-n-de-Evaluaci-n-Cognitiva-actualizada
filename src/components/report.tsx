"use client";

import { useState, useEffect } from "react";
import type { UserData, CompetencyGrade } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Mail, Download, Video, Link as LinkIcon, RefreshCcw } from "lucide-react";
import SuggestedJobsAccordion, { SuggestedJob } from "@/components/SuggestedJobsAccordion";

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

  const averageScore = grades.length
    ? grades.reduce((acc, g) => acc + g.score, 0) / grades.length
    : 0;

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

  // ---------- utilidades de selección ----------
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

  function enrichJobs(
    bare: { job: string; description: string }[],
    careerKey: string
  ): SuggestedJob[] {
    const softTop = topSoftCompetencies(3);
    const softSet = new Set(softTop);

    const hardEval = distinctWithout(hardEvaluatedPool(careerKey), softSet, 3);
    const hardAllExclude = new Set([...softTop, ...hardEval]);
    const hardSug = distinctWithout(hardSuggestedPool(careerKey), hardAllExclude, 3);

    const aprNotes = {
      atinencia:
        "El rol está significativamente relacionado con el puesto y su quehacer diario; es observable en la dinámica de trabajo.",
      pertinencia:
        "Su ejecución es importante y tiene impacto en los resultados; es imprescindible para la gestión del puesto.",
      recurrencia:
        "El comportamiento asociado al rol es recurrente y generalizable a procesos y titulares similares.",
    };

    return bare.map((b) => ({
      job: b.job,
      description: b.description,
      softCompetencies: softTop,
      hardCompetenciesEvaluated: hardEval,
      hardCompetenciesSuggested: hardSug,
      aprNotes,
      match: undefined,
    }));
  }

  // ====== NUEVO: helpers de compartir y enlace ======
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
    try {
      navigator.clipboard.writeText(text);
      alert("Enlace copiado al portapapeles.");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Enlace copiado.");
    }
  }

  function handleShareWithStudent() {
    const email = prompt("Correo del alumno:");
    if (!email) return;

    const link = encodeStateToLink();
    const subject = `Tu Reporte de Evaluación Cognitiva`;
    const body = `Hola,

Te compartimos tu reporte de evaluación. Abre este enlace para verlo:

${link}

Sugerencia:
- Si deseas conservarlo como PDF, abre el enlace y usa "Imprimir -> Guardar como PDF".

Saludos,
Evaluación Cognitiva`;

    // Intento 1: Gmail Web (si usa navegador con sesión de Gmail)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const win = window.open(gmailUrl, "_blank");
    // Si el popup fue bloqueado o no hay Gmail, usar mailto como fallback
    if (!win) {
      window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }
  }
  // ====== FIN helpers ======

  async function generateJobs() {
    try {
      setJobsError(null);
      setLoadingJobs(true);

      const key = (userData?.career || "").toLowerCase().trim();
      const resp = await fetch("/api/generate-job-profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          existingJobs: [],
          targetLower: 5,
          targetUpper: 3,
          career: key,
        }),
      });

      let lowerBare: { job: string; description: string }[] = [];
      let upperBare: { job: string; description: string }[] = [];

      if (resp.ok) {
        const data = await resp.json();
        lowerBare = Array.isArray(data?.lower) ? data.lower : [];
        upperBare = Array.isArray(data?.upper) ? data.upper : [];
      }

      const needLower = 5;
      const needUpper = 3;

      const fallbackBanks: Record<string, { lower: string[]; upper: string[]; desc: string }> = {
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

      function fillBare(
        arr: { job: string; description: string }[],
        needed: number,
        bankKey: string,
        kind: "lower" | "upper"
      ) {
        const bank = fallbackBanks[bankKey] ?? fallbackBanks["administracion"];
        const pool = bank[kind];
        const desc = bank.desc;
        const copy = [...arr];
        let i = 0;
        while (copy.length < needed && i < pool.length) {
          const title = pool[i++];
          if (!copy.find((x) => x.job === title)) {
            copy.push({ job: title, description: desc });
          }
        }
        while (copy.length < needed) {
          copy.push({
            job: kind === "lower" ? `Puesto Operativo ${copy.length + 1}` : `Puesto Ejecutivo ${copy.length + 1}`,
            description: desc,
          });
        }
        return copy.slice(0, needed);
      }

      const bankKey = ["administracion", "marketing", "ventas", "sistemas"].includes(key) ? key : "administracion";
      if (!lowerBare || lowerBare.length < needLower) lowerBare = fillBare(lowerBare || [], needLower, bankKey, "lower");
      if (!upperBare || upperBare.length < needUpper) upperBare = fillBare(upperBare || [], needUpper, bankKey, "upper");

      const lowerFull = enrichJobs(lowerBare, bankKey);
      const upperFull = enrichJobs(upperBare, bankKey);

      setLowerJobs(lowerFull);
      setUpperJobs(upperFull);
    } catch (e: any) {
      const careerKey = (userData?.career || "").toLowerCase().trim();
      const bankKey = ["administracion", "marketing", "ventas", "sistemas"].includes(careerKey) ? careerKey : "administracion";
      const bankLocal = {
        administracion: {
          lower: [
            "Asistente Administrativo",
            "Auxiliar Contable",
            "Analista Junior de Datos",
            "Coordinador Operativo",
            "Gestor de Cobros",
          ],
          upper: ["Jefe de Administración", "Gerente Financiero", "Líder de Operaciones"],
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
          ],
          upper: ["Líder de Marca", "Gerente de Mercadeo", "Head of Growth"],
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
          ],
          upper: ["Gerente de Ventas", "KAM Senior", "Head of Sales"],
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
          ],
          upper: ["Líder de Proyectos TI", "Arquitecto de Soluciones", "Dev Lead"],
          desc:
            "Rol orientado a desarrollo, soporte, automatización y mejora continua de soluciones tecnológicas.",
        },
      } as const;

      const base = (bankLocal as any)[bankKey];
      const mk = (titles: string[]) => titles.map((t) => ({ job: t, description: base.desc }));

      setLowerJobs(enrichJobs(mk(base.lower), bankKey));
      setUpperJobs(enrichJobs(mk(base.upper), bankKey));
      setJobsError(e?.message || "Modo simulado local");
    } finally {
      setLoadingJobs(false);
    }
  }

  useEffect(() => {
    generateJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 print:bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Encabezado */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">
              📊 Reporte de Evaluación Cognitiva
            </CardTitle>
            <CardDescription className="text-lg">
              Resultados para {userData.name} — {userData.career}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Información del Estudiante */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">👤 Información del Estudiante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Nombre</label>
                <p className="font-semibold">{userData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Carrera</label>
                <p className="font-semibold">{userData.career}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumen General */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">📝 Resumen General</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">Puntuación Promedio</span>
                <Badge variant="secondary" className="text-lg">
                  {averageScore.toFixed(1)}/5.0
                </Badge>
              </div>
              <Progress value={(averageScore / 5) * 100} className="mt-2" />
            </div>
          </CardContent>
        </Card>

        {/* PUESTOS */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle className="flex items-center gap-2">💼 Puestos Según Competencias Adquiridas</CardTitle>
            <CardDescription>Generados a partir de tu carrera y las competencias evaluadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {jobsError && <p className="text-sm text-red-600">Nota: {jobsError}</p>}
            <SuggestedJobsAccordion title="Mandos medios hacia abajo (5)" items={lowerJobs} />
            <SuggestedJobsAccordion title="Mandos medios hacia arriba (3)" items={upperJobs} />
          </CardContent>
        </Card>

        {/* Competencias blandas evaluadas */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">🎯 Competencias blandas evaluadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {grades.map((grade) => (
                <div key={grade.competency} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{grade.competency}</h4>
                    <div className="text-right">
                      <Badge className="text-sm">{grade.score.toFixed(1)}/5.0</Badge>
                      <Badge variant="secondary" className="ml-2">{grade.grade}</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Nivel: {grade.nivelConductual}</span>
                    <Progress value={(grade.score / 5) * 100} className="w-32" />
                  </div>
                  <p className="text-gray-700 text-sm">{grade.justification}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Acciones */}
        {!showVideoTask ? (
          <Card className="print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">🚀 Acciones</CardTitle>
              <CardDescription>Exporta, comparte o genera nueva evaluación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button onClick={handlePrint} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Imprimir / PDF
                </Button>

                <Button onClick={handleShareWithStudent} variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Enviar a Alumno (link)
                </Button>

                <Button
                  onClick={() => copyToClipboard(encodeStateToLink())}
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <LinkIcon className="w-4 h-4" />
                  Copiar enlace del Reporte
                </Button>

                {/* MOVIDO: “Realizar Nueva Evaluación” junto al copiar enlace */}
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
                  <RefreshCcw className="w-4 h-4" />
                  Realizar Nueva Evaluación
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Button onClick={() => setShowVideoTask(true)} variant="secondary" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Tarea de Validación por Video
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">🎥 Tarea de Validación por Video</CardTitle>
              <CardDescription>Instrucciones para la validación de competencias mediante video</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">📋 Instrucciones:</h4>
                <ul className="text-yellow-700 list-disc list-inside space-y-1">
                  <li>Graba un video de 2–3 minutos explicando tu experiencia en la evaluación</li>
                  <li>Menciona las competencias donde te sentiste más fuerte</li>
                  <li>Comparte áreas de oportunidad identificadas</li>
                  <li>Sube el video a Google Drive o YouTube y comparte el enlace</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button onClick={handlePrintVideoTask} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Descargar Instrucciones PDF
                </Button>
                <Button onClick={() => setShowVideoTask(false)} variant="outline">
                  Volver al Reporte
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
