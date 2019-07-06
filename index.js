var express = require('express');
//calling the database connection of employee page
var empModel= require('../modules/employee');
//console.log(empModel);
var router = express.Router();
//find the value from the database
var employee=empModel.find({});

/* GET home page. */
router.get("/", function(req, res, next) {
  
employee.exec(function(err,data){
if(err) throw err;

res.render('index', { title: 'Employee Records',records:data });

});
  
});
router.post("/",function(req,res,next){

var empdetails= new empModel({
   name:req.body.uname,
   email:req.body.email,
   etype:req.body.emptype,
   hourlyrate:req.body.ttlhr,
   totalhour:req.body.ttlhour,

});
//used to save the data in database
empdetails.save(function(err,res1){
    if(err) throw err;
    employee.exec(function(err,data){
        if(err) throw err;        
        res.render('index',{title:'Employee Record',records:data});   
    });

});

//console.log(empdetails);
});
router.post("/search/",function(req,res,next){
    var name=req.body.name;
    var email=req.body.email;
    var EmployeeType=req.body.EmployeeType;

    if(name!=''&& email!='' && EmployeeType!=''){
      //search data from database using condition
        var filterparameter={ $and:[{ name:name},
        {$and:[{email:email},{etype:EmployeeType}]}
        ]

        }

    }else if{(name!=''&& email!='' && EmployeeType!=''){
      
        var filterparameter={ $and:[{ name:name},
        {$or:[{email:email},{etype:EmployeeType}]}
        ]
    }else{
        var filterparameter={}
    }
    var Filteremployee=empModel.find(filterparameter);

    employee.exec(function(err,data){
     if(err) throw err;
     res.render('index',{title:"Employee record",records:data});

});
});
module.exports = router;

