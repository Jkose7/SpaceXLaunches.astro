/* empty css                        */
import { d as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_LecQi5wk.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './404_-AgVDRgz.mjs';

const html = "<h1 id=\"api-spacexlaunches\"><strong>Api SpaceXLaunches</strong></h1>\n<h1 id=\"end-points\">End Points</h1>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">    console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'documentation'</span><span style=\"color:#E1E4E8\">)</span></span></code></pre>";

				const frontmatter = {"layout":"../layouts/Layout.astro","title":"Api SpaceXLaunches"};
				const file = "C:/Users/SERGIO MUÑOZ/OneDrive/Escritorio/Portafolio/SpaceXLaunches.astro/src/pages/api.md";
				const url = "/api";
				function rawContent() {
					return "\r\n# **Api SpaceXLaunches**\r\n\r\n# End Points\r\n```javascript\r\n    console.log('documentation')\r\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"api-spacexlaunches","text":"Api SpaceXLaunches"},{"depth":1,"slug":"end-points","text":"End Points"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
