const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.Promise=Promise;
mysql.Promise=Promise;
const mongo_options = {};
mongoose.connect(process.env.MONGO_URL,mongo_options);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Mongo Connection failed"));
db.once('open',()=>{
    console.log('Mongodb Connection ssucceeded');
});
const mysql_conf={"host":"localhost","user":"root","password":"123","database":"dstest"};//process.env.MYSQL_HOST,process.env.MYSQL_USER
const mysqlcon = mysql.createConnection(mysql_conf);
//console.log(mysqlcon);
// mysqlcon.on('error',console.error.bind(console,"Mysql Connection failed"));
// mysqlcon.once('open',()=>{
//     console.log("Mysql connection succeeded");
// });
mysqlcon.connect(function(err){
    if(err){console.log("Connection Failed")}
    else{console.log("Mysql connection succeeded")}
});

exports.MongoDataBase=db;
exports.MysqlDatabase = mysqlcon;

