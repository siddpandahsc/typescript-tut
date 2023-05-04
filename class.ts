// class Employee {
//     id!: number;
//     name!: string;
//     address!: string;

//     constructor(id:number, name:string, address:string) {

//     }
// }

class Employee {
    id: number;
    name: string;
    address: string;

    constructor(id:number, name:string, address:string) {
        this.address = address;
        this.name = name;
        this.id = id;
    }

    getNameWithAddress() : string {
        // return this.name + " " + this.address;
        return `${this.name} ${this.address}`
    }
}

// let emp = new Employee();
// emp.id = 1;
// emp.name = 'Sidd';
// emp.address = 'Barbil';
let emp = new Employee(1, 'Siddheshwar', 'Barbil');

let address = emp.getNameWithAddress();

console.log(emp);
console.log(address);