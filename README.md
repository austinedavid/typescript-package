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


```typescript
import {Connection} from "@solana/web3.js"
function getman(name:string){
    console.log(name)
}
getman("david")
```
```rust
fn runit()->String{
    
}
```
```jsx
export function All(){
    return(
    <div>
        <p>hello, this is my new name</p>
    </div>)
}
```
```html
<p class="color:red">color of red<p>
```
# h1
## h2
### h3
#### h4
##### h5
###### h6
here we try to write something <span style="color:red">red</span><span style="color:blue">blue</span>
then this is heading <div style="backgroundColor: red; padding: 3px; borderRadius: 2px"><p>my heading here</p> </div>
unordered list below
- list 1
- list 2
    - sub 1
    - sub 2
    - sub 3
- list 3
- list 4
ordered list below
== kill the dog == very important something actually
1. man
2. dog
3. mesoma
4. God  
learnt about this in the link below
[checkout](https://www.markdownguide.org/cheat-sheet/)