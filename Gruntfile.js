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
        },

        sass: {
        	develop: {
      			files: [
      				{expand: true, cwd: 'app/static/scss', src: ['*.scss'], dest: 'generated/css', ext: '.css'}
      			],
      			options: {
      				style: 'nested', // default
      				sourcemap: 'none'
      			}
        	},
    		dist: {
      			files: [
      				{expand: true, cwd: 'app/static/scss', src: ['*.scss'], dest: 'dist/css', ext: '.css'}
      			],
      			options: {
      				style: 'compressed', // compressing
      				sourcemap: 'none'
      			}
      		}
    	},

        less: {
        	develop: {
      			files: [
      				{expand: true, cwd: 'app/static/less', src: ['*.less'], dest: 'generated/css', ext: '.css'}
      			],
      			options: {
      				compress: false, 
      				sourceMap: false
      			}
        	},
    		dist: {
      			files: [
      				{expand: true, cwd: 'app/static/less', src: ['*.less'], dest: 'dist/css', ext: '.css'}
      			],
      			options: {
      				compress: true, // compressing
      				sourceMap: false
      			}
      		}
    	}
	});


	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-less');


	grunt.registerTask('default', ['copy:develop', 'sass:develop', 'less:develop']);
    grunt.registerTask('dist', ['copy:dist', 'sass:dist', 'less:dist']);


};
