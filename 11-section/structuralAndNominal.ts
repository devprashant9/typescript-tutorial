// ======================================================
// STRUCTURAL TYPING IN TYPESCRIPT
// ======================================================
//
// TypeScript uses Structural Typing (Duck Typing).
//
// It does NOT care about the name of the type.
// It only cares about the shape (structure) of the object.
//
// "If it looks like a duck and quacks like a duck,
// TypeScript treats it as a duck."
// ======================================================



// ------------------------------------------------------
// Example 1: Same Structure
// ------------------------------------------------------

interface Person {
    name: string;
}

interface User {
    name: string;
}

const person: Person = {
    name: "Ram",
};

// Allowed because User requires { name: string }
// and Person already has that shape.
const user: User = person;

// Also allowed in reverse direction.
const person2: Person = user;

console.log(user.name);
console.log(person2.name);



// ------------------------------------------------------
// Example 2: Extra Properties Are Fine
// ------------------------------------------------------

interface Person2 {
    name: string;
}

const employee = {
    name: "Shyam",
    salary: 50000,
};

// Allowed because employee contains at least
// everything Person2 requires.
const p: Person2 = employee;

console.log(p.name);



// ------------------------------------------------------
// Example 3: Missing Properties Cause Error
// ------------------------------------------------------

interface Person3 {
    name: string;
    age: number;
}

const obj = {
    name: "Ravi",
};

// ERROR:
// Property 'age' is missing
//
// const p2: Person3 = obj;



// ------------------------------------------------------
// Example 4: More Specific -> Less Specific
// ------------------------------------------------------

interface Animal {
    name: string;
}

interface Dog {
    name: string;
    breed: string;
}

const dog: Dog = {
    name: "Tommy",
    breed: "Labrador",
};

// Allowed
const animal: Animal = dog;

console.log(animal.name);



// ------------------------------------------------------
// Example 5: Less Specific -> More Specific
// ------------------------------------------------------

interface Animal2 {
    name: string;
}

interface Dog2 {
    name: string;
    breed: string;
}

const animal2: Animal2 = {
    name: "Bruno",
};

// ERROR:
// Property 'breed' is missing
//
// const dog2: Dog2 = animal2;



// ======================================================
// EXCESS PROPERTY CHECK
// ======================================================
//
// Excess Property Check only happens when
// assigning an object literal directly.
//
// TypeScript tries to protect you from typos.
// ======================================================



// ------------------------------------------------------
// Example 6: Direct Object Literal
// ------------------------------------------------------

interface Person4 {
    name: string;
}

// ERROR:
// Object literal may only specify known properties.
//
// const p4: Person4 = {
//     name: "Ram",
//     age: 25,
// };



// ------------------------------------------------------
// Example 7: Through Variable
// ------------------------------------------------------

interface Person5 {
    name: string;
}

const userData = {
    name: "Ram",
    age: 25,
};

// Allowed
// Excess property check does NOT happen here.
const p5: Person5 = userData;

console.log(p5.name);



// ------------------------------------------------------
// Example 8: Catching Typos
// ------------------------------------------------------

interface Person6 {
    name: string;
}

// ERROR:
// 'nam' does not exist in type Person6
//
// const p6: Person6 = {
//     nam: "Ram",
// };



// ------------------------------------------------------
// Example 9: Function Parameters
// ------------------------------------------------------

interface UserInfo {
    name: string;
}

function printUser(user: UserInfo) {
    console.log(user.name);
}

// Direct object literal → excess property check
//
// ERROR
// printUser({
//     name: "Ram",
//     age: 25,
// });


// Through variable → allowed
const data = {
    name: "Ram",
    age: 25,
};

printUser(data);



// ------------------------------------------------------
// Example 10: Structural Typing with Functions
// ------------------------------------------------------

interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}

const point3D: Point3D = {
    x: 10,
    y: 20,
    z: 30,
};

// Allowed because Point3D has everything Point2D needs
const point2D: Point2D = point3D;

console.log(point2D);



// ======================================================
// QUICK RULES TO REMEMBER
// ======================================================
//
// Structural Typing:
// -------------------
// ✔ Type names don't matter
// ✔ Shape matters
//
// interface A { name: string }
// interface B { name: string }
//
// A <-> B assignment works
//
//
// Missing Property:
// -------------------
// Required property missing => ERROR
//
//
// Extra Property:
// -------------------
// Extra properties are usually allowed
//
//
// Excess Property Check:
// -------------------
// Happens ONLY for direct object literals
//
// const p: Person = {
//     name: "Ram",
//     age: 25 // ERROR
// }
//
// const obj = {
//     name: "Ram",
//     age: 25
// }
//
// const p: Person = obj // OK
//
// ======================================================