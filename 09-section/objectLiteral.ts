// In Case of Objects
let obj1 = {}; // inferred as literal {} type
// obj1.name = "Mahesh"; // not allowed according to inferred type

let obj2 = { name: "Prashant", age: 24 }; // inferred as literal {name: string; age: number;} type
obj2.age = 36; // allowed;
// obj2.course = "MCA"; // not allowed according to inferred type

// In Case of Arrays
let arr1 = []; // inferred as any[]
let arr2 = [10, 20, 30]; // inferred as number[]
let arr3 = [10, "Prashant", 20]; // inferred as (string | number)[]

// Thus a Better Way to Define Types For Object
let userDetails: {
    name: string;
    age: number;
    email: string;
    password: string;
} = {
    name: "Prashant",
    age: 22,
    email: "example.com",
    password: "1234",
};

// To make it reusable and more readable use Type Alias
type User = {
    name: string;
    age: number;
    email: string;
    password: string;
};

let userObj1: User = {
    name: "Prashant",
    age: 22,
    email: "example.com",
    password: "1234",
};

let userObj2: User = {
    name: "Ankit",
    age: 26,
    email: "ankit@gmail.com",
    password: "596321",
};

// Properties may be optional
type User2 = {
    name: string;
    age: number;
    email: string;
    password: string;
    dob?: string; // optional properties
}

let userObj3 = {
    name: "Ankit",
    age: 26,
    email: "ankit@gmail.com",
    password: "596321",
}; // works without dob property

let userObj4 = {
    name: "Ankit",
    age: 26,
    email: "ankit@gmail.com",
    password: "596321",
    dob: "01-03-1977",
}; // works with "property" as well

// Properties may be readonly
type Response = {
    readonly id: string;
    data?: User[];
    success: boolean;
    message: string;
}

let response1: Response = {
    id: "456",
    data: [userObj1, userObj2],
    success: true,
    message: "data fetch successful",
}

// response1.id = "56"; // not allowed