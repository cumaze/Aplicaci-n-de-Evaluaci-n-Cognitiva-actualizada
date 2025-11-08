import { config } from 'dotenv';
config();

import '@/ai/flows/generate-report-summary.ts';
import '@/ai/flows/generate-competency-questions.ts';
import '@/ai/flows/generate-video-task.ts';
import '@/ai/flows/analyze-job-profiles.ts';
