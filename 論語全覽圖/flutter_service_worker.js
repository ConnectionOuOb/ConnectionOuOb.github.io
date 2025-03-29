'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fd8aa462e0f27051386f548adbcdc89e",
"assets/AssetManifest.bin.json": "2ea5588a61c003937a3aabb10b8fe44e",
"assets/AssetManifest.json": "3e841b0dc8ab53e77a23acee3324e9f8",
"assets/assets/background/MainView.png": "529735dcd2bb83c0280470b76c573974",
"assets/assets/reference/1.1.png": "34f7791dfce2c81318e8cc3381b971f8",
"assets/assets/reference/1.10.png": "179537d51ea2f5c96c0e1f9b4082d5ab",
"assets/assets/reference/1.11.png": "71fd699de28904599c7d84b1bb33c9a5",
"assets/assets/reference/1.12.png": "a5314d7c922c788d3690784e67a37d17",
"assets/assets/reference/1.13.png": "7c22106369ef21210ae7aa7436299a91",
"assets/assets/reference/1.14.png": "dba7d137c7936b597fcbe4f21e5e809e",
"assets/assets/reference/1.15.png": "4f1770bf9a8c744efcefb9c00fc6b3c8",
"assets/assets/reference/1.16.png": "0bd555964b6c45ae779cc24fc9eb8497",
"assets/assets/reference/1.17.png": "0149fccd1c9f3702647c709e701796da",
"assets/assets/reference/1.18.png": "ece37bf6f22a0b53e0c64699e5ce1b15",
"assets/assets/reference/1.19.png": "1622bc17aa060a9e7e9494bc1b05439c",
"assets/assets/reference/1.2.png": "8c9513d87de91aa52915ff5e45fc6c3d",
"assets/assets/reference/1.20.png": "312469e8ce6a717105cd92c538a1d648",
"assets/assets/reference/1.3.png": "78bc4d4e9de71f0b89a28b296bb4ce39",
"assets/assets/reference/1.4.png": "b4ff57546330b3e4097196c655ca7925",
"assets/assets/reference/1.5.png": "630454c908003e4e74effee5267feee5",
"assets/assets/reference/1.6.png": "b7e778afc70af185b10535497ecc81b1",
"assets/assets/reference/1.7.png": "2d81b79b9795e281af51df3cadd73d47",
"assets/assets/reference/1.8.png": "d6cf14a8698942c191d055c0157b25eb",
"assets/assets/reference/1.9.png": "a22796904e8d7cf6521e7b56c94493b7",
"assets/assets/reference/10.1.jpg": "9db8f208efa9a96e31f29f9a1c929622",
"assets/assets/reference/10.10.jpg": "56d44cb0fb0ca868a119f7c0469d41c9",
"assets/assets/reference/10.11.jpg": "326e98ce781ae7bdb0796e4db806e0c9",
"assets/assets/reference/10.12.jpg": "a9f613043a5502d98c609864b3d1523d",
"assets/assets/reference/10.13.jpg": "697ff5a7437b3950400dc0a1aa6fd763",
"assets/assets/reference/10.14.jpg": "0325240c90bdb773bf6f7267050b5758",
"assets/assets/reference/10.15.jpg": "7290a00ff6ae2e81c5cb0885daae0227",
"assets/assets/reference/10.16.jpg": "bf7209da6558338a3f310cac80762331",
"assets/assets/reference/10.17.jpg": "2a4e08d1676cfa218f913c918a92fdba",
"assets/assets/reference/10.18.jpg": "268a9959fb55b21a186b069397641574",
"assets/assets/reference/10.19.jpg": "20edd234a70e06ab9ed8c3ed25c55bac",
"assets/assets/reference/10.2.jpg": "de1bf3de513d690782a9dacaa89cd8a2",
"assets/assets/reference/10.20.jpg": "3b6d467eb8d0dbfe8318f0be29dcb9c9",
"assets/assets/reference/10.3.jpg": "14ab342dc591e782137155731baed1b7",
"assets/assets/reference/10.4.jpg": "c4277a216c9f494413e156c49d9b5d5c",
"assets/assets/reference/10.5.jpg": "bd785bb7a6c4af05977ab42f8250a183",
"assets/assets/reference/10.6.jpg": "fbe2193617e1e1b8eb93a177032fc269",
"assets/assets/reference/10.7.jpg": "e0b282a2327725485698b3c1522e2556",
"assets/assets/reference/10.8.jpg": "18d12fdbf10206c254c233fd42ec1b9a",
"assets/assets/reference/10.9.jpg": "986219953a09a9bb94084d532c532eda",
"assets/assets/reference/11.1.jpg": "3a3bddafc881c5bca11ffdecfb8837bb",
"assets/assets/reference/11.10.jpg": "d20a8ae1c30ada01a7463da5a72300f0",
"assets/assets/reference/11.11.jpg": "2f6e5a4dcf7e2d815d1874454d8043d2",
"assets/assets/reference/11.12.jpg": "7d738349909520bba2a2e21403dfc2eb",
"assets/assets/reference/11.13.jpg": "954356997a6f0cc6419a9a943071ccb2",
"assets/assets/reference/11.14.jpg": "212dd420c592753b97a948376933a072",
"assets/assets/reference/11.15.jpg": "3a7456051d2765957c1d46da74bf3bba",
"assets/assets/reference/11.16.jpg": "f377f8a69dd0781fc90aa776c998a1b6",
"assets/assets/reference/11.2.jpg": "4ecd7520968dffc908a4a811c7bb5971",
"assets/assets/reference/11.3.jpg": "c14e29b2c3445032c927966ac4b6e2e4",
"assets/assets/reference/11.4.jpg": "d4caaa3887f406503c237f09af92b767",
"assets/assets/reference/11.5.jpg": "fd956ba704ce5cdd21646e6e6f95f4ba",
"assets/assets/reference/11.6.jpg": "1fd44bb1f541511dd2cea5b182ee7a71",
"assets/assets/reference/11.7.jpg": "e1c82308e07fbf24fd6bb6d1f685ba5e",
"assets/assets/reference/11.8.jpg": "32bc36d9341c28cfcdc2629bba5357a3",
"assets/assets/reference/11.9.jpg": "2bb4829d8aba8ae00404f66429c871dc",
"assets/assets/reference/12.1.jpg": "a8f4343cbac85bd0254940cf5580f2a6",
"assets/assets/reference/12.10.jpg": "725d63f63f8e0bfd2910e1fc5229b41a",
"assets/assets/reference/12.11.jpg": "7c209fd5d5063aa0cc569aab7d4d60e5",
"assets/assets/reference/12.12.jpg": "6fd3342491c2eb8ff38e1d77eea6a3e0",
"assets/assets/reference/12.2.jpg": "2913313993e87db9e56864ac4ae2f75b",
"assets/assets/reference/12.3.jpg": "13549647b89119ab245baf082d9557cf",
"assets/assets/reference/12.4.jpg": "3cdfcf6362ddd06e08f821fa63578e14",
"assets/assets/reference/12.5.jpg": "9cd28f966b4c1edbfaf575ba9d794768",
"assets/assets/reference/12.6.png": "fa93f751bffa9e2cd293588482c19d7a",
"assets/assets/reference/12.7.jpg": "da14373ccba6bd8850103aaa22bf01c1",
"assets/assets/reference/12.8.jpg": "3ad52ffd040905f014bb881325f41124",
"assets/assets/reference/12.9.jpg": "85c8d033d233d09ca65971ef9fa80372",
"assets/assets/reference/2.1.png": "8b19ae2765fc8d056b47d687f7690d5e",
"assets/assets/reference/2.10.png": "cc520f4065227265e9e841390f891dda",
"assets/assets/reference/2.11.png": "cfa5dec614841fc90eadd3170af652d0",
"assets/assets/reference/2.12.png": "03846b49c664aa286f7b8924a037f1fa",
"assets/assets/reference/2.13.png": "6c03c219354959c44225afc890b4e7a2",
"assets/assets/reference/2.14.png": "531e475ac231b49314af370851e3bf0a",
"assets/assets/reference/2.15.png": "41b682ec8e963392d6eb2675f4e6e93a",
"assets/assets/reference/2.16.png": "9a00d0f7042e917cd5d68e19bde26a81",
"assets/assets/reference/2.2.png": "e079e58bc065bae31ad938ef4942fd5b",
"assets/assets/reference/2.3.png": "5bd1ed50e6897434045d6d49a251ca1f",
"assets/assets/reference/2.4.png": "3e9f785995fff9c31895032a07ed4777",
"assets/assets/reference/2.5.png": "4db87914fd4014131a9f58b6cad2fb84",
"assets/assets/reference/2.6.png": "7c210b103c6f7f52300c87c767f652e7",
"assets/assets/reference/2.7.png": "78fa6c2ff3e51d62e2d2557fecd974db",
"assets/assets/reference/2.8.png": "90e7decbc45ac5b89515086ac73ffefc",
"assets/assets/reference/2.9.png": "7e7cbaca5beb1258b23b928d821c2722",
"assets/assets/reference/3.1.png": "72b02e7af1fe0dd57ba23b82e63af6a4",
"assets/assets/reference/3.11.png": "fd2e8ae469099acbb6b9016bd46e1329",
"assets/assets/reference/3.12.png": "254ef6752167f21c0b9d1204aef275e2",
"assets/assets/reference/3.13.png": "3b2da0b8cc703bfa737a2280c1851c7d",
"assets/assets/reference/3.15.png": "073aa43591036a05a79a6f0b6f36d7f9",
"assets/assets/reference/3.16.png": "9baba04c882f4d80351f84fdb6565487",
"assets/assets/reference/3.2.png": "f7ed4754cab7be3d2f115d1efa2957c0",
"assets/assets/reference/3.3.png": "9faa4be9592d68f0cf463406a3ab9b38",
"assets/assets/reference/3.4.png": "1cb518efefffe1abc92b10785b9a5277",
"assets/assets/reference/3.5.png": "8db7e12b4a032098a44a587da62322a9",
"assets/assets/reference/3.6.png": "cc520debb4446544ac6ef6cf4bf6a5c3",
"assets/assets/reference/3.7.png": "4c65481a9b1545beb6ad4bd1c59cb66a",
"assets/assets/reference/3.8.png": "58a51f038fb97e16524704c98cd18581",
"assets/assets/reference/3.9.png": "9016991b66d55fe94e7b3369bdbcecd7",
"assets/assets/reference/4.1.png": "7a5b8807de4623eb80fa5474f8062b93",
"assets/assets/reference/4.10.png": "ffc7aa2d9d0a4b160ea3113731878e30",
"assets/assets/reference/4.11.png": "15283e78cedbb4a9e17bb6a206daedf3",
"assets/assets/reference/4.12.png": "3c8ad36600e0219c5abcb6d6f45034c7",
"assets/assets/reference/4.13.png": "08fa2e7d22f470c8e5cf4917f6b1b5b1",
"assets/assets/reference/4.14.png": "f753d1fb7e10b7aa3575258de64d137b",
"assets/assets/reference/4.15.png": "e5aa93f7a6c9f188f68f48faf79a04da",
"assets/assets/reference/4.16.png": "4c9787f948a22bda54a9779997e6e5af",
"assets/assets/reference/4.2.png": "3b1aed18a9900e1662163ab10b99c291",
"assets/assets/reference/4.3.png": "b0838dca4bf72bfb9a5f7bd1fc4d3b27",
"assets/assets/reference/4.4.png": "5613efd6ad5b0c21e193b91597a37033",
"assets/assets/reference/4.5.png": "61fd474865fb96f6c3d9fbc6b911145f",
"assets/assets/reference/4.6.png": "a0b715f9cb9ea9426c405434983ac31e",
"assets/assets/reference/4.7.png": "0feafe63933fd8fd0a0e52da26be3edc",
"assets/assets/reference/4.8.png": "938b4fcb05d8a18b57e8a632307ca5d1",
"assets/assets/reference/4.9.png": "a02a62fed86846a22142166d3afe1128",
"assets/assets/reference/5.1.png": "a40c0d29a942babf42288fa20cfb784b",
"assets/assets/reference/5.10.png": "08953347167cfe7a19691079d5d6c63e",
"assets/assets/reference/5.11.png": "6adf5812edd794a3ec75e6ce7b8215d6",
"assets/assets/reference/5.12.png": "a87846e018c5fe7facd6ccc1e0a658ff",
"assets/assets/reference/5.2.png": "04df0923caba77584266706455b9a0ea",
"assets/assets/reference/5.3.png": "f10d7b382b085301dfb537f7391bafc5",
"assets/assets/reference/5.4.png": "e8dd3bb5d4ba04d28eafa9714c6705e7",
"assets/assets/reference/5.5.png": "be0a80d57d834610b361092a43a7537c",
"assets/assets/reference/5.6.png": "d7c8f0b60812d62e776135200df6cbc7",
"assets/assets/reference/5.7.png": "f5e206dc12210ffa84708e18b7d4670d",
"assets/assets/reference/5.8.png": "005174b2ce87eb8b49145e6cce560d11",
"assets/assets/reference/5.9.png": "c921d04a9cf3fa7f02227f4cd3db060c",
"assets/assets/reference/6.1.png": "13a45c149b4a9f0120fcba314bba22b5",
"assets/assets/reference/6.10.png": "3d18c3628131dfb28fd5ff988275d974",
"assets/assets/reference/6.11.png": "eb68560c52bd0f6c2b18f2223a48157e",
"assets/assets/reference/6.12.png": "9203082bc3e2d96dca79f3d8ac5ac45d",
"assets/assets/reference/6.2.png": "76979e3259c378cd9c788a42aa1fa41f",
"assets/assets/reference/6.3.png": "9cb83b4b9908bc94ec03d953c78433f9",
"assets/assets/reference/6.4.png": "4d8fda46d94b5a738e03663f953d86d4",
"assets/assets/reference/6.5.png": "bc93d0c48a220e7ecc3093cc1d341492",
"assets/assets/reference/6.6.png": "6729fa81ddf152bbf5a4ee53f5445d6c",
"assets/assets/reference/6.7.png": "fa8ebbe83da5ad51faf5af4c6c7ad546",
"assets/assets/reference/6.8.png": "055e688076c5d9abfd7ab9f06a1780b7",
"assets/assets/reference/6.9.png": "bf18a11fd183db359b11e57d645d4e5c",
"assets/assets/reference/7.1.webp": "08f5b3e5619376cd36a661f6eeab14ae",
"assets/assets/reference/7.10.jpg": "627a837c90ebff7c00e448ab5f8b28c1",
"assets/assets/reference/7.11.jpg": "3741addf14e7a46dca0066aa7aa3e824",
"assets/assets/reference/7.12.jpg": "64dd8f5a815a4340adb9d31b2cb53ee1",
"assets/assets/reference/7.13.jpg": "8cda889553c687af42a875d3b3b15e9b",
"assets/assets/reference/7.14.jpg": "a3a30b916da12aae4f14b52af6967a36",
"assets/assets/reference/7.15.jpg": "ca26d976460f65fa22053d1d57a33090",
"assets/assets/reference/7.16.jpg": "f9ac3d30df540e0ac942a9d2e8cfbe86",
"assets/assets/reference/7.2.webp": "6f471a325909e34827484c30a20d252a",
"assets/assets/reference/7.3.webp": "57f1a8c2887e80b8612c7f556296758a",
"assets/assets/reference/7.4.png": "5ddcb18abef4853363c70d00f44a28af",
"assets/assets/reference/7.5.jpg": "e3233fcf0c7deaa42be874f11c8b17b4",
"assets/assets/reference/7.6.jpg": "dd729609a268dfdcade9c2a0feed8464",
"assets/assets/reference/7.7.jpg": "30d5a13b6229df3330cce2b5371812dc",
"assets/assets/reference/7.8.jpg": "b6b8caa4b69826a15b31dd93d167e3ab",
"assets/assets/reference/7.9.jpg": "46ee3c5845858d953867810d8f68c3af",
"assets/assets/reference/8.1.jpg": "ac5dbe89a311c7ce53d6b374766702fc",
"assets/assets/reference/8.10.jpg": "d9abae929e51325bb535a88d15050712",
"assets/assets/reference/8.11.jpg": "e2955ef2d448d1694929e5d712c57839",
"assets/assets/reference/8.12.jpg": "ec4a8e0aa2a2dbbf89da7b6b86020518",
"assets/assets/reference/8.2.jpg": "0f6b466da677594ca4f91ab9b55e4e13",
"assets/assets/reference/8.3.jpg": "67cc03f7efc3fc50cead02996ddee8ea",
"assets/assets/reference/8.4.jpg": "5b15188f30cf7ce3f0bfeff101456eec",
"assets/assets/reference/8.5.jpg": "4c22798a638f8c08255100932839bb79",
"assets/assets/reference/8.6.jpg": "1476eb4bb2592d4f2a50d593de91dac1",
"assets/assets/reference/8.7.jpg": "c2bd5747b7866e378ac98142aab7dc44",
"assets/assets/reference/8.8.jpg": "7bdc77f047eaecb8dc61540ac6146463",
"assets/assets/reference/8.9.jpg": "d45c94f90d7e9d45dddc96328a642bf7",
"assets/assets/reference/9.1.jpg": "c852e2dea9845f70645dfa68ff3fa903",
"assets/assets/reference/9.10.jpg": "5b24361d317a629bd6b95f0d6b491a5d",
"assets/assets/reference/9.11.jpg": "e64e2f7a899e704d60ac54cb2394e545",
"assets/assets/reference/9.12.jpg": "bea7b5b122d7144d14697cc53982c55f",
"assets/assets/reference/9.2.jpg": "c04fe2290676f43aae2a3eb05f95f608",
"assets/assets/reference/9.3.jpg": "0580aff80d7dad7e71cde095314ac65b",
"assets/assets/reference/9.4.jpg": "a2783ed65426aa3348d3802e29e43c8f",
"assets/assets/reference/9.5.jpg": "258bc09f66c6ebfd0590cc8e543b4b94",
"assets/assets/reference/9.6.jpg": "f210277e40e0697bb5fbc88a5615c609",
"assets/assets/reference/9.7.jpg": "2c472b0a9836fb7b87d23f6b89dda168",
"assets/assets/reference/9.8.jpg": "f20cf73835812944e9447fa32e0b68e6",
"assets/assets/reference/9.9.jpg": "8bde4494a54ccf6db3a5ef34e75e5bc0",
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
"index.html": "2ad8b65b42fb42777a5deedffcd98b4d",
"/": "2ad8b65b42fb42777a5deedffcd98b4d",
"main.dart.js": "e7d3cbec7ea60e8e046ac1afe9821da1",
"manifest.json": "99bab95edd3ed323ae5a0f338f181a88",
"version.json": "0ac90253977f6e2058a321648667df64"};
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
