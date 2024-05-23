/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'gabriela': ['Gabriela'],
				'inter': ['Inter'],
				'nato-ar': ['Noto Sans Arabic'],
				'nato': ['Noto Sans'],
			},
		},
	},
	plugins: [
	],
};
