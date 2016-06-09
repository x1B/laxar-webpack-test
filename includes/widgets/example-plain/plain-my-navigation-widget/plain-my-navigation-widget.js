/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license
 */
export const name = 'plain-my-navigation-widget';
export const injections = [ 'axEventBus', 'axFeatures', 'flowService' ];
export function create( axEventBus, axFeatures, axFlowService ) {

   return {
      renderTo( element ) {
         renderItems( element, 'button', axFeatures.buttons, ( clone, button ) => {
            clone.innerHTML = button.htmlLabel;
            clone.addEventListener( 'click', () => {
               axEventBus.publish( `navigateRequest.${button.target}`, {
                  target: button.target
               } );
            } );
         } );
         renderItems( element, 'a', axFeatures.links, ( clone, link ) => {
            clone.innerHTML = link.htmlLabel;
            clone.href = axFlowService.constructAnchor( link.target );
         } );
      }
   };


   function renderItems( widgetElement, selector, items, func ) {
      const el = widgetElement.querySelector( selector );
      const nextSibling = el.nextSibling;
      const container = el.parentNode;
      container.removeChild( el );

      items.forEach( item => {
         const clone = el.cloneNode();
         func( clone, item );
         container.insertBefore( clone, nextSibling );
      } );
   }

}
