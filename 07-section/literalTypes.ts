// Literal Types Means Literally What We Give As A Type
// used when we have multiple fixed options
// only compile time, nothing goes to Js

// let num1: 56 = 73; // type is 53 but assigning 73, thus not allowed
let num2: 32 = 32; // works

// let str1: "prashant" = "Prashant"; // not allowed as literal type
let str2: "Ankit" = "Ankit"; // allowed

// basically whatever we write after : during variable declaartion is representing possible values for that type
let data: "prashant" | 24 | null = 24; // 
data = "prashant"
data = null;
// data = "fruit"; // not allowed

// Similar thing can be written using type aliases to make it resuable
type UserTypes = "ankit" | 26 | "girish" | undefined;
let userData: UserTypes = undefined;
userData = "ankit";
userData = 26;
userData = "girish";

// Similarly when we write
let nums: number = 25; // assign something which represents a number thus infinite types. Known as Collective Types
let stri: string = "dog"; // means all set of characters that can be formed can be assigned to it. Known as Collective Types

let isACtive: true = true; //literal type is true and not boolean

// const auto create literal types
const greet = "hi"; // inferred tyepe "hi"
const greet2: string = "hi"; // this is not same as we have explicit declaration for string type
