const express= require("express");
const bodyParser = require('body-parser');
const app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/",express.static("Public"));
//app.set("view engine","pug");
app.set("view engine","twig");
app.set("views","./Public/views");

app.get("/",(req,res)=>{
   //res.render('index',{title:"node.js tutorial!!!!",message:"hello world!!!!"});
   //res.render('index',{title:"mean stack developer!!!!",message:"hello node js!!!!"});
   res.render("index",{title:"login form",message:"enter username and password" });

});
app.post("/",(req,res)=>{
   res.render("login",{title:"User Details",username:req.body.username,password:req.body.password});
});
/*app.get("/about/:a:b",(req,res)=>{
 res.render("about",{title:"Summation",sum:parseInt(req.params.a)+parseInt(req.params.b)});
 res.render("about/:a:b",{title:"division",div:parseInt(req.params.a)/parseInt(req.params.b)});
 res.render("about/:a:b",{title:"multiplication",mul:parseInt(req.params.a)*parseInt(req.params.b)});
 res.render("about/:a:b",{title:"subtraction",sub:parseInt(req.params.a)-parseInt(req.params.b)});
 

 
});*/









app.listen(7000,()=>console.log("server is running on a port : 7000"));