const addToBatch = (batch,num) =>{
  if (batch.length >= 5 )
  {
    return('You have reached your limit')
  }
  else {
    newBatch = batch.concat(num)
    return newBatch
  }

};
module.exports = addToBatch;