thermo = require("./thermostat")
describe('thermo',() => {
    it('tests to see if it starts with a initial temperature of 20 degress',() => {
        newthermo = new thermo()
        expect(newthermo.getTemp()).toEqual(20)
    });  
    it('tests to see if getTis (21 when up method is called',() => {
        newthermo = new thermo()
        newthermo.up()
        expect(newthermo.getTemp()).toEqual(21)
    });  
    it('tests to see if temp is 22 when up method is called twice',() => {
        newthermo = new thermo()
        for(i = 1 ; i <= 2 ; i++ ) newthermo.up()
        expect(newthermo.getTemp()).toEqual(22)
    }); 
    it('tests to see if geTemp() is 23 when up method is called twice',() => {
        newthermo = new thermo()
        for(i = 1 ; i <= 3 ; i++ )  newthermo.up()
        expect(newthermo.getTemp()).toEqual(23)
    }); 
    it('tests to see if geTemp() goes down to 19 when down method is called',() => {
        newthermo = new thermo()
        newthermo.down()
        expect(newthermo.getTemp()).toEqual(19)
    }); 
    it('tests to see if geTemp() goes down to 18 when down method is called',() => {
        newthermo = new thermo()
        for(i = 1 ; i <= 2; i++ ) newthermo.down()
        expect(newthermo.getTemp()).toEqual(18)
    }); 
    it('tests to see if geTemp() goes down to 20 when down and up method is called twice',() => {
        newthermo = new thermo()
        for(i = 1 ; i <= 2 ; i++ )  newthermo.up()
        for(i = 1 ; i <= 2 ; i++ ) newthermo.down()
        expect( newthermo.getTemp()).toEqual(20)
    }); 
    it('tests to see if minimum temp condition is valid and returns a message',() => {
        newthermo = new thermo()
       for (i = 0 ; i <= 11 ; i++ ) newthermo.down()
        expect(newthermo.down()).toEqual("You have reached the minimum temp allowed")
    }); 
    it('tests to see if max temp condition is valid and returns a message',() => {
        newthermo = new thermo()
       for(i = 1 ; i <= 25 ; i++ ) newthermo.up()
        expect(newthermo.up()).toEqual("You have reached the max temp allowed")
    }); 
    it('tests to see if max temp changes when power saving is off',() => {
        newthermo = new thermo()
        newthermo.maxTemp()
       for(i = 1 ; i <= 12; i++ ) newthermo.up()
        expect(newthermo.getTemp()).toEqual(32)
    }); 
    it('tests to see if max temp conditional is valid when power saving is off',() => {
        newthermo = new thermo()
        newthermo.maxTemp()
       for(i = 1 ; i <= 18; i++ ) newthermo.up()
        expect(newthermo.up()).toEqual("You have reached the max temp allowed")
    }); 

});