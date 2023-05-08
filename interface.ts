export interface User {
    name: string;
    age?: number;
    id: number;
    email: string
}

// let user: User = { name: "Sidd", age: 21, id: 1, email: "siddheshwar.2307@gmail.com" };

let user: User = { name: "Sidd", id: 1, email: "siddheshwar.2307@gmail.com" };

// destructuring
let { name, id }: User = { name: "Sidd", id: 1, email: "siddheshwar.2307@gmail.com" };

let { name: userName, id: userId }: User = { name: "Sidd2", id: 2, email: "siddheshwarcp.2307@gmail.com" };

// array destructuring
let [user1, user2, ...users]: User[] = [
    {
        name: "Sidd", id: 1, email: "siddheshwar.2307@gmail.com", age: 21
    },
    {
        name: "Yash", id: 2, email: "yash.2307@gmail.com", age: 26
    },
    {
        name: "Simi", id: 3, email: "simi.2307@gmail.com", age: 27
    },
    {
        name: "Sujata", id: 34, email: "sujata.2307@gmail.com", age: 29
    },
    {
        name: "Pay", id: 8, email: "simi.2307@gmail.com", age: 30
    },
    {
        name: "Nibu", id: 9, email: "niby.2307@gmail.com", age: 32
    },
]

console.log(userName)
console.log(userId)

console.log(user1)
console.log(user2)
console.log(users)

// filter a value
let result = users.filter(user => user.id>8)

console.log(users)

interface Employees extends User {
    salary: number
}

let employee: Employees = { name: "Simi", email: "sanjana.2307@gmail.com", id: 1, salary: 25000 };

export interface Login {
    login(): User;
}

