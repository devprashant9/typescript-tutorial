// an existing interface from a library can be extended to add more properties
// if we add union or intersection ts needs more times to resolve

// extends the interface of window object in browser with an additional properties
interface Window {
    age: number;
}

// window.age = 26; // this wont work because file is treated as module scope but works when file in global scope

// for module scope
declare global {
    interface Window {
        age: number;
    }
}; // we need to use this declare global{} syntax when file is a module

window.age = 26; // allowed now

// we can allow declaration merging from external libraries and packages only
// and prevent our own interface from declaration-merging
// its done using esLint setup
// npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

