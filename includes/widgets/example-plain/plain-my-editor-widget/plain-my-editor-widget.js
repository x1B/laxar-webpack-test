/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license
 */
export const name = 'plain-my-editor-widget';
export const injections = [ 'axContext', 'axEventBus', 'axFeatures' ];
export function create( axContext, axEventBus, axFeatures ) {

   const initialModel = {
      htmlTitle: 'A document resource',
      htmlText: 'This resource is shared by two widgets using the LaxarJS <em>Event-Bus</em>.' +
      '\n\n<b>Try editing</b> the resource contents!'
   };

   const resource = axFeatures.document.resource;
   axEventBus.subscribe( 'didNavigate', () => {
      axEventBus.publish( `didReplace.${resource}`, {
         resource: resource,
         data: initialModel
      } );
   } );

   return {
      renderTo( element ) {
         element.querySelector( 'input' ).value = initialModel.htmlTitle;
         element.querySelector( 'textarea' ).value = initialModel.htmlText;
         renderIdsAndFors( element );

         element.querySelector( 'input' ).addEventListener( 'input', () => {
            publishUpdate( 'htmlTitle', element.querySelector( 'input' ).value );
         } );
         element.querySelector( 'textarea' ).addEventListener( 'input', () => {
            publishUpdate( 'htmlText', element.querySelector( 'textarea' ).value );
         } );

         function publishUpdate( key, value ) {
            axEventBus.publish( `didUpdate.${resource}`, {
               resource: resource,
               patches: [ { op: 'replace', path: `/${key}`, value: value } ]
            } );
         }
      }
   };

   function renderIdsAndFors( element ) {
      Array.from( element.querySelectorAll( '[data-id]' ) ).forEach( idElement => {
         const localId = idElement.dataset.id;
         idElement.setAttribute( 'id', axContext.id( localId ) );
         Array.from( element.querySelectorAll( `[data-for="${localId}"]` ) ).forEach( forElement => {
            forElement.setAttribute( 'for', axContext.id( localId ) );
         } );
      } );
   }

}
