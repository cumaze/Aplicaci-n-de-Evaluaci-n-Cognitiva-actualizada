'use client';

import { useState } from 'react';
import type { Answers, Question, UserData, CompetencyGrade } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { generateReportAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

type AssessmentProps = {
  questions: Question[];
  userData: UserData;
  onFinishAssessment: (answers: Answers, summary: string, grades: CompetencyGrade[]) => void;
};

export default function Assessment({ questions, userData, onFinishAssessment }: AssessmentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleNext = () => {
    const newAnswers = { ...answers, [currentQuestion.competency]: currentAnswer };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      handleFinish(newAnswers);
    } else {
      setCurrentAnswer(answers[questions[currentQuestionIndex + 1].competency] || '');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleFinish = async (finalAnswers: Answers) => {
    setLoading(true);
    const result = await generateReportAction({ userData, answers: finalAnswers });
    setLoading(false);

    if (result.success && result.summary && result.grades) {
      onFinishAssessment(finalAnswers, result.summary, result.grades);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al generar el informe',
        description: result.error || 'Ocurrió un error. Por favor, intenta de nuevo.',
      });
    }
  };

  const progressValue = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <>
      <CardHeader>
        <CardTitle className="font-headline">{currentQuestion.competency}</CardTitle>
        <CardDescription>Pregunta {currentQuestionIndex + 1} de {questions.length}</CardDescription>
        <Progress value={progressValue} className="mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg font-medium">{currentQuestion.question}</p>
        <Textarea
          placeholder="Escribe tu respuesta aquí..."
          className="min-h-[200px] text-base"
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          aria-label={`Respuesta para la competencia ${currentQuestion.competency}`}
        />
      </CardContent>
      <CardFooter>
        <Button onClick={handleNext} disabled={loading || !currentAnswer.trim()} className="w-full sm:w-auto ml-auto bg-primary text-primary-foreground hover:bg-primary/90">
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {isLastQuestion ? 'Finalizar y ver informe' : 'Siguiente Pregunta'}
        </Button>
      </CardFooter>
    </>
  );
}