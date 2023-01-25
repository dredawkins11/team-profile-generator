const Manager = require("../src/Manager")

describe("Manager", () => {
    const manager = new Manager("foo", 1, "bar@foo.com", 11)
    
    it("should have the propery 'name' as a string", () => {
        expect(typeof manager.officeNumber).toEqual("number")
    })

    it("should have a method the 'getRole method that returns the role", () => {
        expect(manager.getRole()).toEqual("Manager")
    })
})