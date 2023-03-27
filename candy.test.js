const candy = require("./candy")
describe('candy',() => {
    it('returns one candy',() =>
    {
        newcandy = new candy( 'Aero', 1.99 )
        expect(newcandy).toEqual({"candyName": "Aero", "candyprice": 1.99})
    })
})