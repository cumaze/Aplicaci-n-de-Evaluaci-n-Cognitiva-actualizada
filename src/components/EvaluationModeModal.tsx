// components/EvaluationModeModal.tsx
'use client';

import { useState, useEffect } from 'react';

interface EvaluationModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onModeSelect: (mode: 'simulated' | 'real') => void;
}

export default function EvaluationModeModal({ isOpen, onClose, onModeSelect }: EvaluationModeModalProps) {
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(false);

  // admite varias llaves por si ya guardaste alguna antes
  const STORAGE_KEYS = ['deepseekApiKey', 'groqApiKey', 'openrouterApiKey'];

  const getSavedKey = () => {
    for (const k of STORAGE_KEYS) {
      const v = localStorage.getItem(k);
      if (v) return { key: v, storageKey: k };
    }
    return null;
  };

  useEffect(() => {
    if (!isOpen) return;
    const saved = getSavedKey();
    if (saved) setApiKey(saved.key);
  }, [isOpen]);

  const handleRealModeClick = () => {
    const saved = getSavedKey();
    if (saved) {
      onModeSelect('real');
      onClose();
    } else {
      setShowApiInput(true);
    }
  };

  const handleSaveApiKey = () => {
    const targetKey = STORAGE_KEYS[0]; // por defecto guardamos en deepseekApiKey
    if (apiKey.trim()) {
      localStorage.setItem(targetKey, apiKey.trim());
      onModeSelect('real');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            🧠 Seleccionar Modo de Evaluación
          </h2>
        </div>

        {/* Contenido principal */}
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
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎮</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Modo Simulado</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Datos de ejemplo — ideal para pruebas
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
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Modo Real con IA</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Evaluación con tu API key (DeepSeek / GROQ / OpenRouter)
                  </p>
                  <span className="text-xs text-blue-600 font-medium mt-2 block">
                    🔑 Requiere API key
                  </span>
                </div>
              </div>
            </button>
          </div>
        ) : (
          // Input de API Key
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ingresa tu API key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-2">
                Se guardará localmente en tu navegador para próximos usos.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                ⚠️ Eres responsable del uso y saldo de tu API key.
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
                Guardar y continuar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
