/*let cookieParser=require("cookie-parser");
console.log(cookieParser);
app.use(cookieParser);*/
let express=require("express");
let app=express();
app.get("/",(req,res)=>{
  // res.cookie("name","express").send("cookie set");
   //set cookie expiration
   //res.cookie(name,'value',{expire:54000+Date.now()});
   res.cookie("name","value",{maxAge:40000});
});
app.listen("4000",(req,res)=>console.log("server running at a port: 4000 "));
//console.log(document.cookie);
//console.log('Cookies: ', req.cookies);
