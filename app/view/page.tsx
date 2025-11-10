"use client";
import { useMemo } from "react";

function decodePayload(param?: string | null) {
  if (!param) return null;
  try {
    const base64 = param.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64 + "===".slice((base64.length + 3) % 4);
    const json = decodeURIComponent(escape(atob(padded)));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export default function ViewPage() {
  const payload = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return decodePayload(params.get("d"));
  }, []);

  if (!payload) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-bold">404</h1>
          <p className="text-gray-600 mt-2">No se pudo encontrar esta página.</p>
          <p className="text-gray-500 mt-1 text-sm">
            El enlace de reporte está vacío o fue modificado.
          </p>
        </div>
      </div>
    );
  }

  const { user, summary, grades } = payload;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Reporte de Evaluación Cognitiva</h1>
        <p className="text-gray-600 mb-6">
          {user?.name} — {user?.career}
        </p>

        <h2 className="text-lg font-semibold mb-2">Resumen</h2>
        <p className="text-gray-800 mb-6">{summary}</p>

        <h2 className="text-lg font-semibold mb-2">Competencias blandas evaluadas</h2>
        <div className="space-y-3">
          {(grades || []).map((g: any) => (
            <div key={g.competency} className="border rounded-lg p-3">
              <div className="flex justify-between">
                <span className="font-medium">{g.competency}</span>
                <span className="text-sm">Puntaje: {Number(g.score).toFixed(1)}/5.0</span>
              </div>
              {g.justification && <p className="text-sm text-gray-700 mt-1">{g.justification}</p>}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded bg-black text-white"
          >
            Imprimir / Guardar PDF
          </button>
        </div>
      </div>
    </div>
  );
}
