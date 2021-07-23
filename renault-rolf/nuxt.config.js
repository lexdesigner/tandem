export default {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		title: "Большая распродажа RENAULT",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || ""
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#FFCC33" },
	/*
	 ** Global CSS
	 */
	css: ["~/sass/main.sass"],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ["@/plugins/element-ui", "@plugins/send.js", "@plugins/modals.js"],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		"@nuxtjs/style-resources",
		"@nuxtjs/gtm",
		["nuxt-mailru-counter", { id: "3209655" }]
	],
	gtm: {
		id: "GTM-K8J2SG6"
	},
	styleResources: {
		sass: ["~/sass/mixins/*.sass", "~/sass/vars.sass"]
	},
	router: {
		mode: "history"
	},
	/*
	 ** Build configuration
	 */
	build: {
		transpile: [/^element-ui/],
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			config.module.rules.push({
				test: /\.(png|jpe?g|webp|tiff?)$/i,
				loader: "webpack-image-resize-loader"
			});
		}
	}
};
