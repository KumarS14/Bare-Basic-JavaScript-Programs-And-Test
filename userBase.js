class UserBase {
    constructor(user)
    {
        this.user  = user;
    }
    counter(){
        return this.user.length;
    }
    getnames() {
        
       
        return this.user
    }
}
module.exports = UserBase