const express= require("express");
const app= require();
let validation=(req,res,next)=>{
      console.log("middle ware working!!!!");
      next();
};
//app.use(validation);// here middlware used globally 
let uservalidation=(req,res,next)=>{
    if(req.params.username=="arnok")
    console.log("user validate");
    else
    console.log("not authorized user!!!!");
    console.log("hello this is es6!!!!");
    next();
};

app.get('/',validation,(req,res)=>{

res.send('user validation middleware working arnok: '+req.params.username);
});
app.get('/users/:username',uservalidation,(req,res)=>{
    res.send("user profile");
})
app.listen('4000',()=>console.log("server is running at a port: 4000"));