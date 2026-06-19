// explicitly tell Ts that a value can not be null/undefined using "!"
// if you make mistake you run into problem
// optional chaining ? is always better choice than !
// use only if 101% sure that its a non empty value

let nums = [10, "Prashant"];
let c = nums[0]; // inferred type is (string | number | undefined) because of tsconfig  "noUncheckedIndexedAccess": true,
let d = nums[0]!; // inferred as (string | number) 

// inserting! after value means its alway a non - empty value and we tell Ts that dont be conservative I know this value can never be "undefined or null" it always exists


