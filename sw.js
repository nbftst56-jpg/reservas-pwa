self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("reservas-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "./TSTcel1_ESSE03_Ultimo_GEMINI_residencialB_MelhorVersao.html",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
