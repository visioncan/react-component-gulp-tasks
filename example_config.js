// Read the package.json to detect the package name and dependencies
var pkg = JSON.parse(require('fs').readFileSync('./package.json'));

// Get default dependencies from package.json.
// Dependencies can be customised by hard-coding this array.
var dependencies = [].concat(Object.keys(pkg.dependencies));

module.exports = {
	component: {
		file: 'MyComponent.js',
		name: 'MyComponent',
		src: 'src',
		dist: 'dist',
		pkgName: pkg.name,
		dependencies: dependencies,
		sass: {
			entry: 'my-component.scss',
			path: 'scss'
		}
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			'index.html',
			'standalone.html'
		],
		scripts: [
			'app.js'
		],
		scss: [
			'app.scss'
		]
	}
};
