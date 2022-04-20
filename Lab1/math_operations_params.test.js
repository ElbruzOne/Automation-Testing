var math_operations = require('./math_operations.js')

describe('sum = ', () => {
    test.each([[1,2,3],[2,3,5],[-1,-1,-2],])('sum test each', (a,b,expected) => {
        expect(math_operations.sum(a,b)).toBe(expected);
    });
});
describe('dif = ', () => {
    test.each([[5,2,3],[10,3,7],[-5,-1,-4],])('dif test each', (a,b,expected) => {
        expect(math_operations.dif(a,b)).toBe(expected);
    });
});
describe('pow = ', () => {
    test.each([[1,2,2],[14,3,42],[-1,-1,1],])('pow test each', (a,b,expected) => {
        expect(math_operations.pow(a,b)).toBe(expected);
    });
});
describe('div = ', () => {
    test.each([[6,2,3],[15,5,3],[-15,-3,5],])('div test each', (a,b,expected) => {
        expect(math_operations.div(a,b)).toBe(expected);
    });
});


