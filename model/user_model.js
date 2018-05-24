const mongoose=require('mongoose');
const mongoDataBase = require('../database/dbConfig').MongoDataBase;
const mysqlDatabase = require('../database/dbConfig').MysqlDatabase;
const Schema = mongoose.Schema;
const userSchema = new Schema({
    "user_name":{type:String},
    "password":{type:String}
},{collection:"Db_User"});
module.exports=mongoose.model("userSchema",userSchema);