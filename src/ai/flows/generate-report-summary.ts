'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a summary of the assessment report.
 *
 * It includes the following:
 * - `generateReportSummary`: An asynchronous function that takes assessment data as input and returns a summary of the report.
 * - `ReportSummaryInput`: The input type for the `generateReportsummary` function, defining the structure of the assessment data.
 * - `ReportSummaryOutput`: The output type for the `generateReportSummary` function, defining the structure of the summary report.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReportSummaryInputSchema = z.object({
  userName: z.string().describe('The name of the user who took the assessment.'),
  career: z.string().describe('The career the user selected.'),
  level: z.string().describe('The experience level of the user.'),
  answers: z.record(z.string(), z.string()).describe('A record of the user answers, where the key is the competency and the value is the answer.'),
});
export type ReportSummaryInput = z.infer<typeof ReportSummaryInputSchema>;

const CompetencyGradeSchema = z.object({
    competency: z.string().describe('The name of the competency being graded.'),
    grade: z.string().describe('The letter grade (A+, A, A-, B+, B, B-, C+, C, C-, D+, D, D-, F) assigned based on the answer.'),
    score: z.number().describe('The numerical score equivalent to the letter grade (e.g., A+ = 4.0).'),
    justification: z.string().describe('A brief justification for the assigned grade.'),
    nivelConductual: z.string().describe("The behavioral level descriptor based on the grade (INSUFICIENTE, POR DEBAJO DE LO ESPERADO, PROMEDIO SUFICIENTE, EFICIENTE, SUPERLATIVO).")
});

const ReportSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the user assessment results.'),
  grades: z.array(CompetencyGradeSchema).describe('An array of grades for each competency.'),
});
export type ReportSummaryOutput = z.infer<typeof ReportSummaryOutputSchema>;

export async function generateReportSummary(input: ReportSummaryInput): Promise<ReportSummaryOutput> {
  return generateReportSummaryFlow(input);
}

const reportSummaryPrompt = ai.definePrompt({
  name: 'reportSummaryPrompt',
  input: {schema: ReportSummaryInputSchema},
  output: {schema: ReportSummaryOutputSchema},
  prompt: `You are an AI expert in summarizing assessment results and grading competencies for users.

  Based on the assessment data provided, perform two tasks:
  1. Generate a concise and insightful summary of the user's strengths and weaknesses. The summary should be easy to understand and provide actionable insights.
  2. Grade each competency based on the user's answer. Use the American grading scale provided below. For each competency, return the competency name, the letter grade, the numerical score, a brief justification for the grade, and the corresponding behavioral level.

  American Grading Scale & Behavioral Levels:
  - A+, A, A- (Score 4.0-3.6): SUPERLATIVO - Demonstrates behaviors that are evidence of the highest level of the competency.
  - B+, B, B- (Score 3.3-2.8): EFICIENTE - Demonstrates behaviors that are evidence of a significant level in the competency. Above what is expected.
  - C+, C, C- (Score 2.4-2.0): PROMEDIO SUFICIENTE - Demonstrates behaviors that are acceptable or sufficient as evidence that the individual has the required competency.
  - D+, D, D- (Score 1.6-1.2): POR DEBAJO DE LO ESPERADO - Demonstrates minimal behaviors, indicating the individual is likely to have difficulties and requires development.
  - F (Score 0.0): INSUFICIENTE - "Level of incompetence": does not possess the specific competency and their negative behaviors impact performance.

  Evaluate the depth, clarity, and relevance of each answer to assign a grade.

  Assessment Data:
  - User Name: {{{userName}}}
  - Career: {{{career}}}
  - Experience Level: {{{level}}}
  - Answers:
  {{#each answers}}
    - Competency: {{@key}}
    - Answer: {{{this}}}
  {{/each}}

  Return a JSON object with a "summary" and a "grades" array.`, 
});

const generateReportSummaryFlow = ai.defineFlow(
  {
    name: 'generateReportSummaryFlow',
    inputSchema: ReportSummaryInputSchema,
    outputSchema: ReportSummaryOutputSchema,
  },
  async input => {
    const {output} = await reportSummaryPrompt(input);
    return output!;
  }
);
