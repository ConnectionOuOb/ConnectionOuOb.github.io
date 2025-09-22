'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "519d5193eeeaf5124c70a6c21a9c0de9",
"assets/AssetManifest.bin.json": "ae148602a01a10c8b7a9f0e758e4429c",
"assets/AssetManifest.json": "a55715623232a660ce0a06d788963fb6",
"assets/assets/background/MainView.png": "e77e63a00f849de143d3f779cb61dadc",
"assets/assets/reference/%25E4%25BC%2591%25E5%25AF%25A7%25E6%259D%25BE%25E8%2598%25BF_%25E5%25A4%25AC%25E5%258D%25A6.png": "38e8efb0fbeb41214df46a2c026eac85",
"assets/assets/reference/%25E5%2587%258D%25E9%25A0%2582%25E7%2583%258F%25E9%25BE%258D_%25E8%2587%25A8%25E5%258D%25A6.png": "ee074addc2e7b1cb0a890196c38af0a1",
"assets/assets/reference/%25E5%258D%2597%25E4%25BA%25AC%25E9%259B%25A8%25E8%258A%25B1%25E8%258C%25B6_%25E8%25B9%2587%25E5%258D%25A6.png": "82c89da5a964baa88e4193b9e1e8988d",
"assets/assets/reference/%25E5%258F%25A4%25E6%25A8%25B9%25E5%259C%2593%25E8%258C%25B6_%25E5%25A4%25A7%25E6%259C%2589%25E5%258D%25A6.png": "b2ee65ce4a0b25b60604f899395ca386",
"assets/assets/reference/%25E5%2590%259B%25E5%25B1%25B1%25E9%258A%2580%25E9%2587%259D_%25E9%25BC%258E%25E5%258D%25A6.png": "7084bdbc0f5be5825727125c53c319f4",
"assets/assets/reference/%25E5%259B%259B%25E5%25B7%259D%25E9%2582%258A_%25E9%259C%2580%25E5%258D%25A6.png": "c40a009f75ae71a034824be6cc0145a8",
"assets/assets/reference/%25E5%25A3%25BD%25E7%259C%2589_%25E6%2581%2586%25E5%258D%25A6.png": "a08be4dc57b6213030aac1aff24981bb",
"assets/assets/reference/%25E5%25A4%25A7%25E5%2590%2589%25E5%25B6%25BA%25E7%25B4%2585%25E8%258C%25B6_%25E6%2597%2585%25E5%258D%25A6.png": "8465bbd1f6b9ffb8327a4a8d5dd088b9",
"assets/assets/reference/%25E5%25A4%25A7%25E7%25B4%2585%25E8%25A2%258D_%25E5%259D%258E%25E5%258D%25A6.png": "90b583182da07b50311c9fb2498be742",
"assets/assets/reference/%25E5%25A4%25A9%25E5%25B0%2596%25E8%258C%25B6_%25E5%25B8%25AB%25E5%258D%25A6.png": "6abd7b6b01802e0a340b5856f1f061a9",
"assets/assets/reference/%25E5%25A4%25AA%25E5%25B9%25B3%25E7%258C%25B4%25E9%25AD%2581_%25E5%25AE%25B6%25E4%25BA%25BA%25E5%258D%25A6.png": "ed0852c75aa499e14fde2d8f9ddd96ce",
"assets/assets/reference/%25E5%25AD%259F%25E6%25B5%25B7%25E8%258C%25AB%25E8%258C%25B6_%25E5%2590%258C%25E4%25BA%25BA%25E5%258D%25A6.png": "786ed48ebf1db507689862e601d146b0",
"assets/assets/reference/%25E5%25AE%2589%25E6%25BA%25AA%25E9%2590%25B5%25E8%25A7%2580%25E9%259F%25B3_%25E8%25B1%25AB%25E5%258D%25A6.png": "8d94bd32c5b1157e088c7e0ee4eb22e7",
"assets/assets/reference/%25E5%25AF%25A7%25E7%25B4%2585%25E5%25B7%25A5%25E5%25A4%25AB_%25E7%25AF%2580%25E5%258D%25A6.png": "9c4d7a6cb6423d61e536f5051292e355",
"assets/assets/reference/%25E5%25B0%258F%25E7%25B4%2585%25E8%25A2%258D_%25E5%25BE%25A9%25E5%258D%25A6.png": "a2b96b18e82ffbab56d657cd17f6e955",
"assets/assets/reference/%25E5%25B1%258B%25E7%2593%25A6%25E7%25B4%2585%25E8%258C%25B6_%25E5%25B7%25BD%25E5%258D%25A6.png": "95a337efc3d742106816a494bb34fa88",
"assets/assets/reference/%25E5%25B7%25B4%25E9%2581%2594_%25E5%25B1%25AF%25E5%258D%25A6.png": "57706d2ccac00980ade1299081dece15",
"assets/assets/reference/%25E5%25BB%25A3%25E6%259D%25B1%25E5%258D%2583%25E5%2585%25A9_%25E8%25AC%2599%25E5%258D%25A6.png": "3431add9d39308726400ced783c0bfb3",
"assets/assets/reference/%25E5%25BB%25A3%25E6%259D%25B1%25E5%25A4%25A7%25E8%2591%2589_%25E6%25AD%25B8%25E5%25A6%25B9%25E5%258D%25A6.png": "04579da3cea2c29534027ea5268f614b",
"assets/assets/reference/%25E5%25BB%25A3%25E8%25A5%25BF%25E5%2585%25AD%25E5%25A0%25A1%25E8%258C%25B6_%25E8%25A8%259F%25E5%258D%25A6.png": "c0df6d0f8f49b7f9dcfbd4f9f9ab836e",
"assets/assets/reference/%25E6%258A%25B9%25E8%258C%25B6_%25E8%2590%2583%25E5%258D%25A6.png": "0b3b4f09e191835dd093781590374265",
"assets/assets/reference/%25E6%2596%25B0%25E8%2597%259D%25E7%2599%25BD%25E8%258C%25B6_%25E6%2599%2589%25E5%258D%25A6.png": "b4dd6b8981b102cc56a5511e8af687d2",
"assets/assets/reference/%25E6%2597%25A5%25E6%259C%2588%25E6%25BD%25AD%25E7%25B4%2585%25E8%258C%25B6_%25E6%2597%25A2%25E6%25BF%259F%25E5%258D%25A6.png": "85a517ae5b8cdbbe1d3259b668a26ffc",
"assets/assets/reference/%25E6%2599%25AE%25E6%25B4%25B1%25E8%258C%25B6%25E7%25A3%259A_%25E5%2590%25A6%25E5%258D%25A6.png": "e85b5e59986512b5a970337269346b66",
"assets/assets/reference/%25E6%259D%25B1%25E6%2596%25B9%25E7%25BE%258E%25E4%25BA%25BA_%25E5%2599%25AC%25E5%2597%2591%25E5%258D%25A6.png": "06aadc19b9a9fc922dca7cc8298612ff",
"assets/assets/reference/%25E6%25A2%2585%25E5%258D%25A0_%25E6%2597%25A0%25E5%25A6%2584%25E5%258D%25A6.png": "523594f41ecdf4a9415a5738793f2456",
"assets/assets/reference/%25E6%25AD%25A6%25E5%25A4%25B7%25E9%25BB%2583%25E8%25A7%2580%25E9%259F%25B3_%25E5%2589%259D%25E5%258D%25A6.png": "abcd9118a8eef43d5e766c8f6a5b1220",
"assets/assets/reference/%25E6%25B0%25B4%25E9%2587%2591%25E9%25BE%259C_%25E9%25A0%25A4%25E5%258D%25A6.png": "ee0e3420646c507b82ccd25f228c71cc",
"assets/assets/reference/%25E6%25B0%25B8%25E6%2598%25A5%25E4%25BD%259B%25E6%2589%258B_%25E8%25A7%2580%25E5%258D%25A6.png": "0e3144f5a8fcd8ce35f33a7b22998629",
"assets/assets/reference/%25E6%25B3%25B0%25E9%25A0%2586%25E9%259B%25B2%25E9%259C%25A7_%25E6%2590%258D%25E5%258D%25A6.png": "ba4a3a8378865179be48efe9b4236c85",
"assets/assets/reference/%25E6%25B4%259E%25E5%25BA%25AD%25E7%25A2%25A7%25E8%259E%25BA%25E6%2598%25A5_%25E8%25A7%25A3%25E5%258D%25A6.png": "60f48b02d13560aa7bcdba37a34ddca8",
"assets/assets/reference/%25E6%25B9%2596%25E7%25B4%2585%25E5%25B7%25A5%25E5%25A4%25AB_%25E5%25B0%258F%25E9%2581%258E%25E5%258D%25A6.png": "8b81a0f70145d0d73052852c2eea053f",
"assets/assets/reference/%25E6%25BA%25AB%25E5%25B7%259E%25E9%25BB%2583%25E6%25B9%25AF_%25E8%2589%25AE%25E5%258D%25A6.png": "18fdf8508c127d6e6d372569460efc7c",
"assets/assets/reference/%25E7%2585%258E%25E8%258C%25B6_%25E4%25BA%2595%25E5%258D%25A6.png": "d608e987c2a57117acb89e14496f5903",
"assets/assets/reference/%25E7%258E%2589%25E9%259C%25B2_%25E5%259B%25B0%25E5%258D%25A6.png": "9d0ebc4dfbbc629627d84760340be4b5",
"assets/assets/reference/%25E7%258E%25AB%25E7%2591%25B0%25E8%258C%25B6_%25E5%258D%2587%25E5%258D%25A6.png": "6e7577f254ffe3b74de66cfc64791311",
"assets/assets/reference/%25E7%2599%25BD%25E6%25AF%25AB%25E9%258A%2580%25E9%2587%259D_%25E5%25A4%25A7%25E5%25A3%25AF%25E5%258D%25A6.png": "0f515c094373b60e3aed4d72fb37f957",
"assets/assets/reference/%25E7%2599%25BD%25E7%2589%25A1%25E4%25B8%25B9_%25E9%2581%2581%25E5%258D%25A6.png": "865330e4dc30019df62ed45b9e01a56c",
"assets/assets/reference/%25E7%25A5%2581%25E9%2596%2580%25E7%25B4%2585%25E8%258C%25B6_%25E4%25B8%25AD%25E5%25AD%259A%25E5%258D%25A6.png": "148d349ae766c566564bdd07d8b3b65f",
"assets/assets/reference/%25E7%25A9%25BF%25E7%25B4%2585%25E5%25B7%25A5%25E5%25A4%25AB_%25E6%25B8%2599%25E5%258D%25A6.png": "14fadc1857fe731ab28fe551beb2d25c",
"assets/assets/reference/%25E7%25AB%25A0%25E5%25B9%25B3%25E6%25B0%25B4%25E4%25BB%2599_%25E8%25A0%25B1%25E5%258D%25A6.png": "657ba1f889ee1e619ea22de1326d3691",
"assets/assets/reference/%25E8%2580%2581%25E5%258F%25A2%25E6%25B0%25B4%25E4%25BB%2599_%25E5%25A4%25A7%25E9%2581%258E%25E5%258D%25A6.png": "7e5020c198d1d50f6f5ddf8ee5b7168e",
"assets/assets/reference/%25E8%2580%2581%25E7%258F%25AD%25E7%25AB%25A0_%25E4%25B9%25BE%25E5%258D%25A6.png": "84977c1435bcd1b4b67203abec6ade33",
"assets/assets/reference/%25E8%258B%25B1%25E5%25BE%25B7%25E7%25B4%2585%25E8%258C%25B6_%25E5%2585%258C%25E5%258D%25A6.png": "ac252aa19a7b76d1925f0f0e062fbcb1",
"assets/assets/reference/%25E8%258C%2585%25E5%25B1%25B1%25E9%259D%2592%25E5%25B3%25B0_%25E7%259B%258A%25E5%258D%25A6.png": "0cae168214a570fddeab316c3cf7b01a",
"assets/assets/reference/%25E8%258C%2589%25E8%258E%2589%25E8%258C%25B6_%25E9%259D%25A9%25E5%258D%25A6.png": "244c532858d494d7b043e58cef167df4",
"assets/assets/reference/%25E8%258E%25AB%25E5%25B9%25B2%25E9%25BB%2583%25E8%258A%25BD_%25E9%259C%2587%25E5%258D%25A6.png": "d11b6b555f67848c8d3963bd2d307fb3",
"assets/assets/reference/%25E8%2592%2599%25E9%25A0%2582%25E7%2594%2598%25E9%259C%25B2_%25E5%25A7%25A4%25E5%258D%25A6.png": "699b4a9020b2267481d71a5dcf95c6cc",
"assets/assets/reference/%25E8%2592%2599%25E9%25A0%2582%25E9%25BB%2583%25E8%258A%25BD_%25E6%25BC%25B8%25E5%258D%25A6.png": "bcb8b3045872fb65bf092a9bea91da69",
"assets/assets/reference/%25E8%25A5%25BF%25E6%25B9%2596%25E9%25BE%258D%25E4%25BA%2595_%25E6%2598%258E%25E5%25A4%25B7%25E5%258D%25A6.png": "3dab160751ef38b619cbd4d756e1c1b7",
"assets/assets/reference/%25E8%25B2%25A2%25E7%259C%2589_%25E5%2592%25B8%25E5%258D%25A6.png": "f79ea5cad9e628a1923ff8ad3498a303",
"assets/assets/reference/%25E8%25B3%2580%25E9%2596%258B_%25E8%2592%2599%25E5%258D%25A6.png": "3dde5202ca7b63f3302e93bd070fb318",
"assets/assets/reference/%25E9%2582%25A6%25E7%259B%2586_%25E5%259D%25A4%25E5%258D%25A6.png": "19b11c8a1301c827c8d9c0dd5d7d7a6b",
"assets/assets/reference/%25E9%2587%2591%25E5%25A4%25A7%25E7%259B%258A_%25E6%25AF%2594%25E5%258D%25A6.png": "cd07abde88bf6c1b6cad93b45161404a",
"assets/assets/reference/%25E9%2587%2591%25E7%2593%259C%25E8%25B2%25A2%25E8%258C%25B6_%25E5%25B0%258F%25E7%2595%259C%25E5%258D%25A6.png": "4a8edcc51d12889c021a86c9a7a8a34b",
"assets/assets/reference/%25E9%2587%2591%25E8%25A7%2580%25E9%259F%25B3_%25E5%25A4%25A7%25E7%2595%259C%25E5%258D%25A6.png": "320c6af5980ac1a254080b7d53d9a9f4",
"assets/assets/reference/%25E9%2587%2591%25E9%25A7%25BF%25E7%259C%2589_%25E6%259C%25AA%25E6%25BF%259F%25E5%258D%25A6.png": "77e4e37380fb2edc2fe42f51ec095d63",
"assets/assets/reference/%25E9%258A%2580%25E9%25A7%25BF%25E7%259C%2589_%25E6%259C%25AA%25E6%25BF%259F%25E5%258D%25A6.png": "5acd7ebff59acbfb1b0266a69127d886",
"assets/assets/reference/%25E9%258C%25A2%25E5%25A1%2598%25E9%25BE%258D%25E4%25BA%2595_%25E7%259D%25BD%25E5%258D%25A6.png": "01c1227d5f105e07c43f1c74e5f523e9",
"assets/assets/reference/%25E9%2590%25B5%25E7%25BE%2585%25E6%25BC%25A2_%25E9%259B%25A2%25E5%258D%25A6.png": "92cebaf851002b0671aec87f1d3cb511",
"assets/assets/reference/%25E9%2597%259C%25E5%258C%2597%25E6%25B0%25B4%25E4%25BB%2599_%25E8%25B3%2581%25E5%258D%25A6.png": "e3b2ef1c2dc7cbd2762f31a7dbc6731c",
"assets/assets/reference/%25E9%2598%25BF%25E9%2587%258C%25E5%25B1%25B1%25E7%2583%258F%25E9%25BE%258D_%25E9%259A%25A8%25E5%258D%25A6.png": "304ccb1b478d6599baa170b86533b04f",
"assets/assets/reference/%25E9%259B%25B2%25E5%258D%2597%25E4%25B8%2583%25E5%25AD%2590%25E9%25A4%2585_%25E5%25B1%25A5%25E5%258D%25A6.png": "0774f38a0d96272401a19d61848bb811",
"assets/assets/reference/%25E9%259C%258D%25E5%25B1%25B1%25E9%25BB%2583%25E5%25A4%25A7%25E8%258C%25B6_%25E8%25B1%2590%25E5%258D%25A6.png": "4be7ba29d2419bb85e4c3b97b8a3da54",
"assets/assets/reference/%25E9%25B3%25B3%25E5%2587%25B0%25E6%2599%25AE%25E6%25B4%25B1_%25E6%25B3%25B0%25E5%258D%25A6.png": "94711f8586721200819c49457041ebdc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "614d00f7ef2b48b8179ca982f26af8b2",
"assets/NOTICES": "f7d5d648abeecd001d575ce63ba1e156",
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
"flutter_bootstrap.js": "2857ef4a3a58efe313d0e2bd7940a496",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "162c643d222e39f2fac08d377c80bed6",
"/": "162c643d222e39f2fac08d377c80bed6",
"main.dart.js": "6a1cb19db6f423586879e1a8f39823a8",
"manifest.json": "5c530fcdfedff416b4b114c9b13e0653",
"version.json": "32b515b9071f6e5ae17a51b536341acb"};
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
