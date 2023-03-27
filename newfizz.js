const fizzbuzz = (limit,n = []) => {
    for (num = 1 ; num <= limit ; num ++)
    {
        if (num % 3 === 0 )
        {
            
            n.push('fizz')

        }
        else if (num % 5 == 0 )
        {
           
            n.push('buzz')
        }
        else {
            
            n.push(num)
        }
    }
    return n

};
module.exports = fizzbuzz;