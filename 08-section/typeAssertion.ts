// when Ts is being conservatie we force Ts to be sure about types
// this may/may-not introduce bugs
// its similar to explicit typing

let num1: number = 25;
// num1.toUpperCase(); // error method doesnt exists

// (num1 as string).toUpperCase(); // it identifies the mistake but still gives suggestion

// Better Example
let userdata = ["Prashant", 20, "Ankit", 40, 50, 60];
// userdata[0].toUpperCase(); shows error
(userdata[0] as string).toUpperCase(); // this works absolutely fine
(userdata[4] as string).toLowerCase(); // BUT, this is also allowed
(userdata[0] as number).toFixed(); // THIS IS ALSO ALLOWED

// basically we are explicitly telling Ts that dont worry I know the type and treat it as I say
// however it should be done carefully as it may do blunder as shown above

// we can also assign to variables in following way
let b = userdata[0] as number; // allowed because I am taking the charge
let c = userdata[1] as string; // same here

// we can use it in the following way as well
type Fruit = "apple" | "mango";

let nums = [30, 60, "Prashant"];
let p = nums[0] as Fruit;
p = "apple";

// using as const for type assertion
let num2 = 30 as const; // inferred type let num2: 30

let num3 = [10, 20, "Prashant"] as const; // inferred type changes to let num3: readonly [10, 20, "Prashant"]
// let h = num3[0] as const; // not allowed as num3[0] is a mixed type
// num3.push(); // no suggestion
// makes it readonly and literal type or readonly Tuple

let obj = {
    name: "Prashant",
    age: 24
} as const;

// inferred as
// let obj: {
//     readonly name: "Prashant";
//     readonly age: 24;
// }

// obj.dob = 25; // not allowed
// obj.name = "Ankit"; // not allowed

// this is different from Object.seal() which seals only top level, as const makes nested fields as const as well

let numArr: number[] = [30, 40, 50, 60] as const;
numArr.push(80); // allowed preference is given to type when both type and assertion  is used