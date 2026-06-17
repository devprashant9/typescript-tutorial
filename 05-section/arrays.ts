// defining types for array. Explicitly defining types
let studentMarks: number[] = [80, 95, 97, 85, 89, 91];
let freshFruits: string[] = ["mango", "litchi", "banana", "orange"];
let alwaysUnique: symbol[] = [Symbol(10), Symbol("mango"), Symbol(undefined)];

// any[]
let randomData1: any[] = [10, "prashant", undefined, null, true, [10, 20]]; // behaves as Js
randomData1[0].toUpperCase(); // allowed
randomData1[2] = 65; // allowed

// unknown[]
let randomData2: unknown[] = [10, "prashant", undefined, null, true, [10, 20]]; // any data can come into this Top Type
randomData1[0].toUpperCase(); // allowed
randomData1[2] = 65; // allowed

// typer inference for arrays. Implicitly recognized by Ts
let userScoreHistory = [10, 20, 30]; // number[]
// userScoreHistory.toUpperCase(); // complains because Ts knows this method not appear on number
userScoreHistory.push(10);
// userScoreHistory.push("30"); // not allowed as we know type is inferred during initialization only.
userScoreHistory.push(NaN);
userScoreHistory.push(Infinity);

// little about Uninon(|) operator will cover it later
let userDetails = ["Prashant", 21]; // (string | number)[]
// userDetails[0].toUpperCase(); // Ts merged 2 different types thus Ts cannot gurantee about sepcific method except common ones. thus not allowed. 

// If we keep on adding different types during initialization only then collective type will expand
let moreTypes1 = [undefined, null]; // inferred as (null | undefined)[]
let moreTypes2 = [undefined, null, 10]; // inferred as (null | undefined | number)[]


// Combining Multiple Types Using Union Operator (|)
let userResponse1: (string | number)[] = ["Prashant", 10, 30, "Rahul"]; // only store what conatiner ie array can hold
let userResponse2: (string | number)[] = []; // this is also okay
let userResponse3: (string | number)[] = ["Prashant"]; // this is also okay
// here type doesn't expand if we add an element with different type
// if we try to add 'null' in above array it will reject because it already knows the type

// userResponse[0].toUpperCase(); // this is still not allowed because of mixed type
userResponse1[0]?.toLocaleString(); // allowed as common method b/w (string | number) thus Ts knows it. however it checks using ? operator as it may be undefined also Ts being conservative
userResponse1.push("Ankit"); // allowed as it can accept string
userResponse1.push(20); // allowed as it can accept number

// let arr1 = 10 + [10, 20]; // not allowed
let arr2 = 10 + "Prashant" + [10, 20, 30] + null + undefined; // inferred as string and + as concatenation
console.log(arr2);

// Array Methods
let scores: number[] = [10, 15, 20, 25, 30, 35, 40];

let increaseScoreBy10: number[] = scores.map((n) => n + 10); // inferred as number[] based on fn operation
console.log(increaseScoreBy10);

let oddScores = scores.filter((n) => n % 2 !== 0); // inferred as number[] based on fn operation
console.log(oddScores);

let arraySum = scores.reduce((curr, acc) => curr + acc, 0); // inferred as number based on fn operation
console.log(arraySum);

let scores2: (string | number)[] = [10, "Prashant", "Ankit", 20, "Atul", 30];

let userNames = scores2.filter((el) => typeof el == "string"); // inferred as string[] based on operation
console.log(userNames);

userNames.forEach((names) => names.toUpperCase); // shows all suggestions for string
console.log(userNames);