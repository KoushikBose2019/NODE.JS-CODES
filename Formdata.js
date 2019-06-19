let express= require("express");
let bodyParser=require("body-parser");//parsing JSON REQUST AND url-encoded data
let multer=require("multer");
let upload=multer();//upload & parsing multipart form data
let app=express();
app.get("/",(req,res)=>{
    res.render("form");
});
app.set("view engine","pug");
app.set("views","./Public/views");
//for parsing appllication of json
app.use(bodyParser.json());
//for parsing application url information
app.use(bodyParser.urlencoded({extended:true}));
//for parsing multipart/form data
app.use(upload.array());
app.use(express.static("public"));
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("received your request!!!!");
});
app.listen("4000",()=>console.log("server is running on a port: 4000"));

