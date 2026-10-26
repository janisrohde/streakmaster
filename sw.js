// Service Worker: zeigt Push-Nachrichten (FCM Web Push) an und öffnet beim Antippen die richtige Stelle der App.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (e) => {
  let raw = {};
  try { raw = e.data ? e.data.json() : {}; } catch { raw = {}; }
  const d = raw.data || raw;
  const n = raw.notification || {};
  const title = d.title || n.title || 'Streak';
  e.waitUntil(self.registration.showNotification(title, {
    body: d.body || n.body || '',
    icon: 'icon-192.png',
    badge: 'badge-72.png',
    data: { link: d.link || '#/' },
  }));
});

// Ziel kurz merken: Falls die App beim Antippen geschlossen war, holt sie es sich beim Start ab
const LINK_CACHE = 'streak-open-link';
async function rememberLink(link) {
  try {
    const c = await caches.open(LINK_CACHE);
    await c.put('/pending-link', new Response(JSON.stringify({ link, at: Date.now() })));
  } catch { /* egal */ }
}
async function takeLink() {
  try {
    const c = await caches.open(LINK_CACHE);
    const r = await c.match('/pending-link');
    if (!r) return null;
    await c.delete('/pending-link');
    const { link, at } = await r.json();
    return Date.now() - at < 2 * 60 * 1000 ? link : null; // nur frische Ziele
  } catch {
    return null;
  }
}

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const link = e.notification.data?.link || '#/';
  const url = new URL(self.registration.scope).href + link;
  e.waitUntil((async () => {
    const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of list) {
      if (c.url.startsWith(self.registration.scope)) {
        // App läuft schon: nach vorne holen und direkt hinspringen
        await c.focus();
        c.postMessage({ type: 'open', link });
        return;
      }
    }
    // App war zu: Ziel merken (falls das Handy die Adresse beim Öffnen nicht mitgibt) und öffnen
    await rememberLink(link);
    await self.clients.openWindow(url);
  })());
});

// Die App fragt beim Start, ob sie wegen einer Benachrichtigung geöffnet wurde
self.addEventListener('message', (e) => {
  if (e.data?.type === 'take-link') {
    e.waitUntil(takeLink().then((link) => e.source?.postMessage({ type: 'open', link })));
  }
});
