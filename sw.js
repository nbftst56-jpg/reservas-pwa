// Define um nome e versão para o cache
const CACHE_NAME = 'reservas-v1';

// Lista de arquivos que o PWA precisa para funcionar offline
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Evento 'install': é disparado quando o Service Worker é instalado
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento 'fetch': é disparado para cada requisição feita pela página
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se a requisição estiver no cache, retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não, faz a requisição à rede
        return fetch(event.request);
      })
  );
});

// Evento 'activate': limpa caches antigos se uma nova versão for ativada
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});