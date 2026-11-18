// Automatisch erzeugt von scripts/web-bauen.js – nicht von Hand ändern.
const CACHE = "baustellen-1.0.0-721cbaa181af";
const BASIS = "/baustellen";
const DATEIEN = [
 "/baustellen/_expo/static/js/web/entry-a5821368b21ecf4edae0e12e3d733ef9.js",
 "/baustellen/assets/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.b4eb097d35f44ed943676fd56f6bdc51.ttf",
 "/baustellen/assets/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png",
 "/baustellen/assets/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png",
 "/baustellen/assets/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png",
 "/baustellen/assets/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png",
 "/baustellen/assets/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png",
 "/baustellen/assets/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png",
 "/baustellen/assets/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png",
 "/baustellen/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png",
 "/baustellen/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png",
 "/baustellen/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png",
 "/baustellen/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png",
 "/baustellen/assets/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png",
 "/baustellen/assets/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png",
 "/baustellen/assets/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png",
 "/baustellen/favicon.ico",
 "/baustellen/icons/apple-touch-icon.png",
 "/baustellen/icons/favicon.png",
 "/baustellen/icons/icon-192.png",
 "/baustellen/icons/icon-512.png",
 "/baustellen/icons/icon-maskable-512.png",
 "/baustellen/index.html",
 "/baustellen/manifest.webmanifest",
 "/baustellen/sql-wasm-browser.wasm",
 "/baustellen/sql-wasm.wasm"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((namen) => Promise.all(namen.filter((n) => n.startsWith('baustellen-') && n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const anfrage = event.request;
  if (anfrage.method !== 'GET') return;
  const url = new URL(anfrage.url);
  if (url.origin !== self.location.origin) return;
  // Seitenaufrufe (auch tiefe Links) bekommen immer die App-Seite – sofort aus dem Speicher.
  if (anfrage.mode === 'navigate') {
    event.respondWith(caches.match(BASIS + '/index.html').then((r) => r || fetch(anfrage)));
    return;
  }
  event.respondWith(caches.match(anfrage).then((r) => r || fetch(anfrage)));
});
