const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.Promise=Promise;
const mongo_options = {};
mongoose.connect(process.env.MONGO_URL,mongo_options);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Mongo Connection failed"));
db.once('open',()=>{
    console.log('Mongodb Connection ssucceeded');
});
const mysql_conf={"host":process.env.MYSQL_HOST,"user":process.env.MYSQL_USER,"password":"123","database":"Demo"};
const mysqlcon = mysql.createConnection(mysql_conf);
mysqlcon.on('error',console.error.bind(console,"Mongo Connection failed"));
mysqlcon.once('open',()=>{
    console.log("Mysql connection succeeded");
});

exports.MongoDataBase=db;
exports.MysqlDatabase = mysqlcon;

