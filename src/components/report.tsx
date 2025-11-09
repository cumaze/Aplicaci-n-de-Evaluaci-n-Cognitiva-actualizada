'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import type { Answers, Question, UserData, VideoTask, JobProfile, JobProfileAnalysis, CompetencyGrade } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { useState, useMemo, useEffect } from 'react';
import { Printer, Mail, Loader2, Video, Sparkles, HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { CAREERS } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type ReportProps = {
  userData: UserData;
  answers: Answers;
  summary: string;
  questions: Question[];
  grades: CompetencyGrade[];
  onStartOver: () => void;
};

const JobProfilesSection = ({ userData, grades, jobProfiles }: { userData: UserData; grades: CompetencyGrade[]; jobProfiles: JobProfile[] }) => {
  const [analyses, setAnalyses] = useState<JobProfileAnalysis[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAnalyses = async () => {
      if (!jobProfiles || jobProfiles.length === 0) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      const result = await fetch('/api/analyze-job-profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData, grades, jobProfiles }),
      }).then(r => r.json());
      if (result.success && result.analyses) {
        setAnalyses(result.analyses);
      } else {
        const errorMessage = result.error || "No se pudo generar el análisis de puestos de trabajo.";
        setError(errorMessage);
        console.error("Failed to analyze job profiles:", errorMessage);
        toast({
            variant: "destructive",
            title: "Error al analizar los perfiles",
            description: errorMessage,
        });
      }
      setIsLoading(false);
    };

    fetchAnalyses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, grades, jobProfiles]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-headline">Posibles Puestos de Trabajo</CardTitle>
          <CardDescription>
            Analizando perfiles basados en tu desempeño...
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }
  
  if (error) {
    return (
         <Card>
            <CardHeader>
                <CardTitle className="text-xl font-headline text-destructive">Error en el Análisis</CardTitle>
                <CardDescription>
                No se pudo completar el análisis de los puestos de trabajo.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-destructive-foreground bg-destructive p-3 rounded-md">{error}</p>
            </CardContent>
        </Card>
    );
  }

  if (!analyses || analyses.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-headline">Posibles Puestos de Trabajo</CardTitle>
        <CardDescription>
          Basado en tu desempeño, aquí hay algunos perfiles y un análisis de por qué podrían ser adecuados para ti.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {analyses.map((analysis, index) => (
            <AccordionItem value={`job-${index}`} key={index}>
              <AccordionTrigger className="text-left font-medium">{analysis.title}</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Descripción del Puesto</h4>
                  <p className="whitespace-pre-wrap p-2 bg-muted/50 rounded-md text-muted-foreground text-sm">
                    {analysis.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Análisis de Criterios Conductuales</h4>
                   <div className="mt-2 space-y-3 text-sm">
                    <p><strong className='text-primary'>Atenencia:</strong> {analysis.atenencia}</p>
                    <p><strong className='text-primary'>Pertinencia:</strong> {analysis.pertinencia}</p>
                    <p><strong className='text-primary'>Recurrencia:</strong> {analysis.recurrencia}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};


export default function Report({ userData, answers, summary, questions, grades, onStartOver }: ReportProps) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [videoTasks, setVideoTasks] = useState<VideoTask[]>([]);
  const [isLoadingTask, setIsLoadingTask] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "¡Tienes una nueva tarea!",
      description: "Haz clic en 'Tarea de Validación por Video' para ver las instrucciones.",
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartData = useMemo(() => {
    return grades.map(gradeInfo => ({
      name: gradeInfo.competency,
      score: gradeInfo.score,
    }));
  }, [grades]);

  const careerData = useMemo(() => {
    return CAREERS.find(c => c.key === userData.career);
  }, [userData.career]);

  const shouldShowJobProfiles = useMemo(() => {
    if (!grades || grades.length === 0) return false;
    const averageScore = grades.reduce((sum, grade) => sum + grade.score, 0) / grades.length;
    return averageScore >= 2.0 && careerData?.jobProfiles && careerData.jobProfiles.length > 0;
  }, [grades, careerData]);


  const chartConfig = {
    score: {
      label: "Puntaje",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  const handleGenerateVideoTask = async () => {
    if (videoTasks.length > 0) {
      setIsTaskModalOpen(true);
      return;
    }

    setIsLoadingTask(true);
    const result = await fetch('/api/generate-video-task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    }).then(r => r.json());
    setIsLoadingTask(false);

    if (result.success && result.tasks && result.tasks.length > 0) {
      setVideoTasks(result.tasks);
      setIsTaskModalOpen(true);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al generar la tarea',
        description: result.error || 'No se pudieron generar las instrucciones para el video. Por favor, intenta de nuevo.',
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Tu Reporte de Evaluación Cognitiva");
    const body = encodeURIComponent(
      `¡Hola ${userData.name}!\n\nHas completado tu evaluación. Para conservar tu reporte, primero guárdalo como PDF usando la opción "Imprimir o Descargar" y luego adjúntalo a este correo electrónico.\n\nSaludos,\nEl equipo de Evaluación Cognitiva.`
    );
    window.location.href = `mailto:${userData.email}?subject=${subject}&body=${body}`;
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'bg-green-500';
    if (grade.startsWith('B')) return 'bg-blue-500';
    if (grade.startsWith('C')) return 'bg-yellow-500';
    if (grade.startsWith('D')) return 'bg-orange-500';
    if (grade.startsWith('F')) return 'bg-red-500';
    return 'bg-gray-500';
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Informe de Evaluación</CardTitle>
        <CardDescription>
          Gracias por completar la evaluación, {userData.name}. Aquí están tus resultados para la carrera de {userData.career} ({userData.area}).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <Card className="bg-background">
          <CardHeader>
            <CardTitle className="text-xl font-headline">Resumen General por IA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-muted-foreground">{summary}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-headline">Calificación Conductual por Competencia</CardTitle>
            <CardDescription>Análisis de cada competencia basado en tus respuestas.</CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <ul className="space-y-4">
                {grades.map((gradeInfo, index) => (
                  <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4">
                    <div className="flex-1 mb-4 sm:mb-0 sm:pr-4">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-bold text-lg">{gradeInfo.competency}</p>
                        <Badge variant="secondary">{gradeInfo.nivelConductual}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{gradeInfo.justification}</p>
                    </div>
                    <div className="flex items-center gap-2">
                       <Tooltip>
                        <TooltipTrigger asChild>
                           <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg ${getGradeColor(gradeInfo.grade)}`}>
                              {gradeInfo.grade}
                           </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Puntaje: {gradeInfo.score.toFixed(1)} / 4.0</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </li>
                ))}
              </ul>
            </TooltipProvider>
          </CardContent>
        </Card>
        
        {shouldShowJobProfiles && careerData && (
           <JobProfilesSection userData={userData} grades={grades} jobProfiles={careerData.jobProfiles.slice(0, 3)} />
        )}
        
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-headline">Visualización de Puntajes</CardTitle>
                <CardDescription>Este gráfico representa los puntajes obtenidos en cada competencia.</CardDescription>
            </CardHeader>
            <CardContent>
                 <ChartContainer config={chartConfig} className="h-[400px] w-full">
                    <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ top: 20, right: 30, bottom: 20, left: 120 }}>
                        <CartesianGrid horizontal={false} />
                        <YAxis
                          dataKey="name"
                          type="category"
                          tickLine={false}
                          axisLine={false}
                          width={120}
                          tick={{ fontSize: 12 }}
                        />
                        <XAxis type="number" dataKey="score" domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} />
                        <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                        <Bar dataKey="score" fill="var(--color-score)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <Alert>
          <HelpCircle className="h-4 w-4" />
          <AlertTitle>Filtro de Criterios Conductuales</AlertTitle>
          <AlertDescription>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Qué son los criterios conductuales?</AccordionTrigger>
                <AccordionContent className="space-y-4 text-sm">
                  <p>
                    Es un instrumento que tiene como finalidad establecer tres criterios que sirven de filtro para elegir aquellos roles que se adecúan al puesto. A continuación se exponen los contenidos de dicho filtro:
                  </p>
                  <div>
                    <h4 className="font-semibold">Criterio 1: Atenencia</h4>
                    <p className="text-muted-foreground">
                      Se refiere a la constatación de si el rol está significativamente relacionado con el puesto de trabajo. Permite indagar si el rol es observable, si está inequívocamente ligado al quehacer del titular y si es parte sustantiva de su desempeño.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Criterio 2: Pertinencia</h4>
                    <p className="text-muted-foreground">
                      Se refiere al hecho que el rol de desempeño debe ser considerado dada su incidencia o impacto en la gestión. Permite indagar si el rol es importante, si su ejecución es imprescindible y si tiene un impacto significativo en el desempeño.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Criterio 3: Recurrencia</h4>
                    <p className="text-muted-foreground">
                      Se refiere al hecho que el rol de desempeño no es una acción o comportamiento aislado o fortuito, sino que forma parte de un patrón de comportamiento que se repite y puede generalizarse.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AlertDescription>
        </Alert>

        <div>
          <h3 className="text-xl font-headline mb-4">Tus Respuestas en Detalle</h3>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((q, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left">
                  <span className="font-medium">Competencia: {q.competency}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-normal text-muted-foreground ml-2 mb-2">{q.question}</p>
                  <p className="whitespace-pre-wrap p-4 bg-muted/50 rounded-md text-muted-foreground">{answers[q.competency] || 'No se proporcionó respuesta.'}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap justify-center gap-2 non-printable">
        <Button onClick={handleGenerateVideoTask} variant="outline" disabled={isLoadingTask}>
          {isLoadingTask ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Video className="mr-2 h-4 w-4" />}
          Tarea de Validación por Video
        </Button>
        <Button onClick={handlePrint} variant="outline">
          <Printer className="mr-2 h-4 w-4" />
          Imprimir o Descargar PDF
        </Button>
        <Button onClick={handleEmail} variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Enviar por Correo
        </Button>
        <Button onClick={onStartOver}>
          Comenzar de Nuevo
        </Button>
      </CardFooter>

      <Dialog open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen}>
        <DialogContent className="sm:max-w-2xl grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
              <Video className="h-6 w-6 text-primary" />
              Tarea de Validación por Video
            </DialogTitle>
            <DialogDescription>
              Para validar tu experiencia, por favor graba videos cortos respondiendo a las siguientes 3 preguntas. Profundiza en tus respuestas y proporciona ejemplos concretos.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-full">
            <div className="my-4 space-y-6 px-6">
                {videoTasks.map((task, index) => (
                <div key={index} className="rounded-lg border bg-card p-4">
                    <p className="font-bold text-lg mb-2">{index + 1}. Competencia: {task.competency}</p>
                    <p className="text-muted-foreground whitespace-pre-wrap">{task.task}</p>
                </div>
                ))}
            </div>
          </ScrollArea>
          <DialogFooter className="sm:justify-between gap-2 border-t p-6">
             <Button variant="outline" onClick={() => setIsTaskModalOpen(false)}>Cerrar</Button>
            <Button onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Imprimir Informe Ahora
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}