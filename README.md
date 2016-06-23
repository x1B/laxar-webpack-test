# laxar-webpack-test

> Incubation chamber for a LaxarJS v2 project template using webpack+babel for ES2015

This project serves as a development testbed for LaxarJS v2 and the associated tooling.
Also, it will be the basis for creating a Yeoman template for LaxarJS v2 projects.


### Instructions

```sh
git clone --recursive https://github.com/x1b/laxar-webpack-test
cd laxar-webpack-test
npm install
```

To run the development server(s):

```sh
npm start
```

Visit the application at [localhost:8100](http://localhost:8100).


To create an optimized version:

```sh
npm run optimize
```


### How it works

The grunt configuration uses `grunt-laxar` to generate a list of widget dependencies, and a resource bundle, like in LaxarJS v1.
Additionally webpack is used to load and bundle the JavaScript modules, and to reload them during development


### Known limitations

 - Currently, the `require_config.js` is still needed to provide paths for `grunt-laxar`.
 - With this setup, changes to JSON/HTML/CSS assets are not picked up automatically (only webpack is used for watching to avoid double refresh problems).
