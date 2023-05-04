import { Login, User } from './interface'

// class Employee {
//     id!: number;
//     name!: string;
//     address!: string;

//     constructor(id:number, name:string, address:string) {

//     }
// }

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string
}

class Employee implements Login {
    #id: number;
    protected name: string;
    // address: string;
    address: Address;

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }


    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.name = name;
        this.#id = id;
    }
    login(): User {
        return { name: "Sidd", id: 1, email: "siddheshwar.2307@gmail.com" }
    }

    getNameWithAddress(): string {
        // return this.name + " " + this.address;
        return `${this.name} ${this.address} ${this.#id}`
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager staying at ${this.address}.`
    }
}

// let emp = new Employee();
// emp.id = 1;
// emp.name = 'Sidd';
// emp.address = 'Barbil';
let emp = new Employee(1, 'Siddheshwar', {
    street: "Base Camp",
    city: "Barbil",
    pin: "758035",
    state: "Odisha"
});

console.log(Employee.getEmployeeCount());

let address = emp.getNameWithAddress();

let mang = new Employee(1, 'Rameshwar', {
    street: "Base Camp",
    city: "Barbil",
    pin: "758035",
    state: "Odisha"
});

console.log(mang.getNameWithAddress());
console.log(address);

emp.empId = 100;
console.log(emp.empId);