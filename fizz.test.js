const fizzbuzz = require("./newfizz");
describe('fizzbuzz',() => {
    it('if the limit is 10 it should return the list with fizz and buzz where needed',() => {
        expect(fizzbuzz(10)).toBe[1];
        expect(fizzbuzz(10)[1]).toBe(2);
        expect(fizzbuzz(10)[2]).toBe('fizz');
        expect(fizzbuzz(10)[3]).toBe(4);
        expect(fizzbuzz(10)).toBe[1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz"];
    });
});