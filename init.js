/**
 * Copyright 2015 Alexander Wilden
 * Released under the MIT license
 */
import { bootstrap } from 'laxar';
import applicationDependencies from 'laxar-application-dependencies';
import resources from 'laxar-application/var/flows/main/resources.json!json';

window.laxar.fileListings = {
  application: resources,
  bower_components: resources,
  includes: resources
};

bootstrap(applicationDependencies);
