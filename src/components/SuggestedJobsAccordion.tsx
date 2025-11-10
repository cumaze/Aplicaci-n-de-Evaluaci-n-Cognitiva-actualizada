'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Item = {
  job: string;
  description: string;
  competencies: string[];
};

export default function SuggestedJobsAccordion({ items }: { items: Item[] }) {
  if (!items || !items.length) {
    return (
      <div className="text-sm text-gray-600">
        No hay puestos sugeridos todavía. Genera algunos con el botón de arriba.
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((it, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left">
            <div className="flex flex-col">
              <span className="font-medium">{it.job}</span>
              <span className="text-xs text-gray-500">
                {it.competencies?.slice(0, 3).join(' · ') || '—'}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-700">{it.description}</p>
              {it.competencies?.length ? (
                <div>
                  <div className="text-sm font-medium mb-1">Competencias clave:</div>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {it.competencies.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
