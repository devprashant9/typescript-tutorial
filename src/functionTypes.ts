function greetUser(name: string) {
    console.log(`Good Morning ${name}`);
}
greetUser("Prashant Kumar");

function addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log("Sum of 3 and 5 is: ", addTwoNumbers(3, 5));


function doubleSum(sum: (num1: number, num2: number) => number) {
    return 2 * sum(10, 20)
}
console.log(doubleSum(addTwoNumbers));
