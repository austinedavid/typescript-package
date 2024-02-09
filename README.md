# This is to learn how to create a package that uses typescript
# this package can allow use to use both commonJS and ecm imports type

## This contains the command to run for the code to run
1, first create the readme file 
2, create s dist folder which will contain the transpared javascript code from typescript;
3, in your package.json make sure to point to the direction of the main to the place your transpared code is
4, still in the package.json file create a module and point its direction towards the same as the main,
    just that this time, its extension ends with mjs (this probably means modulejs)
5, then also add types and point its directry, but this extension ends with .d.ts(eg ./dist/index.d.ts);
6, after this, then download typescript globally if you don't have it downloaded before, use (npm i -g typescript)
7, then you can install the two important dev dependencies we will need which is still typescript and tsup for bundling.
8, create a tsconfig.json file and add the configurations in it this will help in compilling the typescript code to javascript codes
9, now, we go back to our package.json and add a script command which is build, and assing "tsup" there.
10, after all this set up we can then start writing our code in the index.js, but is quite much better to always write create anoter different file or folder and write your functions there, then come to the index.ts and then export all the function from there.
11, then we make a cleanup of the code that will be uploaded to the github and that will be uploaded to the npm 
    first we ignore the dist folder and the node_modules, then also create a npmignore which will ignore the src 
    folder, node_modules, tsconfig.json and tsup.config.ts;


<p class="color='red'">
    hello my people
</p>