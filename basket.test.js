 Basket = require("./shopping_basket")
describe('Basket',() => {
    it("should return empty as the Basket is empty",() => {
        newbasket = new Basket()
        expect(newbasket).toEqual({"item":[]})
    })
    it("testing total price which so be 0",() => {
        newbasket = new Basket()
        expect(newbasket.getTotalPrice()).toEqual("0.00")
    })
    it("if you are able to add a item",() => {
        newbasket = new Basket()
        const candys = {"candyName": "Aero", "candyprice": 1.99}
        newbasket.addItem(candys)
        expect(newbasket).toEqual( {"item": [{"candyName": "Aero", "candyprice": 1.99}]})
    })
    it("tests to see of total price is 1.99",() => {
        newbasket = new Basket()
        const candys = {"candyName": "Aero", "candyprice": 1.99}
        newbasket.addItem(candys)
        expect(newbasket.getTotalPrice()).toEqual("1.99" )
    })
    it("test to see if two items are shown if they are added",() => {
        newbasket = new Basket()
        const candys = [{"candyName": "Aero", "candyprice": 1.99},{"candyName": "mars", "candyprice":1.1}]
        newbasket.addItem(candys)
        expect(newbasket.item).toEqual( [[{"candyName": "Aero", "candyprice": 1.99}, {"candyName": "mars", "candyprice": 1.1}]])
    })
    it("tests that overall price should be 3",() => {
       const newbasket = new Basket()
        const candys = {candyName:"Aero",candyprice: 1.99}
        
        const candys1 = {candyName:"Aero",candyprice: 1.01}
           
        newbasket.addItem(candys)
        newbasket.addItem(candys1)
        expect(newbasket.getTotalPrice()).toEqual("3.00")
    })
})