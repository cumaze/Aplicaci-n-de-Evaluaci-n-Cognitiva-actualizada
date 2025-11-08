'use server';
/**
 * @fileOverview Generates competency questions based on the user's career and experience level.
 *
 * - generateCompetencyQuestions - A function that generates competency questions.
 * - GenerateCompetencyQuestionsInput - The input type for the generateCompetencyQuestions function.
 * - GenerateCompetencyQuestionsOutput - The return type for the generateCompetencyQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCompetencyQuestionsInputSchema = z.object({
  career: z.string().describe('The career selected by the user.'),
  level: z.string().describe('The experience level of the user.'),
  competencies: z.array(z.string()).describe('The competencies relevant to the career.'),
});
export type GenerateCompetencyQuestionsInput = z.infer<typeof GenerateCompetencyQuestionsInputSchema>;

const GenerateCompetencyQuestionsOutputSchema = z.array(z.object({
  competency: z.string().describe('The competency the question is related to.'),
  question: z.string().describe('The generated question.'),
})).describe('An array of competency questions.');
export type GenerateCompetencyQuestionsOutput = z.infer<typeof GenerateCompetencyQuestionsOutputSchema>;

export async function generateCompetencyQuestions(input: GenerateCompetencyQuestionsInput): Promise<GenerateCompetencyQuestionsOutput> {
  return generateCompetencyQuestionsFlow(input);
}

const generateCompetencyQuestionsPrompt = ai.definePrompt({
  name: 'generateCompetencyQuestionsPrompt',
  input: {schema: GenerateCompetencyQuestionsInputSchema},
  output: {schema: GenerateCompetencyQuestionsOutputSchema},
  prompt: `You are an expert in generating interview questions to assess a candidate's competencies.

  Generate one question for each of the following competencies, tailored to a candidate with the career "{{{career}}}" and experience level "{{{level}}}".
  Return the questions as a JSON array of objects with the keys 'competency' and 'question'.
  The response must be a valid JSON.
  Competencies:
  {{#each competencies}}
  - {{{this}}}
  {{/each}}
  `,
});

const generateCompetencyQuestionsFlow = ai.defineFlow(
  {
    name: 'generateCompetencyQuestionsFlow',
    inputSchema: GenerateCompetencyQuestionsInputSchema,
    outputSchema: GenerateCompetencyQuestionsOutputSchema,
  },
  async input => {
    const {output} = await generateCompetencyQuestionsPrompt(input);
    return output!;
  }
);
