interface User {
    name: string,
    age: number,
    marks: number[],
    status: boolean
}

const studentDetails: User = {
    name: "Prashant Kumar Jha",
    age: 23,
    marks: [98, 95, 90],
    status: true,
}
console.log(studentDetails);

// Difference Between "interface" vs "type"

// interface: 
// used to define an "object"
// one interface can extend the other


// type:
// more flexible and robust
// supports union and intersection and merging of other types
