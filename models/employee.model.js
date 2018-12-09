const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var employeeSchema = new Schema({
	fullname : {
		type: String,
		required : 'this field is required.'
	},
	email : {
		type: String
	},
	mobile : {
		type: String
	},
	city : {
		type: String
	}
});

//custom validation for email
employeeSchema.path('email').validate((val)=>{
	const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return emailRegexp.test(val);
}, 'invalid e-mail');
//console.log(emailRegexp.test(emailToValidate));

mongoose.model('Employee', employeeSchema);