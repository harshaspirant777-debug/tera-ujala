const CACHE_NAME = "tera-ujala-v1";
const ASSETS = [
"./",
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
  "pic6.jpg",
  "pic7.jpg",
  "pic8.jpg",
  "pic9.jpg",
  "pic10.jpg",
  "pic11.jpg",
  "pic12.jpg",
  "pic13.jpg",
  "pic14.jpg",
  "pic15.jpg",
  "pic16.jpg",
  "pic17.jpg",
  "pic18.jpg",
  "pic19.jpg",
  "pic20.jpg",
  "pic21.jpg",
  "pic22.jpg",
  "pic23.jpg",
  "pic24.jpg",
  "pic25.jpg",
  "pic26.jpg",
  "pic27.jpg",
  "pic28.jpg",
  "pic29.jpg",
  "pic30.jpg",
  "pic31.jpg",
  "pic32.jpg",
  "pic33.jpg",
  "pic34.jpg",
  "pic35.jpg",
  "pic36.jpg",
  "pic37.jpg",
  "pic38.jpg",
  "pic39.jpg",
  "pic40.jpg",
  "pic41.jpg",
  "pic42.jpg",
  "pic43.jpg",
  "pic44.jpg",
  "pic45.jpg",
  "pic46.jpg",
  "pic47.jpg",
  "pic48.jpg",
  "pic49.jpg",
  "pic50.jpg",
  "song1.mp3",
  "song2.mp3",
  "song3.mp3",
  "song4.mp3",
  "song5.mp3",
  "song6.mp3",
  "song7.mp3",
  "song8.mp3",
  "song9.mp3",
  "song10.mp3",
  "song11.mp3",
  "song12.mp3",
  "song13.mp3",
  "song14.mp3",
  "song15.mp3",
  "song16.mp3",
  "song17.mp3",
  "song18.mp3",
  "song19.mp3",
  "song20.mp3",
  "song21.mp3",
  "song22.mp3",
  "song23.mp3",
  "song24.mp3",
  "song25.mp3",
  "song26.mp3",
  "song27.mp3",
  "song28.mp3",
  "song29.mp3",
  "song30.mp3",
  "song31.mp3",
  "song32.mp3",
  "song33.mp3",
  "song34.mp3",
  "song35.mp3",
  "song36.mp3",
  "song37.mp3",
  "song38.mp3",
  "song39.mp3",
  "song40.mp3",
  "song41.mp3",
  "song42.mp3",
  "song43.mp3",
  "song44.mp3",
  "song45.mp3",
  "song46.mp3",
  "song47.mp3",
  "song48.mp3",
  "song49.mp3",
  "song50.mp3"
];

// Install: cache everything (this may take a bit the first time, since it
// includes all photos + songs, so the app works offline afterwards).
self.addEventListener("install", function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate: clean up old caches
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first, fall back to network
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request);
    })
  );
});
