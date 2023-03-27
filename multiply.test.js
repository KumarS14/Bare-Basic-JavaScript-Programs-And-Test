const multipy = require("./multiply")
describe('multiply',() => {
    it('multiplys 2 by 2',() =>
    {
        expect(multipy(2,2)).toBe(4)
    });
    it('multiplys 5 by 0',() =>
    {
        expect(multipy(5,0)).toBe(0)
    });
});