/* empty css                        */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, i as renderTransition, g as renderComponent, j as createTransitionScope } from '../astro_LecQi5wk.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { g as getLaunches } from './_id__hFBgoK2i.mjs';
import { $ as $$Layout } from './404_-AgVDRgz.mjs';

const $$Astro$2 = createAstro();
const $$CardLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, name, img, id, details } = Astro2.props;
  const launchStatus = success ? "Success" : "Failure";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="rounded-lg border shadow-md bg-gray-800 border-gray-700
    hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition
    flex flex-col"${addAttribute(renderTransition($$result, "xoj5xri5", "", `lauchCart-${id}`), "data-astro-transition-scope")}> <picture class="flex justify-center p-4"> <img class="mb-5 rounded-lg"${addAttribute(img, "src")}${addAttribute(`Patch for launch ${id}`, "alt")}${addAttribute(renderTransition($$result, "wczufvlc", "", `launch-${id}`), "data-astro-transition-scope")}> </picture> <header class="p-4 flex-grow"> <div class="flex items-center justify-between w-full"> <span${addAttribute([
    `text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`,
    {
      "bg-green-400 text-green-900": success,
      "bg-red-400 text-red-900": !success
    }
  ], "class:list")}> ${launchStatus} </span> ${renderComponent($$result, "Like", null, { "id": id, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/preact/Like", "client:component-export": "Like", "data-astro-transition-persist": createTransitionScope($$result, "raqxa2vw") })} </div> <h2 class="my-2 text-2xl font-bold tracking-tight text-white"> ${name} </h2> <p class="mb-4 font-light text-gray-400"> ${details != null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/components/CardLaunch.astro", "self");

const $$Astro$1 = createAstro();
const launches = await getLaunches();
const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Launches;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${launches.map((launch) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": launch.id, "img": launch.links.patch.small, "details": launch.details, "success": launch.success, "name": launch.name })}`)} </div>`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/components/Launches.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SpaceX Launches" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Launches", $$Launches, {})} ` })}`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
