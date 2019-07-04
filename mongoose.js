var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});
var conn=mongoose.connection;
var employeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalHour:Number,
    //total:Number,
});
var employeeModel=mongoose.model('Employee',employeeSchema);

var employee= new employeeModel({name:"koushik",
    email:"koushikbose628@gmail.com",
    etype:"hourly",
    hourlyrate:14,
    totalhour:24,
});

console.log("Total income of the employee: Rs."+employee.hourlyrate*employee.totalhour)

conn.on("connected",function(){
    console.log("Connection successfully!!!!!!!");
});
conn.on("disconnected",function(){
    console.log("disConnection successfully!!!!!!!");
});
conn.on('error',console.error.bind(console,'connection error:'));
//insert data into data base
conn.once('open',function(){
    employeedetails.employee.save(function(err,res){
        if(err)throw error;
        console.log(res);
        conn.close();
    });
});




