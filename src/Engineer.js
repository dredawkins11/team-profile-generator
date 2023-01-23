import Employee from "./Employee.js";

export class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.role = "Engineer"
    }

    getGithub() {
        return this.github
    }
}