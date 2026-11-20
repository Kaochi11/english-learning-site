/* 静态页面可离线；完整词库在第一次浏览词库或背词页后缓存。 */
var PREFIX = "en-learning:" + self.registration.scope + ":";
var CACHE = PREFIX + "v4";
var SHELL = [
  "./", "./index.html", "./sources.html", "./grammar.html", "./vocabulary.html",
  "./sentences.html", "./speaking.html", "./memorize.html", "./ielts.html", "./cet.html",
  "./manifest.webmanifest", "./LICENSE-ECDICT.txt",
  "./assets/css/style.css", "./assets/css/studio.css",
  "./assets/js/catalog-overview.js", "./assets/js/study-stats.js",
  "./assets/js/data.js", "./assets/js/app.js", "./assets/js/word-catalog.js", "./assets/js/memorize.js",
  "./assets/icon.svg", "./assets/icon-180.png", "./assets/icon-512.png"
];
var EXTRA = new URL("./assets/js/data-extra.js", self.registration.scope).href;

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE).then(async function (cache) {
    await cache.addAll(SHELL.map(function (url) { return new Request(url, { cache: "reload" }); }));
    // 支持直接先打开词库页，而该次加载尚未被新 SW 控制的情况。
    var windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    var wordPage = windows.some(function (client) {
      if (!client.url.startsWith(self.registration.scope)) return false;
      return /\/(?:vocabulary|memorize)\.html$/.test(new URL(client.url).pathname);
    });
    if (wordPage) await cache.add(EXTRA).catch(function () {});
    return self.skipWaiting();
  }));
});

self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key.startsWith(PREFIX) && key !== CACHE;
    }).map(function (key) { return caches.delete(key); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (event) {
  var request = event.request;
  if (request.method !== "GET" || !request.url.startsWith(self.registration.scope)) return;
  var network = fetch(request);
  var cache = caches.open(CACHE);
  event.waitUntil(network.then(function (response) {
    if (!response.ok) return;
    var copy = response.clone();
    return cache.then(function (store) { return store.put(request, copy); });
  }).catch(function () {}));
  event.respondWith(network.catch(async function () {
    var store = await cache;
    var hit = await store.match(request, { ignoreSearch: request.mode === "navigate" });
    if (hit) return hit;
    if (request.mode === "navigate") return (await store.match("./index.html")) || Response.error();
    return Response.error();
  }));
});
