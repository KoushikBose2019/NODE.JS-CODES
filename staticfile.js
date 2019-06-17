const express=require("express");
const app=express();
app.use("/static",express.static("public"));
app.use(express.static("public"));
app.use(express.static("image"));

console.log(app);
app.get("/",(req,res)=>{
 res.sendFile(__dirname+"/index.html");
});
app.listen("4000",()=>console.log("server is running at a port: 4000"));