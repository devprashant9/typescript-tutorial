// 1. types & interface can do more together
interface Dog {
    animalType: "dog";
    name: string;
    breed: string;
}

interface Cat {
    animalType: "cat";
    name: string;
    livesLeft: number;
}

type Pet = Dog | Cat;

const pet1: Pet = {
    animalType: "dog",
    name: "Buddy",
    breed: "Labrador",
};

const pet2: Pet = {
    animalType: "cat",
    name: "Whiskers",
    livesLeft: 9,
};

// const pet3: Pet = {
//     animalType: "dog", // mapping to Dog
//     name: "Max",
//     livesLeft: 9, // Dog dont have this property
// };

// 2. an interface can extend other interface and re-use similar properties
interface User {
    name: string;
    age: number;
}

interface Manager extends User {
    designation: string;
    salary: string;
}

const user: Manager = {
    name: "Prashant",
    age: 21,
    designation: "manager",
    salary: "25000",
}

// 3. an interface can be re-declared whereas type alias cannot be
type User1 = number | string;
// type User1 = number | string | boolean; // error not allowed

interface A {
    name: string;
    age: number;
};

interface A {
    marks: number;
    isActive: boolean;
}; // no error allowed. Known As Declaration Merging/Re-Opening Inteface. Creates a Combined interface A

let objA: A = {
    name: "Prashant",
    age: 21,
    marks: 22,
    isActive: true,
};

// 4. performance wise interface are better than types