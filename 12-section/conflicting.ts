type Person1 = {
    name: string;
    age: number;
};

type Person2 = {
    name: string;
    age: string;
};

type Person3 = Person1 | Person2;
const obj1: Person3 = {
    name: "mango",
    age: 25, // type is (string | number)

};

const obj2: Person3 = {
    name: "mango",
    age: "25", // type is (string | number)

};

type Person4 = Person1 & Person2;

let num!: never;
const obj3: Person4 = {
    name: "mango",
    // age: 25, // type is never (number & string)
    age: num, // assigned a "never" value

};