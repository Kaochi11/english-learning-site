/* ==========================================================================
   app.js — 全站公共逻辑与页面渲染
   页面通过 <body data-page="..."> 声明自己是谁，这里按需初始化。
   ========================================================================== */

(function () {
  "use strict";

  /* ======================================================================
     1 · 存储（localStorage 不可用时自动降级到内存）
     ====================================================================== */
  var mem = {};
  var Store = {
    get: function (key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) {
        return key in mem ? mem[key] : fallback;
      }
    },
    set: function (key, value) {
      mem[key] = value;
      try { window.localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* 忽略 */ }
    },
    remove: function (key) {
      delete mem[key];
      try { window.localStorage.removeItem(key); } catch (e) { /* 忽略 */ }
    }
  };
  window.Store = Store;

  /* ======================================================================
     2 · 小工具
     ====================================================================== */
  function byId(id) { return document.getElementById(id); }
  window.byId = byId;

  function esc(s) {
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  window.escapeHTML = esc;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  window.shuffle = shuffle;

  function todayKey(d) {
    var dt = d ? new Date(d) : new Date();
    return dt.getFullYear() + "-" +
      String(dt.getMonth() + 1).padStart(2, "0") + "-" +
      String(dt.getDate()).padStart(2, "0");
  }
  window.todayKey = todayKey;

  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  }

  /* 淡入错峰：给一组元素依次加上 reveal 动画 */
  function stagger(els, step) {
    Array.prototype.forEach.call(els, function (el, i) {
      el.classList.add("reveal");
      el.style.setProperty("--i", Math.min(i, 12) * (step || 1));
    });
  }

  /* ======================================================================
     3 · 主题
     ====================================================================== */
  var THEME_KEY = "en-site-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = byId("themeBtn");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      var label = theme === "dark" ? "切换到浅色模式" : "切换到深色模式";
      btn.setAttribute("aria-label", label);
      btn.title = label;
    }
  }

  function initTheme() {
    var saved = Store.get(THEME_KEY, null);
    if (!saved) {
      saved = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    }
    applyTheme(saved);

    var btn = byId("themeBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        Store.set(THEME_KEY, next);
      });
    }
  }

  /* ======================================================================
     4 · 导航
     ====================================================================== */
  function initNav() {
    var toggle = byId("navToggle");
    var nav = byId("mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      nav.classList.remove("open");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) nav.classList.remove("open");
    });
  }

  /* ======================================================================
     5 · 微信内置浏览器提示
     ====================================================================== */
  function initWeChatTip() {
    if (!/MicroMessenger/i.test(navigator.userAgent || "")) return;
    if (Store.get("en-site-wechat-tip", "") === "off") return;

    var bar = document.createElement("div");
    bar.className = "wechat-tip no-print";
    bar.innerHTML =
      '<div class="inner">' +
        '<span class="ico">🔈</span>' +
        '<span class="txt">你在微信里打开本页面。<b>如果点 🔊 没有声音</b>，' +
          '请点右上角「···」→「在浏览器中打开」，语音朗读就会恢复正常。' +
          '另外建议在浏览器里打开一次，之后可以「添加到主屏幕」，用起来像 App。</span>' +
        '<button class="close" type="button" aria-label="关闭提示">✕</button>' +
      '</div>';

    var main = document.querySelector("main");
    (main && main.parentNode ? main.parentNode : document.body)
      .insertBefore(bar, main || document.body.firstChild);

    bar.querySelector(".close").addEventListener("click", function () {
      if (bar.parentNode) bar.parentNode.removeChild(bar);
      Store.set("en-site-wechat-tip", "off");
    });
  }

  /* ======================================================================
     6 · Service Worker（离线可用，仅 https）
     ====================================================================== */
  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || location.protocol !== "https:") return;
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () { /* 忽略 */ });
    });
  }

  /* ======================================================================
     7 · 朗读
     ====================================================================== */
  var voiceCache = null;

  function pickVoice() {
    if (!window.speechSynthesis) return null;
    if (voiceCache) return voiceCache;
    var voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    var en = voices.filter(function (v) { return /^en(-|_)?/i.test(v.lang); });
    var preferred = en.filter(function (v) {
      return /Google US English|Samantha|Microsoft (Aria|Jenny|Guy)|Karen|Daniel/i.test(v.name);
    });
    var us = en.filter(function (v) { return /en[-_]US/i.test(v.lang); });
    voiceCache = preferred[0] || us[0] || en[0] || null;
    return voiceCache;
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function () { voiceCache = null; pickVoice(); };
  }

  function speak(text, btn, rate) {
    if (!window.speechSynthesis) {
      window.alert("你的浏览器不支持语音朗读，建议用 Chrome / Edge / Safari 打开。");
      return;
    }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = rate || 0.9;
    u.pitch = 1;
    var v = pickVoice();
    if (v) u.voice = v;
    if (btn) {
      btn.classList.add("speaking");
      var clear = function () { btn.classList.remove("speaking"); };
      u.onend = clear; u.onerror = clear;
      setTimeout(clear, 9000);
    }
    window.speechSynthesis.speak(u);
  }
  window.speakEN = speak;

  function bindSpeakButtons(root) {
    (root || document).querySelectorAll("[data-speak]").forEach(function (el) {
      if (el.dataset.speakBound === "1") return;
      el.dataset.speakBound = "1";
      el.addEventListener("click", function (e) {
        e.preventDefault(); e.stopPropagation();
        speak(el.getAttribute("data-speak"), el);
      });
    });
  }
  window.bindSpeakButtons = bindSpeakButtons;

  /* ======================================================================
     8 · 手风琴（用 grid-template-rows 做丝滑高度动画）
     ====================================================================== */
  function initAccordion(root) {
    (root || document).querySelectorAll(".acc-head").forEach(function (head) {
      if (head.dataset.accBound === "1") return;
      head.dataset.accBound = "1";
      head.addEventListener("click", function () {
        var item = head.closest(".acc-item");
        var wasOpen = item.classList.contains("open");
        var group = item.parentElement;
        group.querySelectorAll(".acc-item.open").forEach(function (o) {
          o.classList.remove("open");
          var h = o.querySelector(".acc-head");
          if (h) h.setAttribute("aria-expanded", "false");
        });
        if (!wasOpen) {
          item.classList.add("open");
          head.setAttribute("aria-expanded", "true");
        }
      });
    });
  }
  window.initAccordion = initAccordion;

  /* ======================================================================
     9 · 分段控件（Tab）
     ====================================================================== */
  function initTabs(bar, onSwitch) {
    if (!bar) return;
    bar.addEventListener("click", function (e) {
      var tab = e.target.closest(".tab");
      if (!tab || tab.classList.contains("active")) return;
      bar.querySelectorAll(".tab").forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      onSwitch(tab.getAttribute("data-tab"), tab);
    });
  }

  /* ======================================================================
     10 · 首页
     ====================================================================== */
  function initHomeStats() {
    var set = function (id, v) { var el = byId(id); if (el) el.textContent = v; };
    var seen = {};
    var unique = 0;
    (window.WORD_BANK || []).forEach(function (w) {
      var k = w.w.toLowerCase();
      if (seen[k]) return;
      seen[k] = 1; unique++;
    });
    set("statWords", unique || "—");
    // 同一页文案里的词量（保持与顶部统计一致，避免写死数字过时）
    var inlineWords = document.querySelector(".stat-words-inline");
    if (inlineWords) inlineWords.textContent = unique ? unique.toLocaleString("en-US") : "—";
    set("statBooks", (window.WORDBOOKS || []).length || "—");
    set("statExams", ((window.IELTS_SKILLS || []).length + (window.CET_SKILLS || []).length) || "—");
    set("statPatterns", (window.SENTENCE_PATTERNS || []).length || "—");
    set("statScenes", (window.SPEAKING_SCENARIOS || []).length || "—");
  }

  function initMethods() {
    var wrap = byId("methodList");
    if (!wrap) return;
    wrap.innerHTML = STUDY_METHODS.map(function (m) {
      return '<article class="card">' +
          '<div style="font-size:1.6rem;line-height:1">' + m.icon + '</div>' +
          '<h3 class="mt-1">' + esc(m.title) + '</h3>' +
          '<div class="muted small" style="font-style:italic">' + esc(m.en) + '</div>' +
          '<div class="tag tag-brass" style="margin:12px 0">目标 · ' + esc(m.goal) + '</div>' +
          '<p class="small">' + esc(m.desc) + '</p>' +
          '<ol class="plain-list small">' + m.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + '</ol>' +
          (m.tool ? '<div class="notice notice-info mb-0 small"><span class="ico">🧰</span><span>' + esc(m.tool) + '</span></div>' : '') +
        '</article>';
    }).join("");
    stagger(wrap.children, 1);
  }

  /* ======================================================================
     11 · 词库
     ====================================================================== */
  /* 词书归属：可能是字符串（项目原有）或数组（重叠词书，如 ["cet4","cet6"]）。
     返回主词书（数组取第一个），另提供 belongsTo() 做归属判断。 */
  function bookOf(w) {
    var b = w.b;
    if (!b) return "core";
    return (b instanceof Array) ? (b[0] || "core") : b;
  }

  /* 某词是否属于指定词书（支持重叠） */
  function belongsTo(w, bookId) {
    var b = w.b;
    if (!b) return bookId === "core";
    if (b instanceof Array) return b.indexOf(bookId) !== -1;
    return b === bookId;
  }

  function allWords() {
    // 按单词去重，保留第一次出现的释义
    var seen = {}, out = [];
    (window.WORD_BANK || []).forEach(function (w) {
      var k = w.w.toLowerCase();
      if (seen[k]) return;
      seen[k] = 1;
      out.push(w);
    });
    return out;
  }

  function initVocabulary() {
    var listEl = byId("wordList");
    if (!listEl) return;

    var chipsEl = byId("wordChips");
    var searchEl = byId("wordSearch");
    var countEl = byId("wordCount");
    var moreBtn = byId("wordMore");
    var bookBar = byId("bookTabs");
    var words = allWords();

    var PAGE = 24;
    var state = { book: "all", cat: "all", q: "", shown: PAGE, filtered: words };

    /* --- 词书 tab --- */
    if (bookBar) {
      var counts = { all: words.length };
      words.forEach(function (w) {
        (window.WORDBOOKS || []).forEach(function (bk) {
          if (belongsTo(w, bk.id)) counts[bk.id] = (counts[bk.id] || 0) + 1;
        });
      });
      var html = '<button class="tab active" data-tab="all" role="tab" aria-selected="true">全部 <span class="muted">' + counts.all + '</span></button>';
      (window.WORDBOOKS || []).forEach(function (b) {
        if (!counts[b.id]) return;
        html += '<button class="tab" data-tab="' + b.id + '" role="tab" aria-selected="false">' +
          b.icon + ' ' + esc(b.name) + ' <span class="muted">' + counts[b.id] + '</span></button>';
      });
      bookBar.innerHTML = html;
      initTabs(bookBar, function (id) {
        state.book = id;
        state.shown = PAGE;
        render();
      });
    }

    /* --- 主题 chips --- */
    if (chipsEl) {
      var chipHtml = '<button class="chip active" data-cat="all">全部主题</button>';
      var catCount = {};
      words.forEach(function (w) { catCount[w.c] = (catCount[w.c] || 0) + 1; });
      (window.WORD_CATEGORIES || []).forEach(function (c) {
        if (!catCount[c.id]) return;
        chipHtml += '<button class="chip" data-cat="' + c.id + '">' + c.icon + ' ' + esc(c.name) + '</button>';
      });
      chipsEl.innerHTML = chipHtml;
      chipsEl.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (!chip) return;
        chipsEl.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        state.cat = chip.getAttribute("data-cat");
        state.shown = PAGE;
        render();
      });
    }

    /* --- 搜索（防抖，避免每敲一个字就重排整页） --- */
    if (searchEl) {
      searchEl.addEventListener("input", debounce(function () {
        state.q = searchEl.value.trim().toLowerCase();
        state.shown = PAGE;
        render();
      }, 160));
    }

    if (moreBtn) {
      moreBtn.addEventListener("click", function () {
        state.shown += PAGE;
        render();
      });
    }

    function matches(w) {
      if (state.book !== "all" && !belongsTo(w, state.book)) return false;
      if (state.cat !== "all" && w.c !== state.cat) return false;
      if (state.q) {
        var q = state.q;
        if (w.w.toLowerCase().indexOf(q) === -1 &&
            w.m.indexOf(state.q) === -1 &&
            (w.e || "").toLowerCase().indexOf(q) === -1 &&
            (w.z || "").indexOf(state.q) === -1) return false;
      }
      return true;
    }

    /* 搜索相关度：精确 > 前缀 > 单词包含 > 释义 > 例句/翻译。
       没有它时，搜 "in" 会返回 988 条且按数组顺序排列，
       真正等于 "in" 的词排在第 862 位，用户要翻 36 页。 */
    function relevance(w, q) {
      if (!q) return 0;
      var word = w.w.toLowerCase();
      if (word === q) return 0;
      if (word.indexOf(q) === 0) return 1;
      if (word.indexOf(q) !== -1) return 2;
      if ((w.m || "").indexOf(q) !== -1) return 3;
      if ((w.e || "").toLowerCase().indexOf(q) !== -1) return 4;
      if ((w.z || "").indexOf(q) !== -1) return 5;
      return 6;
    }

    function cardHTML(w) {
      var cat = (window.WORD_CATEGORIES || []).find(function (c) { return c.id === w.c; });
      var book = (window.WORDBOOKS || []).find(function (b) { return b.id === bookOf(w); });
      return '<article class="word-card">' +
          '<div class="word-head">' +
            '<span class="word-en">' + esc(w.w) + '</span>' +
            '<span class="word-phon">' + esc(w.p) + '</span>' +
            '<span class="word-pos">' + esc(w.t) + '</span>' +
            '<button class="speak-btn" data-speak="' + esc(w.w) + '" title="朗读" style="margin-left:auto">🔊</button>' +
          '</div>' +
          '<div class="word-zh">' + esc(w.m) + '</div>' +
          (w.e
            ? '<div class="word-ex">' +
                '<span class="en">' + esc(w.e) + '</span>' +
                '<span class="zh">' + esc(w.z) + '</span>' +
              '</div>'
            : '') +
          '<div class="tags">' +
            (book && book.id !== "core" ? '<span class="tag tag-brass">' + book.icon + ' ' + esc(book.name) + '</span>' : '') +
            (cat ? '<span class="tag">' + cat.icon + ' ' + esc(cat.name) + '</span>' : '') +
          '</div>' +
        '</article>';
    }

    function render() {
      state.filtered = words.filter(matches);
      // 有搜索词时按相关度排序；同一档内保持原有（词书/词频）顺序，保证结果稳定
      if (state.q) {
        var q = state.q.toLowerCase();
        state.filtered = state.filtered
          .map(function (w, i) { return { w: w, i: i, r: relevance(w, q) }; })
          .sort(function (a, b) { return a.r - b.r || a.i - b.i; })
          .map(function (x) { return x.w; });
      }
      var slice = state.filtered.slice(0, state.shown);

      if (countEl) {
        countEl.textContent = state.filtered.length
          ? "共 " + state.filtered.length + " 个单词，已显示 " + slice.length + " 个"
          : "没有匹配的单词";
      }

      if (!state.filtered.length) {
        listEl.innerHTML = '<div class="card center">' +
            '<div style="font-size:1.8rem">🔍</div>' +
            '<h4 class="mt-1">没有找到匹配的单词</h4>' +
            '<p class="muted small mb-0">换个关键词，或者把「主题」切回全部试试。</p>' +
          '</div>';
      } else {
        listEl.innerHTML = slice.map(cardHTML).join("");
        stagger(listEl.children, 0.4);
      }
      bindSpeakButtons(listEl);

      if (moreBtn) {
        var hasMore = state.shown < state.filtered.length;
        moreBtn.classList.toggle("hide", !hasMore);
        if (hasMore) moreBtn.textContent = "显示更多（还剩 " + (state.filtered.length - state.shown) + " 个）";
      }
    }

    render();
  }

  /* ======================================================================
     12 · 语法
     ====================================================================== */
  function tableHTML(t) {
    if (!t) return "";
    var head = "<tr>" + t.head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>";
    var body = t.rows.map(function (r) {
      return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>";
    }).join("");
    return '<div class="table-wrap mt-2"><table><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>';
  }

  function examplesHTML(list, cls) {
    if (!list || !list.length) return "";
    return list.map(function (ex) {
      return '<div class="ex ' + (cls || "") + '">' +
          '<div class="row" style="gap:9px;align-items:baseline;flex-wrap:nowrap">' +
            '<span class="en">' + esc(ex.en) + '</span>' +
            '<button class="speak-btn" data-speak="' + esc(ex.en) + '" title="朗读">🔊</button>' +
          '</div>' +
          '<span class="zh">' + esc(ex.zh) + '</span>' +
          (ex.note ? '<span class="note">💡 ' + esc(ex.note) + '</span>' : '') +
        '</div>';
    }).join("");
  }

  function initGrammar() {
    var wrap = byId("grammarList");
    if (!wrap) return;

    wrap.innerHTML = GRAMMAR_TOPICS.map(function (g, i) {
      var rules = (g.rules && g.rules.length)
        ? '<div class="rule"><ul class="plain-list mb-0">' + g.rules.map(function (r) { return "<li>" + r + "</li>"; }).join("") + '</ul></div>'
        : "";

      var mistakes = (g.mistakes && g.mistakes.length)
        ? '<h4 class="mt-3">常见错误对照</h4>' + g.mistakes.map(function (m) {
            return '<div class="ex is-wrong">' +
                '<span class="en wrong">✗ ' + esc(m.wrong) + '</span>' +
                '<span class="en right">✓ ' + esc(m.right) + '</span>' +
                '<span class="note">' + esc(m.why) + '</span>' +
              '</div>';
          }).join("")
        : "";

      return '<div class="acc-item' + (i === 0 ? " open" : "") + '">' +
          '<button class="acc-head" aria-expanded="' + (i === 0 ? "true" : "false") + '">' +
            '<span class="tag tag-primary">' + g.level + '</span>' +
            '<span>' + esc(g.title) + '</span>' +
            '<span class="acc-en">' + esc(g.en) + '</span>' +
            '<span class="acc-caret">▶</span>' +
          '</button>' +
          '<div class="acc-body"><div class="acc-inner"><div class="acc-pad">' +
            '<p class="muted mt-2">' + esc(g.intro) + '</p>' +
            rules + tableHTML(g.table) +
            (g.examples && g.examples.length ? '<h4 class="mt-3">例句</h4>' + examplesHTML(g.examples) : "") +
            mistakes +
            (g.tip ? '<div class="notice notice-ok mt-2 mb-0"><span class="ico">🎯</span><span>' + esc(g.tip) + '</span></div>' : '') +
          '</div></div></div>' +
        '</div>';
    }).join("");

    bindSpeakButtons(wrap);
    initAccordion(wrap);
  }

  /* ======================================================================
     13 · 句型
     ====================================================================== */
  function initSentences() {
    var wrap = byId("patternList");
    if (!wrap) return;
    wrap.innerHTML = SENTENCE_PATTERNS.map(function (p) {
      return '<article class="card mb-2">' +
          '<div class="row between mb-2">' +
            '<h3 class="en" style="margin:0;color:var(--primary)">' + esc(p.pattern) + '</h3>' +
            '<span class="tag tag-brass">' + p.level + '</span>' +
          '</div>' +
          '<p style="font-weight:600">' + esc(p.cn) + '</p>' +
          '<p class="muted small">' + esc(p.use) + '</p>' +
          examplesHTML(p.examples) +
          (p.tip ? '<div class="notice notice-info mt-2 mb-0"><span class="ico">💡</span><span>' + esc(p.tip) + '</span></div>' : '') +
        '</article>';
    }).join("");
    bindSpeakButtons(wrap);
    stagger(wrap.children, 0.6);
  }

  /* ======================================================================
     14 · 口语场景
     ====================================================================== */
  function initSpeaking() {
    var wrap = byId("speakingList");
    if (!wrap) return;

    wrap.innerHTML = SPEAKING_SCENARIOS.map(function (s, idx) {
      var dialogue = s.dialogue.map(function (d, i) {
        var cls = d.who === "A" ? "bubble bubble-a" : "bubble bubble-b";
        return '<div class="' + cls + '" style="animation-delay:' + (i * 55) + 'ms">' +
            '<button class="speak-btn" data-speak="' + esc(d.en) + '" title="朗读">🔊</button>' +
            '<span class="en">' + esc(d.en) + '</span>' +
            '<span class="zh">' + esc(d.zh) + '</span>' +
          '</div>';
      }).join("");

      var phrases = s.phrases.map(function (p) {
        return '<div class="phrase-row">' +
            '<button class="speak-btn" data-speak="' + esc(p.en) + '" title="朗读" style="margin-top:3px">🔊</button>' +
            '<div class="ph-main">' +
              '<div class="ph-en">' + esc(p.en) + '</div>' +
              '<div class="ph-zh">' + esc(p.zh) + '</div>' +
            '</div>' +
          '</div>';
      }).join("");

      return '<div class="acc-item' + (idx === 0 ? " open" : "") + '">' +
          '<button class="acc-head" aria-expanded="' + (idx === 0 ? "true" : "false") + '">' +
            '<span style="font-size:1.1rem">' + s.icon + '</span>' +
            '<span>' + esc(s.title) + '</span>' +
            '<span class="acc-en">' + esc(s.en) + '</span>' +
            '<span class="tag">' + s.level + '</span>' +
            '<span class="acc-caret">▶</span>' +
          '</button>' +
          '<div class="acc-body"><div class="acc-inner"><div class="acc-pad">' +
            '<p class="muted mt-2">' + esc(s.intro) + '</p>' +
            '<h4 class="mt-3">对话示范</h4>' +
            '<div class="dialogue">' + dialogue + '</div>' +
            '<h4 class="mt-3">必备句块</h4>' + phrases +
            '<h4 class="mt-3">发音与用法提示</h4>' +
            '<ul class="plain-list">' + s.tips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + '</ul>' +
            '<button class="btn btn-soft btn-sm" data-play-all="' +
              esc(s.dialogue.map(function (d) { return d.en; }).join(" ")) + '">▶ 连续播放整段对话</button>' +
          '</div></div></div>' +
        '</div>';
    }).join("");

    wrap.querySelectorAll("[data-play-all]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        speak(btn.getAttribute("data-play-all"), null);
      });
    });

    bindSpeakButtons(wrap);
    initAccordion(wrap);
  }

  /* ======================================================================
     15 · 雅思备考
     ====================================================================== */
  /* 考试备考页的通用渲染器（雅思 / 四六级共用） */
  function initExamPage(opts) {
    var bar = byId(opts.tabs);
    var panels = byId(opts.panels);
    var navBar = byId(opts.nav);
    if (!bar || !panels) return;

    var SKILLS = opts.skills;
    var SECTIONS = opts.sections || {};
    var prefix = opts.prefix || "sec";

    bar.innerHTML = SKILLS.map(function (s, i) {
      return '<button class="tab' + (i === 0 ? " active" : "") + '" data-tab="' + s.id + '" role="tab" ' +
        'aria-selected="' + (i === 0 ? "true" : "false") + '">' + s.icon + " " + esc(s.title) + '</button>';
    }).join("");

    panels.innerHTML = SKILLS.map(function (s) {
      return '<div class="tab-panel" data-panel="' + s.id + '">' +
        skillHTML(s, SECTIONS, prefix + "-" + s.id) + '</div>';
    }).join("");

    var current = SKILLS[0].id;

    /* ---- 章节快速跳转（跟着当前单项重建）---- */
    function buildSectionNav(id) {
      if (!navBar) return;
      var panel = panels.querySelector('[data-panel="' + id + '"]');
      if (!panel) { navBar.innerHTML = ""; return; }
      var secs = panel.querySelectorAll(".exam-section");
      if (!secs.length) { navBar.innerHTML = ""; navBar.classList.add("hide"); return; }
      navBar.classList.remove("hide");
      navBar.innerHTML = secs.length
        ? '<span class="sn-label">目录</span>' + Array.prototype.map.call(secs, function (sec, i) {
            var h = sec.querySelector(".section-title h2");
            return '<button class="sn-item' + (i === 0 ? " active" : "") + '" data-target="' +
              sec.id + '">' + esc(h ? h.textContent : "第 " + (i + 1) + " 节") + '</button>';
          }).join("")
        : "";
    }

    function navOffset() {
      var top = byId("topbar");
      var h = top ? top.getBoundingClientRect().height : 66;
      var nh = navBar && !navBar.classList.contains("hide") ? navBar.getBoundingClientRect().height : 0;
      return h + nh + 14;
    }

    if (navBar) {
      navBar.addEventListener("click", function (e) {
        var btn = e.target.closest(".sn-item");
        if (!btn) return;
        var target = byId(btn.getAttribute("data-target"));
        if (!target) return;
        var y = target.getBoundingClientRect().top + window.scrollY - navOffset();
        var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) window.scrollTo(0, y);
        else window.scrollTo({ top: y, behavior: "smooth" });
        navBar.querySelectorAll(".sn-item").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        // 让被点的这一项在横向滚动条里露出来
        btn.scrollIntoView({ block: "nearest", inline: "center", behavior: reduce ? "auto" : "smooth" });
      });
    }

    /* ---- 滚动时高亮当前章节 ---- */
    var spyTick = false;
    function spy() {
      spyTick = false;
      if (!navBar || navBar.classList.contains("hide")) return;
      var panel = panels.querySelector('[data-panel="' + current + '"]');
      if (!panel) return;
      var secs = panel.querySelectorAll(".exam-section");
      if (!secs.length) return;
      var line = window.scrollY + navOffset() + 24;
      var activeId = secs[0].id;
      Array.prototype.forEach.call(secs, function (sec) {
        if (sec.offsetTop <= line) activeId = sec.id;
      });
      navBar.querySelectorAll(".sn-item").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-target") === activeId);
      });
    }
    window.addEventListener("scroll", function () {
      if (spyTick) return;
      spyTick = true;
      requestAnimationFrame(spy);
    }, { passive: true });

    function showPanel(id) {
      current = id;
      panels.querySelectorAll(".tab-panel").forEach(function (p) {
        p.classList.toggle("hide", p.getAttribute("data-panel") !== id);
      });
      var panel = panels.querySelector('[data-panel="' + id + '"]');
      if (panel) {
        panel.classList.remove("tab-panel");
        void panel.offsetWidth;          // 强制重排，让动画重新播放
        panel.classList.add("tab-panel");
        bindSpeakButtons(panel);
      }
      buildSectionNav(id);
      spy();
    }

    bar.addEventListener("click", function (e) {
      var tab = e.target.closest(".tab");
      if (!tab) return;
      bar.querySelectorAll(".tab").forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      showPanel(tab.getAttribute("data-tab"));
    });

    showPanel(current);

    /* --- 交互式练习 --- */
    SKILLS.forEach(function (s) {
      var pr = s.practice;
      if (!pr) return;
      if (pr.type === "quiz") bindQuiz(panels, s.id, pr);
      if (pr.type === "dictation") bindDictation(panels, s.id, pr);
      if (pr.type === "timer") bindTimer(panels, s.id, pr);
    });
  }

  function initIELTS() {
    initExamPage({
      skills: window.IELTS_SKILLS || [],
      sections: window.IELTS_SECTIONS || {},
      tabs: "ieltsTabs", panels: "ieltsPanels", nav: "ieltsNav", prefix: "ielts"
    });
  }

  function initCET() {
    initExamPage({
      skills: window.CET_SKILLS || [],
      sections: window.CET_SECTIONS || {},
      tabs: "cetTabs", panels: "cetPanels", nav: "cetNav", prefix: "cet"
    });
  }

  function skillHTML(s, sectionsMap, prefix) {
    var pr = s.practice || {};
    return '' +
      '<div class="card card-pad-lg mb-2">' +
        '<div class="row" style="gap:22px;align-items:flex-start">' +
          '<div style="flex:1 1 320px">' +
            '<h2 style="margin-bottom:10px">' + s.icon + " " + esc(s.title) +
              ' <span class="en" style="color:var(--muted);font-size:1rem;font-weight:400">' + esc(s.en) + '</span></h2>' +
            '<p class="muted" style="font-size:.94rem">' + esc(s.brief) + '</p>' +
          '</div>' +
          '<div style="flex:0 1 240px" class="stack-sm">' +
            '<div class="stat-box"><b style="font-size:1.05rem">' + esc(s.minutes) + '</b><span>考试时长</span></div>' +
            '<div class="stat-box"><b style="font-size:1.05rem">' + esc(s.questions) + '</b><span>题量</span></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="section-title"><h2>考试结构</h2><span class="en">Format</span></div>' +
      tableHTML(s.format) +

      '<div class="section-title"><h2>核心技巧</h2><span class="en">Strategy</span></div>' +
      '<div class="card"><ul class="plain-list mb-0">' +
        s.tips.map(function (t) { return "<li>" + t + "</li>"; }).join("") +
      '</ul></div>' +

      sectionsHTML(s.id, sectionsMap, prefix) +

      '<div class="section-title"><h2>' + esc(s.vocabTitle || "高频词") + '</h2><span class="en">Vocabulary</span></div>' +
      '<div class="grid grid-2">' +
        s.vocab.map(function (v) {
          return '<div class="phrase-row" style="padding:11px 14px;border:1px solid var(--line);border-radius:var(--r-sm);background:var(--surface)">' +
              '<button class="speak-btn" data-speak="' + esc(v.en) + '" title="朗读" style="margin-top:2px">🔊</button>' +
              '<div class="ph-main"><div class="ph-en">' + esc(v.en) + '</div>' +
              '<div class="ph-zh">' + esc(v.zh) + '</div></div></div>';
        }).join("") +
      '</div>' +

      (pr.title
        ? '<div class="section-title"><h2>' + esc(pr.title) + '</h2><span class="en">Practice</span></div>' +
          '<p class="muted small mb-2">' + esc(pr.desc) + '</p>' +
          practiceHTML(s.id, pr)
        : "");
  }

  /* ---- 分项技巧手册：把 IELTS_SECTIONS 里的块渲染出来 ---- */
  function blockHTML(b) {
    if (!b || !b.type) return "";

    if (b.type === "list") {
      return '<ul class="plain-list mb-0">' +
        b.items.map(function (t) { return "<li>" + t + "</li>"; }).join("") + '</ul>';
    }

    if (b.type === "steps") {
      return '<div class="step-block">' +
        (b.title ? '<h4 class="step-title">' + esc(b.title) + '</h4>' : "") +
        '<ol class="step-list">' +
          b.items.map(function (t) { return "<li>" + t + "</li>"; }).join("") +
        '</ol></div>';
    }

    if (b.type === "table") {
      return tableHTML(b.table);
    }

    if (b.type === "pairs") {
      return '<div class="pair-list">' + b.items.map(function (p) {
        return '<div class="pair-row">' +
            '<span class="pair-a">' + esc(p.a) + '</span>' +
            '<span class="pair-arrow">→</span>' +
            '<span class="pair-b">' + esc(p.b) + '</span>' +
          '</div>';
      }).join("") + '</div>';
    }

    if (b.type === "examples") {
      return b.items.map(function (ex) {
        return '<div class="ex">' +
            '<div class="row" style="gap:9px;align-items:baseline;flex-wrap:nowrap">' +
              '<span class="en">' + esc(ex.en) + '</span>' +
              '<button class="speak-btn" data-speak="' + esc(ex.en) + '" title="朗读">🔊</button>' +
            '</div>' +
            (ex.zh ? '<span class="zh">' + esc(ex.zh) + '</span>' : "") +
          '</div>';
      }).join("");
    }

    if (b.type === "note") {
      return '<div class="notice notice-brass mt-2"><span class="ico">📌</span><span>' + b.text + '</span></div>';
    }

    return "";
  }

  function sectionsHTML(id, sectionsMap, prefix) {
    var list = (sectionsMap || {})[id];
    if (!list || !list.length) return "";
    return list.map(function (sec, i) {
      return '<section class="exam-section" id="' + (prefix || "sec") + "-" + i + '">' +
          '<div class="section-title"><h2>' + esc(sec.title) + '</h2>' +
            (sec.en ? '<span class="en">' + esc(sec.en) + '</span>' : "") + '</div>' +
          '<div class="card mb-2">' +
          sec.blocks.map(blockHTML).join("") +
          '</div>' +
        '</section>';
    }).join("");
  }

  function practiceHTML(id, pr) {
    if (pr.type === "dictation") {
      return '<div id="pr-' + id + '">' + pr.items.map(function (it, i) {
        return '<div class="q-item" data-i="' + i + '">' +
            '<div class="row" style="gap:12px;flex-wrap:nowrap">' +
              '<button class="btn btn-ghost btn-sm" data-play="' + esc(it.en) + '">🔊 播放</button>' +
              '<span class="muted small">第 ' + (i + 1) + ' 句</span>' +
              '<button class="btn btn-ghost btn-sm" data-slow="' + esc(it.en) + '" style="margin-left:auto">🐢 慢速</button>' +
            '</div>' +
            '<input class="spell-input" style="margin-top:14px;max-width:100%;font-size:1rem;text-align:left;padding:11px 14px" ' +
              'placeholder="听写这句话……" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' +
            '<div class="row mt-1" style="gap:8px">' +
              '<button class="btn btn-sm" data-check>检查</button>' +
              '<button class="btn btn-ghost btn-sm" data-answer>看答案</button>' +
            '</div>' +
          '</div>';
      }).join("") + '</div>';
    }

    if (pr.type === "quiz") {
      return '<div id="pr-' + id + '">' +
        (pr.passage ? '<div class="card mb-2" style="background:var(--surface-2)"><div class="small muted mb-0" style="line-height:1.85"><span class="en">' +
            esc(pr.passage) + '</span></div></div>' : "") +
        pr.items.map(function (it, i) {
          return '<div class="q-item" data-i="' + i + '">' +
              '<div class="q-stem"><span class="muted small">' + (i + 1) + '.</span> ' + esc(it.q) + '</div>' +
              '<div class="q-opts">' + it.opts.map(function (o, j) {
                return '<button class="q-opt" data-j="' + j + '">' + esc(o) + '</button>';
              }).join("") + '</div>' +
            '</div>';
        }).join("") + '</div>';
    }

    if (pr.type === "timer") {
      return '<div id="pr-' + id + '">' +
        '<div class="card mb-2">' +
          '<div class="row between mb-2">' +
            '<div class="tag tag-brass" id="timerPhase">准备阶段</div>' +
            '<button class="btn btn-ghost btn-sm" id="timerNext">换一张话题卡</button>' +
          '</div>' +
          '<div style="font-family:var(--font-serif);font-size:1.15rem;color:var(--ink)" id="cueTopic"></div>' +
          '<ul class="plain-list small muted" id="cuePoints"></ul>' +
        '</div>' +
        '<div class="timer-box">' +
          '<div class="timer-display" id="timerDisplay">1:00</div>' +
          '<div class="stack-sm" style="flex:1 1 180px">' +
            '<div class="bar"><i id="timerBar" style="width:0%"></i></div>' +
            '<div class="muted small" id="timerHint">先理思路，在纸上写下 4W1H 的关键词。</div>' +
          '</div>' +
          '<button class="btn" id="timerBtn">开始</button>' +
        '</div>' +
      '</div>';
    }
    return "";
  }

  /* --- 练习：听写 --- */
  function bindDictation(panels, id, pr) {
    var root = panels.querySelector('[data-panel="' + id + '"] #pr-' + id);
    if (!root) return;

    var norm = function (s) {
      return String(s).toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
    };

    root.querySelectorAll(".q-item").forEach(function (row) {
      var i = Number(row.getAttribute("data-i"));
      var item = pr.items[i];
      var input = row.querySelector("input");
      var check = row.querySelector("[data-check]");
      var answer = row.querySelector("[data-answer]");

      row.querySelector("[data-play]").addEventListener("click", function () {
        speak(item.en, this, 0.92);
      });
      row.querySelector("[data-slow]").addEventListener("click", function () {
        speak(item.en, this, 0.68);
      });

      function feedback(ok, reveal) {
        row.classList.add("answered");
        var old = row.querySelector(".q-feedback");
        if (old) old.remove();
        var div = document.createElement("div");
        div.className = "q-feedback " + (ok ? "ok" : "no");
        div.innerHTML = ok
          ? "✅ 完全正确"
          : "原文：<span class='en'>" + esc(item.en) + "</span><br>翻译：" + esc(item.zh) + (reveal ? "" : "<br>再听两遍，注意连读的地方。");
        row.appendChild(div);
        input.classList.toggle("correct", ok);
        input.classList.toggle("wrong", !ok);
      }

      check.addEventListener("click", function () {
        feedback(norm(input.value) === norm(item.en), false);
      });
      answer.addEventListener("click", function () {
        input.value = item.en;
        feedback(true, true);
      });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") feedback(norm(input.value) === norm(item.en), false);
      });
    });
  }

  /* --- 练习：选择题 --- */
  function bindQuiz(panels, id, pr) {
    var root = panels.querySelector('[data-panel="' + id + '"] #pr-' + id);
    if (!root) return;

    root.querySelectorAll(".q-item").forEach(function (row) {
      var i = Number(row.getAttribute("data-i"));
      var item = pr.items[i];
      var opts = row.querySelectorAll(".q-opt");

      opts.forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (row.classList.contains("answered")) return;
          row.classList.add("answered");
          var j = Number(btn.getAttribute("data-j"));
          var ok = j === item.answer;
          opts.forEach(function (b) {
            b.disabled = true;
            if (Number(b.getAttribute("data-j")) === item.answer) b.classList.add("correct");
          });
          if (!ok) btn.classList.add("wrong");

          var div = document.createElement("div");
          div.className = "q-feedback " + (ok ? "ok" : "no");
          div.innerHTML = (ok ? "✅ 答对了。" : "❌ 正确答案：" + esc(item.opts[item.answer]) + "。") +
            "<br>解析：" + esc(item.why);
          row.appendChild(div);
        });
      });
    });
  }

  /* --- 练习：口语计时器 --- */
  function bindTimer(panels, id, pr) {
    var root = panels.querySelector('[data-panel="' + id + '"] #pr-' + id);
    if (!root) return;

    var display = root.querySelector("#timerDisplay");
    var bar = root.querySelector("#timerBar");
    var phaseTag = root.querySelector("#timerPhase");
    var hint = root.querySelector("#timerHint");
    var btn = root.querySelector("#timerBtn");
    var nextBtn = root.querySelector("#timerNext");
    var topicEl = root.querySelector("#cueTopic");
    var pointsEl = root.querySelector("#cuePoints");

    var card = null, running = false, timer = null;
    var phase = "prep";          // prep | speak | done
    var left = pr.prep;

    function newCard() {
      var pool = pr.cards.filter(function (c) { return c !== card; });
      card = window.shuffle(pool.length ? pool : pr.cards)[0];
      topicEl.textContent = card.topic;
      pointsEl.innerHTML = card.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      reset();
    }

    function fmt(sec) {
      return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
    }

    function paint() {
      display.textContent = fmt(Math.max(0, left));
      var total = phase === "prep" ? pr.prep : pr.speak;
      bar.style.width = Math.min(100, Math.round((1 - left / total) * 100)) + "%";
    }

    function reset() {
      clearInterval(timer);
      running = false;
      phase = "prep";
      left = pr.prep;
      display.className = "timer-display";
      phaseTag.textContent = "准备阶段";
      phaseTag.className = "tag tag-brass";
      hint.textContent = "先理思路，在纸上写下 4W1H 的关键词。";
      btn.textContent = "开始准备";
      paint();
    }

    function tick() {
      left--;
      if (left > 0) { paint(); return; }
      if (phase === "prep") {
        phase = "speak";
        left = pr.speak;
        phaseTag.textContent = "陈述阶段";
        phaseTag.className = "tag tag-primary";
        hint.textContent = "现在开始说，尽量撑满两分钟，中间不要停。";
        display.className = "timer-display running";
        paint();
      } else {
        clearInterval(timer);
        running = false;
        phase = "done";
        display.textContent = "0:00";
        display.className = "timer-display done";
        bar.style.width = "100%";
        phaseTag.textContent = "完成";
        phaseTag.className = "tag tag-good";
        hint.textContent = "说完了。回想一下：哪里卡住了？把这几个地方记下来，下次专门练。";
        btn.textContent = "再来一次";
      }
    }

    btn.addEventListener("click", function () {
      if (running) {
        clearInterval(timer);
        running = false;
        btn.textContent = "继续";
        display.classList.remove("running");
        return;
      }
      if (phase === "done") { reset(); return; }
      if (phase === "prep" && left === pr.prep) {
        display.classList.add("running");
        btn.textContent = "暂停";
      } else {
        btn.textContent = "暂停";
        display.classList.add("running");
      }
      running = true;
      timer = setInterval(tick, 1000);
    });

    nextBtn.addEventListener("click", newCard);
    newCard();
  }

  /* ======================================================================
     16 · 启动
     ====================================================================== */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
    initWeChatTip();
    registerServiceWorker();
    bindSpeakButtons(document);

    var page = document.body.getAttribute("data-page");

    if (page === "home")       { initMethods(); initHomeStats(); }
    if (page === "vocabulary") initVocabulary();
    if (page === "grammar")    initGrammar();
    if (page === "sentences")  initSentences();
    if (page === "speaking")   initSpeaking();
    if (page === "ielts")      initIELTS();
    if (page === "cet")        initCET();
  });

})();
