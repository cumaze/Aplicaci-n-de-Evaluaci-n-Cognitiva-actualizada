'use client';

import { useState } from 'react';
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
  const [showVideoTask, setShowVideoTask] = useState(false);

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

INSTRUCCIONES PARA GUARDAR TU REPORTE:

1. PRIMERO guarda tu reporte como PDF:
   - Haz clic en "Imprimir o Descargar PDF" 
   - En la impresora, selecciona "Guardar como PDF"
   - Nómbralo: Informe_Evaluacion_${userData.name}.pdf

2. LUEGO adjunta el PDF a este correo y envíalo.

📊 TUS RESULTADOS:
- Carrera: ${userData.career}
- Semestre: ${userData.semester}
- Fecha: ${new Date().toLocaleDateString()}

¡Felicitaciones por completar tu evaluación!

Saludos,
El equipo de Evaluación Cognitiva`
    );
    
    window.open(`mailto:${userData.email || 'tu@email.com'}?subject=${subject}&body=${body}`);
  };

  const averageScore = grades.reduce((acc, grade) => acc + grade.score, 0) / grades.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 print:bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
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
            <CardTitle className="flex items-center gap-2">
              👤 Información del Estudiante
            </CardTitle>
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
            <CardTitle className="flex items-center gap-2">
              📝 Resumen General
            </CardTitle>
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
            <CardTitle className="flex items-center gap-2">
              🎯 Competencias Evaluadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {grades.map((grade, index) => (
                <div key={grade.competency} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{grade.competency}</h4>
                    <div className="text-right">
                      <Badge className="text-sm">
                        {grade.score.toFixed(1)}/5.0
                      </Badge>
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

        {/* NUEVA SECCIÓN: Puestos de Trabajo Recomendados */}
        <Card className="mb-6 print:shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💼 Puestos de Trabajo Recomendados
            </CardTitle>
            <CardDescription>
              Basado en tu perfil de competencias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Puesto 1 */}
              <div className="border rounded-lg p-4 bg-green-50">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-lg">Analista de Proyectos</h4>
                  <Badge variant="default" className="bg-green-600">85% Match</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">🎯 Criterio 1: Atinencia</h5>
                    <p className="text-sm text-gray-700">El rol está significativamente relacionado con análisis de datos y gestión de proyectos, observable en la dinámica de trabajo diaria.</p>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">📊 Criterio 2: Pertinencia</h5>
                    <p className="text-sm text-gray-700">Es imprescindible para la toma de decisiones y tiene alto impacto en el desempeño organizacional.</p>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">🔄 Criterio 3: Recurrencia</h5>
                    <p className="text-sm text-gray-700">Forma parte de un patrón de comportamiento constante en procesos de planificación y seguimiento.</p>
                  </div>
                </div>
              </div>

              {/* Puesto 2 */}
              <div className="border rounded-lg p-4 bg-blue-50">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-lg">Coordinador de Equipos</h4>
                  <Badge variant="default" className="bg-blue-600">78% Match</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">🎯 Criterio 1: Atinencia</h5>
                    <p className="text-sm text-gray-700">Directamente ligado al liderazgo y coordinación de grupos de trabajo.</p>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">📊 Criterio 2: Pertinencia</h5>
                    <p className="text-sm text-gray-700">Fundamental para la productividad y clima organizacional del equipo.</p>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">🔄 Criterio 3: Recurrencia</h5>
                    <p className="text-sm text-gray-700">Comportamiento recurrente en la gestión diaria de personas y proyectos.</p>
                  </div>
                </div>
              </div>

              {/* Puesto 3 */}
              <div className="border rounded-lg p-4 bg-purple-50">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-lg">Especialista en Innovación</h4>
                  <Badge variant="default" className="bg-purple-600">72% Match</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">🎯 Criterio 1: Atinencia</h5>
                    <p className="text-sm text-gray-700">Relacionado con la creatividad y mejora de procesos organizacionales.</p>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">📊 Criterio 2: Pertinencia</h5>
                    <p className="text-sm text-gray-700">Clave para la competitividad y adaptación al cambio de la organización.</p>
                  </div>
                  
                  <div className="bg-white rounded p-3">
                    <h5 className="font-medium mb-2">🔄 Criterio 3: Recurrencia</h5>
                    <p className="text-sm text-gray-700">Patrón constante en la identificación de oportunidades de mejora.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Acciones */}
        {!showVideoTask ? (
          <Card className="print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚀 Acciones
              </CardTitle>
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
                
                <Button 
                  onClick={() => setShowVideoTask(true)} 
                  variant="secondary" 
                  className="flex items-center gap-2"
                >
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
          /* Tarea de Validación por Video */
          <Card className="print:hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎥 Tarea de Validación por Video
              </CardTitle>
              <CardDescription>
                Instrucciones para la validación de competencias mediante video
              </CardDescription>
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
                
                <Button 
                  onClick={() => setShowVideoTask(false)} 
                  variant="outline"
                >
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