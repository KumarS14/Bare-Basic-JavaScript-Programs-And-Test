class Thermo {
    constructor(temp = 20 , max = 25 ) {
        this.temp = temp;
        this.max = max;
        
    }
    maxTemp()
    {
        this.max = 32
    }

    up()
    {
        if (this.temp < this.max)  {this.temp++ } else {return "You have reached the max temp allowed"};
       
    }
    down()
    {
        if (this.temp < 10)  {return "You have reached the minimum temp allowed"} else {return  this.temp-- };
    }
   
     

    getTemp()
    {
        return this.temp 
    }

}
module.exports = Thermo;