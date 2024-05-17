import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_LecQi5wk.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/api.P204Wnk2.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/launch/[id]","isIndex":false,"type":"page","pattern":"^\\/launch\\/([^/]+?)\\/?$","segments":[[{"content":"launch","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/launch/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/api.P204Wnk2.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/api.P204Wnk2.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/api.P204Wnk2.css"}],"routeData":{"route":"/api","isIndex":false,"type":"page","pattern":"^\\/api\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api.md","pathname":"/api","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/api.md",{"propagation":"none","containsHead":true}],["C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/launch/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/launch/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/components/CardLaunch.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/components/Launches.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/api.md":"chunks/pages/api_FNNiKZYf.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_pW6MqWr_.mjs","/src/pages/index.astro":"chunks/pages/index_LdtIfli0.mjs","\u0000@astrojs-manifest":"manifest_v38g7SqD.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_ndYgLFJ9.mjs","\u0000@astro-page:src/pages/launch/[id]@_@astro":"chunks/_id__M0yLcD6U.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_UhKw_web.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_FnFntQFQ.mjs","\u0000@astro-page:src/pages/api@_@md":"chunks/api_RY3eZrp8.mjs","C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/preact/Like":"_astro/Like.Uo9A31e7.js","@astrojs/preact/client.js":"_astro/client.hnLyXPsA.js","C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.yF8wNcwY.js","/astro/hoisted.js?q=0":"_astro/hoisted.l-JsOPk0.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/api.P204Wnk2.css","/icon.svg","/wikipedia.png","/youtube.png","/_astro/client.hnLyXPsA.js","/_astro/hoisted.l-JsOPk0.js","/_astro/hooks.module.KnJqB6Sm.js","/_astro/Like.Uo9A31e7.js","/_astro/preact.module.lZZEWLCm.js","/_astro/signals.module.yF8wNcwY.js"]});

export { manifest };
