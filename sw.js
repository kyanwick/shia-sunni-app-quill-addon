const CACHE_NAME = 'shia-sunni-app-v9';
const CONTENT_CACHE = 'shia-sunni-content-v2';
const RUNTIME_CACHE = 'shia-sunni-runtime-v2';

// Use relative paths so it works from GitHub Pages subpaths
const APP_SHELL = [
  'index.html',
  'styles.css',
  'script.js',
  'assets/logo.svg',
  'assets/logo.png',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME && k !== CONTENT_CACHE && k !== RUNTIME_CACHE)
        .map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

// Basic runtime caching strategy:
// - For app shell requests: cache-first
// - For remote data.json: network-first then cache fallback
// - For images: cache-first (with pass-through to network)
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignore cross-origin requests (let the browser handle them),
  // to avoid CORS/font issues and undefined fallbacks.
  if (url.origin !== location.origin) {
    return; // don't call respondWith
  }

  // Normalize same-origin root requests to /index.html
  if (req.mode === 'navigate') {
    event.respondWith(caches.match('index.html')
      .then(resp => resp || fetch(req))
    );
    return;
  }

  // Serve app shell from cache
  if (APP_SHELL.some(p => url.pathname.endsWith(p)) || (url.origin === location.origin && url.pathname.endsWith('.css')) ) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
    return;
  }

  // For JSON content endpoints, try network first then cache
  if (req.destination === 'document' || req.headers.get('accept')?.includes('application/json') || url.pathname.endsWith('.json')) {
    event.respondWith(
      fetch(req).then(networkResp => {
        const copy = networkResp.clone();
        caches.open(CONTENT_CACHE).then(cache => cache.put(req, copy));
        return networkResp;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Images: cache-first, then network
  if (req.destination === 'image' || /\.(png|jpg|jpeg|gif|webp|svg)$/.test(url.pathname)) {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(networkResp => {
      const copy = networkResp.clone();
      caches.open(CONTENT_CACHE).then(cache => cache.put(req, copy));
      return networkResp;
    }).catch(() => {
      return caches.match('/');
    })));
    return;
  }

  // Default: network first with cache fallback
  event.respondWith(
    fetch(req).catch(async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      // Provide a safe empty response to avoid resolving with undefined
      return new Response('', { status: 504, statusText: 'Offline' });
    })
  );
});
