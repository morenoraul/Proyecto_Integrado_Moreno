## 🛍️ Catálogo de Productos con React + Vite

Este proyecto es un catálogo de productos interactivo creado utilizando React y Vite, con estilos proporcionados por Tailwind CSS y la comunicación con la API de DummyJSON realizada mediante Axios.

🔧 Tecnologías Utilizadas

🔷 React: Biblioteca de JavaScript para construir interfaces de usuario interactivas

⚡ Vite: Herramienta de construcción que proporciona una experiencia de desarrollo extremadamente rápida

🎨 Tailwind CSS: Framework de CSS de utilidad que permite un desarrollo rápido y flexible del diseño

🌐 Axios: Cliente HTTP basado en promesas para realizar peticiones al API de DummyJSON

📦 DummyJSON: API REST gratuita para obtener datos de productos de prueba

📋 Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

🟢 Node.js (versión 16 o superior)
📥 npm o yarn

### EVIDENCIA 1 

#### Instalación y Configuración del Proyecto

🎯 Paso 1: **Crear el proyecto con Vite**

 ```bash
> npm create vite@latest 
◇  Package name:
│  EV1_Ricos_Sabores
◇  Select a framework:
│  React
◇  Select a variant:
│  JavaScript + SWC
└  Done. Now run:
```

📂 Paso 2: Navegar al directorio del proyecto
 ```bash
cd EV1_Ricos_Sabores
 ```

📦 Paso 3: **Instalar las dependencias base**

```bash
npm install
 ```

🎨 Paso 4: **Instalar Tailwindcss**

 ```bash
npm install tailwindcss @tailwindcss/vite
 ```

Paso 5: **Ejecutar  el Proyecto**
 ```bash
npm run dev
 ```
A continuación se abrirá la aplicación del proyecto en el navegador ej. `http://localhost:5173` 

## Estructura del Proyecto 
proyecto-catalogo/
├── 🌍 public/
│   └── ... (recursos estáticos)
├── 📂 src/
│   ├── 🖼️ assets/
│   │   └── ... (imágenes, logo)
│   ├── 🧩 components/
│   │   └── 🏷️ Card.jsx
│   ├── 🎣 hooks/
│   │   └── ... (hooks personalizados)
│   ├── 🔌 services/
│   │   └── api.js (configuración de Axios y llamadas a la API)
│   ├── 📱 App.jsx
│   ├── 🎨 index.css
│   ├── 🚀 main.jsx
│   └── ... (otros archivos de la aplicación)
├── 🏠 index.html
├── 📋 package.json
├── 📖 README.md
├── 🔧 vite.config.js
└── ... (otros archivos de configuración)
