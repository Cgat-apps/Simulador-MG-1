// copy-redirects.js
import { copyFileSync, mkdirSync } from "fs";

try {
  mkdirSync("dist", { recursive: true });
  copyFileSync("public/_redirects", "dist/_redirects");
  console.log("✅ _redirects copiado para dist/_redirects com sucesso.");
} catch (err) {
  console.error("❌ Erro ao copiar _redirects:", err);
  process.exit(1);
}
