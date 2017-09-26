var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('danilovaDB',['accounts']);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use(express.static(__dirname + "/public"));

app.get('/getAccounts',function(req,res){
    db.accounts.find({},function(err,docs){
        if(err) throw err;
        res.send(docs);
    })
})

app.listen(3000,function(){
    console.log("Listening to port 3000");
})