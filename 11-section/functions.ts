// =====================================================
// 1. Normal Function Typing
// =====================================================

function greet(name: string): string {
    return `Hello ${name}`;
}

function add(a: number, b: number): number {
    return a + b;
}

function printMessage(message: string): void {
    console.log(message);
}

function getValue(flag: boolean): number | string {
    if (flag) {
        return 100;
    }

    return "Not Found";
}


// =====================================================
// 2. Function Type Alias: Reusable & Redable
// =====================================================

type AddFn = (a: number, b: number) => number;

const sum: AddFn = (a, b) => {
    return a + b;
};

const multiply: AddFn = (a, b) => {
    return a * b;
};


type GreetFn = (name: string) => string;

const greetUser: GreetFn = (name) => {
    return `Hello ${name}`;
};


// =====================================================
// 3. Function Interface
// =====================================================

interface Calculator {
    (a: number, b: number): number; // method synatx same as using arrows
}

const subtract: Calculator = (a, b) => {
    return a - b;
};

const divide: Calculator = (a, b) => {
    return a / b;
};



