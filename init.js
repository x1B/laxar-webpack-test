/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license
 */
import { bootstrap } from 'laxar';
import applicationDependencies from 'laxar-application-dependencies';
import resources from 'laxar-application/var/flows/main/resources.json!json';
import * as angularAdapter from 'laxar-angular-adapter';
import 'whatwg-fetch';

window.laxar.fileListings = {
  application: resources,
  bower_components: resources,
  includes: resources
};

bootstrap( document.querySelector( '[data-ax-page]' ), {
   widgetAdapters: [ angularAdapter ],
   widgetModules: applicationDependencies
} );
