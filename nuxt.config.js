const pkg = require('./package')

module.exports = {
	mode: 'universal',
	
	/*
      ** Headers of the page
      */
	head: {
		title: pkg.name,
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},
	
	/*
      ** Customize the progress-bar color
      */
	loading: {color: '#3B8070'},
	
	/*
      ** Global CSS
      */
	css: [
		'@/assets/styles/global.scss'
	],
	
	/*
      ** Plugins to load before mounting the App
      */
	plugins: [],
	
	/*
      ** Nuxt.js modules
      */
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
		
		// provide path to the file with resources
		['nuxt-sass-resources-loader', '@/assets/styles/_base.scss'],
	],
	
	/*
      ** Axios module configuration
      */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},
	
	/*
      ** Build configuration
      */
	build: {
		postcss: [
			require('lost'),
		],
		
		/*
            ** You can extend webpack config here
            */
		extend(config, ctx) {
		
		}
	}
}
