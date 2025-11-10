"use client";

import * as React from "react";

export type Toast = {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  icon?: React.ReactNode;
};

type ToastContextType = {
  toast: (props: Toast) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((props: Toast) => {
    const id = Math.random().toString(36).slice(2);
    const newToast = { ...props, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-3 rounded-md shadow-md ${
              t.variant === "destructive" ? "bg-red-600 text-white" : "bg-white text-gray-800"
            }`}
          >
            <div className="flex items-center gap-2">
              {t.icon}
              <div>
                <div className="font-semibold">{t.title}</div>
                {t.description && <div className="text-sm text-gray-700">{t.description}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a <ToastProvider />");
  }
  return context;
}
