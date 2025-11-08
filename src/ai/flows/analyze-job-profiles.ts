'use server';
/**
 * @fileOverview Analyzes job profiles based on user's assessment results against specific criteria.
 *
 * - analyzeJobProfiles - A function that generates a personalized analysis for a list of job profiles.
 * - AnalyzeJobProfilesInput - The input type for the function.
 * - AnalyzeJobProfilesOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const JobProfileSchema = z.object({
  title: z.string().describe('The title of the job profile.'),
  description: z.string().describe('The detailed description of the job profile.'),
});

const CompetencyGradeSchema = z.object({
  competency: z.string().describe('The name of the competency being graded.'),
  grade: z.string().describe('The letter grade assigned.'),
  score: z.number().describe('The numerical score.'),
  justification: z.string().describe('A brief justification for the assigned grade.'),
  nivelConductual: z.string().describe("The behavioral level descriptor based on the grade.")
});

const AnalyzeJobProfilesInputSchema = z.object({
  career: z.string().describe("The user's selected career."),
  level: z.string().describe("The user's experience level."),
  grades: z.array(CompetencyGradeSchema).describe("The user's grades for each competency."),
  jobProfiles: z.array(JobProfileSchema).describe('A list of job profiles to be analyzed.'),
});
export type AnalyzeJobProfilesInput = z.infer<typeof AnalyzeJobProfilesInputSchema>;

const JobProfileAnalysisSchema = z.object({
    title: z.string().describe('The title of the job profile.'),
    description: z.string().describe('The original description of the job profile.'),
    atenencia: z.string().describe("Analysis of 'Atenencia': How the role is significantly related to the user's career path and observed work dynamics."),
    pertinencia: z.string().describe("Analysis of 'Pertinencia': How the role is important and has a significant impact, considering the user's evaluated competencies."),
    recurrencia: z.string().describe("Analysis of 'Recurrencia': How the role involves a recurring pattern of behavior where the user's competencies will be consistently applied."),
});

const AnalyzeJobProfilesOutputSchema = z.array(JobProfileAnalysisSchema);
export type AnalyzeJobProfilesOutput = z.infer<typeof AnalyzeJobProfilesOutputSchema>;


export async function analyzeJobProfiles(input: AnalyzeJobProfilesInput): Promise<AnalyzeJobProfilesOutput> {
  return analyzeJobProfilesFlow(input);
}

const analyzeJobProfilesPrompt = ai.definePrompt({
  name: 'analyzeJobProfilesPrompt',
  input: { schema: AnalyzeJobProfilesInputSchema },
  output: { schema: AnalyzeJobProfilesOutputSchema },
  prompt: `You are an expert career counselor AI. Your task is to analyze a list of job profiles for a candidate and explain why each one is a good fit based on three specific criteria: Atenencia, Pertinencia, and Recurrencia.

Candidate's Data:
- Career: {{{career}}}
- Experience Level: {{{level}}}
- Assessment Results:
{{#each grades}}
  - Competency: {{this.competency}} (Score: {{this.score}}/4.0, Grade: {{this.grade}}, Level: {{this.nivelConductual}}) - Justification: {{this.justification}}
{{/each}}

Job Profiles to Analyze:
{{#each jobProfiles}}
- Title: {{this.title}}
  Description: {{this.description}}
{{/each}}

Analysis Criteria:
1.  **Atenencia:** Is the role significantly related to the candidate's field of study and observable in their potential work dynamic? Explain the direct link.
2.  **Pertinencia:** Is the role impactful and important? Explain how the candidate's strongest competencies (those with the highest scores) make them a particularly relevant fit for this role's key responsibilities.
3.  **Recurrencia:** Is the role's required behavior a recurring pattern, not an isolated action? Explain how the candidate's evaluated skills would be used consistently in this job.

For each job profile provided, generate a personalized analysis for the candidate. Your analysis for each criterion must be concise, insightful, and directly reference the candidate's career and strongest competencies.

Return the full list of analyses as a valid JSON array of objects. Each object in the array must contain 'title', 'description', 'atenencia', 'pertinencia', and 'recurrencia' fields.`,
});


const analyzeJobProfilesFlow = ai.defineFlow(
  {
    name: 'analyzeJobProfilesFlow',
    inputSchema: AnalyzeJobProfilesInputSchema,
    outputSchema: AnalyzeJobProfilesOutputSchema,
  },
  async (input) => {
    const { output } = await analyzeJobProfilesPrompt(input);
    return output!;
  }
);
