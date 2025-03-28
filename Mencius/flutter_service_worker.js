'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0920e07da7e4597eddbc0cf1d5e15881",
"assets/AssetManifest.bin.json": "db5749780cf1720d9682e696d5a7fdff",
"assets/AssetManifest.json": "cc0afcc7b028cc8d5681433ecacd0aae",
"assets/assets/background/MainView.png": "279cb893de351fff2cd3cba9e1d726c9",
"assets/assets/reference/1.1.png": "22cc15ee59eb3d782be7f4b481a5b21c",
"assets/assets/reference/1.2.png": "7c8cacff900768c3b3a29e05f6d892ba",
"assets/assets/reference/1.3.png": "b89503cd3a40d92711b624f3c19e0a95",
"assets/assets/reference/1.4.png": "31754bc0a6829aa965a90c464bac7bb8",
"assets/assets/reference/1.5.png": "4a1ff15b645a8de96f2d822d1c9514cd",
"assets/assets/reference/10.1.png": "4ee0c35d23bb5e0fc833c53bf12af5b4",
"assets/assets/reference/10.2.png": "58b6e938291134a4524be06fdbcc806d",
"assets/assets/reference/10.3.png": "ab1cb88167ecbe39c7a506a95bc462ad",
"assets/assets/reference/10.4.png": "88b6188587973b39881dbe06753b437a",
"assets/assets/reference/10.5.png": "f635fe49cd35eb6ac8db284bfce4bfb8",
"assets/assets/reference/11.1.png": "3ece4cddb728878193db7e1eef1e8b21",
"assets/assets/reference/11.10.png": "f5f23d979d11fe671d38f2141774ef40",
"assets/assets/reference/11.2.png": "8985ac86633e9366bda7a800d34c69af",
"assets/assets/reference/11.3.png": "fbf274b07b3f7e0e961fb520e4da2fa4",
"assets/assets/reference/11.4.png": "391b1bdbadabff754eff0dee09e36f48",
"assets/assets/reference/11.5.png": "2b51df2cf97dcca0b39c29c51fa0b7be",
"assets/assets/reference/11.6.png": "c336e5004c690c539933f51821b3c3a5",
"assets/assets/reference/11.7.png": "5c9d362a31880ebe8abe9eb41061d685",
"assets/assets/reference/11.8.png": "40d2d25076ea60f2068de8a0a701ed3f",
"assets/assets/reference/11.9.png": "0404d7d883449760eccd7beecd83be8b",
"assets/assets/reference/12.1.png": "d894ffb931569085ef6e9414a05b9a7b",
"assets/assets/reference/12.2.png": "464ec8f746e4cdb254ff12d1931259e3",
"assets/assets/reference/12.3.png": "cd4960a82fadd3bf0ff99fdcb0d70c98",
"assets/assets/reference/12.4.png": "c878c4dd892cba2f221025e403a16f85",
"assets/assets/reference/12.5.png": "8f7e5faf3dfd220eaaf2e654652b64ec",
"assets/assets/reference/12.6.png": "bd07db52f68208fd4cbb819660a989ee",
"assets/assets/reference/12.7.png": "27efe4ce6eb4223f2369555c96cf4fc4",
"assets/assets/reference/2.1.png": "284f99a8d881b9ac0ee13537f92e45c2",
"assets/assets/reference/2.2.png": "9648aa85a5812bf2dda88c6ae75b0ed7",
"assets/assets/reference/2.3.png": "92cdc88dbabe3e6fbbf268d565f1aa9b",
"assets/assets/reference/2.4.png": "8a9ff281884b83e6b9ae95ae18782870",
"assets/assets/reference/2.5.png": "e4c872490df97d0cee01613b51bd587f",
"assets/assets/reference/2.6.png": "ae7d477cf6401b98aae4979fb3b2a7ae",
"assets/assets/reference/2.7.png": "c2ec4674ec45930e149bc58e884bf218",
"assets/assets/reference/3.1.png": "ba0e655066057550924a0e7fea9f5a35",
"assets/assets/reference/3.2.png": "5398d46d77688a49cc16477458a201f6",
"assets/assets/reference/3.3.png": "4b0cb9087a3d4858ba80a9ea3478367d",
"assets/assets/reference/3.4.png": "88fcd322e1860b5b6b5243eac6786464",
"assets/assets/reference/3.5.png": "8be2e6d9964ff782212c62d00b182833",
"assets/assets/reference/4.1.png": "67f2ba8db46bc486188f4e505d295cb0",
"assets/assets/reference/4.2.png": "3c9f49630194693568f786b76b432a3e",
"assets/assets/reference/4.3.png": "42eac28ed17f2003a7cb4b63d3baf697",
"assets/assets/reference/4.4.png": "fb0e8bcd07dfbd9973b298580cf31022",
"assets/assets/reference/4.5.png": "7b4503e4e37a0eeaeffca69e251bc48c",
"assets/assets/reference/5.1.png": "e4de08454827eabaa763f9e192827cfd",
"assets/assets/reference/5.2.png": "4abe8da5928808f1b694c76c920c223e",
"assets/assets/reference/5.3.png": "28fc272a8bbe16201b1a5f7c774246e5",
"assets/assets/reference/5.4.png": "bbdf0125f96d6777d4b1bcc15037444a",
"assets/assets/reference/5.5.png": "f01f59b27f72ca4614e02117cfbd65ec",
"assets/assets/reference/5.6.png": "d5f582429ff47bf8368f6923958859be",
"assets/assets/reference/5.7.png": "c4db7fab4f5cd3eb57ff1bd07934ebf8",
"assets/assets/reference/5.8.png": "61ee8666cb7adac667cc855224bd27e8",
"assets/assets/reference/6.1.png": "6b3ef9d6082e5221bfe98c3cc5fe26f4",
"assets/assets/reference/6.2.png": "66ac4a317331f167160455a1c936fbd5",
"assets/assets/reference/6.3.png": "f52e9439adf3a7a313d04d542c87edf4",
"assets/assets/reference/6.4.png": "1013b041e5de87e0d65e6d103aee712d",
"assets/assets/reference/6.5.png": "a4b9fb4fdfdb9ed7f653f302df738c9c",
"assets/assets/reference/7.1.png": "7f4d22ecd80745dc259b6047e05c9245",
"assets/assets/reference/7.2.png": "76bac00bc79938a69bda2e14549db19d",
"assets/assets/reference/7.3.png": "ae393a5ea9d4567ac1b87f8795217e2b",
"assets/assets/reference/7.4.png": "78eb9e56e4e58c09c7c78973daef4369",
"assets/assets/reference/7.5.png": "fcf324ee0cd9806125811e7f93c155e6",
"assets/assets/reference/7.6.png": "f9406caad50acc3de19484af13ca1a1e",
"assets/assets/reference/8.1.png": "6fda3f9f8115422dc94aadc10d9d860e",
"assets/assets/reference/8.2.png": "9616bdd472aba9558d03c0f82f512c75",
"assets/assets/reference/8.3.png": "7c51fc9c50d4ac4b3eb40225af2d9684",
"assets/assets/reference/8.4.png": "e994ec5b592f6cbb833ad4243404fc90",
"assets/assets/reference/8.5.png": "011d92497abd9a1135767b43a884ee6a",
"assets/assets/reference/9.1.png": "a7ff9c94b7ef95afcd4273eb156540ae",
"assets/assets/reference/9.2.png": "f3c59d50dc8ca871b56bcce943c34bfc",
"assets/assets/reference/9.3.png": "16b043e97ab95e2aa7ab9c7f7f5d60c7",
"assets/assets/reference/9.4.png": "5039f556765e6c7ac75ed99f57c73b1a",
"assets/assets/reference/9.5.png": "deabfe6cc11e0371d3e8447b6f156b19",
"assets/assets/reference/9.6.png": "a68565244482796e10f8e7e9922b2356",
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
"index.html": "24de4f6a735601680656b1a24fad0fe7",
"/": "24de4f6a735601680656b1a24fad0fe7",
"main.dart.js": "8911c60998a23a4710955bb4df117c64",
"manifest.json": "8aba0c0cbc23c5864045f44482f5872d",
"version.json": "159f6cecaa075175cd80c38ad8d1f649"};
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
