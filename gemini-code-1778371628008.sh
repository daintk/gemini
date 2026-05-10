# Vytvoření projektu
npm create vite@latest atelier-web -- --template react-ts
cd atelier-web
npm install

# Instalace Tailwind v4 a závislostí
npm install -D tailwindcss@next @tailwindcss/vite @tailwindcss/postcss autoprefixer
npm install motion lucide-react
npm install @fontsource/oswald @fontsource/inter

# Shadcn UI (potvrď výchozí nastavení pro Vite)
npx shadcn@latest init -d
npx shadcn@latest add button accordion