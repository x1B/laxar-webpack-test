/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
   entry: './init.js',

   output: {
      path: path.resolve( './var/flows/main/dist' ),
      publicPath: '/var/flows/main/dist/',
      filename: 'app.bundle.js'
   },
   plugins: [
      new webpack.SourceMapDevToolPlugin( {
         filename: 'app.bundle.js.map'
      } ),
   ],

   _distOutput: {
      path: path.resolve( './var/flows/main/dist' ),
      filename: 'app.bundle.min.js'
   },
   _distPlugins: [
      new webpack.SourceMapDevToolPlugin( {
         filename: 'app.bundle.min.js.map'
      } ),
      new webpack.optimize.UglifyJsPlugin( {
         compress: {
            warnings: false
         },
         sourceMap: true
      } )
   ],

   module: {
      noParse: /bower_components\/page\/page\.js/,
      loaders: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components|spec)/,
            loader: 'babel-loader'
         },
         {
            test: /\.json$/,
            exclude: /(node_modules|bower_components|spec)/,
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
         'page': path.resolve( './bower_components/page/page' ),
         'fast-json-patch': path.resolve( './bower_components/fast-json-patch/src/json-patch' ),
         'laxar': path.resolve( './includes/lib/laxar/laxar' ),
         // uncomment to test the dist version of laxar or the git submodule
         // 'laxar': path.resolve( './includes/lib/laxar/dist/laxar' ),
         'laxar-application': path.resolve( __dirname ),
         'laxar-application-dependencies': './var/flows/main/dependencies',
      }
   }
};
