// Service Worker: zeigt Push-Nachrichten (FCM Web Push) an und öffnet die App beim Antippen.
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

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL(self.registration.scope).href + (e.notification.data?.link || '#/');
  e.waitUntil((async () => {
    const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of list) {
      if (c.url.startsWith(self.registration.scope)) {
        await c.focus();
        c.postMessage({ type: 'open', link: e.notification.data?.link || '#/' });
        return;
      }
    }
    await self.clients.openWindow(url);
  })());
});
