importScripts('/dynamic/dynamic.config.js');
importScripts('/dynamic/dynamic.worker.js');
importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts(__uv$config.sw || '/uv/uv.sw.js');

const sw = new UVServiceWorker();
const sw2 = new Dynamic();

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(location.origin+'/service/dynamic/')){
        event.respondWith(sw2.fetch(event));
    }
    if (event.request.url.startsWith(location.origin+'/service/uv/')){
        event.respondWith(sw.fetch(event));
    }
});