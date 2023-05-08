"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        this.address = address;
        this.name = name;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    login() {
        return { name: "Sidd", id: 1, email: "siddheshwar.2307@gmail.com" };
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} ${this.address} ${__classPrivateFieldGet(this, _Employee_id, "f")}`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager staying at ${this.address}.`;
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
