var mongoose=require('mongoose');
//console.log(mongoose);
mongoose.connect('mongodb://localhost:27017/employeedetails', {useNewUrlParser: true});
var conn= mongoose.connection;
//console.log(conn);
var employeeschema=new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhour:Number,
});
var employeeModel=mongoose.model('Employee',employeeschema);

module.exports=employeeModel;