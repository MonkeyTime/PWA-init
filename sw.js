var CACHE_NAME = 'com-yoursite-cache-v1-0-0';
var urlsToCache = [
  '/',
  '/favicon.png',
  '/favicon.ico',
  '/touch-icon.png',
  '/touch-retina.png',
  '/touch-splash.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});