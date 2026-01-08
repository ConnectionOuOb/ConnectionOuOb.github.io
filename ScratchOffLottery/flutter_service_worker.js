'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "771012e91a27e758653944e81541c168",
"assets/AssetManifest.bin.json": "514dbc063c2f0bfeac963ff3eca66835",
"assets/AssetManifest.json": "a36f56eaa19adc85c3b5a5b27e946080",
"assets/assets/100/dark/mix_10x12_heatmap.png": "2b51869183649caa42722a3d67d24ad9",
"assets/assets/100/dark/mix_16x10_heatmap.png": "bd29d47e10337351b4c73948a7f2c19e",
"assets/assets/100/dark/mix_8x5_heatmap.png": "c13069bfbbaf268e281a19e3931d749d",
"assets/assets/100/dark/new_10x12_heatmap.png": "0b5f30fcf0337a038efd3919992c3091",
"assets/assets/100/dark/new_16x10_heatmap.png": "21232f9cbab7ae5ab9662cf49a6a6f52",
"assets/assets/100/dark/new_8x5_heatmap.png": "e38ecc30e13c138c48dff0fd68c1f278",
"assets/assets/100/dark/normal_10x12_heatmap.png": "6c4294cb8f0eebd1ba28773baba289ae",
"assets/assets/100/dark/normal_16x10_heatmap.png": "13c35ed30ed76a74b7f0a86474c02069",
"assets/assets/100/dark/normal_8x5_heatmap.png": "2f1ec24b7de5bf7bfc00ac7957097354",
"assets/assets/100/dark/old_10x12_heatmap.png": "b04c9fece973a9f693eaa1eeb449f410",
"assets/assets/100/dark/old_16x10_heatmap.png": "363b21abdaaecfce895f6d7b52e944d1",
"assets/assets/100/dark/old_8x5_heatmap.png": "abd6c306a4e5e5a86424389b56b399b6",
"assets/assets/100/light/mix_10x12_heatmap.png": "e7fb08b79db114d6d446aa0e2703e567",
"assets/assets/100/light/mix_16x10_heatmap.png": "3a1cf2cec9c11148acace78c11d71c07",
"assets/assets/100/light/mix_8x5_heatmap.png": "1bc9589420b1788d29cd27cf70fc18d9",
"assets/assets/100/light/new_10x12_heatmap.png": "c64b58ca64bc25927e101257b42f9a27",
"assets/assets/100/light/new_16x10_heatmap.png": "d215fd7cb254b612db2f79f625842e24",
"assets/assets/100/light/new_8x5_heatmap.png": "5d26c984baed3ebb94f47e62f72d4489",
"assets/assets/100/light/normal_10x12_heatmap.png": "30bfeb6c181852b6ed0d19f9bdc03ff5",
"assets/assets/100/light/normal_16x10_heatmap.png": "e2470a2f630e58a69d8ee5a63e25333f",
"assets/assets/100/light/normal_8x5_heatmap.png": "7eb366aab9188de6b7674c6dc5f4d5fe",
"assets/assets/100/light/old_10x12_heatmap.png": "14480bacd024f37a957c82b27a87ece9",
"assets/assets/100/light/old_16x10_heatmap.png": "423c24938066b02524339350f3e9a0ac",
"assets/assets/100/light/old_8x5_heatmap.png": "d1baffbf4167bce669adda46c328d6cd",
"assets/assets/10000/dark/mix_10x12_heatmap.png": "96094cd7c39f023828efbb2e303b5d6c",
"assets/assets/10000/dark/mix_16x10_heatmap.png": "7f66b0b3da93c21e9f6e9e3b30775576",
"assets/assets/10000/dark/mix_8x5_heatmap.png": "f44d14aaa456270cb3fc31f08c3f09b2",
"assets/assets/10000/dark/new_10x12_heatmap.png": "1743a3e100d118e76ab777e181dda6fe",
"assets/assets/10000/dark/new_16x10_heatmap.png": "ee39326a0430dc069a99524dbd9f770f",
"assets/assets/10000/dark/new_8x5_heatmap.png": "fac4f7738d66d642496f43dd1319e06c",
"assets/assets/10000/dark/normal_10x12_heatmap.png": "068248e0b97083e132bac42583d1a5e8",
"assets/assets/10000/dark/normal_16x10_heatmap.png": "149e1b60c7b3f624eec95074338865ef",
"assets/assets/10000/dark/normal_8x5_heatmap.png": "cb1d7302b7a3a00858da94561946c27f",
"assets/assets/10000/dark/old_10x12_heatmap.png": "7ec4f27345c6c7c8d79d3282d8de4075",
"assets/assets/10000/dark/old_16x10_heatmap.png": "b06a9084d6b4589fdeff02caf53452b6",
"assets/assets/10000/dark/old_8x5_heatmap.png": "44c3f6988789318c5ae8639bbd4ec68a",
"assets/assets/10000/light/mix_10x12_heatmap.png": "c27dc3a714fbd1b5bef104e3c960fff2",
"assets/assets/10000/light/mix_16x10_heatmap.png": "ddfffeb2ddd28f51eb18d17faef96e37",
"assets/assets/10000/light/mix_8x5_heatmap.png": "36a23a0a45d0da1bb42870b63058f7d3",
"assets/assets/10000/light/new_10x12_heatmap.png": "01c50f08c68bfe6f85421bec94b3400e",
"assets/assets/10000/light/new_16x10_heatmap.png": "8e6dd2249aed40f564da850cb552ac3c",
"assets/assets/10000/light/new_8x5_heatmap.png": "24c1347f46dbf6fb09ee3b17f7dcf24d",
"assets/assets/10000/light/normal_10x12_heatmap.png": "229eb3ee4d08113f3610f2cd58d0a144",
"assets/assets/10000/light/normal_16x10_heatmap.png": "77ede61811d8452fea03b6eb75639ec3",
"assets/assets/10000/light/normal_8x5_heatmap.png": "52d761eee96464313b986f73947fafd8",
"assets/assets/10000/light/old_10x12_heatmap.png": "eed21806d278930bc1ad56fda3f7e855",
"assets/assets/10000/light/old_16x10_heatmap.png": "37d88767921427558792cb49805a65b5",
"assets/assets/10000/light/old_8x5_heatmap.png": "ed20cfbc7ea6ba16fde1861c346d7df7",
"assets/assets/1000000/dark/mix_10x12_heatmap.png": "f3cb552f512c31dd2840e4e7fe3e0058",
"assets/assets/1000000/dark/mix_16x10_heatmap.png": "fc195cc1c71b17ed5de8ffc75de5bb26",
"assets/assets/1000000/dark/mix_8x5_heatmap.png": "1311db22c05b335801f4d91e932b0e6b",
"assets/assets/1000000/dark/new_10x12_heatmap.png": "dc10b86bd6606fef955abaf922c3899b",
"assets/assets/1000000/dark/new_16x10_heatmap.png": "4a08ead3887e57066f59a9d7c6fac77b",
"assets/assets/1000000/dark/new_8x5_heatmap.png": "840580218df5c29b15d38f156e4cf3ca",
"assets/assets/1000000/dark/normal_10x12_heatmap.png": "a5687de4d4d13f864d13724b074546d2",
"assets/assets/1000000/dark/normal_16x10_heatmap.png": "c5ab51319fd1ebaec6c11db1203f2d2b",
"assets/assets/1000000/dark/normal_8x5_heatmap.png": "16b0caa06f96d6a068a26176367430be",
"assets/assets/1000000/dark/old_10x12_heatmap.png": "f2db75477bb1ade0b7add5b8ea08fe79",
"assets/assets/1000000/dark/old_16x10_heatmap.png": "1e4388fffc108939935f05378ee8d251",
"assets/assets/1000000/dark/old_8x5_heatmap.png": "cecb72f6fd6e2672e61885d45680132b",
"assets/assets/1000000/light/mix_10x12_heatmap.png": "320e29a82e7e6cc02c1b4ec9c9505723",
"assets/assets/1000000/light/mix_16x10_heatmap.png": "4725bde6daca59042c0c2621ddac7ab1",
"assets/assets/1000000/light/mix_8x5_heatmap.png": "74404324369c1cedab809a7e3b997fc3",
"assets/assets/1000000/light/new_10x12_heatmap.png": "6315d96b99fb71407cda8a45015daa2f",
"assets/assets/1000000/light/new_16x10_heatmap.png": "ab372f6dc3d63dadb27114e468c9b5b1",
"assets/assets/1000000/light/new_8x5_heatmap.png": "0382e05f2565e9ac1a38aebb005eb67a",
"assets/assets/1000000/light/normal_10x12_heatmap.png": "4d527f94ddb568c6e1fc5fee3a8502e8",
"assets/assets/1000000/light/normal_16x10_heatmap.png": "9b9648636ebd988f6fdeb0d72cedce13",
"assets/assets/1000000/light/normal_8x5_heatmap.png": "1e0399ef01af1ffbceeeb6a293eea841",
"assets/assets/1000000/light/old_10x12_heatmap.png": "3a6afe27e39e24026b6f9c77722fd13e",
"assets/assets/1000000/light/old_16x10_heatmap.png": "f691a917056a7467ab9d296797ab0473",
"assets/assets/1000000/light/old_8x5_heatmap.png": "b2213e5cb7c9a787cd4d9e1d9991f23b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f16b4832968c60fe01c2e6b3caa90b3e",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5b7a9bdc0bbae1f08efe496035115813",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3a2fc20efc6ac326f3375f851ed57768",
"/": "3a2fc20efc6ac326f3375f851ed57768",
"main.dart.js": "8418f3afc3c678ce8986fc5a0a37e882",
"manifest.json": "dd678c154cd0096e4c8aea02fe776d21",
"version.json": "999cd03f3126141b064658017a58a1c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
