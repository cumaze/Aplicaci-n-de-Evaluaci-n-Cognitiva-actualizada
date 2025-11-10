'use client';

import { useState } from 'react';
import SuggestedJobsAccordion from '@/components/SuggestedJobsAccordion';
import type { UserData, CompetencyGrade } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Mail, Download, Video } from 'lucide-react';

interface ReportProps {
  userData: UserData;
  summary: string;
  grades: CompetencyGrade[];
  onRestart: () => void;
}

export default function Report({ userData, summary, grades, onRestart }: ReportProps) {
  // Estados
  const [showVideoTask, setShowVideoTask] = useState(false);

  // Estados para la sección dinámica de puestos
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [jobProfiles, setJobProfiles] = useState<Array<{ job: string; description: string; competencies: string[] }>>(
    []
  );
  const [jobsError, setJobsError] = useState<string | null>(null);

  // Promedio
  const averageScore = grades.length
    ? grades.reduce((acc, g) => acc + g.score, 0) / grades.length
    : 0;

  // Acciones
  const handlePrint = () => {
    const fileName = `Informe_Evaluacion_${userData.name}_${new Date().toISOString().split('T')[0]}.pdf`;
    const originalTitle = document.title;
    document.title = fileName;
    window.print();
    document.title = originalTitle;
  };

  const handlePrintVideoTask = () => {
    const fileName = `Tarea_Validacion_Video_${userData.name}_${new Date().toISOString().split('T')[0]}.pdf`;
    const originalTitle = document.title;
    document.title = fileName;
    window.print();
    document.title = originalTitle;
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Reporte de Evaluación - ${userData.name}`);
    const body = encodeURIComponent(
`¡Hola ${userData.name}!

Adjunto te envío mi reporte de evaluación cognitiva.

Datos:
- Carrera: ${userData.career}
- Semestre: ${userData.semester}
- Fecha: ${new Date().toLocaleDateString()}

Instrucciones:
1) En la app, usa "Imprimir o Descargar PDF" y guarda el archivo.
2) Adjunta ese PDF y responde este correo.

Saludos,`
    );
    window.open(`mailto:${userData.email || 'tu@email.com'}?subject=${subject}&body=${body}`);
  };

  // Click: Generar puestos sugeridos (desde el backend /api/generate-job-profiles)
  const handleGenerateJobs = async () => {
    try {
      setJobsError(null);
      setLoadingJobs(true);

      // Semillas por carrera (ajústalas a tu gusto)
      const seedsByCareer: Record<string, string[]> = {
        administracion: ['Auxiliar Contable', 'Gerente Financiero'],
        ventas: ['Vendedor', 'Gerente de Ventas'],
        marketing: ['Ejecutivo de Marketing', 'Gerente de Mercadeo'],
        sistemas: ['Analista de Sistemas', 'Líder de Proyectos TI'],
      };

      const key = (userData?.career || '').toLowerCase().trim();
      const existingJobs = seedsByCareer[key] ?? ['Auxiliar Contable', 'Gerente Financiero'];

      const resp = await fetch('/api/generate-job-profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ existingJobs }),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        // 👇 evitar template literal (que te falló en build)
        throw new Error(errText || ('HTTP ' + resp.status));
      }

      const data = await resp.json();
      setJobProfiles(data.newProfiles || []);
    } catch (e: any) {
      setJobsError(e?.message || 'No se pudieron generar los puestos');
    } finally {
      setLoadingJobs(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 print:bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">📊 Reporte de Evaluación Cognitiva</CardTitle>
            <CardDescription className="text-lg">
              Resultados para {userData.name} - {userData.career}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Puestos de Trabajo Recomendados (dinámicos con IA) */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">💼 Puestos de Trabajo Recomendados</CardTitle>
              <CardDescription>Generados según tu carrera y competencias</CardDescription>
            </div>

            <Button type="button" disabled={loadingJobs} onClick={handleGenerateJobs} className="min-w-[220px]">
              {loadingJobs ? 'Generando…' : 'Generar puestos sugeridos'}
            </Button>
          </CardHeader>

          <CardContent className="space-y-3">
            {jobsError && <p className="text-sm text-red-600">Error: {jobsError}</p>}

            <SuggestedJobsAccordion items={jobProfiles} />
          </CardContent>
        </Card>

        {/* Información del Estudiante */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">👤 Información del Estudiante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Nombre</label>
                <p className="font-semibold">{userData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Carrera</label>
                <p className="font-semibold">{userData.career}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Semestre</label>
                <p className="font-semibold">{userData.semester}</p>
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

        {/* Competencias */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">🎯 Competencias Evaluadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {grades.map((grade) => (
                <div key={grade.competency} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{grade.competency}</h4>
                    <div className="text-right">
                      <Badge className="text-sm">{grade.score.toFixed(1)}/5.0</Badge>
                      <Badge variant="secondary" className="ml-2">
                        {grade.grade}
                      </Badge>
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
                <Button onClick={onRestart} variant="outline" className="w-full">
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
                  <li>Graba un video de 2-3 minutos explicando tu experiencia en la evaluación</li>
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
