const addToBatch = (arr,num) => {
    if (arr.length < 5)
    {
      const newArr = arr.concat(num)
       return newArr

    }
    else {
        return "You are over the limit."
    }
   
    
};
module.exports = addToBatch;