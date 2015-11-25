# systemjs-test

> Testing LaxarJS with SystemJS and JSPM

First install all required node modules:
```sh
npm install
```

At this stage `grunt optimize` will fail, since it is based on the old RequireJS stack. For now this  can simply be ignored.

Then install jspm:
```sh
npm install -g jspm
```
You can alternatively install jspm locally instead, which is recommended by the developers.

Now install all jspm dependencies:
```sh
jspm install
```

Then run the grunt build task to ensure that all LaxarJS application dependencies are built correctly.
```sh
grunt build
```

Now either start the server or make a production built using jspm:
```sh
jspm bundle-sfx init.js out.js
```



.... and see it fail, since plugin syntax from SystemJS isn't compatible to the AMD plugin syntax ;-)
