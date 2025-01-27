'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "69d9e6cf1d3860df53ba540d7b8883ea",
"favicon.ico": "ce8716e9519eef87994a0fd7353331e0",
"index.html": "e2607228dff107d9e3f07cfc620bb887",
"/": "e2607228dff107d9e3f07cfc620bb887",
"main.dart.js": "39d706a1add9ddc1ee2c5983ae702866",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7b4e03ddd1f490557064ce2549aa2337",
"assets/AssetManifest.json": "c3ac0ed13b344a352f8f13112c8a4f45",
"assets/NOTICES": "aee9317869f4fa9c120f721fc44b7215",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "d5494ff20601899fac3158d1e5257c3b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Saphira.png": "3c96cb0939fc628e7591136c598aceb9",
"assets/assets/Regular_2020_2.png": "e580ca4612ec11843158779eb2196485",
"assets/assets/Regular_2020.png": "6e1b1f362e19ee820ac093c570b26ce3",
"assets/assets/Regular_2020_1.png": "605eb976332aca5cc8962ed5888227c2",
"assets/assets/Micro2022_1.jpeg": "a7252d12d91edbed33b7a00fb74b2dc6",
"assets/assets/homeBgFinal.jpg": "7b6114f2ea2631fb3c43923a830e6f6e",
"assets/assets/Aero_Orientation2022.jpeg": "5946e301718a102ab9f86cee0901c959",
"assets/assets/kaze_1.jpeg": "dcf46e6588caf1659fb5233119b0244c",
"assets/assets/action.png": "60ec952e58abe505f16dcb82b25d49c0",
"assets/assets/homeBgFinal_noBgcolor.jpg": "695b60de2ccdb54afc4eba73f3aaefaa",
"assets/assets/Saphira5.png": "e199cc70bec52a36f028bf5c15c88edc",
"assets/assets/Saphira4.png": "d1afb714b38b21c55884afce2b43fef3",
"assets/assets/Saphira3.jpg": "6f6d5c2d3e67ad283dbb7765f95f3161",
"assets/assets/bgHomeFinal.jpeg": "86add86bbfd27cf10b80f290e728822b",
"assets/assets/microplane2019.png": "77e55c85bf2cd1eeaa7f64bedb42b4dc",
"assets/assets/Saphira2.png": "df806457a3ea13885b3a4d194ef79480",
"assets/assets/Saphira1.png": "9ebd654f9cd04a9772a1da8301cc2142",
"assets/assets/Logo_MU_darkTheme.png": "14f2fd101c6ff0f6f78221bf45adb5e4",
"assets/assets/homeBgFinal1.jpg": "dad4c78f035cd4d5a1d768c71d3982c2",
"assets/assets/Micro2022.jpeg": "280d878035eea6d56090afa25f59d1fa",
"assets/assets/kaze_2.jpeg": "0aa96302096691199d758a8ce6a20436",
"assets/assets/microplane2019_1.png": "41d2a106f7a1308edfe219ed976eb4e3",
"assets/assets/microplane2019_3.png": "98106d4edd8dbd72bf1893d4242813cd",
"assets/assets/Micro2022_2.jpeg": "7e3f5a1463e3dc0e33bb7a191f8516bb",
"assets/assets/homeBg1.jpeg": "f5205d100cd0356bc18eeb2c97ea66d6",
"assets/assets/microplane2019_2.png": "d116b94eb59a35e6b1d716eb77785c34",
"assets/assets/Micro2022_3.jpeg": "056eef841af761a215ccd916c85afe36",
"assets/assets/homeBg1-lite.jpg": "3ff456b137dff1818ea56ef7de532cfb",
"assets/assets/Logo_MU.jpg": "4e84980f67e7f07256b5900d697dad50",
"assets/assets/Logo_MU.png": "3a746fdcbf8fe27afbba38879b40bbe2",
"assets/assets/kaze_3.jpeg": "f13acebf58d6f560db8872562403ba3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
