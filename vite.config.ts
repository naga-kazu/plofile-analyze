import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs", // ビルド結果を格納するディレクトリ
  },
  base: "https://naga-kazu.github.io/profile-analyze/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
