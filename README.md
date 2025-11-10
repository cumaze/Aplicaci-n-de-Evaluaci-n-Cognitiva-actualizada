# 🌐 Flujo de Despliegue Automático – Aplicación de Evaluación Cognitiva

Este proyecto está configurado con un flujo continuo de integración y despliegue (CI/CD) mediante **GitHub**, **Vercel** y **Firebase Hosting**.

## 🚀 Flujo general

Cada vez que ejecutes:

git add .
git commit -m "mensaje"
git push origin main

Ocurre lo siguiente:
1. **GitHub** recibe los cambios y actualiza el repositorio.
2. **Vercel** detecta el push a main y realiza el build automático.
3. **Firebase** también se actualiza mediante un **GitHub Action** que publica el mismo build.

## 📦 Archivos importantes
| Archivo | Descripción |
|----------|--------------|
| .github/workflows/firebase-hosting-merge.yml | Script que automatiza el deploy a Firebase. |
| .firebaserc | Vinculación con tu proyecto Firebase. |
| irebase.json | Define la carpeta a desplegar. |
| .vercel | Configuración del deploy en Vercel. |

## 🧠 Cómo recordarlo
> “Cada push sube a GitHub → GitHub avisa a Vercel y Firebase → ambos actualizan la web.”

- **Vercel** = dominio principal  
  👉 https://aplicacion-de-evaluacion-cognitiva.vercel.app  
- **Firebase** = respaldo  
  👉 https://studio-5870214684-173d3.web.app  

## 🧰 Comandos útiles
- irebase deploy → despliegue manual si lo necesitas.
- Logs de acciones:
  - GitHub → pestaña “Actions”
  - Firebase → Hosting → “Ver actividad”
  - Vercel → “Deployments”

## 🧩 Recordatorio
Mientras no elimines:
- .firebaserc
- .github/workflows
- ni desconectes Vercel del repo

… el flujo se mantendrá activo 🔁.

## 👨‍💻 Mantenimiento
Si deseas cambiar el proyecto Firebase vinculado:
irebase use --add

📄 *Actualizado por ChatGPT – Juan Pablo, noviembre 2025.*
