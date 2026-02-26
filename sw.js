const cacheName = 'prayer-app-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600&family=Amiri&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});
ো
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
