// components/EvaluationModeModal.tsx
'use client';

import { useState } from 'react';

interface EvaluationModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onModeSelect: (mode: 'simulated' | 'real') => void;
}

export default function EvaluationModeModal({ isOpen, onClose, onModeSelect }: EvaluationModeModalProps) {
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(false);

  const handleRealModeClick = () => {
    const savedApiKey = localStorage.getItem('deepseekApiKey');
    if (savedApiKey) {
      onModeSelect('real');
      onClose();
    } else {
      setShowApiInput(true);
    }
  };

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('deepseekApiKey', apiKey);
      onModeSelect('real');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            🧠 Seleccionar Modo de Evaluación
          </h2>
        </div>

        {/* Contenido Principal */}
        {!showApiInput ? (
          <div className="p-6 space-y-4">
            {/* Modo Simulado */}
            <button
              onClick={() => {
                onModeSelect('simulated');
                onClose();
              }}
              className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎮</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Modo Simulado</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Datos de ejemplo - Ideal para pruebas
                  </p>
                  <span className="text-xs text-green-600 font-medium mt-2 block">
                    ✅ Completamente gratuito
                  </span>
                </div>
              </div>
            </button>

            {/* Modo Real */}
            <button
              onClick={handleRealModeClick}
              className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Modo Real con IA</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Evaluaciones con DeepSeek - Resultados precisos
                  </p>
                  <span className="text-xs text-blue-600 font-medium mt-2 block">
                    🔑 Requiere API key
                  </span>
                </div>
              </div>
            </button>
          </div>
        ) : (
          /* Input de API Key */
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ingresa tu API Key de DeepSeek
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                ⚠️ Esta clave se guardará localmente. Tú eres responsable del saldo asociado.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowApiInput(false)}
                className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveApiKey}
                disabled={!apiKey.trim()}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Guardar y Continuar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}