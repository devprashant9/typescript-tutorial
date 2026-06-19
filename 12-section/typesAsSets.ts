// type -> treat it as a Set, then


let universalSet: unknown; // anything can come under this thus Universal Set
universalSet = 26;
universalSet = null;
universalSet = undefined;
universalSet = [10, 20];
universalSet = true;
universalSet = { name: "Prashant" };

let num1: number; // we can assign an element which belong to Set={number}
num1 = 5;
num1 = -5;
num1 = NaN;
num1 = Infinity;
num1 = -Infinity;
num1 = 23.457;
num1 = -236547.99; // Infinite Set

let num2: 45; //  // we can assign an element which belong to Set={45}. Finite Set
num2 = 45; // only this belongs to 45
// num2 = 46; // does not belongs to Set={45}

let fruits: "Apple" | "Mango"; // Finite Set
fruits = "Apple"; // belongs to Set={"Apple", "Mango"}
fruits = "Mango"; // belongs to Set = { "Apple", "Mango"}
// fruits = "Litchi"; // does not belongs to Set={"Apple", "Mango"}

let userName: string; // Set={string}; string means sequence of characters of any length
userName = "Prashant";
userName = "Ankit";
userName = "Atul"; // infinite such set of characters of any length exists which belongs to Set={string}

let emptSet: never; // empty Set
