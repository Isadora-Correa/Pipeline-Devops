const { readFileSync } = require("node:fs");
const { execFileSync } = require("node:child_process");

const html = readFileSync("index.html", "utf8");
const required = [/<!doctype html>/i, /lang="pt-BR"/, /<main/, /<h1/, /aria-label/];

required.forEach((pattern) => {
  if (!pattern.test(html)) throw new Error(`HTML não atende ao padrão ${pattern}`);
});

execFileSync(process.execPath, ["--check", "script.js"], { stdio: "inherit" });
console.log("Lint concluído.");
