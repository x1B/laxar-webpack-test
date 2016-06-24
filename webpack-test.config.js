/* eslint-env node */

const path = require( 'path' );
const JasmineWebpackPlugin = require('jasmine-webpack-plugin');
const webpack = require( 'webpack' );


module.exports = {
   entry: './includes/widgets/example-plain/plain-my-editor-widget/spec/spec-runner.js',
   output: {
      path: path.resolve( './includes/widgets/example-plain/plain-my-editor-widget/spec/' ),
      filename: 'spec-runner.bundle.js'
   },
   plugins: [
      new webpack.SourceMapDevToolPlugin( {
         filename: 'app.bundle.js.map'
      } )
   ],
   module: {
      noParse: /bower_components\/page\/page\.js/,
      loaders: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
         },
         {
            test: /\.json$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'json-loader'
         }
      ]
   },

   resolve: {
      root: [
         path.resolve( './includes/lib/' ),
         path.resolve( './bower_components' )
      ],
      alias: {
         // uncomment to test the dist version of laxar or the git submodule
         //'laxar': path.resolve( './includes/lib/laxar/laxar-dist' ),
         'page': path.resolve( './bower_components/page/page' ),
         'fast-json-patch': path.resolve( './bower_components/fast-json-patch/src/json-patch' ),
         'laxar': path.resolve( './includes/lib/laxar/laxar' ),
         'laxar-application': path.resolve( __dirname ),
         'laxar-application-dependencies': './var/flows/main/dependencies',
      }
   }
};
