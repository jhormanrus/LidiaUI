/// <reference types="histoire" />

import { HstSvelte } from '@histoire/plugin-svelte'
import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
	plugins: [sveltekit()],
	histoire: {
		plugins: [HstSvelte()],
		setupFile: '/src/histoire-setup.ts',
		theme: {
			title: 'Tuna UI'
		},
		vite: {
			server: {
				host: true
			}
		}
	}
}

export default config
