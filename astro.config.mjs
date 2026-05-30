// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://guide.unwebs.co.kr',
	integrations: [pagefind(), sitemap()],
	build: { format: 'directory' },
	vite: {
		build: {
			rollupOptions: {
				external: ['/pagefind/pagefind.js'],
			},
		},
	},
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['noopener', 'noreferrer'],
					content: { type: 'text', value: ' ↗' },
				},
			],
		],
		shikiConfig: {
			theme: 'github-light',
			wrap: true,
		},
	},
});
