/* 复用现有进度键；所有日期按当前浏览器的本地日历计算。 */
(function (root) {
  "use strict";

  function dateKey(date) {
    return date.getFullYear() + "-" +
      String(date.getMonth() + 1).padStart(2, "0") + "-" +
      String(date.getDate()).padStart(2, "0");
  }

  function shiftDay(date, offset) {
    var moved = new Date(date);
    moved.setDate(moved.getDate() + offset);
    return moved;
  }

  function count(value) {
    return Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
  }

  function goal(settings) {
    return Math.min(100, Math.max(5, count(settings && settings.goal) || 20));
  }

  function isDue(state, now) {
    return !!state && state.seen > 0 && Number.isFinite(state.due) && state.due <= now;
  }

  function recent(days, length, date) {
    return Array.from({ length: length }, function (_, i) {
      var day = shiftDay(date, i + 1 - length);
      var key = dateKey(day);
      var entry = (days || {})[key] || {};
      return { key: key, weekday: day.getDay(), learned: count(entry.learned), reviewed: count(entry.reviewed) };
    });
  }

  function streak(days, date) {
    var offset = 0, total = 0;
    function active(day) {
      var entry = (days || {})[dateKey(day)] || {};
      return count(entry.learned) + count(entry.reviewed) > 0;
    }
    if (!active(date)) offset = -1;
    while (active(shiftDay(date, offset - total))) total++;
    return total;
  }

  function summarize(progress, date) {
    progress = progress || {};
    date = date || new Date();
    var days = recent(progress.days, 7, date);
    var words = Object.values(progress.words || {});
    return {
      today: days[6],
      recent: days,
      streak: streak(progress.days, date),
      goal: goal(progress.settings),
      due: words.filter(function (w) { return isDue(w, date.getTime()); }).length
    };
  }

  root.StudyStats = { key: "en-site-progress-v1", dateKey: dateKey, shiftDay: shiftDay, goal: goal, isDue: isDue, summarize: summarize };
})(typeof window !== "undefined" ? window : globalThis);
