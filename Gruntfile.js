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
    	},

        uglify: {
            develop: {
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true
                },
                files: {
                    'generated/js/javascript.js': ['app/js/*.js'],
                    'generated/js/vendor.js': ['app/js/vendor/jquery.js', 'app/js/vendor/angular.js']
                }
            },
            dist: {
                options: {
                    compress: true,
                    compress: {
                        warnings: false
                    },
                    mangle: true
                },
                files: {
                    'dist/js/javascript.min.js': ['app/js/*.js'],
                    'dist/js/vendor.min.js': ['app/js/vendor/jquery.js', 'app/js/vendor/angular.js']
                }
            }
        },
        watch: {
            scss: {
                files: ['app/static/scss/*.scss'],
                tasks: ['sass:develop']
            },
            less: {
                files: ['app/static/less/*.less'],
                tasks: ['less:develop']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['uglify:develop']
            }
        },

		jasmine : {
			src : 'app/js/*.js',
			options : {
				specs : 'app/js/test/specs/*.js'
			}
		}


	});


	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('default', ['copy:develop', 'sass:develop', 'less:develop', 'uglify:develop']);
    grunt.registerTask('dist', ['copy:dist', 'sass:dist', 'less:dist', 'uglify:dist']);


};
