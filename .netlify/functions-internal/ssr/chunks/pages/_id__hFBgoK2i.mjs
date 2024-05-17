/* empty css                        */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute, i as renderTransition, j as createTransitionScope } from '../astro_LecQi5wk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_-AgVDRgz.mjs';
/* empty css                          */

const getLaunchesById = async ({
  id
}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};
const getLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const {
    docs: launches
  } = await res.json();
  return launches;
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchesById({ id });
  }
  const launchStatus = launch?.success ? "Success" : "Failure";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${launch?.name}` }, { "default": ($$result2) => renderTemplate`${!launch ? renderTemplate`${maybeRenderHead()}<h1>Not launch exist</h1>` : renderTemplate`<section class="flex flex-col gap-4"> <article class="rounded-lg border shadow-md bg-gray-800 border-gray-700 flex gap-4 w-full p-5"${addAttribute(renderTransition($$result2, "5whsexuw", "", `lauchCart-${id}`), "data-astro-transition-scope")}> <aside class="w-1/2 flex justify-center bg-gray-700 rounded-md p-4"> <img${addAttribute(launch.links.patch.small, "src")} class="aspect-auto object-cover w-96 h-auto" alt=""${addAttribute(renderTransition($$result2, "cqslxneq", "", `launch-${id}`), "data-astro-transition-scope")}> </aside> <aside class="w-1/2 flex flex-col gap-3"> <span${addAttribute([
    `text-xl text-center font-semibold px-2.5 py-0.5 rounded`,
    {
      "bg-green-400 text-green-900": launch.success,
      "bg-red-400 text-red-900": !launch.success
    }
  ], "class:list")}> ${launchStatus} </span> <header class="flex items-center justify-between"> <h1 class="text-5xl font-extrabold"> ${launch.name} </h1> ${renderComponent($$result2, "Like", null, { "id": id, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/preact/Like", "client:component-export": "Like", "data-astro-transition-persist": createTransitionScope($$result2, "zmuczn44") })} </header> <article> <p class="text-2xl font-light text-gray-400"> ${launch.details} </p> </article> <footer class="flex flex-row-reverse mt-auto w-full gap-3"> <span class="flex gap-2 items-center hover:scale-110 transition-all"> <img src="../../../public/youtube.png" alt=""> <a target="_blank"${addAttribute(launch.links.webcast, "href")} class="font-bold">
Webcast
</a> </span> <span class="flex gap-2 items-center hover:scale-110 transition-all"> <img src="../../../public/wikipedia.png" alt=""> <a target="_blank"${addAttribute(launch.links.article, "href")} class="font-bold">
Article
</a> </span> </footer> </aside> </article> <article class="rounded-lg border shadow-md bg-gray-800 border-gray-700 flex flex-col gap-4 w-full p-5"> <h1 class="text-5xl flex gap-4 font-extrabold">
Wikipedia
</h1> <iframe class="min-h-96"></iframe> </article> </section>`}` })}`;
}, "C:/Users/SERGIO MU\xD1OZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/launch/[id].astro", "self");

const $$file = "C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, getLaunches as g };
