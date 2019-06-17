/*let express=require("express");
let app=express();
let myLogger=(req,res,next)=>{
    console.log("logged");
    next();
}
app.use(myLogger);
app.get('/',myLogger, function (req, res) {
    res.send('Hello World!')
  })
  
  app.listen(3000);
  app.get("/",(req,res)=>{
      res.send("hello node.js!!!!");
  });
  app.listen(4000);
  */
 const expresss=require("express");
 const app=express();
 console.log(app);

 app.get("/",(req,res)=>{
     res.send("hello node.js!!!!");
 });
  
app.listen(4000);