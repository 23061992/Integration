self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('optics-pwa-cache').then(function(cache) {
      return cache.addAll([
        'oepl.html',
        'manifest.json',
        'logo.png'
        // Add other report files here if needed
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
