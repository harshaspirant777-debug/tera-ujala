const CACHE_NAME = "tera-ujala-v1";
const ASSETS = [
"./",
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
  "images/pic6.jpg",
  "images/pic7.jpg",
  "images/pic8.jpg",
  "images/pic9.jpg",
  "images/pic10.jpg",
  "images/pic11.jpg",
  "images/pic12.jpg",
  "images/pic13.jpg",
  "images/pic14.jpg",
  "images/pic15.jpg",
  "images/pic16.jpg",
  "images/pic17.jpg",
  "images/pic18.jpg",
  "images/pic19.jpg",
  "images/pic20.jpg",
  "images/pic21.jpg",
  "images/pic22.jpg",
  "images/pic23.jpg",
  "images/pic24.jpg",
  "images/pic25.jpg",
  "images/pic26.jpg",
  "images/pic27.jpg",
  "images/pic28.jpg",
  "images/pic29.jpg",
  "images/pic30.jpg",
  "images/pic31.jpg",
  "images/pic32.jpg",
  "images/pic33.jpg",
  "images/pic34.jpg",
  "images/pic35.jpg",
  "images/pic36.jpg",
  "images/pic37.jpg",
  "images/pic38.jpg",
  "images/pic39.jpg",
  "images/pic40.jpg",
  "images/pic41.jpg",
  "images/pic42.jpg",
  "images/pic43.jpg",
  "images/pic44.jpg",
  "images/pic45.jpg",
  "images/pic46.jpg",
  "images/pic47.jpg",
  "images/pic48.jpg",
  "images/pic49.jpg",
  "images/pic50.jpg",
  "songs/song1.mp3",
  "songs/song2.mp3",
  "songs/song3.mp3",
  "songs/song4.mp3",
  "songs/song5.mp3",
  "songs/song6.mp3",
  "songs/song7.mp3",
  "songs/song8.mp3",
  "songs/song9.mp3",
  "songs/song10.mp3",
  "songs/song11.mp3",
  "songs/song12.mp3",
  "songs/song13.mp3",
  "songs/song14.mp3",
  "songs/song15.mp3",
  "songs/song16.mp3",
  "songs/song17.mp3",
  "songs/song18.mp3",
  "songs/song19.mp3",
  "songs/song20.mp3",
  "songs/song21.mp3",
  "songs/song22.mp3",
  "songs/song23.mp3",
  "songs/song24.mp3",
  "songs/song25.mp3",
  "songs/song26.mp3",
  "songs/song27.mp3",
  "songs/song28.mp3",
  "songs/song29.mp3",
  "songs/song30.mp3",
  "songs/song31.mp3",
  "songs/song32.mp3",
  "songs/song33.mp3",
  "songs/song34.mp3",
  "songs/song35.mp3",
  "songs/song36.mp3",
  "songs/song37.mp3",
  "songs/song38.mp3",
  "songs/song39.mp3",
  "songs/song40.mp3",
  "songs/song41.mp3",
  "songs/song42.mp3",
  "songs/song43.mp3",
  "songs/song44.mp3",
  "songs/song45.mp3",
  "songs/song46.mp3",
  "songs/song47.mp3",
  "songs/song48.mp3",
  "songs/song49.mp3",
  "songs/song50.mp3"
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
