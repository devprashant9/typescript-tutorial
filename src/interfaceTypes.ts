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