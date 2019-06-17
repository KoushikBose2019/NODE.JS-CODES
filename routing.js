let express= require('express');
let app=express();
//console.log(app);
//using  Http get request
app.get('/',(req,res)=>{
    res.send('hello node.js!!!!');
});

app.post('/',(req,res)=>{
    res.send('got a post method');
});
app.put('/',(req,res)=>{
res.send("got a put method");
});

app.delete('/',(req,res)=>{
    res.send("got a delete method");
});
app.all('/',(req,res)=>{
    res.send("HTTP method doesn't have any effect on this route!");
});
app.listen('3000',()=>console.log('server is running at a port : 3000'));*/
//Routers in node.js
let express=require("express");
let app= express.Router();
router.get('/',(req,res)=>{
   res.send("get route on things.");
});
route.post('/',(req,res)=>{
   res.send('post route on things');
});
//export this module to use in things.js
module.exports=router;

