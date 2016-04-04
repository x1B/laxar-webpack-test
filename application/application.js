// See https://github.com/LaxarJS/laxar/blob/master/docs/manuals/configuration.md
window.laxar = ( function() {
   'use strict';

   var modeAttribute = 'data-ax-application-mode';
   var mode = document.querySelector( 'script[' + modeAttribute + ']' ).getAttribute( modeAttribute );

   return {
      name: 'systemjs-test',
      description: '',
      theme: 'default',

      logging: {
         threshold: 'TRACE'
      },

      widgets: {
         // put your widgets' global ax.configuration.get( ... ) options here
      },

      profiling: {
         enabled: false
      },

      useEmbeddedFileListings: mode === 'PRODUCTION',
      useMergedCss: mode === 'PRODUCTION',
      eventBusTimeoutMs: (mode === 'PRODUCTION' ? 120 : 10) * 1000,
      paths: {
         // TODO: this is okay with bower, but when using jspm the path gets awkward
         defaultTheme: 'bower_components/laxar-uikit/dist/themes/default.theme'
      }
   };

} )();
