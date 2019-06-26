module.exports = {
	name: env('APP_NAME', 'Nodue'),

	env: env('APP_ENV', 'production'),

	debug: env('APP_DEBUG', false),

	url: env('APP_URL', 'http://localhost'),

	/**
	 * Server port.
	 *
	 * @type {Number}
	 */
	port: env('APP_PORT', 80),

	/**
	 * Specify the autoloading locations.
	 */
	autoload: {
		AppFiles: 'app',
	},

	/**
	 * Specify the helper locations.
	 */
	helpers: [
		'helpers',
		'Helpers',
	],

	providers: [
		// 'Database.DatabaseServiceProvider',
	],

	/**
	 * Class instances.
	 */
	instances: {
		log: 'App.Logger',
		// DB: function(app) {
		// 	return app.make('db');
		// },
		Route: 'Router.Router',
		Request: 'Http.Request',
		Server: 'App.Server',
		HotReload: 'App.HotReload',
		AssetsCompiler: 'AssetsCompiler.Compiler',
		DependenciesParser: 'Container.DependenciesParser',
		DependenciesBuilder: 'Container.DependenciesBuilder',
		DependenciesResolver: 'Container.DependenciesResolver',
	},

	/**
	 * Class references.
	 */
	references: {
		Controller: 'Http.Controller',
		Model: 'ORM.GraphqlModel',
		NativeModel: 'ORM.NativeModel',
		VueComponent: 'App.VueComponent',
		VueTester: 'Testing.VueTester',
		VueCompiler: 'AssetsCompiler.VueCompiler',
		VueComponentCompiler: 'AssetsCompiler.VueComponentCompiler',
		VueComponentCompilerTasks: 'AssetsCompiler.VueComponentCompilerTasks',
	},

	cacheFolder: './storage/framework/cache',

	resources: {
		viewsFolder: './resources/views',
		viewsCacheFolder: './storage/framework/cache/views',
		layoutsFolder: './resources/layouts',
		layoutsCacheFile: './storage/framework/cache/layout_templates.js',
	},

	components: {
		prefix: 'n',
		globalFolder: './resources/assets/js/components/global',
		globalCacheFolder: './storage/framework/cache/global_components.js',
	}
}
