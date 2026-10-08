/* ==========================================================================
   memorize.js — 背单词引擎
   · 词书选择（核心基础 / 雅思核心 / 雅思学术 / 雅思写作 / 雅思口语）
   · 间隔重复（Leitner 记忆盒）
   · 5 种练习模式 + 打卡统计，进度存在本地
   ========================================================================== */

(function () {
  "use strict";

  var DAY = 24 * 60 * 60 * 1000;
  var MIN = 60 * 1000;

  /* 每个记忆盒对应的复习间隔（毫秒），box 0 = 还没学过 */
  var INTERVALS = [0, 10 * MIN, 1 * DAY, 3 * DAY, 7 * DAY, 21 * DAY, 60 * DAY];
  var MASTER_BOX = 6;
  var MAX_DUE_PER_SESSION = 30;
  var MAX_NEW_PER_SESSION = 20;

  var STORE_KEY = "en-site-progress-v1";

  /* ======================================================================
     1 · 词库
     ====================================================================== */
  /* 词书归属判断：b 可能是字符串（项目原有）或数组（重叠词书）。
     重叠设计下同一个词会同时属于多本词书，必须用"包含"而不是"相等"。 */
  function inBooks(bookVal, bookList) {
    if (!bookVal) return bookList.indexOf("core") !== -1;
    if (Object.prototype.toString.call(bookVal) === "[object Array]") {
      for (var i = 0; i < bookVal.length; i++) {
        if (bookList.indexOf(bookVal[i]) !== -1) return true;
      }
      return false;
    }
    return bookList.indexOf(bookVal) !== -1;
  }

  function buildDeck() {
    var seen = {};
    var out = [];
    (window.WORD_BANK || []).forEach(function (w) {
      var key = w.w.toLowerCase();
      if (seen[key]) return;
      var item = {
        key: key,
        w: w.w, p: w.p, t: w.t, m: w.m, e: w.e, z: w.z,
        book: w.b || "core",        // 字符串或数组（重叠词书）
        cat: w.c
      };
      seen[key] = item;
      out.push(item);
    });
    return out;
  }

  var DECK = buildDeck();
  var BOOKS = window.WORDBOOKS || [{ id: "core", name: "核心基础", icon: "🧱" }];

  function bookMeta(id) {
    for (var i = 0; i < BOOKS.length; i++) if (BOOKS[i].id === id) return BOOKS[i];
    return { id: id, name: id, icon: "📘", desc: "" };
  }

  /* ======================================================================
     2 · 进度存取
     ====================================================================== */
  function defaultProgress() {
    return {
      words: {},
      days: {},
      streak: { current: 0, last: null },
      settings: { books: ["core"], mode: "flash", goal: 20 }
    };
  }

  var progress = (function () {
    var saved = window.Store.get(STORE_KEY, null);
    var base = defaultProgress();
    if (!saved || typeof saved !== "object") return base;
    base.words = saved.words || {};
    base.days = saved.days || {};
    base.streak = saved.streak || base.streak;
    var s = saved.settings || {};
    base.settings.mode = s.mode || base.settings.mode;
    base.settings.goal = s.goal || base.settings.goal;
    // 兼容旧版本（那时存的是 cats）
    if (Array.isArray(s.books)) base.settings.books = s.books;
    else if (Array.isArray(s.cats) && s.cats.length) {
      var known = {};
      BOOKS.forEach(function (b) { known[b.id] = 1; });
      var legacy = s.cats.filter(function (c) { return known[c]; });
      base.settings.books = legacy.length ? legacy : ["core"];
    }
    return base;
  })();

  function save() { window.Store.set(STORE_KEY, progress); }

  function wState(key) {
    if (!progress.words[key]) {
      progress.words[key] = { box: 0, due: 0, seen: 0, correct: 0, wrong: 0, last: 0 };
    }
    return progress.words[key];
  }

  function today() { return window.todayKey(); }

  function dayStats(create) {
    var k = today();
    if (!progress.days[k] && create) {
      progress.days[k] = { learned: 0, reviewed: 0, correct: 0, wrong: 0 };
    }
    return progress.days[k] || { learned: 0, reviewed: 0, correct: 0, wrong: 0 };
  }

  function touchStreak() {
    var k = today();
    if (progress.streak.last === k) return;
    var yesterday = window.todayKey(Date.now() - DAY);
    progress.streak.current = (progress.streak.last === yesterday) ? progress.streak.current + 1 : 1;
    progress.streak.last = k;
  }

  /* ======================================================================
     3 · 统计
     ====================================================================== */
  function stats() {
    var now = Date.now();
    var learned = 0, mastered = 0, due = 0;
    Object.keys(progress.words).forEach(function (k) {
      var s = progress.words[k];
      if (s.seen > 0) learned++;
      if (s.box >= MASTER_BOX) mastered++;
      else if (s.due <= now) due++;
    });
    var d = dayStats(false);
    return {
      learnedTotal: learned, mastered: mastered, due: due,
      todayLearned: d.learned, todayReviewed: d.reviewed,
      todayCorrect: d.correct, todayWrong: d.wrong,
      streak: progress.streak.current
    };
  }

  function bookStats(id) {
    var total = 0, learned = 0, mastered = 0;
    DECK.forEach(function (item) {
      if (!inBooks(item.book, [id])) return;
      total++;
      var s = progress.words[item.key];
      if (s && s.seen > 0) learned++;
      if (s && s.box >= MASTER_BOX) mastered++;
    });
    return { total: total, learned: learned, mastered: mastered };
  }

  /* ======================================================================
     3b · 等级与经验值
     ====================================================================== */
  var LEVELS = [
    { xp: 0,     title: "初学者" },
    { xp: 300,   title: "入门" },
    { xp: 900,   title: "学徒" },
    { xp: 2000,  title: "熟练" },
    { xp: 4000,  title: "精通" },
    { xp: 8000,  title: "高手" },
    { xp: 15000, title: "大师" }
  ];

  /* 学一个新词 10 XP，每次复习 4 XP，「已掌握」额外 +20 */
  function xpOf() {
    var xp = 0;
    Object.keys(progress.words).forEach(function (k) {
      var s = progress.words[k];
      if (!s.seen) return;
      xp += 10 + Math.max(0, s.seen - 1) * 4 + (s.box >= MASTER_BOX ? 20 : 0);
    });
    return xp;
  }

  function levelOf(xp) {
    var i = 0;
    for (var j = 0; j < LEVELS.length; j++) if (xp >= LEVELS[j].xp) i = j;
    var cur = LEVELS[i];
    var next = LEVELS[i + 1] || null;
    return {
      num: i + 1,
      title: cur.title,
      xp: xp,
      curBase: cur.xp,
      next: next ? next.xp : null,
      pct: next ? Math.min(100, Math.round(((xp - cur.xp) / (next.xp - cur.xp)) * 100)) : 100
    };
  }

  /* ======================================================================
     3c · 成就
     ====================================================================== */
  var ACHIEVEMENTS = [
    { id: "first",     icon: "🌱", name: "第一步",     desc: "完成第一组学习",       test: function (s) { return s.learnedTotal >= 1; } },
    { id: "streak3",   icon: "🔥", name: "三天不断",   desc: "连续打卡 3 天",         test: function (s) { return s.streak >= 3; } },
    { id: "streak7",   icon: "⚡", name: "一周坚持",   desc: "连续打卡 7 天",         test: function (s) { return s.streak >= 7; } },
    { id: "streak30",  icon: "🏅", name: "满月",       desc: "连续打卡 30 天",        test: function (s) { return s.streak >= 30; } },
    { id: "words50",   icon: "📚", name: "五十词",     desc: "累计学习 50 个词",      test: function (s) { return s.learnedTotal >= 50; } },
    { id: "words150",  icon: "🏛", name: "一百五十词", desc: "累计学习 150 个词",     test: function (s) { return s.learnedTotal >= 150; } },
    { id: "words300",  icon: "🗼", name: "三百词",     desc: "累计学习 300 个词",     test: function (s) { return s.learnedTotal >= 300; } },
    { id: "master20",  icon: "✅", name: "二十精通",   desc: "20 个词进入长期记忆",   test: function (s) { return s.mastered >= 20; } },
    { id: "master100", icon: "👑", name: "百词精通",   desc: "100 个词进入长期记忆",  test: function (s) { return s.mastered >= 100; } },
    { id: "allbooks",  icon: "🗺", name: "全线启动",   desc: "每本词书都学过至少一个词", test: function () {
        var covered = {};
        Object.keys(progress.words).forEach(function (k) {
          var w = progress.words[k];
          if (!w.seen) return;
          var item = DECK.filter(function (d) { return d.key === k; })[0];
          if (item) covered[item.book] = 1;
        });
        return BOOKS.every(function (b) { return covered[b.id]; });
      } }
  ];

  /* ======================================================================
     3d · 数字滚动 & 庆祝
     ====================================================================== */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function countUp(el, to) {
    if (!el) return;
    to = Number(to) || 0;
    var from = Number(String(el.textContent).replace(/[^\d]/g, "")) || 0;
    if (reduceMotion || from === to) { el.textContent = to; return; }
    var t0 = null;
    function step(now) {
      if (t0 === null) t0 = now;
      var t = Math.min(1, (now - t0) / 620);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    // 兜底：标签页被挂起时 rAF 可能不触发，保证最终值一定正确
    setTimeout(function () { el.textContent = to; }, 760);
  }

  function celebrate() {
    if (reduceMotion) return;
    var layer = document.createElement("div");
    layer.className = "confetti-layer";
    var colors = ["#A87B2E", "#16324F", "#16705A", "#D6AC63", "#4C5464"];
    for (var i = 0; i < 18; i++) {
      var p = document.createElement("i");
      p.style.left = (5 + Math.random() * 90) + "%";
      p.style.background = colors[i % colors.length];
      p.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
      p.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
      p.style.animationDelay = (Math.random() * 0.5) + "s";
      p.style.animationDuration = (1.6 + Math.random() * 1.1) + "s";
      p.style.opacity = String(0.5 + Math.random() * 0.5);
      layer.appendChild(p);
    }
    document.body.appendChild(layer);
    setTimeout(function () { if (layer.parentNode) layer.parentNode.removeChild(layer); }, 3600);
  }

  /* ======================================================================
     3e · 热力图
     ====================================================================== */
  function renderHeatmap() {
    var el = window.byId("heatmap");
    if (!el) return;

    var CELLS = 84;                       // 12 周
    var todayMs = new Date(window.todayKey()).getTime();
    var startMs = todayMs - (CELLS - 1) * DAY;
    // 起点回退到周一，保证每列是一整周
    var dow = (new Date(startMs).getDay() + 6) % 7;
    startMs -= dow * DAY;

    var html = "";
    var activeDays = 0;
    for (var ms = startMs; ms <= todayMs; ms += DAY) {
      var key = window.todayKey(ms);
      var st = progress.days[key];
      var n = st ? (st.learned + st.reviewed) : 0;
      if (n > 0) activeDays++;
      var lv = n === 0 ? 0 : n < 10 ? 1 : n < 25 ? 2 : n < 50 ? 3 : 4;
      var cls = lv ? "hm-cell lv" + lv : "hm-cell";
      if (key === window.todayKey()) cls += " today";
      html += '<span class="' + cls + '" title="' + key + "　" + n + ' 词"></span>';
    }
    // 补齐最后一周
    var tail = (7 - ((new Date(todayMs).getDay() + 6) % 7) - 1);
    for (var t = 0; t < tail; t++) html += '<span class="hm-cell blank"></span>';

    el.innerHTML = html;

    var total = window.byId("hmTotal");
    if (total) {
      total.textContent = "累计 " + activeDays + " 天";
      total.className = "progress-pill" + (activeDays > 0 ? "" : "");
    }
  }

  /* ======================================================================
     3f · 成就渲染
     ====================================================================== */
  function renderAchievements(s) {
    var el = window.byId("achGrid");
    if (!el) return;
    var unlocked = 0;
    var html = ACHIEVEMENTS.map(function (a) {
      var on = false;
      try { on = !!a.test(s); } catch (e) { on = false; }
      if (on) unlocked++;
      return '<div class="ach' + (on ? " on" : "") + '" title="' + window.escapeHTML(a.desc) + '">' +
          '<span class="ach-icon">' + a.icon + '</span>' +
          '<span><span class="ach-name">' + window.escapeHTML(a.name) + '</span>' +
          '<span class="ach-desc" style="display:block">' + window.escapeHTML(a.desc) + '</span></span>' +
        '</div>';
    }).join("");
    el.innerHTML = html;

    var cnt = window.byId("achCount");
    if (cnt) {
      cnt.textContent = unlocked + " / " + ACHIEVEMENTS.length;
      cnt.className = "progress-pill" + (unlocked === ACHIEVEMENTS.length ? " done" : "");
    }
  }

  /* ======================================================================
     4 · 选词
     ====================================================================== */
  function activeBooks() {
    var b = progress.settings.books;
    if (!b || !b.length) return BOOKS.map(function (x) { return x.id; });
    return b;
  }

  function deckForBooks() {
    var books = activeBooks();
    return DECK.filter(function (it) { return inBooks(it.book, books); });
  }

  function buildQueue() {
    var now = Date.now();
    var dueList = [], newList = [];

    deckForBooks().forEach(function (item) {
      var s = progress.words[item.key];
      if (!s || s.seen === 0) newList.push(item);
      else if (s.due <= now && s.box < MASTER_BOX) dueList.push(item);
    });

    dueList.sort(function (a, b) { return progress.words[a.key].due - progress.words[b.key].due; });

    var goal = progress.settings.goal || 20;
    var learnedToday = dayStats(false).learned;
    var allowance = Math.max(0, Math.min(goal - learnedToday, MAX_NEW_PER_SESSION));

    return window.shuffle(
      dueList.slice(0, MAX_DUE_PER_SESSION).concat(newList.slice(0, allowance))
    );
  }

  function dueListNow() {
    var now = Date.now();
    return deckForBooks().filter(function (item) {
      var s = progress.words[item.key];
      return s && s.seen > 0 && s.due <= now && s.box < MASTER_BOX;
    }).sort(function (a, b) { return progress.words[a.key].due - progress.words[b.key].due; });
  }

  /* ======================================================================
     5 · 评分（三档）
     ====================================================================== */
  function grade(item, quality) {
    var s = wState(item.key);
    var isNew = s.seen === 0;
    var d = dayStats(true);

    s.seen++;
    s.last = Date.now();

    if (quality === "know") {
      s.correct++;
      s.box = Math.min(s.box + 1, MASTER_BOX);
      s.due = Date.now() + INTERVALS[s.box];
      d.correct++;
    } else if (quality === "vague") {
      s.wrong++;
      s.box = Math.max(1, s.box);
      s.due = Date.now() + 10 * MIN;
      d.wrong++;
    } else {
      s.wrong++;
      s.box = 1;
      s.due = Date.now() + INTERVALS[1];
      d.wrong++;
    }

    if (isNew) d.learned++; else d.reviewed++;
    touchStreak();
    save();
  }

  /* ======================================================================
     6 · 视图切换
     ====================================================================== */
  var VIEWS = { setup: "setupView", study: "studyView", result: "resultView" };

  function show(name) {
    Object.keys(VIEWS).forEach(function (k) {
      var el = window.byId(VIEWS[k]);
      if (!el) return;
      var active = k === name;
      el.classList.toggle("hide", !active);
      if (active) {
        el.classList.remove("view-in");
        void el.offsetWidth;
        el.classList.add("view-in");
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ======================================================================
     7 · 设置界面
     ====================================================================== */
  function renderDeckPicker() {
    var el = window.byId("deckPicker");
    if (!el) return;
    var active = activeBooks();

    el.innerHTML = BOOKS.map(function (b) {
      var st = bookStats(b.id);
      var pct = st.total ? Math.round((st.mastered / st.total) * 100) : 0;
      var isOn = active.indexOf(b.id) > -1;
      return '<button type="button" class="deck-opt' + (isOn ? " active" : "") + '" data-book="' + b.id + '">' +
          '<span class="deck-check"></span>' +
          '<span class="deck-top">' +
            '<span style="font-size:1.05rem">' + (b.icon || "📘") + '</span>' +
            '<span class="deck-name">' + window.escapeHTML(b.name) + '</span>' +
            '<span class="deck-count">' + st.learned + "/" + st.total + '</span>' +
          '</span>' +
          '<span class="deck-meta">' + window.escapeHTML(b.desc || "") + '</span>' +
          '<span class="deck-track"><i style="width:' + pct + '%"></i></span>' +
          '<span class="deck-foot">已掌握 ' + st.mastered + ' / ' + st.total + '</span>' +
        '</button>';
    }).join("");

    el.querySelectorAll(".deck-opt").forEach(function (opt) {
      opt.addEventListener("click", function () {
        var id = opt.getAttribute("data-book");
        var list = activeBooks().slice();
        var i = list.indexOf(id);
        if (i > -1) {
          if (list.length === 1) return;      // 至少留一本
          list.splice(i, 1);
        } else {
          list.push(id);
        }
        progress.settings.books = list;
        save();
        renderDeckPicker();
        renderSetupStats();
      });
    });
  }

  function renderModePicker() {
    var el = window.byId("modePicker");
    if (!el) return;
    var modes = [
      { id: "flash",   icon: "🃏", name: "卡片记忆", desc: "看单词回忆意思，自己判断掌握程度" },
      { id: "choice",  icon: "✅", name: "看词选义", desc: "四选一，训练快速识别" },
      { id: "reverse", icon: "🔁", name: "看义选词", desc: "从中文反推英文，训练输出" },
      { id: "spell",   icon: "⌨️", name: "看义拼写", desc: "难度最高，检验是否真的会写" },
      { id: "listen",  icon: "🎧", name: "听音辨义", desc: "听发音选意思，练听力反应" }
    ];
    var cur = progress.settings.mode;

    el.innerHTML = modes.map(function (m) {
      return '<button type="button" class="mode-opt' + (m.id === cur ? " active" : "") + '" data-mode="' + m.id + '">' +
          '<b>' + m.icon + " " + m.name + '</b><small>' + m.desc + '</small></button>';
    }).join("");

    el.querySelectorAll(".mode-opt").forEach(function (opt) {
      opt.addEventListener("click", function () {
        progress.settings.mode = opt.getAttribute("data-mode");
        save();
        renderModePicker();
      });
    });
  }

  function renderSetupStats() {
    var s = stats();
    var set = function (id, v) { var el = window.byId(id); if (el) el.textContent = v; };
    var setNum = function (id, v) { countUp(window.byId(id), v); };

    setNum("stStreak", s.streak);
    setNum("stDue", s.due);
    setNum("stLearned", s.learnedTotal);
    setNum("stMastered", s.mastered);

    /* 等级 / 经验值 */
    var xp = xpOf();
    var lv = levelOf(xp);
    set("lvNum", "Lv." + lv.num);
    set("lvTitle", lv.title);
    var xpBar = window.byId("xpBar");
    if (xpBar) xpBar.style.width = lv.pct + "%";
    set("xpText", lv.next
      ? (xp - lv.curBase) + " / " + (lv.next - lv.curBase) + " XP　·　再攒 " + (lv.next - xp) + " XP 升级"
      : xp + " XP　·　已达最高等级");

    var picked = deckForBooks();
    set("stPool", picked.length);

    var bar = window.byId("totalBar");
    if (bar) {
      var pct = picked.length ? Math.round((picked.filter(function (i) {
        var w = progress.words[i.key];
        return w && w.seen > 0;
      }).length / picked.length) * 100) : 0;
      bar.style.width = pct + "%";
    }
    var totalLabel = window.byId("stTotal");
    if (totalLabel) {
      var learnedInPool = picked.filter(function (i) {
        var w = progress.words[i.key];
        return w && w.seen > 0;
      }).length;
      totalLabel.textContent = learnedInPool + " / " + picked.length;
    }

    var goal = progress.settings.goal || 20;
    var ringPct = Math.min(100, Math.round((s.todayLearned / goal) * 100));
    var ring = window.byId("dayRing");
    if (ring) {
      ring.style.setProperty("--p", ringPct);
      var sp = ring.querySelector("span");
      if (sp) sp.innerHTML = s.todayLearned + " / " + goal + "<br>今日目标";
    }

    // 今日复习清单
    var listEl = window.byId("dueList");
    if (listEl) {
      var due = dueListNow();
      if (!due.length) {
        listEl.innerHTML = '<div class="muted small">目前没有到期的复习词，可以开始学新词 🎉</div>';
      } else {
        listEl.innerHTML = due.slice(0, 6).map(function (item) {
          var st = progress.words[item.key];
          var mins = Math.max(1, Math.round((Date.now() - st.due) / MIN));
          return '<div class="review-row">' +
              '<span class="rw-word">' + window.escapeHTML(item.w) + '</span>' +
              '<span class="muted small">' + window.escapeHTML(item.m) + '</span>' +
              '<span class="rw-meta">' + (mins > 60 ? Math.round(mins / 60) + " 小时前到期" : mins + " 分钟前到期") + '</span>' +
            '</div>';
        }).join("") +
        (due.length > 6 ? '<div class="muted small mt-1">……还有 ' + (due.length - 6) + ' 个</div>' : "");
      }
    }

    /* 按钮状态：顶部 CTA 与底部常驻条保持一致 */
    var q = buildQueue();
    var label = q.length ? "开始学习（" + q.length + " 个词）" : "今日任务已完成";
    ["startBtn", "startBtn2"].forEach(function (id) {
      var b = window.byId(id);
      if (!b) return;
      b.disabled = !q.length;
      b.textContent = label;
    });
    var hint = window.byId("startHint");
    if (hint) hint.textContent = q.length ? "" : "明天再来，先休息一下";

    var sbCount = window.byId("sbCount");
    if (sbCount) {
      sbCount.innerHTML = q.length ? '本次 <b>' + q.length + '</b> 个词' : "暂无待学词";
    }
    var sbBooks = window.byId("sbBooks");
    if (sbBooks) {
      sbBooks.textContent = activeBooks().map(function (id) { return bookMeta(id).name; }).join(" + ");
    }

    renderHeatmap();
    renderAchievements(s);
  }

  /* ======================================================================
     8 · 学习界面
     ====================================================================== */
  var session = null;

  function startSession() {
    var queue = buildQueue();
    if (!queue.length) return;
    session = {
      mode: progress.settings.mode,
      queue: queue,
      index: 0,
      round: 1,
      total: queue.length,
      done: 0,
      correct: 0,
      wrong: 0,
      xpStart: xpOf(),
      again: []
    };
    show("study");
    renderCard();
  }

  function updateProgressBar() {
    var bar = window.byId("studyBar");
    var label = window.byId("studyCount");
    var pct = session.total ? Math.round((session.done / session.total) * 100) : 0;
    if (bar) bar.style.width = pct + "%";
    if (label) {
      var n = Math.min(session.done + 1, session.total);
      label.textContent = n + " / " + session.total;
    }
  }

  var MODE_NAMES = {
    flash: "卡片记忆", choice: "看词选义", reverse: "看义选词",
    spell: "看义拼写", listen: "听音辨义"
  };

  function renderCard() {
    if (session.index >= session.queue.length) {
      if (session.again.length) {
        session.round++;
        session.queue = window.shuffle(session.again);
        session.again = [];
        session.index = 0;
        session.total += session.queue.length;
      } else {
        finishSession();
        return;
      }
    }

    var item = session.queue[session.index];
    var card = window.byId("cardBody");
    var actions = window.byId("cardActions");
    if (!card) return;

    updateProgressBar();

    var modeEl = window.byId("studyMode");
    if (modeEl) modeEl.textContent = MODE_NAMES[session.mode] || "";

    var s = progress.words[item.key] || { box: 0 };
    var tag = window.byId("fcTag");
    if (tag) tag.textContent = session.round > 1 ? "第 " + session.round + " 轮 · 重练"
      : bookMeta(Object.prototype.toString.call(item.book) === "[object Array]" ? item.book[0] : item.book).name;
    var box = window.byId("fcBox");
    if (box) box.textContent = s.box === 0 ? "新词" : "第 " + s.box + " 盒";

    // 卡片入场动画
    var fc = card.closest(".flashcard");
    if (fc) { fc.classList.remove("card-in"); void fc.offsetWidth; fc.classList.add("card-in"); }

    if (session.mode === "flash") renderFlash(item, card, actions);
    else if (session.mode === "choice") renderChoice(item, card, actions, false);
    else if (session.mode === "reverse") renderChoice(item, card, actions, true);
    else if (session.mode === "spell") renderSpell(item, card, actions);
    else if (session.mode === "listen") renderListen(item, card, actions);
  }

  function bindRate(scope, item) {
    scope.querySelectorAll("[data-rate]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (scope.dataset.locked === "1") return;
        scope.dataset.locked = "1";
        scope.querySelectorAll("[data-rate]").forEach(function (b) { b.disabled = true; });
        var q = btn.getAttribute("data-rate");
        grade(item, q);
        afterAnswer(q === "know", item, item.w, q);
      });
    });
  }

  function rateHTML() {
    return '<div class="fc-actions">' +
        '<button class="btn btn-ok" data-rate="know">😃 想起来了</button>' +
        '<button class="btn btn-ghost" data-rate="vague">🤔 有点模糊</button>' +
        '<button class="btn btn-danger" data-rate="blank">😵 完全不会</button>' +
      '</div>' +
      '<div class="muted small mt-2 center">快捷键：1 想起来 · 2 模糊 · 3 不会</div>';
  }

  function extraHTML(item) {
    return '<div class="fc-extra">' +
        '<span class="en">' + window.escapeHTML(item.e) + '</span>' +
        '<span class="zh">' + window.escapeHTML(item.z) + '</span>' +
      '</div>';
  }

  /* --- 卡片模式 --- */
  function renderFlash(item, card, actions) {
    card.innerHTML =
      '<div class="fc-word">' + window.escapeHTML(item.w) + '</div>' +
      '<div class="fc-phon">' + window.escapeHTML(item.p) + '</div>' +
      '<button class="speak-btn" data-speak="' + window.escapeHTML(item.w) + '" title="朗读" style="margin-top:8px">🔊</button>' +
      '<div class="fc-divider"></div>' +
      '<div id="flashAnswer" class="hide fc-answer" style="display:flex;flex-direction:column;gap:9px;align-items:center">' +
        '<div class="fc-meaning">' + window.escapeHTML(item.m) + '</div>' +
        '<div class="muted small">' + window.escapeHTML(item.t) + '</div>' +
        extraHTML(item) +
      '</div>';

    actions.innerHTML =
      '<div class="fc-actions" id="revealWrap"><button class="btn btn-lg" id="revealBtn">显示答案　<span class="muted small">空格</span></button></div>' +
      '<div id="rateSlot" class="hide"></div>';

    window.bindSpeakButtons(card);
    var sb = card.querySelector(".speak-btn");
    window.speakEN(item.w, sb);

    window.byId("revealBtn").addEventListener("click", function () {
      window.byId("flashAnswer").classList.remove("hide");
      var wrap = window.byId("revealWrap");
      if (wrap) wrap.classList.add("hide");
      var slot = window.byId("rateSlot");
      slot.classList.remove("hide");
      slot.innerHTML = rateHTML();
      bindRate(slot, item);
    });
  }

  /* --- 选择题 / 看义选词 --- */
  function renderChoice(item, card, actions, reverse) {
    if (reverse) {
      card.innerHTML =
        '<div class="fc-prompt">下面这个意思，对应的英文是——</div>' +
        '<div class="fc-meaning">' + window.escapeHTML(item.m) + '</div>' +
        '<div class="fc-divider"></div>' +
        '<div class="fc-extra"><span class="en">' +
          window.escapeHTML((function () {
        if (!item.e) return item.p ? ("发音提示：" + item.p + "（本词暂无例句）") : "（本词暂无例句，凭释义回忆）";
        var head = item.w.split(" ")[0];
        var re;
        try {
          re = new RegExp(head.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
        } catch (err) {
          return item.e;
        }
        return item.e.replace(re, "______");
      })()) +
        '</span><span class="zh">' + window.escapeHTML(item.z) + '</span></div>';
    } else {
      card.innerHTML =
        '<div class="fc-prompt">这个单词是什么意思？</div>' +
        '<div class="fc-word">' + window.escapeHTML(item.w) + '</div>' +
        '<div class="fc-phon">' + window.escapeHTML(item.p) + '</div>' +
        '<button class="speak-btn" data-speak="' + window.escapeHTML(item.w) + '" title="朗读" style="margin-top:8px">🔊</button>';
      window.bindSpeakButtons(card);
    }

    var pool = window.shuffle(DECK.filter(function (d) {
      return d.key !== item.key && d.m !== item.m;
    })).slice(0, 3);
    var options = window.shuffle(pool.concat([item]));
    var keys = ["A", "B", "C", "D"];

    actions.innerHTML = '<div class="options">' + options.map(function (o, i) {
      return '<button class="option" data-key="' + o.key + '">' +
          '<span class="opt-key">' + keys[i] + '</span>' +
          window.escapeHTML(reverse ? o.w : o.m) + '</button>';
    }).join("") + '</div>';

    actions.querySelectorAll(".option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (actions.dataset.answered === "1") return;
        actions.dataset.answered = "1";
        var ok = btn.getAttribute("data-key") === item.key;
        actions.querySelectorAll(".option").forEach(function (b) {
          b.disabled = true;
          if (b.getAttribute("data-key") === item.key) b.classList.add("correct");
        });
        if (!ok) btn.classList.add("wrong");
        grade(item, ok ? "know" : "blank");
        afterAnswer(ok, item, reverse ? item.w : item.m);
      });
    });
  }

  /* --- 拼写 --- */
  function renderSpell(item, card, actions) {
    card.innerHTML =
      '<div class="fc-prompt">写出下面这个意思对应的英文</div>' +
      '<div class="fc-meaning">' + window.escapeHTML(item.m) + '</div>' +
      '<div class="muted small">' + window.escapeHTML(item.t) + ' · 共 ' + item.w.length + ' 个字符</div>' +
      '<div class="fc-divider"></div>' +
      '<button class="btn btn-ghost btn-sm" id="spellHint">💡 听发音提示</button>' +
      '<input class="spell-input" id="spellInput" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="输入英文单词">';

    actions.innerHTML = '<div class="fc-actions">' +
        '<button class="btn btn-lg" id="spellCheck">检查答案</button>' +
        '<button class="btn btn-ghost" id="spellSkip">不会，看答案</button>' +
      '</div>';

    var input = window.byId("spellInput");
    input.focus();

    window.byId("spellHint").addEventListener("click", function () { window.speakEN(item.w, this); });

    function finish(ok) {
      if (input.disabled) return;
      input.disabled = true;
      input.classList.add(ok ? "correct" : "wrong");
      var wrap = window.byId("spellCheck").parentElement;
      if (wrap) wrap.classList.add("hide");
      if (!ok) {
        var fb = document.createElement("div");
        fb.className = "notice notice-warn mt-2 mb-0";
        fb.innerHTML = '<span class="ico">✍️</span><span>正确答案：<b class="en">' +
          window.escapeHTML(item.w) + '</b>　' + window.escapeHTML(item.p) + '</span>';
        card.appendChild(fb);
      }
      grade(item, ok ? "know" : "blank");
      afterAnswer(ok, item, item.w);
    }

    window.byId("spellCheck").addEventListener("click", function () {
      finish(input.value.trim().toLowerCase() === item.key);
    });
    window.byId("spellSkip").addEventListener("click", function () { finish(false); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") finish(input.value.trim().toLowerCase() === item.key);
    });
  }

  /* --- 听音辨义 --- */
  function renderListen(item, card, actions) {
    card.innerHTML =
      '<div class="fc-prompt">听发音，选出正确的意思</div>' +
      '<button class="btn btn-soft btn-lg" id="listenPlay">🔊 再听一次</button>' +
      '<div class="muted small">' + window.escapeHTML(item.t) + ' · ' + item.w.length + ' 个字母</div>';

    var pool = window.shuffle(DECK.filter(function (d) {
      return d.key !== item.key && d.m !== item.m;
    })).slice(0, 3);
    var options = window.shuffle(pool.concat([item]));
    var keys = ["A", "B", "C", "D"];

    actions.innerHTML = '<div class="options">' + options.map(function (o, i) {
      return '<button class="option" data-key="' + o.key + '">' +
          '<span class="opt-key">' + keys[i] + '</span>' + window.escapeHTML(o.m) + '</button>';
    }).join("") + '</div>';

    setTimeout(function () { window.speakEN(item.w, window.byId("listenPlay")); }, 250);
    window.byId("listenPlay").addEventListener("click", function () { window.speakEN(item.w, this); });

    actions.querySelectorAll(".option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (actions.dataset.answered === "1") return;
        actions.dataset.answered = "1";
        var ok = btn.getAttribute("data-key") === item.key;
        actions.querySelectorAll(".option").forEach(function (b) {
          b.disabled = true;
          if (b.getAttribute("data-key") === item.key) b.classList.add("correct");
        });
        if (!ok) btn.classList.add("wrong");
        grade(item, ok ? "know" : "blank");
        afterAnswer(ok, item, item.w);
      });
    });
  }

  /* --- 答题反馈与推进 --- */
  function afterAnswer(ok, item, spoken, quality) {
    if (!ok) session.again.push(item);
    session.done++;
    if (ok) session.correct++; else session.wrong++;

    var strip = window.byId("feedbackStrip");
    if (strip) {
      var msg = quality === "vague"
        ? "🤔 标记为「有点模糊」——10 分钟后会再考你一次"
        : ok
          ? "😃 记住了！下次复习时间已经往后推"
          : "😵 没关系，这个词本轮马上会再出现";
      strip.className = "notice " + (ok ? "notice-ok" : "notice-brass");
      strip.innerHTML = '<span class="ico">' + (ok ? "✅" : "🔁") + '</span><span>' + msg +
        (spoken ? '　<b class="en">' + window.escapeHTML(spoken) + '</b>' : '') + '</span>';
      strip.classList.remove("hide");
    }

    var actions = window.byId("cardActions");
    if (actions) actions.dataset.answered = "";

    setTimeout(function () {
      if (strip) strip.classList.add("hide");
      session.index++;
      renderCard();
    }, ok ? 620 : 1250);
  }

  /* --- 结束 --- */
  function finishSession() {
    var total = session.correct + session.wrong;
    var rate = total ? Math.round((session.correct / total) * 100) : 0;
    var gain = Math.max(0, xpOf() - session.xpStart);
    var s = stats();
    var set = function (id, v) { var el = window.byId(id); if (el) el.textContent = v; };

    var emoji = window.byId("resultEmoji");
    if (emoji) emoji.textContent = rate >= 90 ? "🏆" : rate >= 70 ? "💪" : rate >= 50 ? "📈" : "🌱";

    set("resRate", rate + "%");
    set("resTotal", total);
    set("resXp", "+" + gain);
    set("resCorrect", session.correct);
    set("resWrong", session.wrong);
    set("resMastered", s.mastered);
    set("resStreak", s.streak);

    var comment = window.byId("resComment");
    if (comment) {
      comment.textContent = rate >= 90
        ? "非常棒！这一组掌握度很高，明天再复习一轮就进入长期记忆了。"
        : rate >= 70
          ? "不错的成绩。把出错的那几个词单独看两眼，效果会更好。"
          : rate >= 50
            ? "已经记住一半了。别急，重复几次就会稳定下来——这是所有人的必经过程。"
            : "这些词对你还比较陌生，很正常。明天再考一次，正确率会明显上升。";
    }

    session = null;
    show("result");
    if (rate >= 70) celebrate();
  }

  /* ======================================================================
     9 · 初始化
     ====================================================================== */
  function refreshSetup() {
    renderDeckPicker();
    renderModePicker();
    renderSetupStats();
    var goalInput = window.byId("goalInput");
    if (goalInput) goalInput.value = progress.settings.goal;
  }

  function bindSetup() {
    var startBtn = window.byId("startBtn");
    if (startBtn) startBtn.addEventListener("click", startSession);
    var startBtn2 = window.byId("startBtn2");
    if (startBtn2) startBtn2.addEventListener("click", startSession);

    var goalInput = window.byId("goalInput");
    if (goalInput) {
      goalInput.addEventListener("change", function () {
        var n = parseInt(goalInput.value, 10);
        if (isNaN(n) || n < 5) n = 5;
        if (n > 100) n = 100;
        goalInput.value = n;
        progress.settings.goal = n;
        save();
        renderSetupStats();
      });
    }

    var allBtn = window.byId("selectAllBooks");
    if (allBtn) allBtn.addEventListener("click", function () {
      progress.settings.books = BOOKS.map(function (b) { return b.id; });
      save(); refreshSetup();
    });

    var resetBtn = window.byId("resetBtn");
    if (resetBtn) resetBtn.addEventListener("click", function () {
      if (!window.confirm("确定清空所有学习记录吗？此操作无法撤销。")) return;
      progress = defaultProgress();
      save();
      refreshSetup();
    });

    var quitBtn = window.byId("quitBtn");
    if (quitBtn) quitBtn.addEventListener("click", function () {
      if (session && !window.confirm("退出这一组？已经评分的词会保留。")) return;
      session = null;
      refreshSetup();
      show("setup");
    });

    var againBtn = window.byId("againBtn");
    if (againBtn) againBtn.addEventListener("click", startSession);

    var backBtn = window.byId("backToSetup");
    if (backBtn) backBtn.addEventListener("click", function () { refreshSetup(); show("setup"); });
  }

  /* 键盘快捷键 */
  document.addEventListener("keydown", function (e) {
    if (!session) return;
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;

    if (e.key === " " && session.mode === "flash") {
      var rb = window.byId("revealBtn");
      if (rb && rb.offsetParent !== null) { e.preventDefault(); rb.click(); }
      return;
    }
    if (session.mode === "flash" && ["1", "2", "3"].indexOf(e.key) > -1) {
      var map = { "1": "know", "2": "vague", "3": "blank" };
      var btn = document.querySelector('[data-rate="' + map[e.key] + '"]');
      if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    if (document.body.getAttribute("data-page") !== "memorize") return;
    bindSetup();
    refreshSetup();
    show("setup");
  });

})();
