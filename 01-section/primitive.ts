// Primitive Types in Js/Ts
let temperature: null = null;
let userAge: undefined = undefined;
let isUserActive: boolean = true;
let userScore: number = 10;
let userName: string = "Prashant Kumar Jha";
let bigNumber: bigint = 9999999n;
let uniqueId: Symbol = Symbol("userId"); // accepts number, string, undefined

// Ts Type Inference
let num1 = 60; // Ts auto infers type: number by value initialization
// num1 = "Ten"; // not allowed as Ts knows about the type

let carName = "Maruti Suzuki"; // inferred as 
carName = "Pulsar"; // allowed

// Special Inference Case
let isAdult = null; // inferred as any
let run = undefined; // inferred as any

// Defining with let & const: Behaves same as in Js
let fruits1: string = "grapes";
const fruits2: string = "mango";

// TypeScript Special Types
let userData: any = "Prashant"; // ByPasses Ts Type Check. Considered as Top Type
userData = 6; // inferred as any
console.log(userData); // inferred as any

userData = true; // inferred as any
console.log(userData); // inferred as any

let userRank: unknown = 9; // True Top Type: Can Hold Any Value Later
userRank = "Prashant"; // inferred as unknown
console.log(userRank); // inferred as unknown

userRank = false; // inferred as unknown
console.log(userRank); // inferred as unknown

let numberOfDogs = null; // we know its inferred as any
numberOfDogs = 8; // here also any
console.log(numberOfDogs); // here its inferred as number

numberOfDogs = "Tommy"; // inferred as any
console.log(numberOfDogs); // inferred as string

let fruitsShape = undefined; // we know its inferred as any
fruitsShape = "sphere"; // here also any
console.log(fruitsShape); // here its inferred as string

fruitsShape = 4; // here also any
console.log(fruitsShape); // here its inferred as string

let emptyValue: never; // somewthing which can never exists. more in later section
let nothing: void = undefined; // mostly for functions, not used in this way. more in functions section