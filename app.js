const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const httperror = require('http-errors');
const socket = require('socket.io');
const app=express();

console.log(process.env.PORT);

module.exports=app;