'use client';

import { useState } from 'react';
import type { Answers, Question, UserData, CompetencyGrade } from '@/lib/types';
import OnboardingForm from '@/components/onboarding-form';
import Assessment from '@/components/assessment';
import Report from '@/components/report';
import { Card } from '@/components/ui/card';
import { Bot } from 'lucide-react';

type Step = 'onboarding' | 'assessment' | 'report';

export default function Home() {
  const [step, setStep] = useState<Step>('onboarding');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [reportSummary, setReportSummary] = useState<string>('');
  const [grades, setGrades] = useState<CompetencyGrade[]>([]);

  const handleStartAssessment = (data: UserData, generatedQuestions: Question[]) => {
    setUserData(data);
    setQuestions(generatedQuestions);
    setStep('assessment');
  };

  const handleFinishAssessment = (finalAnswers: Answers, summary: string, newGrades: CompetencyGrade[]) => {
    setAnswers(finalAnswers);
    setReportSummary(summary);
    setGrades(newGrades);
    setStep('report');
  };

  const handleStartOver = () => {
    setUserData(null);
    setQuestions([]);
    setAnswers({});
    setReportSummary('');
    setGrades([]);
    setStep('onboarding');
  };

  const renderStep = () => {
    switch (step) {
      case 'onboarding':
        return <OnboardingForm onStartAssessment={handleStartAssessment} />;
      case 'assessment':
        return <Assessment questions={questions} userData={userData!} onFinishAssessment={handleFinishAssessment} />;
      case 'report':
        return <Report userData={userData!} answers={answers} summary={reportSummary} questions={questions} grades={grades} onStartOver={handleStartOver} />;
      default:
        return <OnboardingForm onStartAssessment={handleStartAssessment} />;
    }
  };

  return (
    <main className={`flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8 ${step === 'report' ? 'printable' : ''}`}>
      <div className={`w-full max-w-3xl ${step === 'report' ? 'report-container' : ''}`}>
        <div className="mb-6 flex items-center justify-center gap-3 non-printable">
          <Bot className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-headline text-foreground">
            App de Evaluación Cognitiva
          </h1>
        </div>
        <Card className={`w-full shadow-lg ${step === 'report' ? 'printable-content' : ''}`}>
          {renderStep()}
        </Card>
      </div>
    </main>
  );
}
