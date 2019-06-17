let express=require("express");
let app=express();
//first middleware before response is sent
app.use((req,res,next)=>{
    console.log("start");
    next();
});
//route handeler
app.get("/",(req,res,next)=>{
  res.send("middleware");
  next();
});
//end function
app.use("/",(req,res)=>{
    console.log("end");
    
});
app.listen('7000',()=>console.log("server is running at port:7000"));

