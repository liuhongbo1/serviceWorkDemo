var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/js/index.js',
  '/img/image.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('命中');
          return response;
        }
        console.log('no命中');
        return fetch(event.request);
      }
    )
  );
});