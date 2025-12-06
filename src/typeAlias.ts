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