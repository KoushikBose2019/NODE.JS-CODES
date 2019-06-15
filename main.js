const express= require("express");
const app=express();
//console.log(app);
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.post("/",(req,res)=>{
    res.send("user data access");
});

app.listen(3000,()=>console.log("server running on port :3000"));
