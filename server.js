var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var oid = mongojs.ObjectId;
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

app.post('/removeAcc',function(req,res){
	var id = req.body.id;
	db.accounts.remove({_id:oid(id)},function(err,doc){
		res.send(doc);
	})
})

app.post('/addNewAccount',function (req,res) {
	db.accounts.insert({
		name : req.body.name,
		deposit : req.body.deposit,
		cCard : req.body.cCard,
		city : req.body.city,
	},function (err,docs) {
		res.send(docs)
	})
})

app.post('/getOneAccount',function(req,res){
	db.accounts.findOne({_id:oid(req.body.id)},function(err,doc){
		if(err) throw err;
		res.send(doc)
	})
})

app.post('/editOne',function(req,res){
	db.accounts.update({
		_id : oid(req.body.id)
	},
	{
		$set : { 
			name : req.body.name,
			deposit : req.body.deposit,
			cCard : req.body.cCard,
			city : req.body.city 
		 }
	},function(err,doc){
		res.send('Ok')
	})
})


app.listen(3000,function(){
    console.log("Listening to port 3000");
})