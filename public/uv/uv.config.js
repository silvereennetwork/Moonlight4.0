/*global Ultraviolet*/

const blocked = [
    "trk.pinterest.com",
    "widgets.pinterest.com",
    "events.reddit.com",
    "events.redditmedia.com",
    "ads.youtube.com",
    "ads-api.tiktok.com",
    "analytics.tiktok.com",
    "ads-sg.tiktok.com",
    "analytics-sg.tiktok.com",
    "business-api.tiktok.com",
    "ads.tiktok.com",
    "log.byteoversea.com",
    "ads.yahoo.com",
    "analytics.yahoo.com",
    "geo.yahoo.com",
    "udc.yahoo.com",
    "udcm.yahoo.com",
    "advertising.yahoo.com",
    "analytics.query.yahoo.com",
    "partnerads.ysm.yahoo.com",
    "log.fc.yahoo.com",
    "gemini.yahoo.com",
    "adtech.yahooinc.com",
    "extmaps-api.yandex.net",
    "appmetrica.yandex.ru",
    "adfstat.yandex.ru",
    "metrika.yandex.ru",
    "advertising.yandex.ru",
    "offerwall.yandex.net",
    "adfox.yandex.ru",
    "auction.unityads.unity3d.com",
    "webview.unityads.unity3d.com",
    "config.unityads.unity3d.com",
    "adserver.unityads.unity3d.com",
    "iot-eu-logser.realme.com",
    "iot-logser.realme.com",
    "bdapi-ads.realmemobile.com",
    "bdapi-in-ads.realmemobile.com",
    "api.ad.xiaomi.com",
    "data.mistat.xiaomi.com",
    "data.mistat.india.xiaomi.com",
    "data.mistat.rus.xiaomi.com",
    "sdkconfig.ad.xiaomi.com",
    "sdkconfig.ad.intl.xiaomi.com",
    "globalapi.ad.xiaomi.com",
    "tracking.rus.miui.com",
    "adsfs.oppomobile.com",
    "adx.ads.oppomobile.com",
    "ck.ads.oppomobile.com",
    "data.ads.oppomobile.com",
    "metrics.data.hicloud.com",
    "metrics2.data.hicloud.com",
    "grs.hicloud.com",
    "logservice.hicloud.com",
    "logservice1.hicloud.com",
    "logbak.hicloud.com",
    "click.oneplus.cn",
    "open.oneplus.net",
    "samsungads.com",
    "smetrics.samsung.com",
    "nmetrics.samsung.com",
    "samsung-com.112.2o7.net",
    "analytics-api.samsunghealthcn.com",
    "advertising.apple.com",
    "tr.iadsdk.apple.com",
    "iadsdk.apple.com",
    "metrics.icloud.com",
    "metrics.apple.com",
    "metrics.mzstatic.com",
    "api-adservices.apple.com",
    "books-analytics-events.apple.com",
    "weather-analytics-events.apple.com",
    "notes-analytics-events.apple.com",
    "fwtracks.freshmarketer.com",
    "adtago.s3.amazonaws.com",
    "analytics.s3.amazonaws.com",
    "advice-ads.s3.amazonaws.com",
    "advertising-api-eu.amazon.com",
    "pagead2.googlesyndication.com",
    "adservice.google.com",
    "afs.googlesyndication.com",
    "mediavisor.doubleclick.net",
    "ads30.adcolony.com",
    "adc3-launch.adcolony.com",
    "events3alt.adcolony.com",
    "wd.adcolony.com",
    "adservetx.media.net",
    "app-measurement.com",
    "analytics.google.com",
    "click.googleanalytics.com",
    "identify.hotjar.com",
    "events.hotjar.io",
    "o2.mouseflow.com",
    "gtm.mouseflow.com",
    "api.mouseflow.com",
    "realtime.luckyorange.com",
    "upload.luckyorange.net",
    "cs.luckyorange.net",
    "an.facebook.com",
    "static.ads-twitter.com",
    "ads-api.twitter.com",
];

const blockedsites = [
    "pornhub.com",
    "xvideos.com",
    "xnxx.com",
    "pornmate.com",
    "bestpornsites.net"
]

var adblock = 1

self.__uv$config = {
    /**
     * The prefix for UV (Ultraviolet) resources.
     * @type {string}
     */
    prefix: "/service/uv/",

    /**
     * The bare path.
     * @type {string}
     */
    bare: "/bare/",

    /**
     * Function to encode URLs using Ultraviolet's XOR codec.
     * @type {function}
     * @param {string} url - The URL to encode.
     * @returns {string} The encoded URL.
     */
    encodeUrl: Ultraviolet.codec.xor.encode,

    /**
     * Function to decode URLs using Ultraviolet's XOR codec.
     * @type {function}
     * @param {string} url - The URL to decode.
     * @returns {string} The decoded URL.
     */
    decodeUrl: Ultraviolet.codec.xor.decode,

    /**
     * The handler path.
     * @type {string}
     */
    handler: "/uv/uv.handler.js",

    /**
     * The client path.
     * @type {string}
     */
    client: "/uv/uv.client.js",

    /**
     * The bundle path.
     * @type {string}
     */
    bundle: "/uv/uv.bundle.js",

    /**
     * The config path.
     * @type {string}
     */
    config: "/uv/uv.config.js",

    /**
     * The service worker path.
     * @type {string}
     */
    sw: "/uv/uv.sw.js",

    /**
     * Function to inject scripts into the doc Head
     * @type {function}
     * @param {URL} url - The URL for the rewrite function.
     * @returns {string} The script to inject.
     */
    inject: (url) => {
        console.log(url.host);
        return `
      <script>
      function removeAds() {
        const adKeywords = [
          'ad',
          'adsby',
          'google_ads',
          'doubleclick',
          'ad-banner',
          'ad-container',
          'ad-slot',
          'ad-wrapper',
          'textads',
          'banner-ads',
          'banner_ads',
          'ad-unit',
          'afs_ads',
          'ad-zone',
          'ad-space',
          'adsbox'
        ];
  
        const elements = document.getElementsByTagName('*');
  
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
  
          for (const keyword of adKeywords) {
            if (
              element.id &&
              element.id.toLowerCase().includes(keyword) ||
              element.className &&
              element.className.toLowerCase().includes(keyword)
            ) {
              console.log('Ad detected and removed:', element);
              // Remove the detected ad element
              element.parentNode.removeChild(element);
            }
          }
        }
      }
  
       window.addEventListener('load', removeAds);
  
  
      </script>
      `;
    },

    /**
     * Middleware function for handling requests.
     * @type {function}
     * @param {Request} request - The request object.
     * @returns {Request|Response} The modified request or a response.
     */
    middleware: (request) => {
        const url = new URL(request.url);
        var host = url.origin
        var other = url.href.substring(url.origin.length,url.href.length )
        if(url.href.includes("defrgthyju") == true){
          other = other.substring(0,other.length-10)
          adblock = 0
        }
        if(url.href.includes("lokijuhygt") == true){
          other = other.substring(0,other.length-10)
          adblock = 1
        }
        if(url.href.includes("?wfryhktgb") == true){
          host = self.location.origin;
        }
        if (blockedsites.includes(url.host) 
        || url.href.toLocaleLowerCase().includes("porn")
        || url.href.toLocaleLowerCase().includes("18+")
        || url.href.toLocaleLowerCase().includes("xvideos")
        || url.href.toLocaleLowerCase().includes("xxx")) {
          if(url.href.includes("?wfryhktgb") == false){
            return new Request(self.location.origin + "/blocked.html", request)
          }
        }
        if(adblock == 1){
          if (blocked.includes(url.host)) {
            return new Response(null, {});
          }
          if (
            url.pathname.includes("ads.js") ||
            url.pathname.includes("pagead.js") ||
            url.pathname.includes("partner.ads.js ")
          )
          return new Response(null, {});
        }
        if(request.method == "GET"){
          return new Request(host+other, request);
        }
        return request
        
    },
    /**
     * Function to inject scripts into the doc Head
     * @type {function}
     * @param {URL} url - The URL for the rewrite function.
     * @returns {string} - The script to inject.
     */
    inject: async (url) => {
        if (url.host === 'discord.com') {
            return `
              <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js"></script>
              <link rel="stylesheet" href="https://raw.githubusercontent.com/Vencord/builds/main/browser.css">
            `;
        }

        return ``;
    },
    /**
     * Function to inject scripts into the doc Head
     * @type {function}
     * @param {URL} url - The URL for the rewrite function.
     * @returns {string} - The script to inject.
     */
    inject: async (url) => {
        if (url.host === '3kh0-assets.silvereen.net') {
            return `
              <img src="https://moonlight4.silvereen.store/assets/imgs/logos/logo.png" style="position: absolute; z-index: 9999999; width: 50px; height: 50px; opacity: 50%; margin-right: 5px; top: 0; left: 0;" alt="moonlight">
            `;
        }

        return ``;
    },
};