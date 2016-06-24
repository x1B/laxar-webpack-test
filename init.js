/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license
 */
import { bootstrap } from 'laxar';
import applicationDependencies from 'laxar-application-dependencies';
import resources from 'laxar-application/var/flows/main/resources.json';
// import * as angularAdapter from 'laxar-angular-adapter';
// import 'whatwg-fetch';

window.laxar.fileListings = {
  application: resources,
  bower_components: resources,
  includes: resources
};

bootstrap( document.querySelector( '[data-ax-page]' ), {
   // widgetAdapters: [ angularAdapter ],
   widgetAdapters: [],
   widgetModules: applicationDependencies,
   configuration: window.laxar
} );
