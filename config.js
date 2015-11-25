System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "laxar-application/*": "*",
    "laxar-application-dependencies": "var/flows/main/dependencies",
    "laxar-path-default-theme": "jspm_packages/github/LaxarJS/dist-laxar-uikit@1.1.0/dist/themes/default.theme",
    "laxar-path-flow": "application/flow/flow.json",
    "laxar-path-layouts": "application/layouts",
    "laxar-path-pages": "application/pages",
    "laxar-path-root": ".",
    "laxar-path-themes": "includes/themes",
    "laxar-path-widgets": "includes/widgets"
  },

  meta: {
    "laxar": {
      "format": "amd"
    }
  },

  map: {
    "angular": "npm:angular@1.4.8",
    "angular-route": "npm:angular-route@1.4.8",
    "angular-sanitize": "npm:angular-sanitize@1.4.8",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "json": "npm:systemjs-plugin-json@0.1.0",
    "laxar": "npm:laxar@1.1.0",
    "laxar-patterns": "npm:laxar-patterns@1.1.2",
    "laxar-uikit": "github:LaxarJS/dist-laxar-uikit@1.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular@1.4.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jjv@1.0.2": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:laxar-patterns@1.1.2": {
      "json-patch": "npm:fast-json-patch@0.5.4",
      "laxar": "npm:laxar@1.1.0"
    },
    "npm:laxar@1.1.0": {
      "jjv": "npm:jjv@1.0.2",
      "jjve": "npm:jjve@0.5.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
