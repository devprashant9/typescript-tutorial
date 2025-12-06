interface User {
  readonly id: number;
  name: string;
}

const userDetails: User = {
    name: "Prashant Kumar Jha",
    id: 45,
}
console.log(userDetails);

// userDetails.id = 35; // Not Allowed