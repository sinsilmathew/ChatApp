const mongoose = require('mongoose');
const UserModel = require('../model/user_model');

class UserRepo{
async addNewUser(user_name,password){
    try{
        let newUser=new UserModel({
            "user_name":user_name,
            "password":password
        });
        let result = await UserModel.create(newUser);
        return result;
    }catch(error){
        throw error;
    }
}
}
exports.UserRepo=UserRepo;