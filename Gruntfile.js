/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license
 */
/*global module,__dirname,__filename */
module.exports = function(grunt) {
   'use strict';

   var serverPort = 8015;
   var testPort = 1000 + serverPort;
   var liveReloadPort = 30000 + serverPort;

   var webpackConfig = require('./webpack.config');

   grunt.initConfig( {
      pkg: grunt.file.readJSON('package.json'),

      'laxar-configure': {
         options: {
            flows: [
               {
                  target: 'main',
                  src: 'application/flow/flow.json'
               }
            ],
            ports: {
               develop: serverPort,
               test: testPort,
               livereload: liveReloadPort
            }
         }
      },
      watch: {
         'webpack': {
            files: [
               'includes/lib/laxar*/lib/**/*.js',
               'includes/lib/laxar-angular-adapter/laxar-angular-adapter.js',
               'includes/widgets/**/*.js'
            ],
            tasks: [
               'webpack:main-develop'
            ],
				options: {
					spawn: false,
            }
         }
      },
      connect: {
         options: {
            protocol: 'http'
         }
      },

      webpack: {
         'main-develop': webpackConfig,
         'main-dist': webpackConfig
      },



      'webpack-dev-server': {
			options: {
				webpack: webpackConfig,
				publicPath: "/" + webpackConfig.output.publicPath
			},
			start: {
				keepAlive: true,
				webpack: {
					devtool: "eval",
					debug: true
				}
         }
      },
      concurrent: {
          main: {
             tasks: ['laxar-develop-no-watch', 'webpack-dev-server'],
             options: {
                  logConcurrentOutput: true
             }
          }
      }
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   grunt.loadNpmTasks('grunt-concurrent');
   grunt.loadNpmTasks('grunt-laxar');
   grunt.loadNpmTasks('grunt-webpack');

   // basic aliases
   grunt.registerTask('test', ['laxar-test']);
   grunt.registerTask('build', ['laxar-build']);
   grunt.registerTask('develop', ['concurrent:main']);
   grunt.registerTask('info', ['laxar-info']);

   // additional (possibly) more intuitive aliases
   grunt.registerTask('optimize', ['laxar-configure', 'laxar-dist-css', 'webpack:main-dist']);
   grunt.registerTask('start', ['concurrent:develop']);

   grunt.registerTask('default', ['build', 'test']);
};
