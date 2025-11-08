export type Competency = {
  id: string;
  nombre: string;
  area: string;
  definicion: string;
  roles: string[];
};

export type JobProfile = {
  title: string;
  description: string;
};

export type Career = {
  key: string;
  area: string;
  competencies: string[];
  jobProfiles?: JobProfile[];
};

export type UserData = {
  name: string;
  email: string;
  career: string;
  level: string;
  area?: string;
};

export type Question = {
  competency: string;
  question: string;
};

export type Answers = Record<string, string>;

export type CompetencyGrade = {
  competency: string;
  grade: string;
  score: number;
  justification: string;
  nivelConductual: string;
};

export type VideoTask = {
  competency: string;
  task: string;
};

export type JobProfileAnalysis = {
  title: string;
  description: string;
  atenencia: string;
  pertinencia: string;
  recurrencia: string;
};
