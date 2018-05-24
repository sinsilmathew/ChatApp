const {UserRepo} = require('../../repository/user_repo');
class AddUser{
    constructor(user_name,password){
        this.user_name = user_name;
        this.password=password;
    }
    async execute(){
        try{
                let obj_user_repo = new AddUser;
                let new_user = await obj_user_repo.addNewUser(this.user_name,this.password);
                return new_user;
        }catch(error){
            throw error;
        }
    }
}
exports.AddUser=AddUser;