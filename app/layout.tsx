import "./globals.css";
import { ToastProvider } from "@/components/ui/use-toast";

export const metadata = {
  title: "Evaluación Cognitiva",
  description: "Aplicación de evaluación con IA y modo simulado",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
