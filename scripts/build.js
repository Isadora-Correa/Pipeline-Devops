const { cpSync, mkdirSync, rmSync } = require("node:fs");

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");

["index.html", "style.css", "script.js", "favicon.svg"].forEach((file) =>
  cpSync(file, `dist/${file}`),
);

console.log("Build concluído.");
