const Employee = require("../src/Employee")

describe("Manager", () => {
    const employee = new Employee("foo", 1, "bar@foo.com", 11)
    
    it("should have the propery 'name' as a string", () => {
        expect(typeof employee.name).toEqual("string")
    })

    it("should have the propery 'id' as a number", () => {
        expect(typeof employee.id).toEqual("number")
    })

    it("should have the propery 'email' as a string", () => {
        expect(typeof employee.email).toEqual("string")
    })

    it("should have a method the 'getName method that returns the name", () => {
        expect(employee.getName()).toEqual("foo")
    })

    it("should have a method the 'getId method that returns the ID", () => {
        expect(employee.getId()).toEqual(1)
    })

    it("should have a method the 'getEmail method that returns the email", () => {
        expect(employee.getEmail()).toEqual("bar@foo.com")
    })

    it("should have a method the 'getRole method that returns the role", () => {
        expect(employee.getRole()).toEqual("Employee")
    })
})