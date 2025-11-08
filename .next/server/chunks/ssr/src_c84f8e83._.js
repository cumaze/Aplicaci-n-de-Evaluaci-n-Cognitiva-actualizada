module.exports = {

"[project]/src/lib/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
    },
    {
        id: 'C6',
        nombre: 'Pensamiento Estratégico',
        area: 'General',
        definicion: 'Analizar el entorno y definir el rumbo a largo plazo.',
        roles: []
    },
    {
        id: 'C7',
        nombre: 'Perspicacia Financiera',
        area: 'Finanzas',
        definicion: 'Comprender y utilizar la información financiera para la toma de decisiones.',
        roles: []
    },
    {
        id: 'C8',
        nombre: 'Innovación',
        area: 'General',
        definicion: 'Generar ideas y soluciones novedosas y creativas.',
        roles: []
    },
    {
        id: 'C9',
        nombre: 'Resolución de Problemas',
        area: 'General',
        definicion: 'Identificar, analizar y resolver problemas de manera efectiva.',
        roles: []
    },
    {
        id: 'C10',
        nombre: 'Adaptabilidad',
        area: 'General',
        definicion: 'Ajustarse a nuevas situaciones y cambios de manera efectiva.',
        roles: []
    },
    {
        id: 'C11',
        nombre: 'Autoaprendizaje',
        area: 'General',
        definicion: 'Capacidad de adquirir nuevos conocimientos y habilidades de forma autónoma.',
        roles: []
    },
    {
        id: 'C12',
        nombre: 'Liderazgo Transformacional',
        area: 'Administración',
        definicion: 'Inspirar y motivar al equipo para alcanzar metas extraordinarias.',
        roles: []
    },
    {
        id: 'C13',
        nombre: 'Gestión de Recursos',
        area: 'Administración',
        definicion: 'Utilizar de manera eficiente los recursos disponibles.',
        roles: []
    },
    {
        id: 'C14',
        nombre: 'Integridad',
        area: 'General',
        definicion: 'Actuar con honestidad, ética y transparencia.',
        roles: []
    },
    {
        id: 'C15',
        nombre: 'Capacidad de Análisis',
        area: 'General',
        definicion: 'Descomponer información compleja en partes más simples.',
        roles: []
    },
    {
        id: 'C16',
        nombre: 'Capacidad de Investigación',
        area: 'General',
        definicion: 'Buscar y recopilar información de manera sistemática.',
        roles: []
    },
    {
        id: 'C17',
        nombre: 'Empatía',
        area: 'General',
        definicion: 'Comprender y compartir los sentimientos de los demás.',
        roles: []
    },
    {
        id: 'C18',
        nombre: 'Pensamiento Conceptual',
        area: 'General',
        definicion: 'Identificar patrones y conexiones entre ideas abstractas.',
        roles: []
    },
    {
        id: 'C19',
        nombre: 'Creatividad',
        area: 'General',
        definicion: 'Generar ideas originales y soluciones innovadoras.',
        roles: []
    },
    {
        id: 'C20',
        nombre: 'Visión Sistémica',
        area: 'General',
        definicion: 'Comprender cómo las partes de un sistema interactúan entre sí.',
        roles: []
    },
    {
        id: 'C21',
        nombre: 'Gestión del Riesgo',
        area: 'Administración',
        definicion: 'Identificar, evaluar y mitigar los riesgos.',
        roles: []
    },
    {
        id: 'C22',
        nombre: 'Perseverancia',
        area: 'General',
        definicion: 'Mantenerse firme y constante en la consecución de un objetivo.',
        roles: []
    },
    {
        id: 'C23',
        nombre: 'Cumplimiento de Normas',
        area: 'General',
        definicion: 'Apegarse a las reglas, políticas y procedimientos establecidos.',
        roles: []
    },
    {
        id: 'C24',
        nombre: 'Toma de Decisiones',
        area: 'General',
        definicion: 'Elegir la mejor opción entre varias alternativas.',
        roles: []
    },
    {
        id: 'C25',
        nombre: 'Capacidad de Evaluación',
        area: 'General',
        definicion: 'Valorar y juzgar la calidad, importancia o valor de algo.',
        roles: []
    },
    {
        id: 'C26',
        nombre: 'Negociación',
        area: 'General',
        definicion: 'Llegar a acuerdos beneficiosos en situaciones de conflicto.',
        roles: []
    },
    {
        id: 'C27',
        nombre: 'Orientación al Servicio',
        area: 'General',
        definicion: 'Deseo de ayudar y satisfacer las necesidades de los demás.',
        roles: []
    },
    {
        id: 'C28',
        nombre: 'Gestión de la Información',
        area: 'General',
        definicion: 'Recopilar, organizar, almacenar y recuperar información eficientemente.',
        roles: []
    },
    {
        id: 'C29',
        nombre: 'Capacidad Numérica',
        area: 'General',
        definicion: 'Habilidad para trabajar con números y realizar cálculos.',
        roles: []
    },
    {
        id: 'C30',
        nombre: 'Orientación a la Calidad',
        area: 'General',
        definicion: 'Esfuerzo por alcanzar altos estándares de excelencia.',
        roles: []
    },
    {
        id: 'C31',
        nombre: 'Planificación y Organización',
        area: 'Administración',
        definicion: 'Establecer metas y organizar los recursos para alcanzarlas.',
        roles: []
    },
    {
        id: 'C32',
        nombre: 'Organización del Trabajo',
        area: 'Administración',
        definicion: 'Estructurar y ordenar las tareas para lograr la eficiencia.',
        roles: []
    },
    {
        id: 'C33',
        nombre: 'Escucha Activa',
        area: 'General',
        definicion: 'Prestar atención plena a lo que se dice, tanto verbal como no verbalmente.',
        roles: []
    },
    {
        id: 'C34',
        nombre: 'Precisión',
        area: 'General',
        definicion: 'Realizar el trabajo con exactitud y sin errores.',
        roles: []
    },
    {
        id: 'C35',
        nombre: 'Responsabilidad',
        area: 'General',
        definicion: 'Asumir las consecuencias de las propias decisiones y acciones.',
        roles: []
    },
    {
        id: 'C36',
        nombre: 'Confiabilidad',
        area: 'General',
        definicion: 'Ser digno de confianza y cumplir con los compromisos.',
        roles: []
    },
    {
        id: 'C37',
        nombre: 'Visión Estratégica',
        area: 'Dirección / Gerencia',
        definicion: 'Capacidad de comprender la dirección a largo plazo de la organización.',
        roles: []
    },
    {
        id: 'C38',
        nombre: 'Dirección por Resultados',
        area: 'Dirección / Gerencia',
        definicion: 'Enfocar los esfuerzos hacia el logro de los objetivos y metas.',
        roles: []
    },
    {
        id: 'C39',
        nombre: 'Gestión del Cambio',
        area: 'Dirección / Gerencia',
        definicion: 'Planificar, implementar y gestionar la transición hacia nuevos escenarios.',
        roles: []
    },
    {
        id: 'C40',
        nombre: 'Orientación al Logro',
        area: 'General',
        definicion: 'Fijar y alcanzar metas desafiantes.',
        roles: []
    },
    {
        id: 'C41',
        nombre: 'Administración de la Confianza',
        area: 'General',
        definicion: 'Construir y mantener relaciones basadas en la confianza mutua.',
        roles: []
    },
    {
        id: 'C42',
        nombre: 'Asertividad',
        area: 'General',
        definicion: 'Expresar opiniones y necesidades de forma clara y respetuosa.',
        roles: []
    },
    {
        id: 'C43',
        nombre: 'Mejoramiento Continuo',
        area: 'General',
        definicion: 'Buscar constantemente la optimización de procesos y resultados.',
        roles: []
    },
    {
        id: 'C44',
        nombre: 'Orientación al Cliente',
        area: 'Servicio al Cliente',
        definicion: 'Enfocar los esfuerzos en satisfacer las necesidades del cliente.',
        roles: []
    },
    {
        id: 'C45',
        nombre: 'Destreza Comunicativa',
        area: 'General',
        definicion: 'Habilidad para expresar ideas de manera efectiva en distintos contextos.',
        roles: []
    },
    {
        id: 'C46',
        nombre: 'Capacidad de Negociación',
        area: 'General',
        definicion: 'Habilidad para llegar a acuerdos mutuamente beneficiosos.',
        roles: []
    },
    {
        id: 'C47',
        nombre: 'Impacto e Influencia',
        area: 'General',
        definicion: 'Capacidad de persuadir y generar un impacto positivo en los demás.',
        roles: []
    },
    {
        id: 'C48',
        nombre: 'Gestión de la Trazabilidad',
        area: 'Logística y Cadena de Suministro',
        definicion: 'Capacidad de seguir el rastro de productos o procesos.',
        roles: []
    },
    {
        id: 'C49',
        nombre: 'Optimización del Tiempo',
        area: 'General',
        definicion: 'Gestionar el tiempo de manera eficiente para maximizar la productividad.',
        roles: []
    },
    {
        id: 'C50',
        nombre: 'Gestión de Posicionamiento',
        area: 'Marketing y Ventas',
        definicion: 'Desarrollar estrategias para posicionar una marca o producto en el mercado.',
        roles: []
    },
    {
        id: 'C51',
        nombre: 'Orientación al Mercado',
        area: 'Marketing y Ventas',
        definicion: 'Comprender las tendencias y necesidades del mercado.',
        roles: []
    },
    {
        id: 'C52',
        nombre: 'Sentido de Oportunidad',
        area: 'General',
        definicion: 'Identificar y aprovechar oportunidades beneficiosas.',
        roles: []
    },
    {
        id: 'C53',
        nombre: 'Gestión del Talento',
        area: 'Recursos Humanos (RR. HH.)',
        definicion: 'Atraer, desarrollar y retener a los empleados con alto potencial.',
        roles: []
    },
    {
        id: 'C54',
        nombre: 'Desarrollo de Personas',
        area: 'Recursos Humanos (RR. HH.)',
        definicion: 'Potenciar el crecimiento profesional y personal de los colaboradores.',
        roles: []
    },
    {
        id: 'C55',
        nombre: 'Gestión de Conflicto',
        area: 'General',
        definicion: 'Manejar y resolver desacuerdos de manera constructiva.',
        roles: []
    },
    {
        id: 'C56',
        nombre: 'Construcción de Relaciones',
        area: 'General',
        definicion: 'Establecer y mantener redes de contacto profesionales.',
        roles: []
    },
    {
        id: 'C57',
        nombre: 'Capacidad de Síntesis',
        area: 'General',
        definicion: 'Resumir información compleja de manera clara y concisa.',
        roles: []
    },
    {
        id: 'C58',
        nombre: 'Objetividad',
        area: 'General',
        definicion: 'Analizar situaciones y tomar decisiones sin sesgos personales.',
        roles: []
    },
    {
        id: 'C59',
        nombre: 'Acatamiento de Valores',
        area: 'General',
        definicion: 'Actuar en consonancia con los principios y valores éticos.',
        roles: []
    },
    {
        id: 'C60',
        nombre: 'Criterio',
        area: 'General',
        definicion: 'Capacidad para juzgar y tomar decisiones ponderadas.',
        roles: []
    },
    {
        id: 'C61',
        nombre: 'Atención al Detalle',
        area: 'General',
        definicion: 'Prestar atención a los pequeños detalles para asegurar la calidad.',
        roles: []
    },
    {
        id: 'C62',
        nombre: 'Autocontrol',
        area: 'General',
        definicion: 'Manejar las propias emociones y comportamientos en situaciones de presión.',
        roles: []
    }
];
const jobProfilesByArea = {
    "Dirección / Gerencia": [
        {
            title: "Director(a) Ejecutivo(a) (CEO)",
            description: "Define la visión estratégica y la dirección de la compañía. Se encarga de la gestión global, la toma de decisiones clave y la representación de la empresa ante los accionistas, el consejo directivo y el público."
        },
        {
            title: "Presidente(a)",
            description: "Se encarga de las operaciones cotidianas de la empresa y la supervisión directa de los líderes de otras áreas. Trabaja estrechamente con el CEO para implementar la estrategia corporativa."
        },
        {
            title: "Vicepresidente(a)",
            description: "Apoya al presidente en la toma de decisiones y supervisa divisiones o regiones específicas. Ayuda a planificar y ejecutar objetivos estratégicos a largo plazo."
        },
        {
            title: "Gerente de división",
            description: "Lidera una división o unidad de negocio específica. Se encarga de los objetivos y el desempeño de su división, coordinando a los gerentes de nivel inferior."
        },
        {
            title: "Gerente de proyectos estratégicos",
            description: "Se encarga de planificar, ejecutar y supervisar proyectos complejos que son cruciales para el crecimiento de la organización."
        },
        {
            title: "Jefe(a) de operaciones regionales",
            description: "Supervisa las operaciones de la empresa en una región geográfica específica. Asegura que las políticas y los procedimientos corporativos se apliquen de manera uniforme."
        }
    ],
    "Operaciones / Producción": [
        {
            title: "Director(a) de operaciones (COO)",
            description: "Supervisa y dirige todas las operaciones diarias de la empresa. Optimiza los procesos para maximizar la eficiencia y la productividad."
        },
        {
            title: "Director(a) de planta",
            description: "Gestiona todas las actividades en una o varias plantas de producción. Es responsable del rendimiento, la calidad, la seguridad y los costos."
        },
        {
            title: "Gerente de producción",
            description: "Supervisa el equipo de producción, planifica los cronogramas de fabricación y asegura que la producción cumpla con los estándares de calidad y plazos."
        },
        {
            title: "Gerente de calidad",
            description: "Es responsable de establecer y mantener los estándares de calidad en todos los productos y procesos. Supervisa las inspecciones y los procedimientos de control de calidad."
        }
    ],
    "Marketing y Ventas": [
        {
            title: "Director(a) de Marketing (CMO)",
            description: "Lidera las estrategias de marketing de la empresa, supervisando la publicidad, la marca y la generación de demanda. Analiza el mercado y la competencia para identificar oportunidades."
        },
        {
            title: "Director(a) Comercial",
            description: "Gestiona todas las actividades de ventas y desarrolla la estrategia comercial. Se encarga de establecer las cuotas de ventas, liderar el equipo comercial y expandir los mercados."
        },
        {
            title: "Gerente de ventas",
            description: "Lidera y motiva al equipo de ventas, gestiona las operaciones diarias del departamento y se encarga de que se cumplan las metas de ventas."
        },
        {
            title: "Gerente de marketing digital",
            description: "Supervisa todas las actividades de marketing en línea, como SEO, publicidad en redes sociales y campañas por correo electrónico."
        },
        {
            title: "Gerente de producto",
            description: "Se encarga de la estrategia de un producto o línea de productos, desde el desarrollo hasta el lanzamiento y el crecimiento en el mercado."
        },
        {
            title: "Gerente de marca",
            description: "Mantiene y desarrolla la imagen de la marca de la empresa. Se encarga de la coherencia en todos los canales de comunicación."
        },
        {
            title: "Gerente de marketing de contenidos",
            description: "Desarrolla y gestiona la estrategia de contenidos para atraer y retener a la audiencia."
        },
        {
            title: "Gerente de relaciones públicas",
            description: "Gestiona la imagen pública de la empresa, las relaciones con los medios y la comunicación externa."
        }
    ],
    "Finanzas y Contabilidad": [
        {
            title: "Director(a) Financiero(a) (CFO)",
            description: "Supervisa la gestión financiera, la contabilidad y el manejo de riesgos. Se encarga de la planificación financiera a largo plazo y de las decisiones de inversión."
        },
        {
            title: "Tesorero(a)",
            description: "Gestiona el flujo de efectivo, la financiación y las inversiones de la empresa. Se encarga de las relaciones con bancos y otras instituciones financieras."
        },
        {
            title: "Gerente de contabilidad",
            description: "Lidera el equipo de contabilidad y es responsable de los registros financieros, la elaboración de presupuestos y los estados financieros. Asegura que se cumplan las normativas contables."
        },
        {
            title: "Gerente de finanzas",
            description: "Analiza el rendimiento financiero, realiza proyecciones y asesora a la alta dirección en la toma de decisiones. Gestiona el riesgo financiero."
        }
    ],
    "Recursos Humanos (RR. HH.)": [
        {
            title: "Director(a) de Recursos Humanos (CHRO)",
            description: "Define la estrategia de RR. HH. de la empresa y la alinea con los objetivos de negocio. Supervisa la cultura, el talento y la gestión de personal a nivel corporativo."
        },
        {
            title: "Gerente de adquisición de talento",
            description: "Lidera la estrategia de reclutamiento para atraer a los mejores candidatos. Supervisa el proceso de selección y contratación."
        },
        {
            title: "Gerente de compensación y beneficios",
            description: "Administra la estructura salarial, los bonos y los beneficios de los empleados. Se encarga de que las compensaciones sean competitivas y justas."
        },
        {
            title: "Gerente de desarrollo organizacional",
            description: "Desarrolla programas de formación, gestión del desempeño y planes de sucesión. Se encarga de fomentar el crecimiento profesional del personal."
        }
    ],
    "Tecnología de la Información (TI)": [
        {
            title: "Director(a) de Tecnología (CTO)",
            description: "Define la visión tecnológica de la empresa y supervisa el desarrollo de productos y servicios tecnológicos."
        },
        {
            title: "Director(a) de Información (CIO)",
            description: "Gestiona la infraestructura tecnológica y los sistemas de información de la compañía para optimizar la eficiencia y apoyar los objetivos del negocio."
        },
        {
            title: "Gerente de TI",
            description: "Dirige el departamento de TI, supervisando las operaciones diarias, el soporte técnico y el desarrollo de sistemas."
        },
        {
            title: "Gerente de seguridad de la información",
            description: "Es responsable de proteger los datos y los sistemas de la empresa contra amenazas de seguridad."
        }
    ],
    "Logística y Cadena de Suministro": [
        {
            title: "Director(a) de Logística",
            description: "Supervisa toda la cadena de suministro, desde la adquisición de materias primas hasta la entrega del producto final. Se encarga de la planificación y la eficiencia."
        },
        {
            title: "Gerente de logística",
            description: "Se encarga de la gestión de inventario, el almacenamiento y la distribución de productos. Optimiza los procesos para reducir costos y mejorar el servicio."
        },
        {
            title: "Gerente de adquisiciones",
            description: "Supervisa las compras de la empresa, negocia con proveedores y asegura que los materiales se adquieran de manera eficiente y al mejor costo."
        },
        {
            title: "Gerente de almacén",
            description: "Gestiona las operaciones de uno o varios almacenes. Supervisa al personal, el inventario y el cumplimiento de los pedidos."
        }
    ],
    "Servicio al Cliente": [
        {
            title: "Gerente de servicio al cliente",
            description: "Dirige el equipo de soporte al cliente, desarrollando políticas para mejorar la experiencia del cliente y resolviendo problemas complejos."
        },
        {
            title: "Gerente de experiencia del cliente (CX)",
            description: "Se enfoca en mejorar la interacción del cliente en todos los puntos de contacto con la empresa. Se encarga de las métricas de satisfacción y retención."
        }
    ],
    "General": [
        {
            title: "Gerente de sostenibilidad",
            description: "Se encarga de las iniciativas de responsabilidad social y ambiental, asegurando que la empresa cumpla con los estándares de sostenibilidad."
        },
        {
            title: "Gerente de cumplimiento normativo",
            description: "Asegura que la empresa cumpla con las leyes y regulaciones de su industria y ubicación."
        }
    ]
};
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
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Administración Deportiva',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Administración de Empresas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Administración Financiera',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Administración Hotelera',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Administración Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Alta Dirección y Gerencia Organizacional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Comercio Exterior',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Licenciatura en Comercio Interno',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Licenciatura en Dirección y Gerencia de Proyectos',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Logística',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Licenciatura en Marketing',
        area: 'Marketing y Ventas',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Marketing Digital',
        area: 'Marketing y Ventas',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Mercadotecnia',
        area: 'Marketing y Ventas',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Negocios Internacionales',
        area: 'Marketing y Ventas',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Publicidad',
        area: 'Marketing y Ventas',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Recursos Humanos',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Antropología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Bibliotecología y Documentación',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias del Deporte',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias de la Comunicación',
        area: 'Marketing y Ventas',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Ciencias Políticas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Ciencias Sociales',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Composición Coreografía y Danza',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Autoaprendizaje',
            'Adaptabilidad',
            'Empatía',
            'Comunicación Escrita',
            'Innovación',
            'Trabajo en Equipo',
            'Perseverancia',
            'Visión Sistémica',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Comunicación Social',
        area: 'Marketing y Ventas',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Comunicaciones',
        area: 'Marketing y Ventas',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Consejería Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Licenciatura en Dirección de Cine',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Autoaprendizaje',
            'Adaptabilidad',
            'Empatía',
            'Comunicación Escrita',
            'Innovación',
            'Trabajo en Equipo',
            'Perseverancia',
            'Visión Sistémica',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ética',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Filosofía y Teología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Filosofía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Historia del Arte',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Historia',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Humanidades',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Lenguaje y Literatura',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Lingüística',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Literatura Latinoamericana',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Medio Ambiente',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Música',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Periodismo',
        area: 'Marketing y Ventas',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Relaciones Internacionales',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Relaciones Públicas',
        area: 'Marketing y Ventas',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Licenciatura en Riesgos Laborales',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Talento Humano',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Teología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Teología Católica',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Teología Cristiana',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Trabajo Social',
        area: 'Servicio al Cliente',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Licenciatura en Turismo y Hotelería',
        area: 'Servicio al Cliente',
        competencies: [
            'Creatividad',
            'Innovación',
            'Trabajo en Equipo',
            'Adaptabilidad',
            'Comunicación Escrita',
            'Empatía',
            'Autoaprendizaje',
            'Gestión de la Información',
            'Orientación al Servicio',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Licenciatura en Agricultura',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Agronomía',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Agropecuaria',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Astronomía',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Biofísica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Calidad Total',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Cumplimiento de Normas',
            'Orientación a la Calidad',
            'Organización del Trabajo',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Trabajo en Equipo',
            'Integridad',
            'Planificación y Organización'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias Ambientales',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias Biológicas',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias de la Computación',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Ciencias de la Tierra',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias Naturales',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias Químicas',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Control de Calidad',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Cumplimiento de Normas',
            'Orientación a la Calidad',
            'Organización del Trabajo',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Trabajo en Equipo',
            'Integridad',
            'Planificación y Organización'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Desastres Naturales',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ecología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Electricidad',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Energía Renovable',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Física',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Física Teórica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Geofísica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Geología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Geografía',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Geotecnia',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Matemáticas',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Matemática Educativa',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Metafísica',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Ciencias Forenses',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Criminalística',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Criminología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Estudios Legales',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Ciencias Jurídicas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Administrativo y Público',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Ambiental',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Constitucional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Canónico',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales y Derecho Mercantil',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis Derecho Penal',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales en Derechos Humanos',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Internacional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Laboral',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Estudios Legales con énfasis en Derecho Tributario',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Arquitectura',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Trabajo en Equipo',
            'Adaptabilidad',
            'Comunicación Escrita',
            'Empatía',
            'Autoaprendizaje',
            'Gestión de la Información',
            'Orientación al Servicio',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Diseño de Interiores',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Trabajo en Equipo',
            'Adaptabilidad',
            'Comunicación Escrita',
            'Empatía',
            'Autoaprendizaje',
            'Gestión de la Información',
            'Orientación al Servicio',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Urbanismo y Ambiente',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Trabajo en Equipo',
            'Adaptabilidad',
            'Comunicación Escrita',
            'Empatía',
            'Autoaprendizaje',
            'Gestión de la Información',
            'Orientación al Servicio',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Auditoria',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Auditoría en Contabilidad',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Auditoria Forense',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Ciencias Económicas',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Contabilidad',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Contabilidad Internacional',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Contratación Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Cumplimiento de Normas',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Capacidad de Evaluación',
            'Negociación',
            'Pensamiento Estratégico',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Contaduría Pública',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Estadística',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Autoaprendizaje',
            'Planificación y Organización',
            'Innovación',
            'Resolución de Problemas',
            'Integridad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Finanzas',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Licenciatura en Administración Educativa',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Andragogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Calidad Educativa',
        area: 'Operaciones / Producción',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ciencias de la Educación',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Docencia',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Educación Artística',
        area: 'Operaciones / Producción',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Educación Especial',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Educación Física',
        area: 'Operaciones / Producción',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Educación Primaria',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Educación Superior',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Investigación Científica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Investigación Educativa',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Ingles',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Pedagogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Tecnología Educativa',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Informática',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Inteligencia Artificial',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Ingeniería Agro-ecológica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Agro-industrial',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Ambiental',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Automotriz',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Civil',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Científica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Ingeniería en Alimentos',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería en Minas',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería en Petróleos',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería de Sistemas',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Ingeniería Eléctrica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Electrónica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería en Telecomunicaciones',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Ingeniería Forestal',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Hidráulica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Industrial',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Química',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Sanitaria',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Mecánica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Ingeniería Textil',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Recursos Hídricos',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Visión Sistémica',
            'Resolución de Problemas',
            'Innovación',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Tecnología de la Información y la Comunicación',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Licenciatura en Administración Hospitalaria',
        area: 'Dirección / Gerencia',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Ciencias de la Salud',
        area: 'Operaciones / Producción',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Enfermería',
        area: 'Operaciones / Producción',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Fisioterapia',
        area: 'Operaciones / Producción',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Gerontología',
        area: 'Servicio al Cliente',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Licenciatura en Logoterapia',
        area: 'Servicio al Cliente',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Licenciatura en Microbiología',
        area: 'Operaciones / Producción',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Naturopatía',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Neuropsicología Clínica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Neuropsicología Infantil',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Nutrición',
        area: 'Operaciones / Producción',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Nutrición Animal',
        area: 'Operaciones / Producción',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Nutrición y Bioquímica Deportiva',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Organización del Trabajo',
            'Innovación',
            'Pensamiento Estratégico',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión de Recursos',
            'Orientación a la Calidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Parapsicología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Podología',
        area: 'Operaciones / Producción',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Psicoanálisis',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Empatía',
            'Escucha Activa',
            'Integridad',
            'Autoaprendizaje',
            'Comunicación Escrita',
            'Pensamiento Conceptual',
            'Resolución de Problemas',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Psicología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Psicología Clínica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Psicopedagogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Autoaprendizaje',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Innovación',
            'Trabajo en Equipo',
            'Empatía',
            'Autoaprendizaje',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Rehabilitación Deportiva',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Reproducción Animal',
        area: 'Operaciones / Producción',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Licenciatura en Salud Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Licenciatura en Sexología y Terapia de Parejas',
        area: 'Servicio al Cliente',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Empatía',
            'Escucha Activa',
            'Integridad',
            'Autoaprendizaje',
            'Comunicación Escrita',
            'Pensamiento Conceptual',
            'Resolución de Problemas',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Licenciatura en Sociología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Autoaprendizaje',
            'Empatía',
            'Pensamiento Conceptual',
            'Adaptabilidad',
            'Integridad',
            'Creatividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Salud y Seguridad Ocupacional',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Empatía',
            'Integridad',
            'Capacidad de Investigación',
            'Comunicación Escrita',
            'Adaptabilidad',
            'Trabajo en Equipo',
            'Orientación al Servicio',
            'Resolución de Problemas',
            'Autoaprendizaje',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Licenciatura en Terapia Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Pensamiento Estratégico',
            'Perspicacia Financiera',
            'Innovación',
            'Resolución de Problemas',
            'Adaptabilidad',
            'Autoaprendizaje',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Trabajo en Equipo',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Maestría en Administración Bancaria',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Administración de empresas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Administración Deportiva',
        area: 'Dirección / Gerencia',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Administración de la Confianza',
            'Asertividad',
            'Mejoramiento Continuo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Administración Hotelera',
        area: 'Dirección / Gerencia',
        competencies: [
            'Orientación al Servicio',
            'Orientación al Cliente',
            'Gestión de Recursos',
            'Gestión de Información',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Responsabilidad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Administración Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Alta Dirección y Gerencia Organizacional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Administración Financiera',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Comercio Exterior',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Maestría en Comercio Interno',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Maestría en Dirección y Gerencia de Proyectos',
        area: 'Dirección / Gerencia',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Gestión del Cambio',
            'Capacidad de Evaluación',
            'Capacidad de Negociación',
            'Toma de Decisiones',
            'Resolución de Problemas',
            'Visión Sistémica',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Logística',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Gestión de Recursos',
            'Gestión de la Trazabilidad',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Optimización del Tiempo',
            'Trabajo en Equipo',
            'Organización del Trabajo',
            'Responsabilidad'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Maestría en Marketing',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Sentido de Oportunidad',
            'Innovación'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Marketing Digital',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Sentido de Oportunidad',
            'Innovación'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Mercadotecnia',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Sentido de Oportunidad',
            'Innovación'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Negocios Internacionales',
        area: 'Marketing y Ventas',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Publicidad',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Sentido de Oportunidad',
            'Innovación'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Recursos Humanos',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Gestión del Talento',
            'Desarrollo de Personas',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Liderazgo Transformacional',
            'Construcción de Relaciones',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Asertividad',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Antropología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Archivística y Gestión de Documentos',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Bibliotecología y documentación',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias del Deporte',
        area: 'Operaciones / Producción',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Administración de la Confianza',
            'Asertividad',
            'Mejoramiento Continuo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias Sociales',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Ciencias de la Comunicación',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Orientación al Cliente',
            'Trabajo en Equipo',
            'Asertividad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Ciencias Políticas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Consejería Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Maestría en Composición Coreográfica y Danza',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Comunicación Social',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Orientación al Cliente',
            'Trabajo en Equipo',
            'Asertividad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Comunicaciones',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Orientación al Cliente',
            'Trabajo en Equipo',
            'Asertividad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Dirección de Cine',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ética',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Filosofía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Filosofía y teología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Historia',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Historia del Arte',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Humanidades',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Lenguaje y literatura',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Lingüística',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Literatura Latinoamericana',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Medio Ambiente',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Música',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Periodismo',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Orientación al Cliente',
            'Trabajo en Equipo',
            'Asertividad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Relaciones Internacionales',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Relaciones Públicas',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Orientación al Cliente',
            'Trabajo en Equipo',
            'Asertividad'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Maestría en Riesgos Laborales',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Seguridad Industrial',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Talento Humano',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Gestión del Talento',
            'Desarrollo de Personas',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Liderazgo Transformacional',
            'Construcción de Relaciones',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Asertividad',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Teología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Teología Católica',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Teología cristiana',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Trabajo Social',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Maestría en Hotelería y Turismo',
        area: 'Servicio al Cliente',
        competencies: [
            'Orientación al Servicio',
            'Orientación al Cliente',
            'Gestión de Recursos',
            'Gestión de Información',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Responsabilidad'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Maestría en Agricultura',
        area: 'Operaciones / Producción',
        competencies: [
            'Gestión de Recursos',
            'Visión Sistémica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Resolución de Problemas',
            'Responsabilidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Agronomía',
        area: 'Operaciones / Producción',
        competencies: [
            'Gestión de Recursos',
            'Visión Sistémica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Resolución de Problemas',
            'Responsabilidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Agropecuaria',
        area: 'Operaciones / Producción',
        competencies: [
            'Gestión de Recursos',
            'Visión Sistémica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Resolución de Problemas',
            'Responsabilidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Astronomía',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Biofísica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Calidad Total',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias Ambientales',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias Biológicas',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias de la Computación',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Resolución de Problemas',
            'Innovación',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Información',
            'Pensamiento Estratégico',
            'Trabajo en Equipo',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Ciencias de la Tierra',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias Naturales',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias Químicas',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Control de Calidad',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Desastres Naturales',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ecología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Electricidad',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Energía Renovable',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Física',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Física Teórica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Geofísica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Geología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Geografía',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Geotecnia',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Matemáticas',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Resolución de Problemas',
            'Innovación',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Información',
            'Pensamiento Estratégico',
            'Trabajo en Equipo',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Matemática Educativa',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Metafísica',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Ciencias Forenses',
        area: 'Operaciones / Producción',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Criminalística',
        area: 'Operaciones / Producción',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Criminología',
        area: 'Operaciones / Producción',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Estudios Legales',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Ciencias Jurídicas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Administrativo y Público',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en E Estudios Legales con énfasis en Derecho Ambiental',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis en Derecho Constitucional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Est. Legales enf. Derecho Canónico',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Derecho en Salud',
        area: 'Operaciones / Producción',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Derecho Laboral',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Derecho Penal',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Derecho Internacional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Derechos Humanos',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estudios Legales con énfasis Derecho Tributario',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Arquitectura',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Innovación',
            'Atención al Detalle',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Diseño de Interiores',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Innovación',
            'Atención al Detalle',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Urbanismo y Ambiente',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Innovación',
            'Atención al Detalle',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Auditoría',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Contabilidad',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Contabilidad internacional',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Auditoría Forense enf. Contabilidad',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Auditoría en Contabilidad',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Ciencias Económicas',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Contaduría pública',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Contratación pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Estadística',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Resolución de Problemas',
            'Innovación',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Información',
            'Pensamiento Estratégico',
            'Trabajo en Equipo',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Finanzas',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Orientación a la Calidad',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Confiabilidad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Maestría en Administración Educativa',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Andragogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Calidad Educativa',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ciencias de la Educación',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Docencia',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Educación Artística',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Educación Especial',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Educación Física',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Educación Primaria',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Educación Superior',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Investigación Científica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Investigación Educativa',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Ingles',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Pedagogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Tecnología Educativa',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Informática',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Resolución de Problemas',
            'Innovación',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Información',
            'Pensamiento Estratégico',
            'Trabajo en Equipo',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Inteligencia Artificial',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Ingeniería Agro-ecológica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Agro-industrial',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Ambiental',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Automotriz',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Civil',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Científica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Ingeniería en Alimentos',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería en Minas',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería en Petróleos',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería de Sistemas',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Ingeniería Eléctrica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Electrónica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería en Telecomunicaciones',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Orientación al Cliente',
            'Trabajo en Equipo',
            'Asertividad'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Ingeniería Forestal',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Hidráulica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Industrial',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Química',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Sanitaria',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Mecánica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Ingeniería Textil',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Recursos Hídricos',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Tecnología de la Información y la Comunicación',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Orientación al Cliente',
            'Trabajo en Equipo',
            'Asertividad'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Maestría en Administración Hospitalaria',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Ciencias de la Salud',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Enfermería',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Fisioterapia',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Gerontología',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Maestría en Logoterapia',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Maestría en Microbiología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Naturopatía',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Neuropsicología Clínica',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Neuropsicología Infantil',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Nutrición',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Nutrición Animal',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Nutrición y Bioquímica Deportiva',
        area: 'Operaciones / Producción',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Administración de la Confianza',
            'Asertividad',
            'Mejoramiento Continuo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Parapsicología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Podología',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Psicoanálisis',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Psicología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Psicología Clínica',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Psicopedagogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Innovación',
            'Autoaprendizaje',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Rehabilitación Deportiva',
        area: 'Operaciones / Producción',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Administración de la Confianza',
            'Asertividad',
            'Mejoramiento Continuo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Reproducción Animal',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Gestión de Información',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Maestría en Salud Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Maestría en Sexología y Terapia de Parejas',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Maestría en Sociología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Salud y Seguridad Ocupacional',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Maestría en Terapia Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Destreza Comunicativa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Orientación al Logro'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Doctorado en Administración Bancaria',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Administración Deportiva',
        area: 'Dirección / Gerencia',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Mejoramiento Continuo',
            'Capacidad de Evaluación',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Administración de Empresas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Administración Educativa',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Alta Dirección Empresarial',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Administración y Dirección de Empresas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Administración Financiera',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Administración Hospitalaria',
        area: 'Dirección / Gerencia',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Administración Hotelera',
        area: 'Dirección / Gerencia',
        competencies: [
            'Orientación al Servicio',
            'Orientación al Cliente',
            'Gestión de Recursos',
            'Gestión de Información',
            'Planificación y Organización',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Administración Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Alta Dirección y Gerencia Organizacional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Comercio Exterior',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Destreza Comunicativa',
            'Toma de Decisiones',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Doctorado en Comercio Interno',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Doctorado en Dirección y Gerencia de Proyectos',
        area: 'Dirección / Gerencia',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Gestión del Cambio',
            'Capacidad de Evaluación',
            'Capacidad de Negociación',
            'Toma de Decisiones',
            'Resolución de Problemas',
            'Visión Sistémica',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Logística',
        area: 'Logística y Cadena de Suministro',
        competencies: [
            'Gestión de Recursos',
            'Gestión de la Trazabilidad',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Optimización del Tiempo',
            'Trabajo en Equipo',
            'Toma de Decisiones',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Logística y Cadena de Suministro']
    },
    {
        key: 'Doctorado en Marketing',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Capacidad de Análisis',
            'Innovación',
            'Sentido de Oportunidad',
            'Visión Estratégica'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Marketing Digital',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Capacidad de Análisis',
            'Innovación',
            'Sentido de Oportunidad',
            'Visión Estratégica'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Mercadotecnia',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Capacidad de Análisis',
            'Innovación',
            'Sentido de Oportunidad',
            'Visión Estratégica'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Negocios Internacionales',
        area: 'Marketing y Ventas',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Destreza Comunicativa',
            'Toma de Decisiones',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Publicidad',
        area: 'Marketing y Ventas',
        competencies: [
            'Gestión de Posicionamiento',
            'Orientación al Mercado',
            'Creatividad',
            'Pensamiento Conceptual',
            'Impacto e Influencia',
            'Capacidad de Negociación',
            'Capacidad de Análisis',
            'Innovación',
            'Sentido de Oportunidad',
            'Visión Estratégica'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Recursos Humanos',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Gestión del Talento',
            'Desarrollo de Personas',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Liderazgo Transformacional',
            'Construcción de Relaciones',
            'Capacidad de Evaluación',
            'Destreza Comunicativa',
            'Visión Sistémica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Antropología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Archivística y Gestión de Documentos',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias del Deporte',
        area: 'Operaciones / Producción',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Mejoramiento Continuo',
            'Capacidad de Evaluación',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias Sociales',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Ciencias de la Comunicación',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Capacidad de Análisis',
            'Orientación al Cliente',
            'Toma de Decisiones'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Ciencias Políticas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Consejería Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Doctorado en Composición Coreográfica y Danza',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Capacidad de Análisis'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Comunicación Social',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Capacidad de Análisis',
            'Orientación al Cliente',
            'Toma de Decisiones'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Comunicaciones',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Capacidad de Análisis',
            'Orientación al Cliente',
            'Toma de Decisiones'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Dirección de Cine',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Capacidad de Análisis'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ética',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Filosofía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Filosofía y Teología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Historia',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Historia del Arte',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Humanidades',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Lenguaje y literatura',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Lingüística',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Literatura Latinoamericana',
        area: 'Operaciones / Producción',
        competencies: [
            'Comunicación Escrita',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Objetividad',
            'Autoaprendizaje',
            'Criterio',
            'Visión Sistémica',
            'Atención al Detalle'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Medio Ambiente',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Música',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Capacidad de Análisis'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Periodismo',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Capacidad de Análisis',
            'Orientación al Cliente',
            'Toma de Decisiones'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Relaciones Internacionales',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Destreza Comunicativa',
            'Toma de Decisiones',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Relaciones publicas',
        area: 'Marketing y Ventas',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Capacidad de Análisis',
            'Orientación al Cliente',
            'Toma de Decisiones'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Doctorado en Riesgos laborales',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Seguridad Industrial',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Talento Humano',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Gestión del Talento',
            'Desarrollo de Personas',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Liderazgo Transformacional',
            'Construcción de Relaciones',
            'Capacidad de Evaluación',
            'Destreza Comunicativa',
            'Visión Sistémica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Teología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Teologia Catolica',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Teología Cristiana',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Trabajo Social',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Doctorado en Hotelería y Turismo',
        area: 'Servicio al Cliente',
        competencies: [
            'Orientación al Servicio',
            'Orientación al Cliente',
            'Gestión de Recursos',
            'Gestión de Información',
            'Planificación y Organización',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Doctorado en Agricultura',
        area: 'Operaciones / Producción',
        competencies: [
            'Gestión de Recursos',
            'Visión Sistémica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Resolución de Problemas',
            'Responsabilidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Agronomía',
        area: 'Operaciones / Producción',
        competencies: [
            'Gestión de Recursos',
            'Visión Sistémica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Resolución de Problemas',
            'Responsabilidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Agropecuaria',
        area: 'Operaciones / Producción',
        competencies: [
            'Gestión de Recursos',
            'Visión Sistémica',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Orientación a la Calidad',
            'Planificación y Organización',
            'Gestión del Riesgo',
            'Resolución de Problemas',
            'Responsabilidad',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Astronomía',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Biofísica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Calidad Total',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias Ambientales',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias Biológicas',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias de la Computación',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Resolución de Problemas',
            'Innovación',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Información',
            'Pensamiento Estratégico',
            'Trabajo en Equipo',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Ciencias de la Tierra y Oceánicas',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias Naturales',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias Químicas',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Control de Calidad',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Desastres Naturales',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ecología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Energías Renovables',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Física',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Física Teórica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Geofísica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Geología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Geografía',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Geotecnia',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Matemática Educativa',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Metafísica',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Ciencias Forenses',
        area: 'Operaciones / Producción',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Criminalística',
        area: 'Operaciones / Producción',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Criminología',
        area: 'Operaciones / Producción',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Estudios Legales',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Ciencias Jurídicas',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho y Administración Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Canónico',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales y Derecho Mercantil',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Derecho Penal',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Derecho Administrativo',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derechos Humanos',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Ambiental',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis Derecho Constitucional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Internacional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Destreza Comunicativa',
            'Toma de Decisiones',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Laboral',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Estudios Legales con énfasis en Derecho Tributario',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Arquitectura',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Innovación',
            'Atención al Detalle',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Diseño de Interiores',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Innovación',
            'Atención al Detalle',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Urbanismo y Ambiente',
        area: 'Operaciones / Producción',
        competencies: [
            'Creatividad',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Resolución de Problemas',
            'Trabajo en Equipo',
            'Innovación',
            'Atención al Detalle',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Auditoria',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Auditoria Forense',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Auditoria en Contabilidad',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Ciencias Económicas',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Contaduría Pública',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Contabilidad',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Contabilidad internacional',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Contratación Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Estadística',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Capacidad de Síntesis',
            'Objetividad',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Autoaprendizaje',
            'Responsabilidad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Finanzas',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Doctorado en Andragogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Calidad Educativa',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ciencias de la Educación',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Docencia',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Educación Artística',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Educación Especial',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Educación Física',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Educación Primaria',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Educación Superior',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Investigación Científica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Investigación Educativa',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Ingles',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Pedagogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Tecnología Educativa',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Ingeniería Agro-ecológica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Agro-industrial',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Ambiental',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Automotriz',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Informática',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Resolución de Problemas',
            'Innovación',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Información',
            'Pensamiento Estratégico',
            'Trabajo en Equipo',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Inteligencia Artificial',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Creatividad',
            'Innovación',
            'Pensamiento Conceptual',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Gestión de Recursos',
            'Impacto e Influencia',
            'Asertividad',
            'Orientación a la Calidad',
            'Capacidad de Análisis'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Ingeniería Científica',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Ingeniería Civil',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Eléctrica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Electrónica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Forestal',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Hidráulica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Industrial',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Química',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Sanitaria',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Textil',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería en Alimentos',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Mecánica',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Minera',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería Petrolera',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Ingeniería en Seguridad Industrial',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Ingeniería en Seguridad Laboral',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Ingeniería de Sistemas',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Análisis',
            'Capacidad de Investigación',
            'Resolución de Problemas',
            'Innovación',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Información',
            'Pensamiento Estratégico',
            'Trabajo en Equipo',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Ingeniería de Telecomunicaciones',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Creatividad',
            'Destreza Comunicativa',
            'Comunicación Escrita',
            'Impacto e Influencia',
            'Gestión de Posicionamiento',
            'Pensamiento Conceptual',
            'Innovación',
            'Capacidad de Análisis',
            'Orientación al Cliente',
            'Toma de Decisiones'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Doctorado en Ciencias de la Salud',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Enfermería',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Fisioterapia',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Gerontología',
        area: 'Servicio al Cliente',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Doctorado en Logoterapia',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Doctorado en Microbiología',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Naturopatía',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Neuropsicología Clínica',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Neuropsicología Infantil',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Nutrición',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Nutrición Animal',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Nutrición y Bioquímica Deportiva',
        area: 'Operaciones / Producción',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Mejoramiento Continuo',
            'Capacidad de Evaluación',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Parapsicología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Podología',
        area: 'Operaciones / Producción',
        competencies: [
            'Orientación al Servicio',
            'Responsabilidad',
            'Precisión',
            'Capacidad de Análisis',
            'Acatamiento de Valores',
            'Autocontrol',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Resolución de Problemas',
            'Orientación a la Calidad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Psicoanálisis',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Psicología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Psicología Clínica',
        area: 'Operaciones / Producción',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Psicopedagogía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Rehabilitación Deportiva',
        area: 'Operaciones / Producción',
        competencies: [
            'Dirección por Resultados',
            'Planificación y Organización',
            'Trabajo en Equipo',
            'Liderazgo Transformacional',
            'Gestión de Recursos',
            'Orientación al Logro',
            'Resolución de Problemas',
            'Mejoramiento Continuo',
            'Capacidad de Evaluación',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Reproducción Animal',
        area: 'Operaciones / Producción',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Doctorado en Salud Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Doctorado en Sexología y Terapia de Parejas',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Doctorado en Sociología',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Pensamiento Conceptual',
            'Comunicación Escrita',
            'Objetividad',
            'Autoaprendizaje',
            'Acatamiento de Valores',
            'Visión Sistémica',
            'Criterio'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Salud y Seguridad Ocupacional',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Análisis',
            'Resolución de Problemas',
            'Planificación y Organización',
            'Orientación a la Calidad',
            'Gestión de Recursos',
            'Innovación',
            'Visión Sistémica',
            'Trabajo en Equipo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Doctorado en Terapia Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Posdoctorado en Administración Pública',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Cambio',
            'Capacidad de Análisis',
            'Toma de Decisiones',
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Dirección por Resultados',
            'Responsabilidad',
            'Integridad'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Posdoctorado en Consejería Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Posdoctorado en Filosofía',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Posdoctorado en Teología Católica',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Posdoctorado en Teología Cristiana',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Acatamiento de Valores',
            'Integridad',
            'Objetividad',
            'Comunicación Escrita',
            'Capacidad de Investigación',
            'Pensamiento Conceptual',
            'Capacidad de Análisis',
            'Autocontrol',
            'Asertividad',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Posdoctorado en Física',
        area: 'Tecnología de la Información (TI)',
        competencies: [
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Capacidad de Síntesis',
            'Precisión',
            'Objetividad',
            'Pensamiento Conceptual',
            'Visión Sistémica',
            'Mejoramiento Continuo',
            'Responsabilidad',
            'Gestión del Riesgo'
        ],
        jobProfiles: jobProfilesByArea['Tecnología de la Información (TI)']
    },
    {
        key: 'Posdoctorado en Estudios Legales con énfasis en Derecho Canónico',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Posdoctorado en Estudios Legales con énfasis en Derechos Humanos',
        area: 'Dirección / Gerencia',
        competencies: [
            'Objetividad',
            'Acatamiento de Valores',
            'Integridad',
            'Capacidad de Investigación',
            'Capacidad de Análisis',
            'Comunicación Escrita',
            'Precisión',
            'Toma de Decisiones',
            'Gestión de Información',
            'Resolución de Problemas'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Posdoctorado en Terapia Familiar',
        area: 'Servicio al Cliente',
        competencies: [
            'Asertividad',
            'Escucha Activa',
            'Administración de la Confianza',
            'Gestión de Conflicto',
            'Capacidad de Evaluación',
            'Capacidad de Investigación',
            'Responsabilidad',
            'Comunicación Escrita',
            'Trabajo en Equipo',
            'Pensamiento Estratégico'
        ],
        jobProfiles: jobProfilesByArea['Servicio al Cliente']
    },
    {
        key: 'Posdoctorado en Alta Dirección Empresarial',
        area: 'Dirección / Gerencia',
        competencies: [
            'Visión Estratégica',
            'Pensamiento Estratégico',
            'Dirección por Resultados',
            'Liderazgo Transformacional',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Gestión del Cambio',
            'Gestión de Recursos',
            'Capacidad de Análisis',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Posdoctorado en Contabilidad y Auditoría de Gestión',
        area: 'Finanzas y Contabilidad',
        competencies: [
            'Perspicacia Financiera',
            'Capacidad Numérica',
            'Capacidad de Análisis',
            'Precisión',
            'Gestión del Riesgo',
            'Planificación y Organización',
            'Toma de Decisiones',
            'Responsabilidad',
            'Visión Estratégica',
            'Objetividad'
        ],
        jobProfiles: jobProfilesByArea['Finanzas y Contabilidad']
    },
    {
        key: 'Posdoctorado en Educación',
        area: 'Recursos Humanos (RR. HH.)',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Recursos Humanos (RR. HH.)']
    },
    {
        key: 'Posdoctorado en Estudios Legales con énfasis Derecho Internacional',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Destreza Comunicativa',
            'Toma de Decisiones',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    },
    {
        key: 'Posdoctorado en Calidad Educativa',
        area: 'Operaciones / Producción',
        competencies: [
            'Capacidad de Investigación',
            'Desarrollo de Personas',
            'Gestión del Talento',
            'Comunicación Escrita',
            'Destreza Comunicativa',
            'Planificación y Organización',
            'Capacidad de Evaluación',
            'Trabajo en Equipo',
            'Innovación',
            'Visión Sistémica'
        ],
        jobProfiles: jobProfilesByArea['Operaciones / Producción']
    },
    {
        key: 'Posdoctorado en Negocios Internacionales',
        area: 'Marketing y Ventas',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Destreza Comunicativa',
            'Toma de Decisiones',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Marketing y Ventas']
    },
    {
        key: 'Posdoctorados en Relaciones Internacionales',
        area: 'Dirección / Gerencia',
        competencies: [
            'Capacidad de Negociación',
            'Impacto e Influencia',
            'Orientación al Mercado',
            'Visión Sistémica',
            'Pensamiento Estratégico',
            'Gestión del Riesgo',
            'Capacidad de Análisis',
            'Destreza Comunicativa',
            'Toma de Decisiones',
            'Trabajo en Equipo'
        ],
        jobProfiles: jobProfilesByArea['Dirección / Gerencia']
    }
];
const LEVELS = [
    "Nivel uno (0-2 años)",
    "Nivel dos (2-5 años)",
    "Nivel tres (5-10 años)",
    "Nivel cuatro (10+ años)"
];
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
Button.displayName = "Button";
;
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/components/ui/form.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
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
const useFormField = ()=>{
    const fieldContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FormFieldContext);
    const itemContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
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
const FormItemContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const FormItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>{
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
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
});
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>{
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
});
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ ...props }, ref)=>{
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
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
});
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>{
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
});
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>{
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
});
FormMessage.displayName = "FormMessage";
;
}}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
Input.displayName = "Input";
;
}}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
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
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
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
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}}),
"[project]/src/app/data:a3bf54 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40d5564b40e58d6e3025f18472e9ad07beb6459c5f":"startAssessmentAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "startAssessmentAction": (()=>startAssessmentAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var startAssessmentAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d5564b40e58d6e3025f18472e9ad07beb6459c5f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "startAssessmentAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtY29tcGV0ZW5jeS1xdWVzdGlvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXBvcnRTdW1tYXJ5IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1yZXBvcnQtc3VtbWFyeSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVZpZGVvVGFzayB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtdmlkZW8tdGFzayc7XG5pbXBvcnQgeyBhbmFseXplSm9iUHJvZmlsZXMgfSBmcm9tICdAL2FpL2Zsb3dzL2FuYWx5emUtam9iLXByb2ZpbGVzJztcbmltcG9ydCB7IENBUkVFUlMgfSBmcm9tICdAL2xpYi9kYXRhJztcbmltcG9ydCB0eXBlIHsgQW5zd2VycywgVXNlckRhdGEsIENvbXBldGVuY3lHcmFkZSwgVmlkZW9UYXNrLCBKb2JQcm9maWxlLCBKb2JQcm9maWxlQW5hbHlzaXMgfSBmcm9tICdAL2xpYi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEFzc2Vzc21lbnRBY3Rpb24oeyBjYXJlZXIsIGxldmVsIH06IHsgY2FyZWVyOiBzdHJpbmc7IGxldmVsOiBzdHJpbmcgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2FyZWVyID0gQ0FSRUVSUy5maW5kKGMgPT4gYy5rZXkgPT09IGNhcmVlcik7XG4gICAgaWYgKCFzZWxlY3RlZENhcmVlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBjYXJlZXIgbm90IGZvdW5kLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBldGVuY2llcyA9IHNlbGVjdGVkQ2FyZWVyLmNvbXBldGVuY2llcztcblxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyh7XG4gICAgICBjYXJlZXIsXG4gICAgICBsZXZlbCxcbiAgICAgIGNvbXBldGVuY2llcyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHF1ZXN0aW9ucyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmVwb3J0QWN0aW9uKHsgdXNlckRhdGEsIGFuc3dlcnMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgc3VtbWFyeSwgZ3JhZGVzIH0gPSBhd2FpdCBnZW5lcmF0ZVJlcG9ydFN1bW1hcnkoe1xuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJEYXRhLm5hbWUsXG4gICAgICAgICAgICBjYXJlZXI6IHVzZXJEYXRhLmNhcmVlcixcbiAgICAgICAgICAgIGxldmVsOiB1c2VyRGF0YS5sZXZlbCxcbiAgICAgICAgICAgIGFuc3dlcnM6IGFuc3dlcnMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN1bW1hcnksIGdyYWRlcyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVmlkZW9UYXNrQWN0aW9uKHsgYW5zd2VycyB9OiB7IGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgZ2VuZXJhdGVWaWRlb1Rhc2soeyBhbnN3ZXJzIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHRhc2tzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZUpvYlByb2ZpbGVzQWN0aW9uKHsgdXNlckRhdGEsIGdyYWRlcywgam9iUHJvZmlsZXMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGdyYWRlczogQ29tcGV0ZW5jeUdyYWRlW10sIGpvYlByb2ZpbGVzOiBKb2JQcm9maWxlW10gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBhbmFseXNlcz86IEpvYlByb2ZpbGVBbmFseXNpc1tdOyBlcnJvcj86IHN0cmluZzsgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuYWx5c2VzID0gYXdhaXQgYW5hbHl6ZUpvYlByb2ZpbGVzKHtcbiAgICAgIGNhcmVlcjogdXNlckRhdGEuY2FyZWVyLFxuICAgICAgbGV2ZWw6IHVzZXJEYXRhLmxldmVsLFxuICAgICAgZ3JhZGVzOiBncmFkZXMsXG4gICAgICBqb2JQcm9maWxlczogam9iUHJvZmlsZXMsXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYW5hbHlzZXMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlTQVNzQiJ9
}}),
"[project]/src/components/onboarding-form.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OnboardingForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$a3bf54__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:a3bf54 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
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
;
const formSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"])({
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])().min(2, {
        message: 'El nombre debe tener al menos 2 caracteres.'
    }),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])().email({
        message: 'Por favor, introduce un correo electrónico válido.'
    }),
    career: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])({
        required_error: 'Por favor, selecciona una carrera.'
    }),
    level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"])({
        required_error: 'Por favor, selecciona tu nivel de experiencia.'
    })
});
function OnboardingForm({ onStartAssessment }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema),
        defaultValues: {
            name: '',
            email: ''
        }
    });
    async function onSubmit(values) {
        setLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$a3bf54__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["startAssessmentAction"])({
            career: values.career,
            level: values.level
        });
        setLoading(false);
        if (result.success && result.questions) {
            const selectedCareer = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAREERS"].find((c)=>c.key === values.career);
            onStartAssessment({
                ...values,
                area: selectedCareer?.area || ''
            }, result.questions);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error al iniciar la evaluación',
                description: result.error || 'Ocurrió un error al generar las preguntas. Por favor, intenta de nuevo.'
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline",
                        children: "Bienvenido/a"
                    }, void 0, false, {
                        fileName: "[project]/src/components/onboarding-form.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                ...form,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: form.handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "name",
                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                            children: "Nombre completo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "email",
                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                            children: "Correo electrónico"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "career",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Carrera / Área"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: field.onChange,
                                                    defaultValue: field.value,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAREERS"].map((career)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: career.key,
                                                                    children: [
                                                                        career.key,
                                                                        " - ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted-foreground",
                                                                            children: career.area
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/onboarding-form.tsx",
                                                                            lineNumber: 111,
                                                                            columnNumber: 42
                                                                        }, void 0)
                                                                    ]
                                                                }, career.key, true, {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                    control: form.control,
                                    name: "level",
                                    render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                    children: "Nivel de Experiencia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/onboarding-form.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                    onValueChange: field.onChange,
                                                    defaultValue: field.value,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEVELS"].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                disabled: loading,
                                className: "w-full sm:w-auto ml-auto bg-accent text-accent-foreground hover:bg-accent/90",
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
}}),
"[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
Textarea.displayName = 'Textarea';
;
}}),
"[project]/src/components/ui/progress.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Progress": (()=>Progress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
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
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/app/data:5c225e [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b91023078ab94a5859ba74d54fc57cfe4c4ccefb":"generateReportAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "generateReportAction": (()=>generateReportAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateReportAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40b91023078ab94a5859ba74d54fc57cfe4c4ccefb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateReportAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtY29tcGV0ZW5jeS1xdWVzdGlvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXBvcnRTdW1tYXJ5IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1yZXBvcnQtc3VtbWFyeSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVZpZGVvVGFzayB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtdmlkZW8tdGFzayc7XG5pbXBvcnQgeyBhbmFseXplSm9iUHJvZmlsZXMgfSBmcm9tICdAL2FpL2Zsb3dzL2FuYWx5emUtam9iLXByb2ZpbGVzJztcbmltcG9ydCB7IENBUkVFUlMgfSBmcm9tICdAL2xpYi9kYXRhJztcbmltcG9ydCB0eXBlIHsgQW5zd2VycywgVXNlckRhdGEsIENvbXBldGVuY3lHcmFkZSwgVmlkZW9UYXNrLCBKb2JQcm9maWxlLCBKb2JQcm9maWxlQW5hbHlzaXMgfSBmcm9tICdAL2xpYi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEFzc2Vzc21lbnRBY3Rpb24oeyBjYXJlZXIsIGxldmVsIH06IHsgY2FyZWVyOiBzdHJpbmc7IGxldmVsOiBzdHJpbmcgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2FyZWVyID0gQ0FSRUVSUy5maW5kKGMgPT4gYy5rZXkgPT09IGNhcmVlcik7XG4gICAgaWYgKCFzZWxlY3RlZENhcmVlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBjYXJlZXIgbm90IGZvdW5kLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBldGVuY2llcyA9IHNlbGVjdGVkQ2FyZWVyLmNvbXBldGVuY2llcztcblxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyh7XG4gICAgICBjYXJlZXIsXG4gICAgICBsZXZlbCxcbiAgICAgIGNvbXBldGVuY2llcyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHF1ZXN0aW9ucyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmVwb3J0QWN0aW9uKHsgdXNlckRhdGEsIGFuc3dlcnMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgc3VtbWFyeSwgZ3JhZGVzIH0gPSBhd2FpdCBnZW5lcmF0ZVJlcG9ydFN1bW1hcnkoe1xuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJEYXRhLm5hbWUsXG4gICAgICAgICAgICBjYXJlZXI6IHVzZXJEYXRhLmNhcmVlcixcbiAgICAgICAgICAgIGxldmVsOiB1c2VyRGF0YS5sZXZlbCxcbiAgICAgICAgICAgIGFuc3dlcnM6IGFuc3dlcnMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN1bW1hcnksIGdyYWRlcyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVmlkZW9UYXNrQWN0aW9uKHsgYW5zd2VycyB9OiB7IGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgZ2VuZXJhdGVWaWRlb1Rhc2soeyBhbnN3ZXJzIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHRhc2tzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZUpvYlByb2ZpbGVzQWN0aW9uKHsgdXNlckRhdGEsIGdyYWRlcywgam9iUHJvZmlsZXMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGdyYWRlczogQ29tcGV0ZW5jeUdyYWRlW10sIGpvYlByb2ZpbGVzOiBKb2JQcm9maWxlW10gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBhbmFseXNlcz86IEpvYlByb2ZpbGVBbmFseXNpc1tdOyBlcnJvcj86IHN0cmluZzsgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuYWx5c2VzID0gYXdhaXQgYW5hbHl6ZUpvYlByb2ZpbGVzKHtcbiAgICAgIGNhcmVlcjogdXNlckRhdGEuY2FyZWVyLFxuICAgICAgbGV2ZWw6IHVzZXJEYXRhLmxldmVsLFxuICAgICAgZ3JhZGVzOiBncmFkZXMsXG4gICAgICBqb2JQcm9maWxlczogam9iUHJvZmlsZXMsXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYW5hbHlzZXMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQStCc0IifQ==
}}),
"[project]/src/components/assessment.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Assessment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$5c225e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:5c225e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
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
function Assessment({ questions, userData, onFinishAssessment }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentAnswer, setCurrentAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$5c225e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateReportAction"])({
            userData,
            answers: finalAnswers
        });
        setLoading(false);
        if (result.success && result.summary && result.grades) {
            onFinishAssessment(finalAnswers, result.summary, result.grades);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error al generar el informe',
                description: result.error || 'Ocurrió un error. Por favor, intenta de nuevo.'
            });
        }
    };
    const progressValue = (currentQuestionIndex + 1) / questions.length * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline",
                        children: currentQuestion.competency
                    }, void 0, false, {
                        fileName: "[project]/src/components/assessment.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-medium",
                        children: currentQuestion.question
                    }, void 0, false, {
                        fileName: "[project]/src/components/assessment.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleNext,
                    disabled: loading || !currentAnswer.trim(),
                    className: "w-full sm:w-auto ml-auto bg-primary text-primary-foreground hover:bg-primary/90",
                    children: [
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
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
}}),
"[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
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
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}}),
"[project]/src/components/ui/chart.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChartContainer": (()=>ChartContainer),
    "ChartLegend": (()=>ChartLegend),
    "ChartLegendContent": (()=>ChartLegendContent),
    "ChartStyle": (()=>ChartStyle),
    "ChartTooltip": (()=>ChartTooltip),
    "ChartTooltipContent": (()=>ChartTooltipContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
    light: "",
    dark: ".dark"
};
const ChartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function useChart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
const ChartContainer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ id, className, children, config, ...props }, ref)=>{
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartContext.Provider, {
        value: {
            config
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-chart": chartId,
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className),
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartStyle, {
                    id: chartId,
                    config: config
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/chart.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
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
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config })=>{
    const colorConfig = Object.entries(config).filter(([, config])=>config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
const ChartTooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"];
const ChartTooltipContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey }, ref)=>{
    const { config } = useChart();
    const tooltipLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (hideLabel || !payload?.length) {
            return null;
        }
        const [item] = payload;
        const key = `${labelKey || item.dataKey || item.name || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
        if (labelFormatter) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName),
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-medium", labelClassName),
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/ui/chart.tsx",
            lineNumber: 161,
            columnNumber: 14
        }, this);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
        children: [
            !nestLabel ? tooltipLabel : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: payload.map((item, index)=>{
                    const key = `${nameKey || item.name || item.dataKey || "value"}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = color || item.payload.fill || item.color;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
                        children: formatter && item?.value !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                itemConfig?.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig.icon, {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/chart.tsx",
                                    lineNumber: 206,
                                    columnNumber: 23
                                }, this) : !hideIndicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-1.5",
                                            children: [
                                                nestLabel ? tooltipLabel : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        item.value !== undefined && item.value !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
});
ChartTooltipContent.displayName = "ChartTooltipContent";
const ChartLegend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"];
const ChartLegendContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref)=>{
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
        children: payload.map((item)=>{
            const key = `${nameKey || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
                children: [
                    itemConfig?.icon && !hideIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(itemConfig.icon, {}, void 0, false, {
                        fileName: "[project]/src/components/ui/chart.tsx",
                        lineNumber: 300,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
});
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
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, this));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}}),
"[project]/src/app/data:cf9fb4 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40029859cd881a6a482de2f029c841f1a80c8111ca":"generateVideoTaskAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "generateVideoTaskAction": (()=>generateVideoTaskAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateVideoTaskAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40029859cd881a6a482de2f029c841f1a80c8111ca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateVideoTaskAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtY29tcGV0ZW5jeS1xdWVzdGlvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXBvcnRTdW1tYXJ5IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1yZXBvcnQtc3VtbWFyeSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVZpZGVvVGFzayB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtdmlkZW8tdGFzayc7XG5pbXBvcnQgeyBhbmFseXplSm9iUHJvZmlsZXMgfSBmcm9tICdAL2FpL2Zsb3dzL2FuYWx5emUtam9iLXByb2ZpbGVzJztcbmltcG9ydCB7IENBUkVFUlMgfSBmcm9tICdAL2xpYi9kYXRhJztcbmltcG9ydCB0eXBlIHsgQW5zd2VycywgVXNlckRhdGEsIENvbXBldGVuY3lHcmFkZSwgVmlkZW9UYXNrLCBKb2JQcm9maWxlLCBKb2JQcm9maWxlQW5hbHlzaXMgfSBmcm9tICdAL2xpYi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEFzc2Vzc21lbnRBY3Rpb24oeyBjYXJlZXIsIGxldmVsIH06IHsgY2FyZWVyOiBzdHJpbmc7IGxldmVsOiBzdHJpbmcgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2FyZWVyID0gQ0FSRUVSUy5maW5kKGMgPT4gYy5rZXkgPT09IGNhcmVlcik7XG4gICAgaWYgKCFzZWxlY3RlZENhcmVlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBjYXJlZXIgbm90IGZvdW5kLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBldGVuY2llcyA9IHNlbGVjdGVkQ2FyZWVyLmNvbXBldGVuY2llcztcblxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyh7XG4gICAgICBjYXJlZXIsXG4gICAgICBsZXZlbCxcbiAgICAgIGNvbXBldGVuY2llcyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHF1ZXN0aW9ucyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmVwb3J0QWN0aW9uKHsgdXNlckRhdGEsIGFuc3dlcnMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgc3VtbWFyeSwgZ3JhZGVzIH0gPSBhd2FpdCBnZW5lcmF0ZVJlcG9ydFN1bW1hcnkoe1xuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJEYXRhLm5hbWUsXG4gICAgICAgICAgICBjYXJlZXI6IHVzZXJEYXRhLmNhcmVlcixcbiAgICAgICAgICAgIGxldmVsOiB1c2VyRGF0YS5sZXZlbCxcbiAgICAgICAgICAgIGFuc3dlcnM6IGFuc3dlcnMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN1bW1hcnksIGdyYWRlcyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVmlkZW9UYXNrQWN0aW9uKHsgYW5zd2VycyB9OiB7IGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgZ2VuZXJhdGVWaWRlb1Rhc2soeyBhbnN3ZXJzIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHRhc2tzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZUpvYlByb2ZpbGVzQWN0aW9uKHsgdXNlckRhdGEsIGdyYWRlcywgam9iUHJvZmlsZXMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGdyYWRlczogQ29tcGV0ZW5jeUdyYWRlW10sIGpvYlByb2ZpbGVzOiBKb2JQcm9maWxlW10gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBhbmFseXNlcz86IEpvYlByb2ZpbGVBbmFseXNpc1tdOyBlcnJvcj86IHN0cmluZzsgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuYWx5c2VzID0gYXdhaXQgYW5hbHl6ZUpvYlByb2ZpbGVzKHtcbiAgICAgIGNhcmVlcjogdXNlckRhdGEuY2FyZWVyLFxuICAgICAgbGV2ZWw6IHVzZXJEYXRhLmxldmVsLFxuICAgICAgZ3JhZGVzOiBncmFkZXMsXG4gICAgICBqb2JQcm9maWxlczogam9iUHJvZmlsZXMsXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYW5hbHlzZXMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQStDc0IifQ==
}}),
"[project]/src/app/data:d8b900 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40a44e9804fd1b30efdb921106a0568826844e92ff":"analyzeJobProfilesAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "analyzeJobProfilesAction": (()=>analyzeJobProfilesAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var analyzeJobProfilesAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40a44e9804fd1b30efdb921106a0568826844e92ff", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzeJobProfilesAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtY29tcGV0ZW5jeS1xdWVzdGlvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXBvcnRTdW1tYXJ5IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1yZXBvcnQtc3VtbWFyeSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVZpZGVvVGFzayB9IGZyb20gJ0AvYWkvZmxvd3MvZ2VuZXJhdGUtdmlkZW8tdGFzayc7XG5pbXBvcnQgeyBhbmFseXplSm9iUHJvZmlsZXMgfSBmcm9tICdAL2FpL2Zsb3dzL2FuYWx5emUtam9iLXByb2ZpbGVzJztcbmltcG9ydCB7IENBUkVFUlMgfSBmcm9tICdAL2xpYi9kYXRhJztcbmltcG9ydCB0eXBlIHsgQW5zd2VycywgVXNlckRhdGEsIENvbXBldGVuY3lHcmFkZSwgVmlkZW9UYXNrLCBKb2JQcm9maWxlLCBKb2JQcm9maWxlQW5hbHlzaXMgfSBmcm9tICdAL2xpYi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEFzc2Vzc21lbnRBY3Rpb24oeyBjYXJlZXIsIGxldmVsIH06IHsgY2FyZWVyOiBzdHJpbmc7IGxldmVsOiBzdHJpbmcgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2FyZWVyID0gQ0FSRUVSUy5maW5kKGMgPT4gYy5rZXkgPT09IGNhcmVlcik7XG4gICAgaWYgKCFzZWxlY3RlZENhcmVlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RlZCBjYXJlZXIgbm90IGZvdW5kLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBldGVuY2llcyA9IHNlbGVjdGVkQ2FyZWVyLmNvbXBldGVuY2llcztcblxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGF3YWl0IGdlbmVyYXRlQ29tcGV0ZW5jeVF1ZXN0aW9ucyh7XG4gICAgICBjYXJlZXIsXG4gICAgICBsZXZlbCxcbiAgICAgIGNvbXBldGVuY2llcyxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHF1ZXN0aW9ucyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmVwb3J0QWN0aW9uKHsgdXNlckRhdGEsIGFuc3dlcnMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgc3VtbWFyeSwgZ3JhZGVzIH0gPSBhd2FpdCBnZW5lcmF0ZVJlcG9ydFN1bW1hcnkoe1xuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJEYXRhLm5hbWUsXG4gICAgICAgICAgICBjYXJlZXI6IHVzZXJEYXRhLmNhcmVlcixcbiAgICAgICAgICAgIGxldmVsOiB1c2VyRGF0YS5sZXZlbCxcbiAgICAgICAgICAgIGFuc3dlcnM6IGFuc3dlcnMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHN1bW1hcnksIGdyYWRlcyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVmlkZW9UYXNrQWN0aW9uKHsgYW5zd2VycyB9OiB7IGFuc3dlcnM6IEFuc3dlcnMgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgZ2VuZXJhdGVWaWRlb1Rhc2soeyBhbnN3ZXJzIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHRhc2tzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZUpvYlByb2ZpbGVzQWN0aW9uKHsgdXNlckRhdGEsIGdyYWRlcywgam9iUHJvZmlsZXMgfTogeyB1c2VyRGF0YTogVXNlckRhdGEsIGdyYWRlczogQ29tcGV0ZW5jeUdyYWRlW10sIGpvYlByb2ZpbGVzOiBKb2JQcm9maWxlW10gfSk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBhbmFseXNlcz86IEpvYlByb2ZpbGVBbmFseXNpc1tdOyBlcnJvcj86IHN0cmluZzsgfT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuYWx5c2VzID0gYXdhaXQgYW5hbHl6ZUpvYlByb2ZpbGVzKHtcbiAgICAgIGNhcmVlcjogdXNlckRhdGEuY2FyZWVyLFxuICAgICAgbGV2ZWw6IHVzZXJEYXRhLmxldmVsLFxuICAgICAgZ3JhZGVzOiBncmFkZXMsXG4gICAgICBqb2JQcm9maWxlczogam9iUHJvZmlsZXMsXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgYW5hbHlzZXMgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuJyB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQXlEc0IifQ==
}}),
"[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this));
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
}}),
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, this));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
AlertDescription.displayName = "AlertDescription";
;
}}),
"[project]/src/components/report.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Report)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/chart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$cf9fb4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:cf9fb4 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$d8b900__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:d8b900 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
const JobProfilesSection = ({ userData, grades, jobProfiles })=>{
    const [analyses, setAnalyses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchAnalyses = async ()=>{
            if (!jobProfiles || jobProfiles.length === 0) {
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            setError(null);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$d8b900__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzeJobProfilesAction"])({
                userData,
                grades,
                jobProfiles
            });
            if (result.success && result.analyses) {
                setAnalyses(result.analyses);
            } else {
                const errorMessage = result.error || "No se pudo generar el análisis de puestos de trabajo.";
                setError(errorMessage);
                console.error("Failed to analyze job profiles:", errorMessage);
                toast({
                    variant: "destructive",
                    title: "Error al analizar los perfiles",
                    description: errorMessage
                });
            }
            setIsLoading(false);
        };
        fetchAnalyses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        userData,
        grades,
        jobProfiles
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-headline",
                            children: "Posibles Puestos de Trabajo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: "Analizando perfiles basados en tu desempeño..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/report.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-10 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-10 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-10 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/report.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/report.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl font-headline text-destructive",
                            children: "Error en el Análisis"
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 90,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: "No se pudo completar el análisis de los puestos de trabajo."
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 91,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/report.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-destructive-foreground bg-destructive p-3 rounded-md",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/report.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/report.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
    }
    if (!analyses || analyses.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-xl font-headline",
                        children: "Posibles Puestos de Trabajo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Basado en tu desempeño, aquí hay algunos perfiles y un análisis de por qué podrían ser adecuados para ti."
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                    type: "single",
                    collapsible: true,
                    className: "w-full",
                    children: analyses.map((analysis, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                            value: `job-${index}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                    className: "text-left font-medium",
                                    children: analysis.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-foreground",
                                                    children: "Descripción del Puesto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "whitespace-pre-wrap p-2 bg-muted/50 rounded-md text-muted-foreground text-sm",
                                                    children: analysis.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/report.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-foreground",
                                                    children: "Análisis de Criterios Conductuales"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 space-y-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-primary",
                                                                    children: "Atenencia:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/report.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                analysis.atenencia
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/report.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-primary",
                                                                    children: "Pertinencia:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/report.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                analysis.pertinencia
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/report.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "text-primary",
                                                                    children: "Recurrencia:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/report.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                analysis.recurrencia
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/report.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/report.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/report.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/report.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
};
function Report({ userData, answers, summary, questions, grades, onStartOver }) {
    const [isTaskModalOpen, setIsTaskModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoTasks, setVideoTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingTask, setIsLoadingTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        toast({
            title: "¡Tienes una nueva tarea!",
            description: "Haz clic en 'Tarea de Validación por Video' para ver las instrucciones.",
            action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "h-5 w-5 text-accent"
            }, void 0, false, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 154,
                columnNumber: 15
            }, this)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return grades.map((gradeInfo)=>({
                name: gradeInfo.competency,
                score: gradeInfo.score
            }));
    }, [
        grades
    ]);
    const careerData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CAREERS"].find((c)=>c.key === userData.career);
    }, [
        userData.career
    ]);
    const shouldShowJobProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!grades || grades.length === 0) return false;
        const averageScore = grades.reduce((sum, grade)=>sum + grade.score, 0) / grades.length;
        return averageScore >= 2.0 && careerData?.jobProfiles && careerData.jobProfiles.length > 0;
    }, [
        grades,
        careerData
    ]);
    const chartConfig = {
        score: {
            label: "Puntaje",
            color: "hsl(var(--primary))"
        }
    };
    const handleGenerateVideoTask = async ()=>{
        if (videoTasks.length > 0) {
            setIsTaskModalOpen(true);
            return;
        }
        setIsLoadingTask(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$cf9fb4__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateVideoTaskAction"])({
            answers
        });
        setIsLoadingTask(false);
        if (result.success && result.tasks && result.tasks.length > 0) {
            setVideoTasks(result.tasks);
            setIsTaskModalOpen(true);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error al generar la tarea',
                description: result.error || 'No se pudieron generar las instrucciones para el video. Por favor, intenta de nuevo.'
            });
        }
    };
    const handlePrint = ()=>{
        window.print();
    };
    const handleEmail = ()=>{
        const subject = encodeURIComponent("Tu Reporte de Evaluación Cognitiva");
        const body = encodeURIComponent(`¡Hola ${userData.name}!\n\nHas completado tu evaluación. Para conservar tu reporte, primero guárdalo como PDF usando la opción "Imprimir o Descargar" y luego adjúntalo a este correo electrónico.\n\nSaludos,\nEl equipo de Evaluación Cognitiva.`);
        window.location.href = `mailto:${userData.email}?subject=${subject}&body=${body}`;
    };
    const getGradeColor = (grade)=>{
        if (grade.startsWith('A')) return 'bg-green-500';
        if (grade.startsWith('B')) return 'bg-blue-500';
        if (grade.startsWith('C')) return 'bg-yellow-500';
        if (grade.startsWith('D')) return 'bg-orange-500';
        if (grade.startsWith('F')) return 'bg-red-500';
        return 'bg-gray-500';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-headline text-2xl",
                        children: "Informe de Evaluación"
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: [
                            "Gracias por completar la evaluación, ",
                            userData.name,
                            ". Aquí están tus resultados para la carrera de ",
                            userData.career,
                            " (",
                            userData.area,
                            ")."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-background",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-xl font-headline",
                                    children: "Resumen General por IA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "whitespace-pre-wrap text-muted-foreground",
                                    children: summary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-xl font-headline",
                                        children: "Calificación Conductual por Competencia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Análisis de cada competencia basado en tus respuestas."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: grades.map((gradeInfo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 mb-4 sm:mb-0 sm:pr-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-bold text-lg",
                                                                        children: gradeInfo.competency
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/report.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "secondary",
                                                                        children: gradeInfo.nivelConductual
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/report.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: gradeInfo.justification
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg ${getGradeColor(gradeInfo.grade)}`,
                                                                        children: gradeInfo.grade
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/report.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 28
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/report.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            "Puntaje: ",
                                                                            gradeInfo.score.toFixed(1),
                                                                            " / 4.0"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/report.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/report.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/report.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 24
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    shouldShowJobProfiles && careerData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JobProfilesSection, {
                        userData: userData,
                        grades: grades,
                        jobProfiles: careerData.jobProfiles.slice(0, 3)
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 282,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-xl font-headline",
                                        children: "Visualización de Puntajes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Este gráfico representa los puntajes obtenidos en cada competencia."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartContainer"], {
                                    config: chartConfig,
                                    className: "h-[400px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                        accessibilityLayer: true,
                                        data: chartData,
                                        layout: "vertical",
                                        margin: {
                                            top: 20,
                                            right: 30,
                                            bottom: 20,
                                            left: 120
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                horizontal: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 293,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                dataKey: "name",
                                                type: "category",
                                                tickLine: false,
                                                axisLine: false,
                                                width: 120,
                                                tick: {
                                                    fontSize: 12
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 294,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                type: "number",
                                                dataKey: "score",
                                                domain: [
                                                    0,
                                                    4
                                                ],
                                                ticks: [
                                                    0,
                                                    1,
                                                    2,
                                                    3,
                                                    4
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 302,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                cursor: false,
                                                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartTooltipContent"], {
                                                    indicator: "dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 66
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 303,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "score",
                                                fill: "var(--color-score)",
                                                radius: 4
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 304,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 292,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 291,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                children: "Filtro de Criterios Conductuales"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                                    type: "single",
                                    collapsible: true,
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "item-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                children: "¿Qué son los criterios conductuales?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                className: "space-y-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Es un instrumento que tiene como finalidad establecer tres criterios que sirven de filtro para elegir aquellos roles que se adecúan al puesto. A continuación se exponen los contenidos de dicho filtro:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold",
                                                                children: "Criterio 1: Atenencia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground",
                                                                children: "Se refiere a la constatación de si el rol está significativamente relacionado con el puesto de trabajo. Permite indagar si el rol es observable, si está inequívocamente ligado al quehacer del titular y si es parte sustantiva de su desempeño."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold",
                                                                children: "Criterio 2: Pertinencia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground",
                                                                children: "Se refiere al hecho que el rol de desempeño debe ser considerado dada su incidencia o impacto en la gestión. Permite indagar si el rol es importante, si su ejecución es imprescindible y si tiene un impacto significativo en el desempeño."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold",
                                                                children: "Criterio 3: Recurrencia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground",
                                                                children: "Se refiere al hecho que el rol de desempeño no es una acción o comportamiento aislado o fortuito, sino que forma parte de un patrón de comportamiento que se repite y puede generalizarse."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/report.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-headline mb-4",
                                children: "Tus Respuestas en Detalle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                                type: "single",
                                collapsible: true,
                                className: "w-full",
                                children: questions.map((q, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: `item-${index}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                className: "text-left",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        "Competencia: ",
                                                        q.competency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/report.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-normal text-muted-foreground ml-2 mb-2",
                                                        children: q.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "whitespace-pre-wrap p-4 bg-muted/50 rounded-md text-muted-foreground",
                                                        children: answers[q.competency] || 'No se proporcionó respuesta.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/report.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex-wrap justify-center gap-2 non-printable",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleGenerateVideoTask,
                        variant: "outline",
                        disabled: isLoadingTask,
                        children: [
                            isLoadingTask ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "mr-2 h-4 w-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 364,
                                columnNumber: 28
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 364,
                                columnNumber: 80
                            }, this),
                            "Tarea de Validación por Video"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handlePrint,
                        variant: "outline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            "Imprimir o Descargar PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleEmail,
                        variant: "outline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            "Enviar por Correo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onStartOver,
                        children: "Comenzar de Nuevo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/report.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isTaskModalOpen,
                onOpenChange: setIsTaskModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-2xl grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "p-6 pb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "flex items-center gap-2 font-headline text-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "h-6 w-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/report.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        "Tarea de Validación por Video"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Para validar tu experiencia, por favor graba videos cortos respondiendo a las siguientes 3 preguntas. Profundiza en tus respuestas y proporciona ejemplos concretos."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-4 space-y-6 px-6",
                                children: videoTasks.map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border bg-card p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-lg mb-2",
                                                children: [
                                                    index + 1,
                                                    ". Competencia: ",
                                                    task.competency
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 395,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground whitespace-pre-wrap",
                                                children: task.task
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/report.tsx",
                                                lineNumber: 396,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/report.tsx",
                                        lineNumber: 394,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/report.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "sm:justify-between gap-2 border-t p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsTaskModalOpen(false),
                                    children: "Cerrar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 402,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handlePrint,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/report.tsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this),
                                        "Imprimir Informe Ahora"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/report.tsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/report.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/report.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/report.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/onboarding-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assessment$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assessment.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$report$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/report.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
'use client';
;
;
;
;
;
;
;
function Home() {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('onboarding');
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [reportSummary, setReportSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [grades, setGrades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleStartAssessment = (data, generatedQuestions)=>{
        setUserData(data);
        setQuestions(generatedQuestions);
        setStep('assessment');
    };
    const handleFinishAssessment = (finalAnswers, summary, newGrades)=>{
        setAnswers(finalAnswers);
        setReportSummary(summary);
        setGrades(newGrades);
        setStep('report');
    };
    const handleStartOver = ()=>{
        setUserData(null);
        setQuestions([]);
        setAnswers({});
        setReportSummary('');
        setGrades([]);
        setStep('onboarding');
    };
    const renderStep = ()=>{
        switch(step){
            case 'onboarding':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onStartAssessment: handleStartAssessment
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 46,
                    columnNumber: 16
                }, this);
            case 'assessment':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assessment$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    questions: questions,
                    userData: userData,
                    onFinishAssessment: handleFinishAssessment
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 16
                }, this);
            case 'report':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$report$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    userData: userData,
                    answers: answers,
                    summary: reportSummary,
                    questions: questions,
                    grades: grades,
                    onStartOver: handleStartOver
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 50,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$onboarding$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onStartAssessment: handleStartAssessment
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8 ${step === 'report' ? 'printable' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full max-w-3xl ${step === 'report' ? 'report-container' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center justify-center gap-3 non-printable",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                            className: "h-8 w-8 text-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-headline text-foreground",
                            children: "App de Evaluación Cognitiva"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: `w-full shadow-lg ${step === 'report' ? 'printable-content' : ''}`,
                    children: renderStep()
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_c84f8e83._.js.map