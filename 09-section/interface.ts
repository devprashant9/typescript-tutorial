// we can do the exact same thing with interfcae as we did with types

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

// To make it reusable and more readable use interface also
interface User1 {
    name: string;
    age: number;
    email: string;
    password: string;
};

let userObj1: User1 = {
    name: "Prashant",
    age: 22,
    email: "example.com",
    password: "1234",
};

let userObj2: User1 = {
    name: "Ankit",
    age: 26,
    email: "ankit@gmail.com",
    password: "596321",
};

interface User2 {
    name: string;
    age: number;
    email: string;
    password: string;
    dob?: string;
}

let userObj3 = {
    name: "Ankit",
    age: 26,
    email: "ankit@gmail.com",
    password: "596321",
};

let userObj4 = {
    name: "Ankit",
    age: 26,
    email: "ankit@gmail.com",
    password: "596321",
    dob: "01-03-1977",
};

interface Response {
    readonly id: string;
    data?: User1[];
    success: boolean;
    message: string;
}

let response1: Response = {
    id: "456",
    data: [userObj1, userObj2],
    success: true,
    message: "data fetch successful",
}
