/******************
 * SERVICE WORKER *
 ******************/
var cacheName = 'lab04pwa-cache';
var filesToCache = [
  '../img/apple_splash_640.png',
  '../img/apple_splash_750.png',
  '../img/apple_splash_1125.png',
  '../img/apple_splash_1242.png',
  '../img/apple_splash_1536.png',
  '../img/apple_splash_1668.png',
  '../img/apple_splash_2048.png',
  '../img/touch-icon-iphone.png',
  '../img/lab04pwa48.png',
  '../img/lab04pwa72.png',
  '../img/lab04pwa96.png',
  '../img/lab04pwa144.png',
  '../img/juicee_logo.svg',
  '../index.html',
  '../css/style.css',
  '../css/bootstrap.min.css',
  'use_webworker.js',
  'use_serviceworker.js',
  'webworker.js',
  'main.js',
  'bootstrap.bundle.min.js',
  '../fonts/leckerli-one-v11-latin-regular.eot',
  '../fonts/leckerli-one-v11-latin-regular.svg',
  '../fonts/leckerli-one-v11-latin-regular.ttf',
  '../fonts/leckerli-one-v11-latin-regular.woff',
  '../fonts/leckerli-one-v11-latin-regular.woff2',
  '../fonts/montserrat-v15-latin-500.eot',
  '../fonts/montserrat-v15-latin-500.svg',
  '../fonts/montserrat-v15-latin-500.ttf',
  '../fonts/montserrat-v15-latin-500.woff',
  '../fonts/montserrat-v15-latin-500.woff2',
  '../fonts/montserrat-v15-latin-600.eot',
  '../fonts/montserrat-v15-latin-600.svg',
  '../fonts/montserrat-v15-latin-600.ttf',
  '../fonts/montserrat-v15-latin-600.woff',
  '../fonts/montserrat-v15-latin-600.woff2',
  '../fonts/montserrat-v15-latin-700.eot',
  '../fonts/montserrat-v15-latin-700.svg',
  '../fonts/montserrat-v15-latin-700.ttf',
  '../fonts/montserrat-v15-latin-700.woff',
  '../fonts/montserrat-v15-latin-700.woff2',
  '../fonts/montserrat-v15-latin-800.eot',
  '../fonts/montserrat-v15-latin-800.svg',
  '../fonts/montserrat-v15-latin-800.ttf',
  '../fonts/montserrat-v15-latin-800.woff',
  '../fonts/montserrat-v15-latin-800.woff2',
  '../fonts/montserrat-v15-latin-regular.eot',
  '../fonts/montserrat-v15-latin-regular.svg',
  '../fonts/montserrat-v15-latin-regular.ttf',
  '../fonts/montserrat-v15-latin-regular.woff',
  '../fonts/montserrat-v15-latin-regular.woff2',
];

self.addEventListener("install", event => {
  console.log("Service Worker Lab 04 PWA installing.");
  event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker Lab 04 PWA activating.");
});

self.addEventListener('fetch', event => {
  console.log("Service Worker Lab 04 PWA fetching.");
  event.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
  );
});

