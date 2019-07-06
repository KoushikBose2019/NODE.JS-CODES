var express = require('express');
//calling the database connection of employee page
var empModel= require('../modules/employee');
//console.log(empModel);
var router = express.Router();
//find the value from the database
var employee=empModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  
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

module.exports = router;
