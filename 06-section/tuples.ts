// Tuple = a special kind of array where:
// 1. Length is usually fixed
// 2. Type at each position is fixed
// 3. Order matters
// 4. Gives better tooling and autocomplete than normal arrays when structure is known

// ------------------------------------------------------------
// Normal Array
// ------------------------------------------------------------

let arr: (string | number)[] = ["Prashant", 20];

// TS only knows that every element can be string OR number

// arr[0].toUpperCase(); // Error
// TS cannot guarantee arr[0] is a string

// ------------------------------------------------------------
// Tuple
// ------------------------------------------------------------

let user: [string, number] = ["Prashant", 20];

// TS knows exactly:
// user[0] -> string
// user[1] -> number

user[0].toUpperCase(); // Allowed
user[1].toFixed(2); // Allowed

// Better autocomplete and type safety because TS knows
// the exact type at each index

// ------------------------------------------------------------
// Order Matters
// ------------------------------------------------------------

// let user2: [string, number] = [20, "Prashant"];
// Error: expected string at index 0 and number at index 1

// ------------------------------------------------------------
// Length Matters
// ------------------------------------------------------------

// let pair1: [number, number] = [10, 20, 30];
// Error: tuple expects exactly 2 elements

let pair2: [number, number] = [10, 20];

// ------------------------------------------------------------
// Index Assignment
// ------------------------------------------------------------

pair2[0] = 50; // Allowed
pair2[1] = 95; // Allowed

// pair2[0] = "60";
// Error: string cannot be assigned to number

// ------------------------------------------------------------
// Tuple Caveat
// ------------------------------------------------------------

// Tuples are NOT truly fixed at runtime

pair2.push(30); // Allowed
pair2.push(40); // Allowed

console.log(pair2); // [50, 95, 30, 40]

// TypeScript allows push/pop because tuples are arrays internally

pair2.pop(); // Allowed
pair2.pop(); // Allowed

console.log(pair2); // [50, 95]

// This surprises many developers because tuples appear fixed
// but are only enforced partially at compile time

// ------------------------------------------------------------
// Readonly Tuple
// ------------------------------------------------------------

// If you want a truly immutable tuple

const coordinates: readonly [number, number] = [10, 20];

// coordinates[0] = 50; // Error
// coordinates.push(30); // Error
// coordinates.pop(); // Error

// ------------------------------------------------------------
// Named Tuples
// ------------------------------------------------------------

// Names improve readability only
// They do NOT exist at runtime

let student: [
    name: string,
    age: number,
    marks: number,
    course: string
] = ["Prashant", 21, 9.5, "MCA"];

// Helps understand what each index represents

// student[0] -> name
// student[1] -> age
// student[2] -> marks
// student[3] -> course

// ------------------------------------------------------------
// Tuple Type Inference
// ------------------------------------------------------------

let tup1 = [10, "Prashant"];

// Inferred as:
//// (string | number)[]

// NOT inferred as:
//// [number, string]

// Therefore:

// tup1[0].toFixed();
// Error because TS thinks it could be string

// Explicit declaration required

let tup2: [number, string] = [10, "Prashant"];

// Now TS knows exact positions

tup2[0].toFixed();
tup2[1].toUpperCase();

// ------------------------------------------------------------
// When Should You Use Tuples?
// ------------------------------------------------------------

// Use normal arrays when:
// - Number of elements can vary
// - All elements are generally of the same kind

let scores: number[] = [10, 20, 30, 40];

// Use tuples when:
// - Structure is fixed
// - Order has meaning
// - Each position represents different data

let employee: [string, number] = ["Prashant", 50000];

let point: [number, number] = [10, 20];

let rgb: [number, number, number] = [255, 0, 0];

// Think of tuples as small fixed records represented using arrays.