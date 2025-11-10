"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

type Rationale = {
  atinencia: string;
  pertinencia: string;
  recurrencia: string;
};

export type SuggestedJob = {
  job: string;
  level: "lower" | "upper";
  description: string;
  competencies: string[]; // blandas sugeridas para el puesto
  hardSkills: string[];   // “Aconsejamos tener…”
  rationale: Rationale;
  match: number; // 0–100
};

export default function SuggestedJobsAccordion({
  title,
  items,
}: {
  title: string;
  items: SuggestedJob[];
}) {
  if (!items?.length) return null;

  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">{title}</h4>
      <Accordion type="single" collapsible className="w-full">
        {items.map((it, idx) => (
          <AccordionItem key={`${it.job}-${idx}`} value={`item-${idx}`}>
            <AccordionTrigger className="justify-between">
              <span className="text-left">
                {it.job}
                <span className="ml-2 text-xs text-muted-foreground">
                  ({it.level === "lower" ? "Mandos medios hacia abajo" : "Mandos medios hacia arriba"})
                </span>
              </span>
              <Badge className="ml-3">{it.match}% Match</Badge>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p className="text-sm text-foreground">{it.description}</p>

                <div className="bg-white rounded p-3 border">
                  <h5 className="font-medium mb-1">🎯 Criterios conductuales</h5>
                  <ul className="text-sm list-disc list-inside space-y-1 text-muted-foreground">
                    <li><strong>Atinencia:</strong> {it.rationale.atinencia}</li>
                    <li><strong>Pertinencia:</strong> {it.rationale.pertinencia}</li>
                    <li><strong>Recurrencia:</strong> {it.rationale.recurrencia}</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded p-3 border border-blue-100">
                  <h5 className="font-medium mb-1">🧠 Competencias blandas clave</h5>
                  <div className="flex flex-wrap gap-2">
                    {it.competencies.map((c) => (
                      <Badge key={c} variant="secondary">{c}</Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 rounded p-3 border border-amber-200">
                  <h5 className="font-medium mb-1">🛠️ Aconsejamos tener para este puesto</h5>
                  <ul className="list-disc list-inside text-sm">
                    {it.hardSkills.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
