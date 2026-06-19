// marked by same symbol as non null assertion using !
// not good to use
// try not using it

// Ts complains if we initialize a variable and use it right away
let num: number;
// console.log(num); // Variable 'num' is used before being assigned.

// definite assignmnet insertion is way to tell Ts that trust me this will get value befor I use it
let num2!: number;
num2 = 20;
console.log(num2);

// things can go wrong here
let num3!: number;
console.log(num3); // prints "undefined"