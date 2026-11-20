const assert = require("node:assert/strict");
require("../assets/js/study-stats.js");
const stats = globalThis.StudyStats;
const now = new Date(2026, 2, 30, 0, 15);
const date = offset => stats.dateKey(stats.shiftDay(now, offset));
assert.equal(date(-1), "2026-03-29");
assert.equal(date(0), "2026-03-30");
const progress = {
  days: { [date(-1)]: { learned: 0, reviewed: 2 }, [date(-2)]: { learned: 1, reviewed: 0 } },
  settings: { goal: 15 },
  words: {
    overdueLevel6: { seen: 6, box: 6, due: +now - 1 },
    future: { seen: 6, box: 6, due: +now + 1 },
    new: { seen: 0, box: 0, due: 0 }
  }
};
const result = stats.summarize(progress, now);
assert.equal(result.due, 1);
assert.equal(result.streak, 2);
assert.equal(result.goal, 15);
assert.equal(result.recent.length, 7);
assert.equal(result.today.learned, 0);
assert.equal(result.recent[5].reviewed, 2);
assert.equal(stats.summarize(progress, stats.shiftDay(now, 1)).streak, 0);
assert.equal(stats.summarize(null, now).goal, 20);
console.log("Study stats OK");
