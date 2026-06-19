// function fn1(...args) { 
//     // we know ...args is always an array so type is any[]
// }

function fn2(...args: number[]): number[] {
    return args.map(n => n + 5)
}; // here we desccribe that it will only accepts an array of number as args

function fn3(...args: [string, number, boolean]) { // behaves as tuple

}