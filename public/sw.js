if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>a(e,r),o={module:{uri:r},exports:t,require:c};s[r]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-6xk3Sm5wtzHmx0ZrFCKgh.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6xk3Sm5wtzHmx0ZrFCKgh/_buildManifest.js",revision:"5fae1476a28261b639b2a6a9553e92d9"},{url:"/_next/static/6xk3Sm5wtzHmx0ZrFCKgh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/41-4ede4600a4cc2f12.js",revision:"4ede4600a4cc2f12"},{url:"/_next/static/chunks/438-28d67058a3e5d7b7.js",revision:"28d67058a3e5d7b7"},{url:"/_next/static/chunks/629-b9f6e08a8a53f445.js",revision:"b9f6e08a8a53f445"},{url:"/_next/static/chunks/719-b95c1444094b7dd9.js",revision:"b95c1444094b7dd9"},{url:"/_next/static/chunks/753-0ccb883341f97378.js",revision:"0ccb883341f97378"},{url:"/_next/static/chunks/870-d73452dc30f1b2a3.js",revision:"d73452dc30f1b2a3"},{url:"/_next/static/chunks/936-aad9d2067353e30d.js",revision:"aad9d2067353e30d"},{url:"/_next/static/chunks/968-a8997b9c2bf0f474.js",revision:"a8997b9c2bf0f474"},{url:"/_next/static/chunks/d0447323-0d79579b25d946ea.js",revision:"0d79579b25d946ea"},{url:"/_next/static/chunks/framework-af27a8b8615822a5.js",revision:"af27a8b8615822a5"},{url:"/_next/static/chunks/main-e37d96a3a13b13a2.js",revision:"e37d96a3a13b13a2"},{url:"/_next/static/chunks/pages/404-b7544135822f9405.js",revision:"b7544135822f9405"},{url:"/_next/static/chunks/pages/_app-d48af0e8818aa48c.js",revision:"d48af0e8818aa48c"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/_offline-961c313820138be3.js",revision:"961c313820138be3"},{url:"/_next/static/chunks/pages/certificate-37f633abcfd0fdb2.js",revision:"37f633abcfd0fdb2"},{url:"/_next/static/chunks/pages/index-500c01691f7cc974.js",revision:"500c01691f7cc974"},{url:"/_next/static/chunks/pages/portfolio-6b9d0297c80afc1a.js",revision:"6b9d0297c80afc1a"},{url:"/_next/static/chunks/pages/portfolio/%5Bslug%5D-afd7c5ab8e44e29a.js",revision:"afd7c5ab8e44e29a"},{url:"/_next/static/chunks/pages/post-b6195a1b6bc7c9a8.js",revision:"b6195a1b6bc7c9a8"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-ace4a07c32a5a3bc.js",revision:"ace4a07c32a5a3bc"},{url:"/_next/static/chunks/pages/resume-068af0fb20b5b347.js",revision:"068af0fb20b5b347"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/434707d537de745a.css",revision:"434707d537de745a"},{url:"/_offline",revision:"6xk3Sm5wtzHmx0ZrFCKgh"},{url:"/blur.svg",revision:"3af1932958eb25a7fe835cc909926309"},{url:"/favicon.svg",revision:"137de0caaabec5b02d1a8070ca2cb0ed"},{url:"/fonts/inter-var-latin.woff2",revision:"812b3dd29751112389e93387c4f7dd0a"},{url:"/icon-192x192.png",revision:"aa00a8d547e89d258a6115a87d8e2836"},{url:"/icon-256x256.png",revision:"ec09dd9632604e38717a3a7de4ee09be"},{url:"/icon-384x384.png",revision:"026d389a8a69945d76fadf5836f28de7"},{url:"/icon-512x512.png",revision:"bd436c6c0afa7b81adc85f4a2c9ff843"},{url:"/icon-nobg.png",revision:"448ec1fb45c816faa9fb78781b20c61c"},{url:"/manifest.json",revision:"dc5e778775d2defcbf13d018dbb5bf57"},{url:"/robots.txt",revision:"2de1b243d32e6c514a44bb95b491c663"},{url:"/sitemap-0.xml",revision:"51f91398a8a4de63654f7a349e542f50"},{url:"/sitemap.xml",revision:"d88ec95874e84e067fe40966e92507d6"},{url:"/static/404.svg",revision:"160707598233c594020175ac51a9fa11"},{url:"/static/not-found.svg",revision:"516afdb1f3cd0cc503898e5508d9e992"},{url:"/static/tags-illustration.svg",revision:"29745d633124a43a52e18ce9894bb109"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
