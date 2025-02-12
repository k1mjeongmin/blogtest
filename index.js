const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoURI= process.env.MONGODB_LOCAL

mongoose.connect(mongoURI).then(()=>console.log("db연결됨")).catch((err)=>console.log("에러남",err));



app.listen(5000, function(){
    console.log('hello world!')
});

app.get('/pet',function(req,res){
    res.send('펫용품 ㅇㅇdwfwfd');
});

app.get('/b',function(req,res){
    res.send('b ㅇㅇ');
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

