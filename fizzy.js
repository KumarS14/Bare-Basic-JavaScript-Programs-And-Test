const fizzbuzz = (limiter) => {
   let arr = new Array(limiter)
   for (i = 1 ; i < limiter ; i++){arr.push(i)}; return arr.map(i => {if(i % 3 === 0 ) return "fizz" ; else if (i % 5 === 0) return "buzz"; else return i})

}
module.exports = fizzbuzz;