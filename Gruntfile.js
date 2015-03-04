module.exports = function(grunt) {
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

        copy: {
            develop: {
                files: [
                    {expand: true, cwd: 'app/js', src: '**/*.js', dest: 'generated/js/', filter: 'isFile'}
                ]
            },
            dist: {
                files: [
                    {expand: true, cwd: 'app/js', src: '**/*.js', dest: 'dist/js/', filter: 'isFile'}
                ]
            }
        }


	});


	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy:develop']);
    grunt.registerTask('dist', ['copy:dist']);


};
