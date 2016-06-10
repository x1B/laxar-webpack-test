/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
   entry: './init.js',
   output: {
      path: path.resolve( './var/flows/main/dist' ),
      filename: 'app.bundle.js'
   },
   plugins: [
      new webpack.SourceMapDevToolPlugin( {
         filename: 'app.bundle.js.map'
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
         // uncomment to test the dist version of laxar or the git submodule
         //'laxar': path.resolve( './includes/lib/laxar/laxar-dist' ),
         //'laxar': path.resolve( './includes/lib/laxar/laxar' ),
         'page': path.resolve( './bower_components/page/page' ),
         'laxar-application': path.resolve( __dirname ),
         'laxar-application-dependencies': './var/flows/main/dependencies',
      }
   }
};
