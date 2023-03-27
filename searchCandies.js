class SearchCandies {
    constructor(candies = [],max_price) {
        this.candies = candies
        this.max_price = max_price
           
    }
    returnCandies(){
        return this.candies.map(i => {
           if(i.price < 5)
           {
            return i
           }
           else {
            return undefined
           }
         
          
        
        
        })
    }
       
     
}

  module.exports = SearchCandies;
 