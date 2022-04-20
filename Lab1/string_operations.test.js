describe("string tests: ", ()=> {

    test("palindrome?", ()=> {
        expect("kekekek".split("").reverse().join("")).toEqual("kekekek");
    })

    test("anagram", ()=> {
        const first = "anagram".split("");
        const result = "maranag".split("");
        expect(first).toEqual(expect.arrayContaining(result))
    })

})
