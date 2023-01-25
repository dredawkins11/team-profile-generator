import Employee from "./Employee.js";

export default class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = "Manager"
        this.icon = "fa-user-tie"
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}