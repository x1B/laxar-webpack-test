/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license
 */
import { module } from 'angular';
import { json } from 'laxar-patterns';

Controller.$inject = [ '$scope', 'axEventBus' ];

function Controller( $scope, eventBus ) {
   const { resource } = $scope.features.document;
   eventBus.subscribe( `didReplace.${resource}`, ( { data } ) => $scope.model = data );
   eventBus.subscribe( `didUpdate.${resource}`, ( { patches } ) => json.applyPatch( $scope.model, patches ) );
}

export const name = module( 'myViewerWidget', [] ).controller( 'MyViewerWidgetController', Controller ).name;
