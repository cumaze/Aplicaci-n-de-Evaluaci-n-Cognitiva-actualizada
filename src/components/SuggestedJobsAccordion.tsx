"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface SuggestedJob {
  job: string;
  description: string;
  competencies?: string[];
  hardSkills?: string[];
}

interface SuggestedJobsAccordionProps {
  title: string;
  items: SuggestedJob[];
  showHardSkills?: boolean;
}

export default function SuggestedJobsAccordion({
  title,
  items,
  showHardSkills = false,
}: SuggestedJobsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) {
    return (
      <Card className="bg-gray-50 border text-center text-gray-500 p-4">
        <p>No hay puestos generados para esta categoría.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      {items.map((item, index) => (
        <Card
          key={index}
          className="border border-gray-200 shadow-sm transition-all duration-200"
        >
          <CardContent
            className="cursor-pointer select-none"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between py-3">
              <h4 className="font-semibold text-lg text-gray-900">
                {item.job}
              </h4>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600 w-5 h-5" />
              ) : (
                <ChevronDown className="text-gray-600 w-5 h-5" />
              )}
            </div>

            {openIndex === index && (
              <div className="space-y-4 mt-3 text-gray-700">
                {/* Descripción general */}
                <p className="leading-relaxed">{item.description}</p>

                {/* Competencias blandas (ya incluidas en report) */}
                {item.competencies && item.competencies.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Competencias Clave Asociadas:
                    </h5>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {item.competencies.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Competencias duras sugeridas */}
                {showHardSkills && (
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      💡 Aconsejamos tener para este puesto (Competencias Duras):
                    </h5>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {(item.hardSkills && item.hardSkills.length > 0
                        ? item.hardSkills
                        : [
                            "Dominio de herramientas de análisis y gestión de datos.",
                            "Manejo de software profesional o ERP según el área.",
                            "Capacidad de documentación técnica y control operativo.",
                          ]
                      ).map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Criterios APR */}
                <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg space-y-2">
                  <h5 className="font-semibold text-blue-900 mb-2">
                    📘 Criterios de Selección del Puesto
                  </h5>

                  <div>
                    <h6 className="font-medium text-gray-800">🎯 Criterio 1: Atinencia</h6>
                    <p className="text-sm text-gray-700">
                      El rol está significativamente relacionado con el puesto y se observa en la dinámica de trabajo diaria.
                    </p>
                  </div>

                  <div>
                    <h6 className="font-medium text-gray-800">📊 Criterio 2: Pertinencia</h6>
                    <p className="text-sm text-gray-700">
                      El rol tiene un impacto directo en el desempeño y en los resultados de gestión del titular del puesto.
                    </p>
                  </div>

                  <div>
                    <h6 className="font-medium text-gray-800">🔄 Criterio 3: Recurrencia</h6>
                    <p className="text-sm text-gray-700">
                      El comportamiento asociado al rol se repite de forma constante y es característico del desempeño continuo.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
