type T0 = {};
type T1 = { length: number; };
type T2 = { length: number; name: string; };

type T3 = T0 | T1; // T0 > T1, thus T0 i.e. bigger
const obj1: T3 = {};
const obj2: T3 = {
    length: 65,
};

type T4 = T0 & T1; // T0 > T1, thus T1 i.e. smaller
const obj3: T4 = {
    length: 45, // mandatory property
};
console.log(obj3);

type T5 = T1 | T2; // match "bigger" structure or below
const obj4: T5 = {
    length: 26,
};
const obj5: T5 = {
    length: 23,
    name: "iron",
};

const obj9 = {
    length: 10,
};
const obj10 = obj9;


type T6 = T1 & T2; // match "lower" structure
// const obj6: T6 = {
//     length: 26,
// }; // not allowed as minimum match property not followed

const obj8 = {
    length: 89,
    name: "green",
    age: 21,
}

const obj7: T6 = obj8;