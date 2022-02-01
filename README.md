# Vue3 component bundling and sharing

This is an experiment around how to build and package a library of vue.js components.

There are many good blogs/articles/docs on the subject, but I always find the javascript ecosystem a bit of a minefield of conflicting advice when I go out and attempt to combine things.

# vuecomp

This folder contains the component library

I've created a Dockerfile to try to document environment setup.

To see it go you can:
```
docker build -t dev/vuecomp .
docker run -it --rm dev/vuecomp
```

However you won't be able to publish to my npm account, you'll need to figure out how to modify `package.json` to your own thing by yourself


# vuecomp-test

This folder contains an extremely basic and minimal vue3 app that uses the component library (registers them at the top level of the app)

Again, it's dockerised to document enviornment scope.  You can play around with it using:
```
docker build -t dev/vuecomp-test .
docker run -it --rm -p 8080:8080 dev/vuecomp-test
```
then hitting http://localhost:8080

