/* 词库与背词共用同一套词条标识、去重规则和词书归属。 */
(function (root) {
  "use strict";

  function keyOf(word) { return word.trim().toLowerCase(); }

  function build(base, extra) {
    var index = new Map();
    var bookIds = new Set((root.WORDBOOKS || []).map(function (b) { return b.id; }));

    function apply(rows, source) {
      rows.forEach(function (row) {
        if (!row || typeof row.w !== "string" || !keyOf(row.w) || !row.m) return;
        var key = keyOf(row.w);
        var entry = index.get(key);
        if (!entry) {
          entry = Object.assign({}, row, { key: key, b: [], source: source });
          index.set(key, entry);
        } else if ((!entry.e || !entry.z) && row.e && row.z) {
          entry.e = row.e;
          entry.z = row.z;
        }
        // 保留最早的释义与主题；不同词书的归属则全部保留。
        var books = Array.isArray(row.b) ? row.b : [row.b || "core"];
        books.forEach(function (id) {
          if (bookIds.has(id) && entry.b.indexOf(id) === -1) entry.b.push(id);
        });
      });
    }

    apply(base, "site");
    apply(extra, "ecdict");
    return Array.from(index.values());
  }

  var catalog;
  root.WordCatalog = {
    build: build,
    all: function () {
      if (!catalog) catalog = build(root.WORD_BANK || [], root.WORD_BANK_EXTRA || []);
      return catalog;
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
