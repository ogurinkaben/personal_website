export default {
	pageTransition: {
		name: 'zoom',
		mode: 'out-in'
	},
	loading: {
		color: 'rgb(23, 191, 99)',
		height: '5px',
		duration: 10000
	},
	generate: {
		fallback: true
	},
	mode: 'universal',
	target: 'static',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/app-icons/favicon.ico' }
		],
	},
	css: [
		'~/assets/main.css'
	],
	router: {
		middleware: 'delay'
	},
	plugins: [
		{ src: '~/plugins/sweetAlert.js', mode: 'client' },
		{ src: "@/plugins/aos", ssr: false }
	],
	components: true,
	buildModules: [
		'@nuxtjs/eslint-module'
	],
	modules: [
		'@nuxtjs/axios',
		'vue-scrollto/nuxt',
		['vue-scrollto/nuxt', { duration: 1000 }],
		['nuxt-lazy-load', {
			defaultImage: '/lazy_loading.gif',
		}]
	],
	axios: {},
	build: {}
}
