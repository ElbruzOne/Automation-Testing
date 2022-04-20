var math_operations = require('./math_operations.js')

describe('sum = ', () => {
    test('Sum positive numbers', () => {
        expect(math_operations.sum(1,2)).toBe(3);
    });
    test('Sum negative numbers', () => {
        expect(math_operations.sum(1,-2)).toBe(-1);
    });
});
describe('dif = ', () => {
    test('Dif positive numbers', () => {
        expect(math_operations.dif(15,2)).toBe(13);
    });
    test('Dif negative numbers', () => {
        expect(math_operations.dif(-30,-15)).toBe(-15);
    });
});
describe('pow = ', () => {
    test('Pow positive numbers', () => {
        expect(math_operations.pow(2,2)).toBe(4);
    });
    test('Pow negative numbers', () => {
        expect(math_operations.pow(4,-2)).toBe(-8);
    });
});
describe('div = ', () => {
    test('Div positive numbers', () => {
        expect(math_operations.div(4,2)).toBe(2);
    });
    test('Div negative numbers', () => {
        expect(math_operations.div(6,-2)).toBe(-3);
    });
});


