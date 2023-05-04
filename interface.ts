export interface User {
    name: string;
    age?: number;
    id: number;
    email: string
}

// let user: User = { name: "Sidd", age: 21, id: 1, email: "siddheshwar.2307@gmail.com" };

let user: User = { name: "Sidd", id: 1, email: "siddheshwar.2307@gmail.com" };

interface Employees extends User {
    salary: number
}

let employee: Employees = { name: "Simi", email: "sanjana.2307@gmail.com", id: 1, salary: 25000 };

export interface Login {
    login() : User;
}

