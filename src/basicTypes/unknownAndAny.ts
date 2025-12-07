let x: any = 10;
x = "hello";
x = true;


let y: unknown = "hello";

if (typeof y === "string") {
  console.log(y.toUpperCase());
}

// any: turns off typescript completely
// unknown: dev needs to confirm the type before usage