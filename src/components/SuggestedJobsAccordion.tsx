"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CriteriaNotes = {
  atinencia?: string;
  pertinencia?: string;
  recurrencia?: string;
};

export type SuggestedJobItem = {
  job: string;
  description: string;
  competencies: string[];
  // Opcional: si tu endpoint ya devuelve las notas de criterios, se usan tal cual
  criteriaNotes?: CriteriaNotes;
};

export default function SuggestedJobsAccordion({
  items,
}: {
  items: SuggestedJobItem[];
}) {
  if (!items || items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No hay puestos sugeridos aún. Haz clic en <b>“Generar puestos
        sugeridos”</b>.
      </p>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((it, idx) => {
        const notes = withFallbackNotes(it);

        return (
          <AccordionItem key={`${it.job}-${idx}`} value={`${it.job}-${idx}`}>
            <AccordionTrigger>
              <div className="flex flex-col text-left">
                <span className="font-semibold">{it.job}</span>
                <span className="text-xs text-muted-foreground">
                  {it.competencies?.slice(0, 3).join(" • ")}
                  {it.competencies && it.competencies.length > 3 ? " • …" : ""}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {/* Descripción del puesto */}
              <section className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold">Descripción</h4>
                <p className="text-sm leading-relaxed">{it.description}</p>
              </section>

              {/* Competencias clave */}
              <section className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold">Competencias clave</h4>
                {it.competencies && it.competencies.length > 0 ? (
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {it.competencies.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Sin competencias especificadas.
                  </p>
                )}
              </section>

              {/* Criterios conductuales (Atinencia, Pertinencia, Recurrencia) */}
              <section className="space-y-3">
                <h4 className="text-sm font-semibold">Criterios conductuales</h4>

                <div className="rounded-md border bg-card p-3">
                  <p className="text-sm font-medium">Criterio 1: Atinencia</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Verifica si el rol está significativamente relacionado con el
                    puesto y es observable en la dinámica del trabajo.
                  </p>
                  <p className="text-sm leading-relaxed">{notes.atinencia}</p>
                </div>

                <div className="rounded-md border bg-card p-3">
                  <p className="text-sm font-medium">Criterio 2: Pertinencia</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Evalúa la importancia del rol por su incidencia/impacto en la
                    gestión; su ejecución debe ser imprescindible y con efecto en
                    el desempeño.
                  </p>
                  <p className="text-sm leading-relaxed">{notes.pertinencia}</p>
                </div>

                <div className="rounded-md border bg-card p-3">
                  <p className="text-sm font-medium">Criterio 3: Recurrencia</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Confirma que no sea un comportamiento aislado, sino un patrón
                    repetible en distintos procesos o titulares del puesto.
                  </p>
                  <p className="text-sm leading-relaxed">{notes.recurrencia}</p>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

/**
 * Si el backend no manda 'criteriaNotes', armamos notas por defecto
 * usando la descripción y las competencias del puesto.
 */
function withFallbackNotes(it: SuggestedJobItem): Required<CriteriaNotes> {
  const baseDesc =
    it.description?.trim() ||
    `El rol ${it.job} requiere desempeño sostenido en sus funciones principales.`;
  const topCompetencies = (it.competencies || []).slice(0, 5).join(", ");

  const defaultAtinencia = `El rol de “${it.job}” está directamente ligado a las funciones descritas: ${baseDesc}.
Se observa de forma cotidiana en tareas propias del puesto y se alinea con competencias como: ${topCompetencies}.`;

  const defaultPertinencia = `El rol es pertinente porque impacta la gestión y los resultados del área/organización.
Su ejecución es necesaria para alcanzar objetivos clave y para la toma de decisiones, apoyándose en competencias como: ${topCompetencies}.`;

  const defaultRecurrencia = `El rol no es esporádico: se repite a lo largo de diversos procesos y ciclos de trabajo
(planificación, ejecución y seguimiento), y puede generalizarse a distintos titulares del puesto con competencias como: ${topCompetencies}.`;

  return {
    atinencia: it.criteriaNotes?.atinencia?.trim() || defaultAtinencia,
    pertinencia: it.criteriaNotes?.pertinencia?.trim() || defaultPertinencia,
    recurrencia: it.criteriaNotes?.recurrencia?.trim() || defaultRecurrencia,
  };
}
