// Union and Intersection of Primitives
// Simple Type: think in terms of Subset/SuperSet
// Complex Type: think what can be common/uncommon

type T1 = string | "hi"; // string
// "string" is superset of "hi"

type T2 = string & "hi"; // "hi"
// "hi" is subset of "string"

type T3 = boolean & false; // false
// "false" is subset of "boolean"

type T4 = Exclude<boolean, false>; // Perfroming A - B
// A = {true, false} B = {false};
// A - B = {true}

type T5 = (string | number) & string; // string
// think of value which satisfy (string | number) AND string
// its always a string


type T6 = string & number; // never
// think of value which satisfy ("string" AND "number") at same time
// none


type T7 = number | string;
let variable!: T7;
variable.toString();  // reduces properties limits to only common properties

type T8 = (string | boolean) & (number | undefined | null) & (string | number); // never