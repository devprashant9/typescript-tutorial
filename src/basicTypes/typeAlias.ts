type User = {
    name: string,
    age: number,
    courses: string[],
    isActive: boolean,
}

const userDetails: User = {
    name: "Prashant Kumar Jha",
    age: 23,
    courses: ["Web Development", "Python 3"],
    isActive: false,
}
console.log(userDetails);

// Difference Between "type" vs "interface"

// type:
// more flexible and robust
// supports union and intersection and merging of other types

// Difference Between "interface" vs "type"

// interface: 
// used to define an "object"
// one interface can extend the other
