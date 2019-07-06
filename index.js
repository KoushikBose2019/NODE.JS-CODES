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

module.exports = router;
