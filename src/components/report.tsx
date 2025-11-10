"use client";

import { useState, useEffect } from "react";
import type { UserData, CompetencyGrade } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Mail, Download, Video } from "lucide-react";
import SuggestedJobsAccordion, { SuggestedJob } from "@/components/SuggestedJobsAccordion";

interface ReportProps {
  userData: UserData;
  summary: string;
  grades: CompetencyGrade[];
  onRestart: () => void;
}

export default function Report({ userData, summary, grades, onRestart }: ReportProps) {
  const [showVideoTask, setShowVideoTask] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState<string | null>(null);
  const [lowerJobs, setLowerJobs] = useState<SuggestedJob[]>([]);
  const [upperJobs, setUpperJobs] = useState<SuggestedJob[]>([]);

  const averageScore = grades.length ? grades.reduce((a, g) => a + g.score, 0) / grades.length : 0;

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
    const body = encodeURIComponent(`¡Hola ${userData.name}!

1️⃣ Guarda tu reporte como PDF:
- Haz clic en "Imprimir o Descargar PDF"
- Selecciona "Guardar como PDF"
- Nómbralo: Informe_Evaluacion_${userData.name}.pdf

📊 Tus datos:
- Carrera: ${userData.career}
- Fecha: ${new Date().toLocaleDateString()}

Atentamente,
Equipo Evaluación Cognitiva`);
    window.open(`mailto:${userData.email || ""}?subject=${subject}&body=${body}`);
  };

  // === AUTOGENERACIÓN DE PUESTOS ===
  useEffect(() => {
    async function generateJobs() {
      try {
        setJobsError(null);
        setLoadingJobs(true);
        const seedsByCareer: Record<string, string[]> = {
          administracion: ["Auxiliar Contable", "Gerente Financiero"],
          ventas: ["Vendedor", "Gerente de Ventas"],
          marketing: ["Ejecutivo de Marketing", "Gerente de Mercadeo"],
          sistemas: ["Analista de Sistemas", "Líder de Proyectos TI"],
        };
        const key = (userData?.career || "").toLowerCase().trim();
        const existingJobs = seedsByCareer[key] ?? ["Auxiliar Contable", "Gerente Financiero"];

        const resp = await fetch("/api/generate-job-profiles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            existingJobs,
            targetLower: 5,
            targetUpper: 3,
            grades,
          }),
        });

        if (!resp.ok) throw new Error(await resp.text());
        const data = await resp.json();
        setLowerJobs(data.lower || []);
        setUpperJobs(data.upper || []);
      } catch (e: any) {
        setJobsError(e?.message || "No se pudieron generar los puestos");
      } finally {
        setLoadingJobs(false);
      }
    }
    generateJobs();
  }, [userData, grades]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 print:bg-white">
      <div className="max-w-4xl mx-auto">
        {/* ENCABEZADO */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">📊 Reporte de Evaluación Cognitiva</CardTitle>
            <CardDescription className="text-lg">
              Resultados para {userData.name} - {userData.career}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* INFORMACIÓN DEL ESTUDIANTE */}
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

        {/* RESUMEN GENERAL */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">📝 Resumen General</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">Puntuación Promedio</span>
                <Badge variant="secondary" className="text-lg">{averageScore.toFixed(1)}/5.0</Badge>
              </div>
              <Progress value={(averageScore / 5) * 100} className="mt-2" />
            </div>
          </CardContent>
        </Card>

        {/* PUESTOS SEGÚN COMPETENCIAS ADQUIRIDAS */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">💼 Puestos Según Competencias Adquiridas</CardTitle>
            <CardDescription>Basado en tu perfil y resultados</CardDescription>
          </CardHeader>
          <CardContent>
            {jobsError && <p className="text-red-600 text-sm">{jobsError}</p>}
            {!loadingJobs && (
              <>
                <SuggestedJobsAccordion title="Mandos medios hacia abajo" items={lowerJobs} />
                <SuggestedJobsAccordion title="Mandos medios hacia arriba" items={upperJobs} />
              </>
            )}
          </CardContent>
        </Card>

        {/* COMPETENCIAS BLANDAS */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader><CardTitle className="flex items-center gap-2">🎯 Competencias Blandas Evaluadas</CardTitle></CardHeader>
          <CardContent>
            {grades.map((grade) => (
              <div key={grade.competency} className="border rounded-lg p-4 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">{grade.competency}</h4>
                  <Badge className="text-sm">{grade.score.toFixed(1)}/5.0</Badge>
                </div>
                <p className="text-gray-700 text-sm">{grade.justification}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* BOTONES */}
        {!showVideoTask ? (
          <Card className="print:hidden">
            <CardHeader><CardTitle className="flex items-center gap-2">🚀 Acciones</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button onClick={handlePrint} className="flex items-center gap-2"><Download className="w-4 h-4" /> Imprimir o Descargar PDF</Button>
                <Button onClick={handleEmail} variant="outline" className="flex items-center gap-2"><Mail className="w-4 h-4" /> Enviar por Correo</Button>
                <Button onClick={() => setShowVideoTask(true)} variant="secondary" className="flex items-center gap-2"><Video className="w-4 h-4" /> Tarea de Validación por Video</Button>
              </div>
              <div className="mt-6 pt-6 border-t">
                <Button onClick={onRestart} variant="outline" className="w-full">Realizar Nueva Evaluación</Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="print:hidden">
            <CardHeader><CardTitle>🎥 Tarea de Validación por Video</CardTitle></CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                Graba un video de 2–3 minutos hablando sobre tus competencias más fuertes y tus áreas de oportunidad.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button onClick={handlePrintVideoTask}><Download className="w-4 h-4" /> Descargar Instrucciones PDF</Button>
                <Button onClick={() => setShowVideoTask(false)} variant="outline">Volver al Reporte</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
