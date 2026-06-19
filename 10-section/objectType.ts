// anything which comes under object can be assigned to it
let obj: object;

obj = [10, 20, 30];
obj = { name: "hello" };
obj = function () { };
obj = new Date();
obj = /a/;
// this makes it more flexible and less unpredictable so we dont use it
// we want more predictability

