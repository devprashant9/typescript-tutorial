type T1 = number[];
type T2 = string[];

type T3 = T1 | T2;
const arr1: T3 = [10, 20];
const arr2: T3 = ["apple", "mango"];
// const arr3: T3 = [10, "mango"]; // this is wrong because type is (number[] | string[])

type T4 = T1 & T2; // never[]
// const arr4: T4 = [10, 20]; // not allowed
// const arr5: T4 = ["apple", "mango"]; // not allowed