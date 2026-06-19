type T0 = {};
type T1 = { length: number; };
type T2 = { length: number; name: string; };

// T1 > T2 as it has less properties to match
const obj1 = {
    length: 8,
    age: 21,
};

const obj2: T1 = obj1;

// Structural Matching
const obj3: T1 = "hi"; // length property is present on "string"
const obj4: T1 = []; // length property is present on "arrays"
const obj5: T1 = function () { }; // length property is present on "functions"

const obj6: T2 = function () { }; // because properties are present

// Basically "type" represents the structure and whichever structure matches the type it can be assigned to it. More specifically it represents possible Js values
// more properties definetion of types means less assignment
// less properties definetion of types means more assignment