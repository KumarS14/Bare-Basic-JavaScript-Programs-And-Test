const fizzbuzz = (limit) =>
{
    for (let num = 0 ; num <= limit; num++ )
    {
        if (num % 3 === 0)
        {
            console.log('fizz')
        }
        else if (num % 5 === 0 )
        {
            console.log('buzz')
        }
        else {
            console.log(num)
        }
    }
};
module.exports = fizzbuzz;