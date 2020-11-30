/******************
 * SERVICE WORKER *
 ******************/
var cacheName = 'juicee-cache';
var filesToCache = [
  'index.html',
  'favicon.ico',
  'input-data.html',
  'img/apple_splash_640.png',
  'img/apple_splash_750.png',
  'img/apple_splash_1125.png',
  'img/apple_splash_1242.png',
  'img/apple_splash_1536.png',
  'img/apple_splash_1668.png',
  'img/apple_splash_2048.png',
  'img/touch-icon-iphone.png',
  'img/juicee-logo48.png',
  'img/juicee-logo72.png',
  'img/juicee-logo96.png',
  'img/juicee-logo144.png',
  'img/juicee-logo192.png',
  'img/juicee-logo512.png',
  'img/juicee_logo.svg',
  'css/style.css',
  'css/bootstrap.min.css',
  'js/use_webworker.js',
  'js/use_serviceworker.js',
  'js/webworker.js',
  'js/main.js',
  'js/bootstrap.bundle.min.js',
  'fonts/leckerli-one-v11-latin-regular.eot',
  'fonts/leckerli-one-v11-latin-regular.svg',
  'fonts/leckerli-one-v11-latin-regular.ttf',
  'fonts/leckerli-one-v11-latin-regular.woff',
  'fonts/leckerli-one-v11-latin-regular.woff2',
  'fonts/montserrat-v15-latin-500.eot',
  'fonts/montserrat-v15-latin-500.svg',
  'fonts/montserrat-v15-latin-500.ttf',
  'fonts/montserrat-v15-latin-500.woff',
  'fonts/montserrat-v15-latin-500.woff2',
  'fonts/montserrat-v15-latin-600.eot',
  'fonts/montserrat-v15-latin-600.svg',
  'fonts/montserrat-v15-latin-600.ttf',
  'fonts/montserrat-v15-latin-600.woff',
  'fonts/montserrat-v15-latin-600.woff2',
  'fonts/montserrat-v15-latin-700.eot',
  'fonts/montserrat-v15-latin-700.svg',
  'fonts/montserrat-v15-latin-700.ttf',
  'fonts/montserrat-v15-latin-700.woff',
  'fonts/montserrat-v15-latin-700.woff2',
  'fonts/montserrat-v15-latin-800.eot',
  'fonts/montserrat-v15-latin-800.svg',
  'fonts/montserrat-v15-latin-800.ttf',
  'fonts/montserrat-v15-latin-800.woff',
  'fonts/montserrat-v15-latin-800.woff2',
  'fonts/montserrat-v15-latin-regular.eot',
  'fonts/montserrat-v15-latin-regular.svg',
  'fonts/montserrat-v15-latin-regular.ttf',
  'fonts/montserrat-v15-latin-regular.woff',
  'fonts/montserrat-v15-latin-regular.woff2',
];

self.addEventListener("install", event => {
  console.log("Service Worker Juicee installing.");
  event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker Juicee activating.");
});

self.addEventListener('fetch', event => {
  console.log("Service Worker Juicee fetching.");
  event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
  );
});

