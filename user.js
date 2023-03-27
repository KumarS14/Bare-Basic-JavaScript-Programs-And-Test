class User {
    constructor(name) {
        this.name = name;
    }
   getName() {
    console.log(this.name)
   }
   introduction(){
    return `hi my name is ${this.name}`
   }
}

module.exports = User; 
