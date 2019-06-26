let express=require("express");
let fs= require("fs");
let app= express();
//synchronous error handeling
app.get("/",(req,res)=>{
throw new Error("error")//express will catch this by own.

})
app.get("/",(req,res,next)=>{
   fs.readFile("/file does not exit",(err,data)=>{
    if(err){
        next(err)//pass    error to express
    }
    else{
        res.send(data)

    }

   })

})
app.get("/",(req,res)=>{
   setTimeout(function(){
   try{
      throw new Error("broken")
   }
   catch(err){
       next(err)
   }
   app.listen(7000);


})





