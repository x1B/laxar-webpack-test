/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license
 */
import { json } from 'laxar-patterns';

export const name = 'plain-my-viewer-widget';
export const injections = [ 'axEventBus', 'axFeatures' ];
export function create( axEventBus, axFeatures ) {

   let controller;
   const elementAvailable = new Promise( resolve => {
      controller = {
         renderTo( element ) {
            resolve( element );
         }
      };
   } );

   let model = null;

   const { resource } = axFeatures.document;
   axEventBus.subscribe( `didReplace.${resource}`, ( { data } ) => {
      model = data;
      render();
   } );
   axEventBus.subscribe( `didUpdate.${resource}`, ( { patches } ) => {
      json.applyPatch( model, patches );
      render();
   } );

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   function render() {
      elementAvailable.then( element => {
         element.querySelector( '[model-value="title"]' ).innerHTML = model.htmlTitle;
         element.querySelector( '[model-value="text"]' ).innerHTML = model.htmlText;
      } );
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return controller;
   
};
