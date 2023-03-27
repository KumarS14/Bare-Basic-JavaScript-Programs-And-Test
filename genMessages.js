const generateMessages = (namesAndDiscounts) =>
{ 
   return `Hi ${namesAndDiscounts.name} get ${namesAndDiscounts.discount} off for you today! `
 
   
}
    // 'Hi Anna! 50% off our best candies for you today!',
      //  'Hi Laura! 40% off our best candies for you today!',
       // 'Hi Josh! 30% off our best candies for you today!',
       // 'Hi Min! 50% off our best candies for you today!',
        //'Hi Karla! 60% off our best candies for you today!'
module.exports = generateMessages