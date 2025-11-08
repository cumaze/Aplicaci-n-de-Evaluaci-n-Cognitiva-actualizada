(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CAREERS": (()=>CAREERS),
    "COMPETENCIES": (()=>COMPETENCIES),
    "LEVELS": (()=>LEVELS)
});
const COMPETENCIES = [
    {
        id: 'C1',
        nombre: 'Liderazgo',
        area: 'Administración',
        definicion: 'Orientar grupos humanos con ética y logro.',
        roles: [
            'Transmite visión',
            'Delega',
            'Evalúa desempeño'
        ]
    },
    {
        id: 'C2',
        nombre: 'Trabajo en Equipo',
        area: 'Administración',
        definicion: 'Colaborar y apoyar para un fin común.',
        roles: [
            'Comparte información',
            'Respeta opiniones',
            'Propone acuerdos'
        ]
    },
    {
        id: 'C3',
        nombre: 'Comunicación Escrita',
        area: 'General',
        definicion: 'Expresar ideas claras y correctamente.',
        roles: [
            'Redacta informes',
            'Organiza ideas',
            'Resume'
        ]
    },
    {
        id: 'C4',
        nombre: 'Planificación',
        area: 'Administración',
        definicion: 'Definir metas y pasos para lograrlas.',
        roles: [
            'Define objetivos',
            'Organiza tareas',
            'Prevé obstáculos'
        ]
    },
    {
        id: 'C5',
        nombre: 'Solución de Problemas',
        area: 'General',
        definicion: 'Detecta retos y encuentra alternativas.',
        roles: [
            'Analiza causas',
            'Propone soluciones',
            'Implementa ajustes'
        ]
    }
];
const defaultCompetencies = [
    'Liderazgo',
    'Trabajo en Equipo',
    'Planificación',
    'Solución de Problemas',
    'Comunicación Escrita'
];
const CAREERS = [
    {
        key: 'Licenciatura en Administración Bancaria',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Administración Deportiva',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Administración de Empresas',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Administración Financiera',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Administración Hotelera',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Administración Pública',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Alta Dirección y Gerencia Organizacional',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Comercio Exterior',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Comercio Interno',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Dirección y Gerencia de Proyectos',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Logística',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Marketing',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Marketing Digital',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Mercadotecnia',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Negocios Internacionales',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Publicidad',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Recursos Humanos',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Antropología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Bibliotecología y Documentación',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias del Deporte',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias de la Comunicación',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Políticas',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Sociales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Composición Coreografía y Danza',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Comunicación Social',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Comunicaciones',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Consejería Familiar',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Dirección de Cine',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ética',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Filosofía y Teología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Filosofía',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Historia del Arte',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Historia',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Humanidades',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Lenguaje y Literatura',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Lingüística',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Literatura Latinoamericana',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Medio Ambiente',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Música',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Periodismo',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Relaciones Internacionales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Relaciones Públicas',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Riesgos Laborales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Talento Humano',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Teología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Teología Católica',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Teología Cristiana',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Trabajo Social',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Turismo y Hotelería',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Agricultura',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Agronomía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Agropecuaria',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Astronomía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Biofísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Calidad Total',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Ambientales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Biológicas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias de la Computación',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias de la Tierra',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Naturales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Químicas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Control de Calidad',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Desastres Naturales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ecología',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Electricidad',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Energía Renovable',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Física',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Física Teórica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Geofísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Geología',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Geografía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Geotecnia',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Matemáticas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Matemática Educativa',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Metafísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Forenses',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Criminalística',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Criminología',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Ciencias Jurídicas',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Administrativo y Público',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Ambiental',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Constitucional',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Canónico',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales y Derecho Mercantil',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis Derecho Penal',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales en Derechos Humanos',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Internacional',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Laboral',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Tributario',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Arquitectura',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Diseño de Interiores',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Urbanismo y Ambiente',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Auditoria',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Auditoría en Contabilidad',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Auditoria Forense',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias Económicas',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Contabilidad',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Contabilidad Internacional',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Contratación Pública',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Contaduría Pública',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Estadística',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Finanzas',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Administración Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Andragogía',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Calidad Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias de la Educación',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Docencia',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Educación Artística',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Educación Especial',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Educación Física',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Educación Primaria',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Educación Superior',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Investigación Científica',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Investigación Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingles',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Pedagogía',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Tecnología Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Informática',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Inteligencia Artificial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Agro-ecológica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Agro-industrial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Ambiental',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Automotriz',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Civil',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Científica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería en Alimentos',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería en Minas',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería en Petróleos',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería de Sistemas',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Eléctrica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Electrónica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería en Telecomunicaciones',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Forestal',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Hidráulica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Industrial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Química',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Sanitaria',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Mecánica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ingeniería Textil',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Recursos Hídricos',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Tecnología de la Información y la Comunicación',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Administración Hospitalaria',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Ciencias de la Salud',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Enfermería',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Fisioterapia',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Gerontología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Logoterapia',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Microbiología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Naturopatía',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Neuropsicología Clínica',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Neuropsicología Infantil',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Nutrición',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Nutrición Animal',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Nutrición y Bioquímica Deportiva',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Parapsicología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Podología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Psicoanálisis',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Psicología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Psicología Clínica',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Psicopedagogía',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Rehabilitación Deportiva',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Reproducción Animal',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Salud Pública',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Sexología y Terapia de Parejas',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Sociología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Salud y Seguridad Ocupacional',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Licenciatura en Terapia Familiar',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración Bancaria',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración de empresas',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración Deportiva',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración Hotelera',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración Pública',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Alta Dirección y Gerencia Organizacional',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración Financiera',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Comercio Exterior',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Comercio Interno',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Dirección y Gerencia de Proyectos',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Logística',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Marketing',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Marketing Digital',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Mercadotecnia',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Negocios Internacionales',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Publicidad',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Recursos Humanos',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Antropología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Archivística y Gestión de Documentos',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Bibliotecología y documentación',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias del Deporte',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Sociales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias de la Comunicación',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Políticas',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Consejería Familiar',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Composición Coreográfica y Danza',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Comunicación Social',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Comunicaciones',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Dirección de Cine',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ética',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Filosofía',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Filosofía y teología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Historia',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Historia del Arte',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Humanidades',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Lenguaje y literatura',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Lingüística',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Literatura Latinoamericana',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Medio Ambiente',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Música',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Periodismo',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Relaciones Internacionales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Relaciones Públicas',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Riesgos Laborales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Seguridad Industrial',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Talento Humano',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Teología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Teología Católica',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Teología cristiana',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Trabajo Social',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Hotelería y Turismo',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Agricultura',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Agronomía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Agropecuaria',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Astronomía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Biofísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Calidad Total',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Ambientales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Biológicas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias de la Computación',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias de la Tierra',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Naturales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Químicas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Control de Calidad',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Desastres Naturales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ecología',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Electricidad',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Energía Renovable',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Física',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Física Teórica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Geofísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Geología',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Geografía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Geotecnia',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Matemáticas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Matemática Educativa',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Metafísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Forenses',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Criminalística',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Criminología',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Ciencias Jurídicas',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Administrativo y Público',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Ambiental',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Constitucional',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Canónico',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho en Salud',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Laboral',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Penal',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Internacional',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derechos Humanos',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Tributario',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Arquitectura',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Diseño de Interiores',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Urbanismo y Ambiente',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Auditoría',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Contabilidad',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Contabilidad internacional',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Auditoría Forense enf. Contabilidad',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Auditoría en Contabilidad',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias Económicas',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Contaduría pública',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Contratación pública',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Estadística',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Finanzas',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Andragogía',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Calidad Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias de la Educación',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Docencia',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Educación Artística',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Educación Especial',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Educación Física',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Educación Primaria',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Educación Superior',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Investigación Científica',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Investigación Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingles',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Pedagogía',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Tecnología Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Informática',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Inteligencia Artificial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Agro-ecológica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Agro-industrial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Ambiental',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Automotriz',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Civil',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Científica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería en Alimentos',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería en Minas',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería en Petróleos',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería de Sistemas',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Eléctrica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Electrónica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería en Telecomunicaciones',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Forestal',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Hidráulica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Industrial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Química',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Sanitaria',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Mecánica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ingeniería Textil',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Recursos Hídricos',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Tecnología de la Información y la Comunicación',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Administración Hospitalaria',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Ciencias de la Salud',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Enfermería',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Fisioterapia',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Gerontología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Logoterapia',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Microbiología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Naturopatía',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Neuropsicología Clínica',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Neuropsicología Infantil',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Nutrición',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Nutrición Animal',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Nutrición y Bioquímica Deportiva',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Parapsicología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Podología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Psicoanálisis',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Psicología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Psicología Clínica',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Psicopedagogía',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Rehabilitación Deportiva',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Reproducción Animal',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Salud Pública',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Sexología y Terapia de Parejas',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Sociología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Salud y Seguridad Ocupacional',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Maestría en Terapia Familiar',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración Bancaria',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración Deportiva',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración de Empresas',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración Educativa',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Alta Dirección Empresarial',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración y Dirección de Empresas',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración Financiera',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración Hospitalaria',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración Hotelera',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Administración Pública',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Alta Dirección y Gerencia Organizacional',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Comercio Exterior',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Comercio Interno',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Dirección y Gerencia de Proyectos',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Logística',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Marketing',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Marketing Digital',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Mercadotecnia',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Negocios Internacionales',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Publicidad',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Recursos Humanos',
        area: 'Administración',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Antropología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Archivística y Gestión de Documentos',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias del Deporte',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Sociales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias de la Comunicación',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Políticas',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Consejería Familiar',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Composición Coreográfica y Danza',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Comunicación Social',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Comunicaciones',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Dirección de Cine',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ética',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Filosofía',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Filosofía y Teología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Historia',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Historia del Arte',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Humanidades',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Lenguaje y literatura',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Lingüística',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Literatura Latinoamericana',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Medio Ambiente',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Música',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Periodismo',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Relaciones Internacionales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Relaciones publicas',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Riesgos laborales',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Seguridad Industrial',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Talento Humano',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Teología',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Teologia Catolica',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Teología Cristiana',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Trabajo Social',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Hotelería y Turismo',
        area: 'Ciencias Sociales y Humanidades',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Agricultura',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Agronomía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Agropecuaria',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Astronomía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Biofísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Calidad Total',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Ambientales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Biológicas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias de la Computación',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias de la Tierra y Oceánicas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Naturales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Químicas',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Control de Calidad',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Desastres Naturales',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ecología',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Energías Renovables',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Física',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Física Teórica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Geofísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Geología',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Geografía',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Geotecnia',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Matemática Educativa',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Metafísica',
        area: 'Ciencias y Tecnología',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Forenses',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Criminalística',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Criminología',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Ciencias Jurídicas',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho y Administración Pública',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Canónico',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales y Derecho Mercantil',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Derecho Penal',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Derecho Administrativo',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derechos Humanos',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Ambiental',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Derecho Constitucional',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Internacional',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Laboral',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Tributario',
        area: 'Derecho',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Arquitectura',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Diseño de Interiores',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Urbanismo y Ambiente',
        area: 'Arquitectura y Diseño',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Auditoria',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Auditoria Forense',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Auditoria en Contabilidad',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias Económicas',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Contaduría Pública',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Contabilidad',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Contabilidad internacional',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Contratación Pública',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Estadística',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Finanzas',
        area: 'Economía y Finanzas',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Andragogía',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Calidad Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias de la Educación',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Docencia',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Educación Artística',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Educación Especial',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Educación Física',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Educación Primaria',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Educación Superior',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Investigación Científica',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Investigación Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingles',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Pedagogía',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Tecnología Educativa',
        area: 'Educación',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Agro-ecológica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Agro-industrial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Ambiental',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Automotriz',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Informática',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Inteligencia Artificial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Científica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Civil',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Eléctrica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Electrónica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Forestal',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Hidráulica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Industrial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Química',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Sanitaria',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Textil',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería en Alimentos',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Mecánica',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Minera',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería Petrolera',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería en Seguridad Industrial',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería en Seguridad Laboral',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería de Sistemas',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ingeniería de Telecomunicaciones',
        area: 'Ingeniería',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Ciencias de la Salud',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Enfermería',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Fisioterapia',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Gerontología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Logoterapia',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Microbiología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Naturopatía',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Neuropsicología Clínica',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Neuropsicología Infantil',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Nutrición',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Nutrición Animal',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Nutrición y Bioquímica Deportiva',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Parapsicología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Podología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Psicoanálisis',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Psicología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Psicología Clínica',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Psicopedagogía',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Rehabilitación Deportiva',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Reproducción Animal',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Salud Pública',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Sexología y Terapia de Parejas',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Sociología',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Salud y Seguridad Ocupacional',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Doctorado en Terapia Familiar',
        area: 'Salud',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Administración Pública',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Consejería Familiar',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Filosofía',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Teología Católica',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Teología Cristiana',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Física',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Estudios Legales con énfasis en Derecho Canónico',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Estudios Legales con énfasis en Derechos Humanos',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Terapia Familiar',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Alta Dirección Empresarial',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Contabilidad y Auditoría de Gestión',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Educación',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Estudios Legales con énfasis Derecho Internacional',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Calidad Educativa',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Negocios Internacionales',
        area: 'General',
        competencies: defaultCompetencies
    },
    {
        key: 'Posdoctorado en Relaciones Internacionales',
        area: 'General',
        competencies: defaultCompetencies
    }
];
const LEVELS = [
    "Nivel uno (0-2 años)",
    "Nivel dos (2-5 años)",
    "Nivel tres (5-10 años)",
    "Nivel cuatro (10+ años)"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Form": (()=>Form),
    "FormControl": (()=>FormControl),
    "FormDescription": (()=>FormDescription),
    "FormField": (()=>FormField),
    "FormItem": (()=>FormItem),
    "FormLabel": (()=>FormLabel),
    "FormMessage": (()=>FormMessage),
    "useFormField": (()=>useFormField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormFieldContext);
    const itemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
const FormItemContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
const FormItem = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s1(({ className, ...props }, ref)=>{
    _s1();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=")), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c2 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
})), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = _s3(({ ...props }, ref)=>{
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
})), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c6 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ _s4((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
})), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c8 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ _s5((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = _s5(({ className, children, ...props }, ref)=>{
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
})), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c10 = FormMessage;
FormMessage.displayName = "FormMessage";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "FormField");
__turbopack_context__.k.register(_c1, "FormItem$React.forwardRef");
__turbopack_context__.k.register(_c2, "FormItem");
__turbopack_context__.k.register(_c3, "FormLabel$React.forwardRef");
__turbopack_context__.k.register(_c4, "FormLabel");
__turbopack_context__.k.register(_c5, "FormControl$React.forwardRef");
__turbopack_context__.k.register(_c6, "FormControl");
__turbopack_context__.k.register(_c7, "FormDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "FormDescription");
__turbopack_context__.k.register(_c9, "FormMessage$React.forwardRef");
__turbopack_context__.k.register(_c10, "FormMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:95084d [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40d5564b40e58d6e3025f18472e9ad07beb6459c5f":"startAssessmentAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "startAssessmentAction": (()=>startAssessmentAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var startAssessmentAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d5564b40e58d6e3025f18472e9ad07beb6459c5f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "startAssessmentAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtY29tcGV0ZW5jeS1xdWVzdGlvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXBvcnRTdW1tYXJ5IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1yZXBvcnQtc3VtbWFyeSc7XG5pbXBvcnQgeyBDQVJFRVJTIH0gZnJvbSAnQC9saWIvZGF0YSc7XG5pbXBvcnQgdHlwZSB7IEFuc3dlcnMsIFVzZXJEYXRhIH0gZnJvbSAnQC9saWIvdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBc3Nlc3NtZW50QWN0aW9uKHsgY2FyZWVyLCBsZXZlbCB9OiB7IGNhcmVlcjogc3RyaW5nOyBsZXZlbDogc3RyaW5nIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZWxlY3RlZENhcmVlciA9IENBUkVFUlMuZmluZChjID0+IGMua2V5ID09PSBjYXJlZXIpO1xuICAgIGlmICghc2VsZWN0ZWRDYXJlZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2VsZWN0ZWQgY2FyZWVyIG5vdCBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wZXRlbmNpZXMgPSBzZWxlY3RlZENhcmVlci5jb21wZXRlbmNpZXM7XG5cbiAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCBnZW5lcmF0ZUNvbXBldGVuY3lRdWVzdGlvbnMoe1xuICAgICAgY2FyZWVyLFxuICAgICAgbGV2ZWwsXG4gICAgICBjb21wZXRlbmNpZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBxdWVzdGlvbnMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlcG9ydEFjdGlvbih7IHVzZXJEYXRhLCBhbnN3ZXJzIH06IHsgdXNlckRhdGE6IFVzZXJEYXRhLCBhbnN3ZXJzOiBBbnN3ZXJzIH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHN1bW1hcnkgfSA9IGF3YWl0IGdlbmVyYXRlUmVwb3J0U3VtbWFyeSh7XG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlckRhdGEubmFtZSxcbiAgICAgICAgICAgIGNhcmVlcjogdXNlckRhdGEuY2FyZWVyLFxuICAgICAgICAgICAgbGV2ZWw6IHVzZXJEYXRhLmxldmVsLFxuICAgICAgICAgICAgYW5zd2VyczogYW5zd2VycyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc3VtbWFyeSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBT3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/onboarding-form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OnboardingForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$95084d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:95084d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const formSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])().min(2, {
        message: 'El nombre debe tener al menos 2 caracteres.'
    }),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])().email({
        message: 'Por favor, introduce un correo electrónico válido.'
    }),
    career: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])({
        required_error: 'Por favor, selecciona una carrera.'
    }),
    level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"])({
        required_error: 'Por favor, selecciona tu nivel de experiencia.'
    })
});
function OnboardingForm({ onStartAssessment }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema),
        defaultValues: {
            name: '',
            email: '',
            career: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAREERS"][0]?.key,
            level: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVELS"][0]
        }
    });
    async function onSubmit(values) {
        setLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$95084d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["startAssessmentAction"])({
            career: values.career,
            level: values.level
        });
        setLoading(false);
        if (result.success && result.questions) {
            onStartAssessment(values, result.questions);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error al iniciar la evaluación',
                description: result.error || 'Ocurrió un error al generar las preguntas. Por favor, intenta de nuevo.'
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline",
                        children: "Bienvenido/a"
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding-form.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Completa tus datos para comenzar la evaluación de competencias."
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding-form.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/onboarding-form.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                ...form,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: form.handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "name",
                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                            children: "Nombre completo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                placeholder: "Tu nombre",
                                                                ...field
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding-form.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "email",
                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                            children: "Correo electrónico"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "email",
                                                                placeholder: "tu@correo.com",
                                                                ...field
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding-form.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "career",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Carrera / Área"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: field.onChange,
                                                    defaultValue: field.value,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Selecciona tu carrera"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding-form.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAREERS"].map((career)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: career.key,
                                                                    children: career.key
                                                                }, career.key, false, {
                                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 25
                                                                }, void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "level",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Nivel de Experiencia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: field.onChange,
                                                    defaultValue: field.value,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Selecciona tu nivel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/onboarding-form.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 23
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVELS"].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: level,
                                                                    children: level
                                                                }, level, false, {
                                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 25
                                                                }, void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 21
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/onboarding-form.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                disabled: loading,
                                className: "w-full sm:w-auto ml-auto bg-accent text-accent-foreground hover:bg-accent/90",
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-2 h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/onboarding-form.tsx",
                                        lineNumber: 147,
                                        columnNumber: 26
                                    }, this) : null,
                                    "Comenzar Evaluación"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/onboarding-form.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/onboarding-form.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/onboarding-form.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/onboarding-form.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(OnboardingForm, "/083ph9nk05irgLSroNpPjOGl7Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = OnboardingForm;
var _c;
__turbopack_context__.k.register(_c, "OnboardingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Textarea;
Textarea.displayName = 'Textarea';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Progress": (()=>Progress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = Progress;
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Progress$React.forwardRef");
__turbopack_context__.k.register(_c1, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:669ef1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b91023078ab94a5859ba74d54fc57cfe4c4ccefb":"generateReportAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "generateReportAction": (()=>generateReportAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateReportAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b91023078ab94a5859ba74d54fc57cfe4c4ccefb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateReportAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtY29tcGV0ZW5jeS1xdWVzdGlvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXBvcnRTdW1tYXJ5IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1yZXBvcnQtc3VtbWFyeSc7XG5pbXBvcnQgeyBDQVJFRVJTIH0gZnJvbSAnQC9saWIvZGF0YSc7XG5pbXBvcnQgdHlwZSB7IEFuc3dlcnMsIFVzZXJEYXRhIH0gZnJvbSAnQC9saWIvdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRBc3Nlc3NtZW50QWN0aW9uKHsgY2FyZWVyLCBsZXZlbCB9OiB7IGNhcmVlcjogc3RyaW5nOyBsZXZlbDogc3RyaW5nIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZWxlY3RlZENhcmVlciA9IENBUkVFUlMuZmluZChjID0+IGMua2V5ID09PSBjYXJlZXIpO1xuICAgIGlmICghc2VsZWN0ZWRDYXJlZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2VsZWN0ZWQgY2FyZWVyIG5vdCBmb3VuZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wZXRlbmNpZXMgPSBzZWxlY3RlZENhcmVlci5jb21wZXRlbmNpZXM7XG5cbiAgICBjb25zdCBxdWVzdGlvbnMgPSBhd2FpdCBnZW5lcmF0ZUNvbXBldGVuY3lRdWVzdGlvbnMoe1xuICAgICAgY2FyZWVyLFxuICAgICAgbGV2ZWwsXG4gICAgICBjb21wZXRlbmNpZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBxdWVzdGlvbnMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlcG9ydEFjdGlvbih7IHVzZXJEYXRhLCBhbnN3ZXJzIH06IHsgdXNlckRhdGE6IFVzZXJEYXRhLCBhbnN3ZXJzOiBBbnN3ZXJzIH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHN1bW1hcnkgfSA9IGF3YWl0IGdlbmVyYXRlUmVwb3J0U3VtbWFyeSh7XG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlckRhdGEubmFtZSxcbiAgICAgICAgICAgIGNhcmVlcjogdXNlckRhdGEuY2FyZWVyLFxuICAgICAgICAgICAgbGV2ZWw6IHVzZXJEYXRhLmxldmVsLFxuICAgICAgICAgICAgYW5zd2VyczogYW5zd2VycyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgc3VtbWFyeSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1NBNkJzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/assessment.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Assessment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$669ef1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:669ef1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Assessment({ questions, userData, onFinishAssessment }) {
    _s();
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentAnswer, setCurrentAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const handleNext = ()=>{
        const newAnswers = {
            ...answers,
            [currentQuestion.competency]: currentAnswer
        };
        setAnswers(newAnswers);
        if (isLastQuestion) {
            handleFinish(newAnswers);
        } else {
            setCurrentAnswer(answers[questions[currentQuestionIndex + 1].competency] || '');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
    const handleFinish = async (finalAnswers)=>{
        setLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$669ef1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateReportAction"])({
            userData,
            answers: finalAnswers
        });
        setLoading(false);
        if (result.success && result.summary) {
            onFinishAssessment(finalAnswers, result.summary);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error al generar el informe',
                description: result.error || 'Ocurrió un error. Por favor, intenta de nuevo.'
            });
        }
    };
    const progressValue = (currentQuestionIndex + 1) / questions.length * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline",
                        children: currentQuestion.competency
                    }, void 0, false, {
                        fileName: "[project]/src/components/assessment.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: [
                            "Pregunta ",
                            currentQuestionIndex + 1,
                            " de ",
                            questions.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/assessment.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                        value: progressValue,
                        className: "mt-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/assessment.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/assessment.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-medium",
                        children: currentQuestion.question
                    }, void 0, false, {
                        fileName: "[project]/src/components/assessment.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        placeholder: "Escribe tu respuesta aquí...",
                        className: "min-h-[200px] text-base",
                        value: currentAnswer,
                        onChange: (e)=>setCurrentAnswer(e.target.value),
                        "aria-label": `Respuesta para la competencia ${currentQuestion.competency}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/assessment.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/assessment.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleNext,
                    disabled: loading || !currentAnswer.trim(),
                    className: "w-full sm:w-auto ml-auto bg-primary text-primary-foreground hover:bg-primary/90",
                    children: [
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "mr-2 h-4 w-4 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/assessment.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this) : null,
                        isLastQuestion ? 'Finalizar y ver informe' : 'Siguiente Pregunta'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/assessment.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/assessment.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Assessment, "I+DHcxZGaCsebemkVbSqz9deaxU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Assessment;
var _c;
__turbopack_context__.k.register(_c, "Assessment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
_c1 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AccordionTrigger;
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c5 = AccordionContent;
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "AccordionItem$React.forwardRef");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "AccordionTrigger");
__turbopack_context__.k.register(_c4, "AccordionContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChartContainer": (()=>ChartContainer),
    "ChartLegend": (()=>ChartLegend),
    "ChartLegendContent": (()=>ChartLegendContent),
    "ChartStyle": (()=>ChartStyle),
    "ChartTooltip": (()=>ChartTooltip),
    "ChartTooltipContent": (()=>ChartTooltipContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
    light: "",
    dark: ".dark"
};
const ChartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useChart() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
_s(useChart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ChartContainer = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s1(({ id, className, children, config, ...props }, ref)=>{
    _s1();
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartContext.Provider, {
        value: {
            config
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-chart": chartId,
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartStyle, {
                    id: chartId,
                    config: config
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/chart.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/chart.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/chart.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}, "j7NPILheLIfrWAvm8S/GM4Sml/8=")), "j7NPILheLIfrWAvm8S/GM4Sml/8=");
_c1 = ChartContainer;
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config })=>{
    const colorConfig = Object.entries(config).filter(([, config])=>config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
        dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES).map(([theme, prefix])=>`
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig])=>{
                    const color = itemConfig.theme?.[theme] || itemConfig.color;
                    return color ? `  --color-${key}: ${color};` : null;
                }).join("\n")}
}
`).join("\n")
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/chart.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
_c2 = ChartStyle;
const ChartTooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"];
const ChartTooltipContent = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c3 = _s2(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref)=>{
    _s2();
    const { config } = useChart();
    const tooltipLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChartTooltipContent.useMemo[tooltipLabel]": ()=>{
            if (hideLabel || !payload?.length) {
                return null;
            }
            const [item] = payload;
            const key = `${labelKey || item.dataKey || item.name || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
            if (labelFormatter) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName),
                    children: labelFormatter(value, payload)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/chart.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this);
            }
            if (!value) {
                return null;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName),
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/ui/chart.tsx",
                lineNumber: 161,
                columnNumber: 14
            }, this);
        }
    }["ChartTooltipContent.useMemo[tooltipLabel]"], [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey
    ]);
    if (!active || !payload?.length) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
        children: [
            !nestLabel ? tooltipLabel : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: payload.map((item, index)=>{
                    const key = `${nameKey || item.name || item.dataKey || "value"}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = color || item.payload.fill || item.color;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
                        children: formatter && item?.value !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                itemConfig?.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig.icon, {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/chart.tsx",
                                    lineNumber: 206,
                                    columnNumber: 23
                                }, this) : !hideIndicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                                        "h-2.5 w-2.5": indicator === "dot",
                                        "w-1": indicator === "line",
                                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                        "my-0.5": nestLabel && indicator === "dashed"
                                    }),
                                    style: {
                                        "--color-bg": indicatorColor,
                                        "--color-border": indicatorColor
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/chart.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-1.5",
                                            children: [
                                                nestLabel ? tooltipLabel : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: itemConfig?.label || item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/chart.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/chart.tsx",
                                            lineNumber: 235,
                                            columnNumber: 23
                                        }, this),
                                        item.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-medium tabular-nums text-foreground",
                                            children: item.value.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/chart.tsx",
                                            lineNumber: 242,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/chart.tsx",
                                    lineNumber: 229,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true)
                    }, item.dataKey, false, {
                        fileName: "[project]/src/components/ui/chart.tsx",
                        lineNumber: 194,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ui/chart.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/chart.tsx",
        lineNumber: 179,
        columnNumber: 7
    }, this);
}, "nRMgiGinpZEd+NE7/dAtqF0Z2iA=", false, function() {
    return [
        useChart
    ];
})), "nRMgiGinpZEd+NE7/dAtqF0Z2iA=", false, function() {
    return [
        useChart
    ];
});
_c4 = ChartTooltipContent;
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"];
const ChartLegendContent = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = _s3(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref)=>{
    _s3();
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
        children: payload.map((item)=>{
            const key = `${nameKey || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                children: [
                    itemConfig?.icon && !hideIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig.icon, {}, void 0, false, {
                        fileName: "[project]/src/components/ui/chart.tsx",
                        lineNumber: 300,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 w-2 shrink-0 rounded-[2px]",
                        style: {
                            backgroundColor: item.color
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/chart.tsx",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this),
                    itemConfig?.label
                ]
            }, item.value, true, {
                fileName: "[project]/src/components/ui/chart.tsx",
                lineNumber: 293,
                columnNumber: 13
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ui/chart.tsx",
        lineNumber: 280,
        columnNumber: 7
    }, this);
}, "qnidj+dVqj1Euuv2nRBc6D+LeAA=", false, function() {
    return [
        useChart
    ];
})), "qnidj+dVqj1Euuv2nRBc6D+LeAA=", false, function() {
    return [
        useChart
    ];
});
_c6 = ChartLegendContent;
ChartLegendContent.displayName = "ChartLegend";
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "ChartContainer$React.forwardRef");
__turbopack_context__.k.register(_c1, "ChartContainer");
__turbopack_context__.k.register(_c2, "ChartStyle");
__turbopack_context__.k.register(_c3, "ChartTooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c4, "ChartTooltipContent");
__turbopack_context__.k.register(_c5, "ChartLegendContent$React.forwardRef");
__turbopack_context__.k.register(_c6, "ChartLegendContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/report.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Report)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Report({ userData, answers, summary, questions, onStartOver }) {
    _s();
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Report.useMemo[chartData]": ()=>{
            return questions.map({
                "Report.useMemo[chartData]": (q)=>({
                        name: q.competency,
                        "Longitud de Respuesta": answers[q.competency]?.length || 0
                    })
            }["Report.useMemo[chartData]"]);
        }
    }["Report.useMemo[chartData]"], [
        questions,
        answers
    ]);
    const chartConfig = {
        "Longitud de Respuesta": {
            label: "Longitud (caracteres)",
            color: "hsl(var(--primary))"
        }
    };
    const handlePrint = ()=>{
        window.print();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline text-2xl",
                        children: "Informe de Evaluación"
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: [
                            "Gracias por completar la evaluación, ",
                            userData.name,
                            ". Aquí están tus resultados."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-background",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-xl font-headline",
                                    children: "Resumen General por IA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "whitespace-pre-wrap text-muted-foreground",
                                    children: summary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-xl font-headline",
                                        children: "Análisis de Competencias"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Este gráfico representa la longitud de tus respuestas por competencia, como un indicador de tu nivel de detalle."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartContainer"], {
                                    config: chartConfig,
                                    className: "h-[300px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        accessibilityLayer: true,
                                        data: chartData,
                                        margin: {
                                            top: 20,
                                            right: 20,
                                            bottom: 20,
                                            left: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                vertical: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 64,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                tickLine: false,
                                                tickMargin: 10,
                                                axisLine: false,
                                                angle: -30,
                                                textAnchor: "end",
                                                height: 80,
                                                interval: 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 65,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 75,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                cursor: false,
                                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                                                    indicator: "dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 66
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 76,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "Longitud de Respuesta",
                                                fill: "var(--color-longitud-de-respuesta)",
                                                radius: 4
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 77,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 63,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 62,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-headline mb-4",
                                children: "Tus Respuestas en Detalle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                type: "single",
                                collapsible: true,
                                className: "w-full",
                                children: questions.map((q, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: `item-${index}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: [
                                                            q.competency,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-normal text-muted-foreground ml-2",
                                                        children: q.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "whitespace-pre-wrap p-4 bg-muted/50 rounded-md text-muted-foreground",
                                                    children: answers[q.competency] || 'No se proporcionó respuesta.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex justify-end gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handlePrint,
                        variant: "outline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            "Imprimir o Descargar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onStartOver,
                        className: "w-full sm:w-auto",
                        children: "Comenzar de Nuevo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Report, "i4eYYg6GOj65klTCDK4mhi4wfgw=");
_c = Report;
var _c;
__turbopack_context__.k.register(_c, "Report");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assessment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assessment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$report$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/report.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Home() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('onboarding');
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [reportSummary, setReportSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleStartAssessment = (data, generatedQuestions)=>{
        setUserData(data);
        setQuestions(generatedQuestions);
        setStep('assessment');
    };
    const handleFinishAssessment = (finalAnswers, summary)=>{
        setAnswers(finalAnswers);
        setReportSummary(summary);
        setStep('report');
    };
    const handleStartOver = ()=>{
        setUserData(null);
        setQuestions([]);
        setAnswers({});
        setReportSummary('');
        setStep('onboarding');
    };
    const renderStep = ()=>{
        switch(step){
            case 'onboarding':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onStartAssessment: handleStartAssessment
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 16
                }, this);
            case 'assessment':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assessment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    questions: questions,
                    userData: userData,
                    onFinishAssessment: handleFinishAssessment
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 45,
                    columnNumber: 16
                }, this);
            case 'report':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$report$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    userData: userData,
                    answers: answers,
                    summary: reportSummary,
                    questions: questions,
                    onStartOver: handleStartOver
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onStartAssessment: handleStartAssessment
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                            className: "h-8 w-8 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-headline text-foreground",
                            children: "App de Evaluación Cognitiva"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "w-full shadow-lg",
                    children: renderStep()
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Home, "BJgAGStfsAjLsKzXeZAoyUuSLBs=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_49bb1895._.js.map