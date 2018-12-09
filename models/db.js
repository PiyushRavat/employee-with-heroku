const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser : true}, (err)=>{
	if(!err){ console.log("MongoDb connection succeeded")}
	else{ console.log("error in DB connection "+err)}
});

require('./employee.model');