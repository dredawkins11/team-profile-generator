const Intern = require("../src/Intern")

describe("Manager", () => {
    const intern = new Intern("foo", 1, "bar@foo.com", "UNT")
    
    it("should have the propery 'name' as a string", () => {
        expect(typeof intern.school).toEqual("string")
    })

    it("should have a method the 'getRole method that returns the role", () => {
        expect(intern.getSchool()).toEqual("UNT")
    })

    it("should have a method the 'getRole method that returns the role", () => {
        expect(intern.getRole()).toEqual("Intern")
    })
})