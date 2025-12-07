const pageNumber: number | string = "2";
console.log(pageNumber)

type User = {
    name: string,
    age: number,
    marks: number,
}

type Student = {
    name: string,
    age: number,
    marks: number[],
    isPass: boolean,
}

const studnetDetails: User | Student = {
    name: "Prashant Kumar Jha",
    age: 23,
    marks: 90,
}
console.log(studnetDetails);


const scores: (number | string)[] = [20, "apple", 30, "oranges"];
console.log(scores);
