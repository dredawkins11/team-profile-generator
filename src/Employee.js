class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        this.role = "Employee"
        this.icon = "fa-user"
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }

    getIcon() {
        return this.icon
    }
}

module.exports = Employee