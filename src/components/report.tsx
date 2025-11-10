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
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [jobsError, setJobsError] = useState<string | null>(null);
  const [lowerJobs, setLowerJobs] = useState<SuggestedJob[]>([]);
  const [upperJobs, setUpperJobs] = useState<SuggestedJob[]>([]);

  const averageScore = grades.length
    ? grades.reduce((acc, g) => acc + g.score, 0) / grades.length
    : 0;

  useEffect(() => {
    generateJobs();
  }, []);

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
        }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || `HTTP ${resp.status}`);
      }

      const data = await resp.json();
      setLowerJobs(data.lower || []);
      setUpperJobs(data.upper || []);
    } catch (e: any) {
      setJobsError(e?.message || "No se pudieron generar los puestos");
    } finally {
      setLoadingJobs(false);
    }
  }

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

Adjunta ese PDF y envíalo.  
Saludos,
Equipo de Evaluación Cognitiva`
    );
    window.location.href = `mailto:${userData.email || ""}?subject=${subject}&body=${body}`;
  };

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
              Resultados para {userData.name} - {userData.career}
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

        {/* Puestos Según Competencias Adquiridas */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💼 Puestos Según Competencias Adquiridas
            </CardTitle>
            <CardDescription>
              Generados según tu carrera y las competencias desarrolladas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {jobsError && <p className="text-sm text-red-600">Error: {jobsError}</p>}

            <SuggestedJobsAccordion title="Mandos Medios hacia Abajo (5)" items={lowerJobs} />
            <SuggestedJobsAccordion title="Mandos Medios hacia Arriba (3)" items={upperJobs} />
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
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button onClick={handlePrint} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Imprimir o Descargar PDF
                </Button>
                <Button onClick={handleEmail} variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Enviar por Correo
                </Button>
                <Button onClick={() => setShowVideoTask(true)} variant="secondary" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Tarea de Validación por Video
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t">
                <Button
                  onClick={() => {
                    setShowVideoTask(false);
                    window.location.href = "/";
                    onRestart();
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Realizar Nueva Evaluación
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
