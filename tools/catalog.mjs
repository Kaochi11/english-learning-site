// Run from any directory: node tools/catalog.mjs [--check]
import { readFileSync, writeFileSync } from "node:fs";
import { runInContext, createContext } from "node:vm";
import assert from "node:assert/strict";

const root = new URL("../assets/js/", import.meta.url);
const context = createContext({});
for (const file of ["data.js", "data-extra.js", "word-catalog.js"]) {
  runInContext(readFileSync(new URL(file, root), "utf8"), context, { filename: file });
}
const words = context.WordCatalog.all();
const combined = [...context.WORD_BANK, ...context.WORD_BANK_EXTRA];
const knownBooks = new Set(context.WORDBOOKS.map(({ id }) => id));
const knownThemes = new Set(context.WORD_CATEGORIES.map(({ id }) => id));
for (const row of combined) {
  assert(row.w?.trim() && row.m?.trim(), "词条缺少拼写或释义");
  for (const id of [].concat(row.b || "core")) assert(knownBooks.has(id), `未知词书：${id}`);
  if (row.c) assert(knownThemes.has(row.c), `未知主题：${row.c}`);
}
assert.equal(words.length, new Set(combined.map(({ w }) => w.trim().toLowerCase())).size);
const byKey = new Map(words.map(row => [row.key, row]));
for (const row of combined) {
  const entry = byKey.get(row.w.trim().toLowerCase());
  for (const id of [].concat(row.b || "core")) assert(entry.b.includes(id), `丢失的词书归属：${row.w}/${id}`);
}
const overview = {
  words: words.length,
  examples: words.filter(row => row.e && row.z).length,
  siteWords: words.filter(row => row.source === "site").length,
  themed: words.filter(row => row.c).length,
  books: context.WORDBOOKS.map(({ id, name }) => ({ id, name, total: words.filter(row => row.b.includes(id)).length })),
  grammar: context.GRAMMAR_TOPICS.length,
  patterns: context.SENTENCE_PATTERNS.length,
  scenes: context.SPEAKING_SCENARIOS.length
};
const output = `/* 由 node tools/catalog.mjs 生成，请勿手改。 */\nwindow.CATALOG_OVERVIEW = ${JSON.stringify(overview, null, 2)};\n`;
const file = new URL("catalog-overview.js", root);
if (process.argv.includes("--check")) assert.equal(readFileSync(file, "utf8").replace(/\r\n/g, "\n"), output, "词库汇总已过期");
else writeFileSync(file, output);
console.log(JSON.stringify(overview, null, 2));
