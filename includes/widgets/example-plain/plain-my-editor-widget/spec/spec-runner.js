/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license
 */
(function( global ){

   var specConf = {
      title: 'MyEditorWidget Specification',
      descriptor: require( '../widget.json' ),
      tests: [
         require( './my-editor-widget.spec' )
      ],
      testRunner: 'laxar-mocks',
      jasmineMajorVersion: 2,
      path: '/includes/widgets/example-plain/plain-my-editor-widget/spec'
   };

   require('laxar-mocks').runSpec( specConf );

})( this || window );
