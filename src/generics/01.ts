// signature

function funcName<T>(parameter: T): T{
    return parameter;
}

// for array

// function addFive<T>(arr: T[]): T[]{
//     return arr.map((num) => num + 5); // It Knows T[] but unware of the type of elements
// }

function addFive<T extends number>(arr: T[]): T[] {
  return arr.map((num) => num + 5 as T); // returning T[] but, need to specify return type for T after calculations
}

// better way when i know return will be array of integers
function addFivePrecise<T extends number>(arr: T[]): number[] {
  return arr.map((num) => (num + 5)); 
}

console.log(addFive([10, 20, 30]));