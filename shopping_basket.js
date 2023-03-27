class Basket {
    constructor(item = [] )
    {
       this.item = item
    }
    addItem(items)
    {
      
        this.item.push(items);
    }
    getTotalPrice()
    {   
       let sum = 0
        this.item.map(i => sum += i.candyprice)
        return sum.toFixed(2)
         
    }
}
module.exports = Basket





//   getIntroduction() {
//     return this.users.map(object => {
//       return (`Hi, my name is ${object.name}`);
//     });
//   }
// }