const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const httperror = require('http-errors');
const socket = require('socket.io');
//Importing Routes
const UserRoute = require('./routes/user');
const app=express();


app.use(logger('dev'));//using morgan as logger
console.log(process.env.PORT);

app.use(bodyParser,json());//basically tells the system that you want json to be used.
app.use(bodyParser.urlencoded({extended:false}));//basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(cookieParser()); //using the cookieparser middleware
app.use(express.static(path.join(__dirname,'public')));//Specifying the path of static files as public

//Redirection using Router(Routing section)
app.use('/user',UserRoute);//This will redirect to user routes if the url is www.abc.com/user

//catch 404 and forward to error handler

app.use(function(req,res,next){
    var err=new httperror.NotFound();
    next(err);
})

//Error Handling
app.use(function(err,req,res,nest){
    // set locals, only providing error in development
    res.locals.message=err.message;
    res.locals.error = req.app.get('env')==='developement' ? err:{};
     // render the error page
    res.status(err.status||500);
    res.render('error');
})

module.exports=app;