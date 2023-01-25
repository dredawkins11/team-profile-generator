const Engineer = require("../src/Engineer")

describe("Manager", () => {
    const engineer = new Engineer("foo", 1, "bar@foo.com", "foobar69")
    
    it("should have the propery 'name' as a string", () => {
        expect(typeof engineer.github).toEqual("string")
    })

    it("should have a method the 'getRole method that returns the role", () => {
        expect(engineer.getGithub()).toEqual("foobar69")
    })

    it("should have a method the 'getRole method that returns the role", () => {
        expect(engineer.getRole()).toEqual("Engineer")
    })
})