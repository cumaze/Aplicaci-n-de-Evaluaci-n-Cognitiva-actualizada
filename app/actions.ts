'use server';

import { generateCompetencyQuestions } from '@/ai/flows/generate-competency-questions';
import { generateReportSummary } from '@/ai/flows/generate-report-summary';
import { generateVideoTask } from '@/ai/flows/generate-video-task';
import { analyzeJobProfiles } from '@/ai/flows/analyze-job-profiles';
import { CAREERS } from '@/lib/data';
import type { Answers, UserData, CompetencyGrade, VideoTask, JobProfile, JobProfileAnalysis } from '@/lib/types';

export async function startAssessmentAction({ career, level }: { career: string; level: string }) {
  try {
    const selectedCareer = CAREERS.find(c => c.key === career);
    if (!selectedCareer) {
      throw new Error('Selected career not found.');
    }

    const competencies = selectedCareer.competencies;

    const questions = await generateCompetencyQuestions({
      career,
      level,
      competencies,
    });

    return { success: true, questions };
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}

export async function generateReportAction({ userData, answers }: { userData: UserData, answers: Answers }) {
    try {
        const { summary, grades } = await generateReportSummary({
            userName: userData.name,
            career: userData.career,
            level: userData.level,
            answers: answers,
        });

        return { success: true, summary, grades };
    } catch (error) {
        console.error(error);
        return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred.' };
    }
}

export async function generateVideoTaskAction({ answers }: { answers: Answers }) {
  try {
    const tasks = await generateVideoTask({ answers });
    return { success: true, tasks };
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}

export async function analyzeJobProfilesAction({ userData, grades, jobProfiles }: { userData: UserData, grades: CompetencyGrade[], jobProfiles: JobProfile[] }): Promise<{ success: boolean; analyses?: JobProfileAnalysis[]; error?: string; }> {
  try {
    const analyses = await analyzeJobProfiles({
      career: userData.career,
      level: userData.level,
      grades: grades,
      jobProfiles: jobProfiles,
    });
    return { success: true, analyses };
  } catch (error) {
    console.error(error);
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}
