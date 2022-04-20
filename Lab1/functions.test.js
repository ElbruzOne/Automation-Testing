var functions = require('./functions.js')

describe("testing the final_operations functions : ", ()=> {

    let arr = [
        {year: 4, status : "student", group : "121"},
        {animal: "dog", age : "14"},
        {type: "simulator", game: "life"}
    ];

    test("test the functions.isContainObj", ()=> {
        expect(functions.isContain(arr, {animal: "dog", age : "14"})).toBe(true);  
    });

    test("test the functions.isContainSubString", ()=> {
        expect(functions.isContainSubString("hello", "ell")).toBe(true);  
    });

    test("test the functions.returnObj", ()=> {
        expect(functions.returnObj()).toHaveProperty("type","shooter");  
    });

    test("test the functions.callWithFuncOverArray", ()=> {
        const func = jest.fn(val => (val + 3));
        functions.callWithFuncOverArray([1,3,5,2,6], func);
        expect(func.mock.calls.length).toBe(5);
    });

    test("test the functions.callWithFuncOverString", ()=> {
        const func = jest.fn(val => (val));
        functions.callWithFuncOverString("Hello", func);
        console.log(func.mock.calls);
    });

    let objString = {
        firstName : "Volodymyr",
        secondName : "Zelensky",
        introduce : function(){console.log("Hello, I am ",this.firstName," ",this.secondName)}
    }

    test("test", ()=> {
        const func = jest.spyOn(objString, 'introduce');
        objString.introduce();
        objString.introduce();
        objString.introduce();
        console.log(func.mock.calls.length);
    });
})





//this test page was borrowed along with function page, edited a bit and adapted to nodejs module export :(