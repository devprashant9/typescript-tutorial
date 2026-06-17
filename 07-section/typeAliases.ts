// we can have shorter syntax for larger types using Type Aliases
// it makes the types reusable and increases readability
// mostly used with complex and repetetive types
// 'type' keyword is used to declare type aliases
// only compile time nothing produced like types when compiled to Js

// declaraing inline type for variable
let name: string = "Prashant";

// we can also do something like
type str = string; // created a shorter syntax for 'string'
let userName: str = "Ankit"; // means same as string

// We can create a variable using the same type name
let str: string = "Rahul"; // because this will go to Js and type remains in Ts. But not recommended

// a better example is below
let numsArray1: (string | number | null)[] = [10, 20, 30, "Prashant", "Ankit"];
let numsArray2: (string | number | null)[] = ["Prashant", 80, "Ankit"];
let numsArray3: (string | number | null)[] = [null, "Atul", 95];

// Issues: Repeating 

// Fix 1: Using Type Alias
type NumsArrayType1 = (string | number | null)[]; // parentheses are mandatory here
let numsArray4: NumsArrayType1 = [10, 20, 30, "Prashant", "Ankit"];
let numsArray5: NumsArrayType1 = ["Prashant", 80, "Ankit"];
let numsArray6: NumsArrayType1 = [null, "Atul", 95];

type NumsArrayType2 = string | number | null[]; // this has a different meaning
// it means this type can hold a string or a number or an array of null

// Fix 2: Using Type Alias
type NumsArrayType3 = | string | number | null; // parentheses are not mandatory here
let numsArray7: NumsArrayType3[] = [10, 20, 30, "Prashant", "Ankit"];
let numsArray8: NumsArrayType3[] = ["Prashant", 80, "Ankit"];
let numsArray9: NumsArrayType3[] = [null, "Atul", 95];

// Type Alias Also Written as
type ExampleType =
    | string
    | undefined
    | null
    | number; // can start with | when writing in multiple lines

// Basically whatever we assign after : during variable declaration can be created using Type Aliases