var mongoose= require("mongoose");
//create a schema
var employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalhour:Number,

});

employeeSchema.methods.totalsalary=function(){
    console.log("total income of employee: Rs"+this.hourlyrate*this.totalhour);

}
//create a model of an object
var employeeModel= mongoose.model("Employee",employeeSchema);
//create an object
var employee= new employeeModel({name:"koushik",
email:"koushikbose628@gmail.com",
etype:"hourly",
hourlyrate:14,
totalhour:16

});

console.log(employee);
//console.log("total income of employee:"+employee.hourlyrate*employee.totalhour);
employee.totalsalary();