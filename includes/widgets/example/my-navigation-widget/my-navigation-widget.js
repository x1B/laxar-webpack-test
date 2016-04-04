/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license
 */
import { module } from 'angular';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

Controller.$inject = [ '$scope', 'axEventBus', 'axFlowService' ];

function Controller( $scope, eventBus, flowService ) {

   // navigation through plain old links...
   $scope.links = $scope.features.links.map( link => {
      return {
         htmlLabel: link.htmlLabel,
         href: flowService.constructAnchor( link.target )
      };
   } );

   // ...or programmatically by using events (form submission etc.)
   $scope.handleClick = button => {
      eventBus.publish( 'navigateRequest.' + button.target, {
         target: button.target
      } );
   };
   
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const name = module( 'myNavigationWidget', [] )
   .controller( 'MyNavigationWidgetController', Controller )
   .name;
