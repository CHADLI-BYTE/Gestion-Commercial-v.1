self.addEventListener('fetch', (event) => {
  // Mode pass-through simple pour permettre l'installation
  event.respondWith(fetch(event.request));
});