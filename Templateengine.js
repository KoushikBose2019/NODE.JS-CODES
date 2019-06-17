const express=require("express");
const app=express();
app.use("/abc",express.static("public"));
app.set("view engine","pug");//pug template engine
app.set("view engine","ejs");//ejs template engine
app.set("view engine","twig");//twig template engine

app.set("view","./public/view");
app.get("/",(req,res)=>{

    res.render("index",{title:"node.js!!!!",message:" mean stack developement"});
});
app.listen(4000);

