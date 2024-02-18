'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d248dff284786c95e73ced6f0616d35",
"assets/AssetManifest.json": "0e30136377d11d2a3b665c7fa7fd2723",
"assets/assets/%25E4%25BA%2595%25E5%25BA%2595%25E4%25B9%258B%25E8%259B%2599.jpeg": "2f0ff869d7dd66ce15ae1444406bb0c7",
"assets/assets/%25E8%258E%258A%25E5%25AD%2590%25E5%25BF%2583%25E6%2580%25A7-%25E4%25B8%258D%25E7%2582%25BA%25E5%25AE%2598.jpg": "8d7ae832735fb49393a3d1258ce21489",
"assets/assets/%25E8%258E%258A%25E5%25AD%2590%25E5%25BF%2583%25E6%2580%25A7-%25E4%25BA%25BA%25E6%259C%25AC%25E7%2584%25A1%25E6%2583%2585.jpg": "c78dad9b5180bf33bee503a9bccdbc15",
"assets/assets/%25E8%258E%258A%25E5%25AD%2590%25E5%25BF%2583%25E6%2580%25A7-%25E5%2580%259F%25E8%25B2%25B8.jpg": "d6f9c472960da767c891c94e67aec85e",
"assets/assets/%25E8%258E%258A%25E5%25AD%2590%25E5%25BF%2583%25E6%2580%25A7-%25E5%25A4%25A9%25E5%259C%25B0%25E7%2582%25BA%25E5%25AE%2598.jpg": "589c6f5ae7e835bae2c02ccbcd359838",
"assets/assets/%25E8%258E%258A%25E5%25AD%2590%25E5%25BF%2583%25E6%2580%25A7-%25E7%2594%259F%25E6%25AD%25BB%25E5%259B%259B%25E6%2599%2582.jpeg": "e0ba97fc4121a3167a49fa362af56d1b",
"assets/assets/%25E8%258E%258A%25E7%25B4%25AB%25E5%25BF%2583%25E6%2580%25A7-%25E8%258E%258A%25E5%2591%25A8%25E5%25A4%25A2%25E8%259D%25B6.png": "ae96981d251b8417daff34423c4bb979",
"assets/assets/%25E8%258F%25AF%25E5%2585%2589%25E4%25B8%2589%25E9%2583%25A8%25E6%259B%25B2_final_page-0009.jpg": "d05a6b9aeff329f697a0ce0b5c03ae7b",
"assets/assets/%25E9%2580%258D%25E9%2581%2599%25E9%2581%258A%25E5%25AD%2590-%25E5%2588%2597%25E5%25AD%25901.2.jpeg": "6c9bdbd1b4ec260381e49f7e22790407",
"assets/assets/%25E9%2580%258D%25E9%2581%2599%25E9%2581%258A%25E5%25AD%2590-%25E5%2588%2597%25E5%25AD%25901.4.jpeg": "7451c442cea39b2d6fe2cca92fd7cec2",
"assets/assets/%25E9%2580%258D%25E9%2581%2599%25E9%2581%258A%25E5%25AD%2590-%25E5%25B1%25B1%25E4%25BA%25BA.jpg": "ba6b3b81dbb51e7c31baf0e6bf189383",
"assets/assets/%25E9%2580%258D%25E9%2581%2599%25E9%2581%258A%25E5%25AD%2590-%25E9%25AF%25A4%25E8%2588%2587%25E9%25B5%25AC.jpeg": "9377502d973a5890c7dd5dd18539c087",
"assets/assets/%25E9%2582%25AF%25E9%2584%25B2%25E5%25AD%25B8%25E6%25AD%25A5.png": "4f98ad54c62e42070cdb3406ed91269a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "73b1ec81f13585ebc0b1fa185ec48ebd",
"assets/NOTICES": "2014672fead34301d28aeac57b876865",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5d98754a6991e8314b48a1dbc5c19adc",
"/": "5d98754a6991e8314b48a1dbc5c19adc",
"main.dart.js": "75e091faf535b564ee1c1d3659db9ac6",
"manifest.json": "7ab2694797952a86ae6d776ea4dfd738",
"version.json": "c9bdf733b0d8f30c6f176e2ef0a781b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
