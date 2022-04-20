var array_utils = require('./array_utils.js')

describe('array functions: ', () => {
   
    let array = [];

    for (i = 0; i < 50; i++) {
        let num = Math.floor(Math.random() * 10);
        num = num > 5 ? num * -1 : num;
        array.push(num);
    }

    test('array arrSum = ', () => {
        expect(array_utils.arrSum(array)).toEqual(expect.any(Number));
    });

    test('array arrPos = ', () => {
        array_utils.arrPos(array).forEach(x => {
            expect(x).toBeGreaterThanOrEqual(0);
        });
    });

    test('array arrNeg = ', () => {
        let arrNeg = array_utils.arrNeg(array);
        arrNeg.forEach(x => {
            expect(x).toBeLessThanOrEqual(0);
        });
    });
});

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
