module.exports = function(grunt){
	//project configuration
	grunt.initConfig({
		pkg: GruntFile.readJSON('package.json'),
		mochaTest: {
			local: {
				options: {
					reporter: 'spec',
					quiet: false,
					clearRequireCache: false,
					ui: 'tdd'
				},
				src: ['tests/**/*.js']
			}
		}
	});
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask('test', ['mochaTest:local']);
};