'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Answers, Question, UserData, CompetencyGrade } from '@/lib/types';
import { Card } from '@/components/ui/card';

type Props = {
  userData: UserData;
  answers: Answers;
  summary: string;
  questions: Question[];
  grades: CompetencyGrade[];
  onStartOver: () => void;
};

/**
 * Heurística anti-incoherencias:
 * Si alguna respuesta del usuario indica "sin experiencia" u otras frases similares,
 * las competencias blandas relacionadas NO pueden salir en nivel "Avanzado".
 * Las normalizamos a "Básico" (o "Intermedio" si el puntaje original estaba alto pero el texto niega experiencia).
 */
function normalizeGrades(grades: CompetencyGrade[], answers: Answers): CompetencyGrade[] {
  const noExpRegex = /(sin experiencia|no tengo experiencia|nunca he|no he trabajado|cero experiencia)/i;

  const anyNoExp = Object.values(answers || {}).some((a) =>
    typeof a === 'string' && noExpRegex.test(a)
  );

  if (!anyNoExp) return grades;

  // Lista de competencias blandas comunes (ajusta si tus nombres difieren)
  const SOFT_HINTS = [
    'Comunicación',
    'Trabajo en equipo',
    'Liderazgo',
    'Resolución de problemas',
    'Adaptabilidad',
    'Pensamiento crítico',
    'Gestión del tiempo',
    'Orientación al cliente',
  ];

  return grades.map((g) => {
    const isSoft =
      SOFT_HINTS.some((s) => g.competency.toLowerCase().includes(s.toLowerCase())) ||
      /blanda|soft/i.test(g.competency);

    if (!isSoft) return g;

    // Si el nivel era Avanzado pero el usuario reporta "sin experiencia",
    // bajamos a Intermedio o Básico según puntaje original.
    if (g.level === 'Avanzado') {
      if (g.score >= 70) {
        return { ...g, level: 'Intermedio', score: Math.min(g.score, 69) };
      } else {
        return { ...g, level: 'Básico', score: Math.min(g.score, 49) };
      }
    }

    // Si decía Intermedio y el texto niega experiencia, lo bajamos un peldaño.
    if (g.level === 'Intermedio') {
      return { ...g, level: 'Básico', score: Math.min(g.score, 59) };
    }

    // Si ya era Básico, lo dejamos.
    return g;
  });
}

/**
 * Genera 5 puestos sugeridos (mandos medios o abajo) a partir de las mejores competencias.
 * Si falla la API del backend, esto garantiza que el reporte SIEMPRE muestre 5 puestos.
 */
async function fetchPositionsFromAPI(payload: any): Promise<string[]> {
  try {
    const resp = await fetch('/api/generate-job-profiles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) throw new Error('Bad response');
    const data = await resp.json();
    // Acepta formatos: { positions: string[] } o string[]
    const positions = Array.isArray(data) ? data : data?.positions;
    if (Array.isArray(positions) && positions.length) return positions.slice(0, 5);
  } catch {
    // caemos al fallback
  }
  return [];
}

function generatePositionsFallback(grades: CompetencyGrade[], userData: UserData): string[] {
  const top = [...grades]
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, 3)
    .map((g) => g.competency.toLowerCase());

  const bank: string[] = [
    'Asistente Administrativo',
    'Ejecutivo de Atención al Cliente',
    'Analista de Datos Jr.',
    'Asistente de Operaciones',
    'Coordinador de Soporte',
    'Analista de Marketing Jr.',
    'Asistente de Recursos Humanos',
    'Project Coordinator (Junior)',
    'Auxiliar de Logística',
    'Soporte Técnico Nivel 1',
  ];

  // Filtrado sencillo según competencias destacadas
  const picks: string[] = [];
  const want = (s: string) => {
    const lc = s.toLowerCase();
    return (
      (top.some((t) => /dato|anal|crític|excel/i.test(t)) && /analista|datos|project|coordin/i.test(lc)) ||
      (top.some((t) => /comunic|cliente|equipo|lider/i.test(t)) && /cliente|recursos|coordin|soporte/i.test(lc)) ||
      (top.some((t) => /organ|tiempo|adapt|oper/i.test(t)) && /admin|oper|logíst|project/i.test(lc))
    );
  };

  for (const role of bank) {
    if (picks.length >= 5) break;
    if (want(role) && !picks.includes(role)) picks.push(role);
  }

  // Completa si quedaron menos de 5
  for (const role of bank) {
    if (picks.length >= 5) break;
    if (!picks.includes(role)) picks.push(role);
  }

  return picks.slice(0, 5);
}

export default function Report({ userData, answers, summary, questions, grades, onStartOver }: Props) {
  // 1) Normalizar incoherencias en blandas
  const correctedGrades = useMemo(() => normalizeGrades(grades || [], answers || {}), [grades, answers]);

  // 2) Cargar/crear 5 puestos sugeridos
  const [positions, setPositions] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const payload = {
        user: userData,
        summary,
        grades: correctedGrades,
        answers,
      };
      const fromApi = await fetchPositionsFromAPI(payload);
      const finalPositions =
        fromApi.length >= 5 ? fromApi.slice(0, 5) : generatePositionsFallback(correctedGrades, userData);
      if (!cancelled) setPositions(finalPositions);
    })();

    return () => {
      cancelled = true;
    };
  }, [userData, summary, correctedGrades, answers]);

  // 3) Render del informe
  return (
    <div className="p-6 space-y-6">
      {/* Título SIN el rótulo que molestaba */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Resumen General</h2>
        {/* Eliminado: “Evaluación para yo (modo simulado - Groq no disponible)” */}
      </div>

      {/* Resumen textual */}
      {summary && (
        <Card className="p-4">
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{summary}</p>
        </Card>
      )}

      {/* Puestos sugeridos (siempre 5) */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Puestos sugeridos (mandos medios y junior)</h3>
        <ul className="list-disc pl-6 space-y-1">
          {positions.map((p, i) => (
            <li key={i} className="text-sm text-foreground">{p}</li>
          ))}
        </ul>
        {positions.length === 0 && (
          <p className="text-sm text-muted-foreground mt-2">No se encontraron puestos. (Revisa conexión o API). Se mostrará un fallback automático.</p>
        )}
      </div>

      {/* Competencias (ya normalizadas) */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Competencias evaluadas</h3>
        <div className="overflow-x-auto rounded-md border">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Competencia</th>
                <th className="px-3 py-2 text-left font-medium">Nivel</th>
                <th className="px-3 py-2 text-left font-medium">Puntaje</th>
              </tr>
            </thead>
            <tbody>
              {correctedGrades.map((g, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-3 py-2">{g.competency}</td>
                  <td className="px-3 py-2">{g.level}</td>
                  <td className="px-3 py-2">{typeof g.score === 'number' ? `${g.score}` : '—'}</td>
                </tr>
              ))}
              {(!correctedGrades || correctedGrades.length === 0) && (
                <tr>
                  <td className="px-3 py-3 text-muted-foreground" colSpan={3}>
                    Sin datos de competencias.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={onStartOver}
          className="rounded-lg border px-4 py-2 text-sm hover:bg-muted"
        >
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
}
