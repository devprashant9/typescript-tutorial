function fn1(name?: string) {
    // optional property only available in Ts
}

function fn2(name: string = "") {
    // by default it takes empty string Js Concept
}

// function fn3(name?: string, age: number) {
//     // optional parameter cannot come before any required parameter
// }

function fn4(name: string, age?: number) {
    // this works
}

function fn5(name: string, age?: number, course?: string) {
    // this works as well and can have any number of parameters followed
}

// Something like this also works
interface UserProps {
    name: string;
    age: number;
    email: string;
}

type UserComponent = (user: UserProps) => void;

const fn6: UserComponent = ({ name, age, email }: UserProps) => {
    console.log("userName: " + name);
    console.log("userEmail: " + email);
    console.log("userAge: " + age);
}