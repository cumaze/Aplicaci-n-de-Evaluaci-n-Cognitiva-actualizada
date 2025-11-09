import { Question, CompetencyGrade } from './types';
import { CAREERS } from './data';

// Función para generar preguntas basadas en competencias reales
function generateQuestionsFromCompetencies(competencies: string[], careerArea: string): Question[] {
  return competencies.map((competency, index) => {
    const questionId = (index + 1).toString();
    
    // Generar preguntas contextualizadas según la competencia
    let questionText = '';
    let options: string[] = [];
    
    switch (competency) {
      case 'Liderazgo':
      case 'Liderazgo Transformacional':
        questionText = `Describe una situación donde demostraste ${competency.toLowerCase()} en tu área profesional`;
        break;
      case 'Trabajo en Equipo':
        questionText = '¿Cómo manejas los conflictos dentro de un equipo de trabajo?';
        options = [
          'Busco mediar y encontrar soluciones colaborativas',
          'Analizo las causas y propongo soluciones estructuradas',
          'Facilito la comunicación entre las partes',
          'Establezco normas claras de convivencia'
        ];
        break;
      case 'Planificación':
      case 'Planificación y Organización':
        questionText = 'Cuando enfrentas múltiples proyectos simultáneos, ¿cómo organizas tu trabajo?';
        options = [
          'Priorizo tareas y establezco cronogramas detallados',
          'Utilizo herramientas de gestión de proyectos',
          'Delego responsabilidades según especialidades',
          'Enfoco en los objetivos críticos primero'
        ];
        break;
      case 'Resolución de Problemas':
      case 'Solución de Problemas':
        questionText = 'Describe tu proceso para abordar problemas complejos en tu área';
        break;
      case 'Comunicación Escrita':
        questionText = '¿Qué consideras más importante al redactar un informe profesional?';
        options = [
          'Claridad y estructura lógica',
          'Precisión técnica y datos',
          'Adaptación al público objetivo',
          'Concisión y impacto'
        ];
        break;
      case 'Innovación':
        questionText = 'Proporciona un ejemplo de cómo has implementado ideas innovadoras';
        break;
      case 'Adaptabilidad':
        questionText = '¿Cómo manejas los cambios inesperados en los proyectos?';
        options = [
          'Reevalúo prioridades y ajusto planes',
          'Mantengo la calma y busco alternativas',
          'Consulto con el equipo para soluciones',
          'Enfoco en los aspectos controlables'
        ];
        break;
      case 'Pensamiento Estratégico':
        questionText = 'Describe cómo incorporas la visión a largo plazo en tus decisiones diarias';
        break;
      case 'Perspicacia Financiera':
        questionText = '¿Cómo evalúas el impacto financiero de tus decisiones profesionales?';
        break;
      default:
        questionText = `Describe tu experiencia y enfoque en ${competency.toLowerCase()}`;
    }

    return {
      id: questionId,
      type: options.length > 0 ? 'multiple_choice' : 'text',
      question: questionText,
      options: options,
      competency: competency,
      area: careerArea
    };
  });
}

// Mantenemos los datos simulados existentes para compatibilidad
export const simulatedQuestions: Question[] = [
  // ... (tu código existente se mantiene igual)
];

export const simulatedGrades: CompetencyGrade[] = [
  // ... (tu código existente se mantiene igual)
];

export const simulatedSummary = `
// ... (tu código existente se mantiene igual)
`;

// Funciones simuladas CORREGIDAS
export const simulateAPI = {
  generateQuestions: async (userData: any): Promise<Question[]> => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // OBTENER LAS COMPETENCIAS REALES DE LA CARRERA SELECCIONADA
    const selectedCareer = CAREERS.find(c => c.key === userData.career);
    
    if (selectedCareer) {
      // Generar preguntas para las 10 competencias de la carrera
      return generateQuestionsFromCompetencies(selectedCareer.competencies, selectedCareer.area);
    } else {
      // Fallback a las preguntas simuladas originales si no encuentra la carrera
      return simulatedQuestions;
    }
  },

  generateReport: async (answers: any, questions: Question[]): Promise<{summary: string, grades: CompetencyGrade[]}> => {
    // Simular delay de procesamiento
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generar calificaciones basadas en las competencias reales evaluadas
    const grades: CompetencyGrade[] = questions.map((question, index) => ({
      competency: question.competency,
      grade: 3.5 + Math.random() * 1.5, // Calificación entre 3.5 y 5.0
      area: question.area
    }));

    // Generar resumen personalizado basado en las competencias evaluadas
    const topCompetencies = grades.sort((a, b) => b.grade - a.grade).slice(0, 3);
    const summary = `
# Evaluación de Competencias - ${userData?.career || 'Profesional'}

## Resumen Ejecutivo
Perfil profesional evaluado en ${questions.length} competencias clave del área ${questions[0]?.area || 'General'}.

## Competencias Destacadas
${topCompetencies.map(comp => `- **${comp.competency} (${comp.grade.toFixed(1)}/5)**: ${getCompetencyDescription(comp.competency)}`).join('\n')}

## Áreas Evaluadas
- **Total de competencias**: ${grades.length}
- **Promedio general**: ${(grades.reduce((sum, g) => sum + g.grade, 0) / grades.length).toFixed(1)}/5
- **Competencia más fuerte**: ${topCompetencies[0]?.competency} (${topCompetencies[0]?.grade.toFixed(1)})

## Recomendaciones de Desarrollo
1. Fortalecer habilidades en ${grades.sort((a, b) => a.grade - b.grade)[0]?.competency}
2. Participar en formación especializada del área
3. Desarrollar plan de mejora continua
    `;

    return {
      summary: summary,
      grades: grades
    };
  },

  analyzeCompetencies: async (userData: any, answers: any): Promise<CompetencyGrade[]> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return simulatedGrades;
  }
};

// Función auxiliar para descripciones de competencias
function getCompetencyDescription(competency: string): string {
  const descriptions: { [key: string]: string } = {
    'Liderazgo': 'Capacidad para guiar equipos y tomar decisiones',
    'Trabajo en Equipo': 'Habilidad para colaborar efectivamente',
    'Planificación': 'Competencia para organizar y priorizar',
    'Resolución de Problemas': 'Enfoque analítico ante desafíos',
    'Innovación': 'Creatividad e implementación de nuevas ideas',
    'Adaptabilidad': 'Flexibilidad ante cambios y adversidades'
  };
  
  return descriptions[competency] || 'Competencia profesional clave';
}