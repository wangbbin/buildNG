module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['src/**/*.js', 'test/**/*.js'],
			gruntfile:['package.json','Gruntfile.js'],
			options: {
				globals: {
					_: false,
					$: false,
					jasmine: false,
					describe: false,
					it: false,
					expect: false,
					beforeEach: false,
					afterEach: false,
					sinon: false
				},
				browser: true,
				browserify:true,
				devel: true
			}
		},
		testem: {
			unit: {
				options: {
					framework: 'jasmine2',
					launch_in_dev: ['Chrome'],
					before_tests: 'grunt jshint',
					src_files: [
					'src/**/*.js',
					'test/**/*.js'
					],
					serve_files: [
					'node_modules/lodash/lodash.js',
					'node_modules/jquery/dist/jquery.js',
					'node_modules/sinon/pkg/sinon.js'
					],
					watch_files: [
					'src/**/*.js',
					'test/**/*.js'
					]
				}
			},
			unit1:{
				options:{
					framework: 'jasmine2',
					serve_files: [ "browserified.js" ],
					src_files: [
					'src/**/*.js',
					'test/**/*.js'
					],
					before_tests: "browserify test/hello_spec.js -o browserified.js",
					on_exit: "rm browserified.js",
					launch_in_dev: [ "chrome", "node" ]
				}
			}
		}
	});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-testem');

grunt.registerTask('default', ['testem:run:unit']);
grunt.registerTask('default1', ['testem:run:unit1']);
};