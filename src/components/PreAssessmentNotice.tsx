'use client';

interface Props {
  mode: 'simulated' | 'real';
  onContinue: () => void;
  onChangeMode: () => void;
  userName?: string;
}

export default function PreAssessmentNotice({ mode, onContinue, onChangeMode, userName }: Props) {
  const isReal = mode === 'real';

  return (
    <div className="p-6">
      <div
        className={
          'mb-4 rounded-xl border p-4 ' +
          (isReal
            ? 'border-blue-300 bg-blue-50'
            : 'border-amber-300 bg-amber-50')
        }
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl" aria-hidden>
            {isReal ? '🧠' : '🎮'}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {isReal ? 'Modo Real con API de IA' : 'Modo Simulado'}
            </h2>
            <p className="mt-1 text-sm text-gray-700">
              {isReal
                ? 'Se utilizará tu API de IA para generar y evaluar las respuestas en tiempo real.'
                : 'Usaremos datos y preguntas simuladas para que puedas probar la app sin consumir saldo.'}
            </p>
            {!isReal && (
              <p className="mt-1 text-xs text-gray-600">
                Consejo: puedes cambiar a “Modo Real con API de IA” cuando quieras.
              </p>
            )}
          </div>
        </div>
      </div>

      {userName && (
        <p className="mb-3 text-sm text-gray-600">
          Listo, <span className="font-medium text-gray-800">{userName}</span>. Al continuar, inicia tu evaluación.
        </p>
      )}

      <div className="flex gap-3">
        <button
          onClick={onChangeMode}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Cambiar modo
        </button>
        <button
          onClick={onContinue}
          className={
            'flex-1 rounded-lg px-4 py-2 text-white ' +
            (isReal
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-amber-600 hover:bg-amber-700')
          }
        >
          Comenzar evaluación
        </button>
      </div>
    </div>
  );
}
