const sveltePreprocess = require('svelte-preprocess');
const pkg = require('./package.json');

module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter:
			process.env.MODE === 'ssr'
				? require('@sveltejs/adapter-node')()
				: require('@sveltejs/adapter-static')(),

		ssr: process.env.MODE === 'spa' ? false : true,

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
