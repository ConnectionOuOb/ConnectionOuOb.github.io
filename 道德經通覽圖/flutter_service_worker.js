'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "17747f4b44a268e143058aeb002af387",
"assets/AssetManifest.bin.json": "69239e0783b4dc6ac8a35978c85bcbb4",
"assets/AssetManifest.json": "2ac585c832e01d724ed5ddb4a18a0caa",
"assets/assets/background/MainView.png": "37aa655b20d0b82ce3f4773efa33ceaa",
"assets/assets/reference/1.1.jpg": "d6c25ae00bb585e511516999555206c0",
"assets/assets/reference/1.2.jpg": "a973b4e730cfb5034a52c436924c89ce",
"assets/assets/reference/1.3.jpg": "272ab2c77f91383dc0c2cfccbeade6df",
"assets/assets/reference/1.4.jpg": "6ff61c92b7f00d0d3e75152e41311eb0",
"assets/assets/reference/1.5.jpg": "a2cd3add2ad4579555ae8b7d4f37f566",
"assets/assets/reference/1.6.jpg": "0cf5256661dbb023da501efbce351eba",
"assets/assets/reference/1.7.jpg": "8f1a76f9c307f98bbf27c5481d14f18b",
"assets/assets/reference/10.1.jpg": "d260632320afe8e77ad831b62a36e35e",
"assets/assets/reference/10.2.jpg": "51b0ad0e206581861f86e0689d441d8b",
"assets/assets/reference/10.3.jpg": "03a9220577914766d5185e5788cdae6c",
"assets/assets/reference/10.4.jpg": "b4a82ac5ce4e2da41eecddaec631e609",
"assets/assets/reference/10.5.jpg": "49fac4b00d14f2f51dfe06c0f2883abb",
"assets/assets/reference/10.6.jpg": "2e328f1115dca6a6c4c70f2dfe3159b7",
"assets/assets/reference/10.7.jpg": "9d1ba6b470bd2cf3c7a2de5abb614df0",
"assets/assets/reference/11.1.jpg": "e309bc3cc2ae4adc99f1744884d808dc",
"assets/assets/reference/11.2.jpg": "aa042f9c255343c19352c90d0f0dd9b7",
"assets/assets/reference/11.3.jpg": "64a77e1a49b6f2ed26026a8f996db75c",
"assets/assets/reference/11.4.jpg": "928f4cf36aa32f0bff401da688e1df75",
"assets/assets/reference/11.5.jpg": "64b3b8b3177ea89e0a0b0a5f00d30828",
"assets/assets/reference/11.6.jpg": "28c4ead9687f09e5540e78b30ff5c04c",
"assets/assets/reference/11.7.jpg": "a88ed8b7563a07c929087bd343028aed",
"assets/assets/reference/12.1.jpg": "f9defec60fcf6f5890a0d795fd1ae27f",
"assets/assets/reference/12.2.jpg": "c5587e5dd0aa390581087f4d77b9f3fd",
"assets/assets/reference/12.3.jpg": "3f3b0a22412e4e5cc87c17b00927a938",
"assets/assets/reference/12.4.jpg": "a0383f627c538e9ac06e1ae2008480f3",
"assets/assets/reference/12.5.jpg": "92bf6ddc7c6cb75e32b1c033db6f1e30",
"assets/assets/reference/12.6.jpg": "87e8b15893e2cda042ef2fedc926852d",
"assets/assets/reference/12.7.webp": "8f313cb98eec3ce99da2849159eeaead",
"assets/assets/reference/12.8.jpg": "3465d6cbad2497eb547daeba4b1301e6",
"assets/assets/reference/12.9.jpg": "4b29df4729b6fac2c6070b4d0fb57147",
"assets/assets/reference/2.1.jpg": "11438b6bd7f7d155a73821571a0cadd1",
"assets/assets/reference/2.2.jpg": "f9de9c12089e4afd2789e4b711a0e821",
"assets/assets/reference/2.3.jpg": "7db98bc3b918fdb2c7e6a9ca7d1e4081",
"assets/assets/reference/2.4.jpg": "dc6b224cf2f4daec104fecda420d02eb",
"assets/assets/reference/2.5.jpg": "0f2ba74cdd62b975c148145fd81940d7",
"assets/assets/reference/2.6.jpg": "31c3b33261ae0361af3010fb6da894ab",
"assets/assets/reference/2.7.jpg": "d534bb4649ba3ecdeaed18a1cd492428",
"assets/assets/reference/3.1.jpg": "30d32486e91100aaad35d39307c84789",
"assets/assets/reference/3.2.jpg": "13cb14ff2961367655f03a090c52db45",
"assets/assets/reference/3.3.jpg": "6d79682bb70f3edf4e5ddf4818c86a76",
"assets/assets/reference/3.4.jpg": "3ea7d1220040168df43cdda367b8a188",
"assets/assets/reference/3.5.jpg": "0664879f5f283fd8dd6a6af975e9c2e7",
"assets/assets/reference/3.6.jpg": "073688bac327d32d85f0e668c00e335c",
"assets/assets/reference/4.1.jpg": "f9f0fa52917d1fd0fbac010de993d2e6",
"assets/assets/reference/4.2.jpg": "7660b0c8e136d1344bca43225fd1869c",
"assets/assets/reference/4.3.jpg": "84614eca8b2412f0406cc32129618a9f",
"assets/assets/reference/4.4.jpg": "40fa58e97cee36e7e1fbf82bdd916c34",
"assets/assets/reference/4.5.jpg": "3177ade8a948487f6388363b13402ed3",
"assets/assets/reference/4.6.jpg": "3c600c35d007d2cf6aa364e58ff29b91",
"assets/assets/reference/5.1.jpg": "73073f2352a42ae145a61cd05828f44c",
"assets/assets/reference/5.2.jpg": "bb95809112d819f0332e5c01e46c64a2",
"assets/assets/reference/5.3.jpg": "917d4989a677ffa77387270078e44888",
"assets/assets/reference/5.4.jpg": "4a5227eab7887a01635ae21b36fd8121",
"assets/assets/reference/6.1.jpg": "762a1150a860451811f253875964d60e",
"assets/assets/reference/6.2.jpg": "e03626e2c1c72286165758c260a5278d",
"assets/assets/reference/6.3.jpg": "e69b7b38ff494ad6848e2d521eb11891",
"assets/assets/reference/6.4.jpg": "65942745a09b01ddb63fdad93759b861",
"assets/assets/reference/6.5.jpg": "507f81dda77815ad565801f6ef874898",
"assets/assets/reference/6.6.jpg": "6aad13a60ae41b81b45927439be3fea1",
"assets/assets/reference/6.7.jpg": "0b11a4ace84009e70fee1f7508b43e81",
"assets/assets/reference/6.8.jpg": "45f6613f80c31a477c2295b072489da4",
"assets/assets/reference/6.9.jpg": "1af302300f13972c9c2d20bf00b9d9b0",
"assets/assets/reference/7.1.jpg": "e70fc18fa9fe849733e82e08605ec1a9",
"assets/assets/reference/7.2.jpg": "472ff7272f4e33fffc58eed352410218",
"assets/assets/reference/7.3.jpg": "ea1778851fe2e9a61bf60d421b95b136",
"assets/assets/reference/7.4.jpg": "f893c8255f7753974d4544725821d794",
"assets/assets/reference/7.5.jpg": "2e4f8a1e1e73d7904792b3122dc8eb0a",
"assets/assets/reference/7.6.jpg": "21b83b3182235a57431793cf24b68674",
"assets/assets/reference/7.7.jpg": "6b575e52867664de50e67e49ac9a8776",
"assets/assets/reference/8.1.jpg": "90e1fa2e050da24e9fdccedb9946620c",
"assets/assets/reference/8.2.jpg": "3b03b6fa57b3be607bc41e8c41d90d2d",
"assets/assets/reference/8.3.jpg": "95ae47268c0473601c446391b694833c",
"assets/assets/reference/8.4.jpg": "4db3de0a3e28d530caf8bf7fe9fc3e83",
"assets/assets/reference/8.5.jpg": "e36b8698da408a5906e9004b303b2216",
"assets/assets/reference/9.1.jpg": "77a003c9b6475c96c34b068f709e7c26",
"assets/assets/reference/9.2.jpg": "a482d8ffdbcefa218d291a405e72bfda",
"assets/assets/reference/9.3.jpg": "4c53b857dc86877f8ae59edd6df42e9a",
"assets/assets/reference/9.4.jpg": "5caaf17cf7363a88408f339502a0955d",
"assets/assets/reference/9.5.jpg": "bb3ee0b3c5da5694bd5508259d983993",
"assets/assets/reference/9.6.jpg": "9f119e83c4364e9543d30a4e19375459",
"assets/assets/reference/9.7.jpg": "78df910ea12de34d7d9fd9a27e38abbd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "614d00f7ef2b48b8179ca982f26af8b2",
"assets/NOTICES": "e1e2e77534beb5af7733df013c1d3518",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e57e0f8b138d16209ffd18464fa64913",
"/": "e57e0f8b138d16209ffd18464fa64913",
"main.dart.js": "6235336902e61b08173d096936549780",
"manifest.json": "9b02ce74d69e0b3ea76c40115362fb11",
"version.json": "1b88d03856c1407b4a67a7d132dc8127"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
