// vite.config.ts
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";   // <-- correct (has @)
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
//   base: "/LionHeart/",
// });

// updating to run local as well with npm run dev
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    plugins: [react()],
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    // Use normal "/" in dev, GitHub Pages subpath in prod
    base: isDev ? "/" : "/LionHeart/",
    server: {
      port: 8085,
      host: true,   // 0.0.0.0, so you can hit it from other devices if needed
      open: true,
    },
    preview: {
      port: 8086,   // keep preview on a different port (optional)
      host: true,
      open: true,
    },
  };
});
