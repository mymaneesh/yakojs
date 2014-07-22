'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*', './package.json').forEach(grunt.loadNpmTasks);

    var Config = {
    	app: '.',
    	dist: './dist',
    	banner: '/* Distribution Build, Copyright 2014 Alfred Kam & Other Contributers */' 
    };

    grunt.initConfig({
        config: Config,
        clean : {
            dist : [
                '.tmp',
                '<%= config.dist %>/*',
                '<%= config.dist %>/.*'
            ]
        },
        uglify: {
        	minify : {
                files : [
                    {
                        expand : true,
                        cwd : '<%= config.app %>',
                        src : ['**/*.js', '!**/*.min.js','!node_modules/*/**','!Gruntfile.js','!app.js'],
                        dest : '<%= config.dist %>',
                    }
                ]
            },
            options :  {
                mangle : true,
                banner : '<%= config.banner %>'
            }
        }
    });

    grunt.registerTask('build',[
        'clean:dist',
    	'uglify:minify'
    ]);
};