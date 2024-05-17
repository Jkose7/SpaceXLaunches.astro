import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_v38g7SqD.mjs';

const _page0  = () => import('./chunks/generic_ndYgLFJ9.mjs');
const _page1  = () => import('./chunks/_id__M0yLcD6U.mjs');
const _page2  = () => import('./chunks/index_UhKw_web.mjs');
const _page3  = () => import('./chunks/404_FnFntQFQ.mjs');
const _page4  = () => import('./chunks/api_RY3eZrp8.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/launch/[id].astro", _page1],["src/pages/index.astro", _page2],["src/pages/404.astro", _page3],["src/pages/api.md", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"78ee8431-40bd-438c-968e-af88cb7a2bff"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
