class Objects {
    constructor(the_name, the_id, the_names) {
        this.the_name = the_name;
        this.the_id = the_id;
        the_names = the_names;
    }
    wholeObj()
    {   
       const obj = {
            name: this.the_name,
            id: this.the_id,
          
          arrayNames: this.the_names
        }
        return obj
    };
    
}
module.exports = Objects;