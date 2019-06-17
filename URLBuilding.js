let express = require('express');
let app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is:' + req.params.id);
});
app.listen('3000',()=>console.log('server is running at a port: 3000'));

app.get("/:name/:id",(req,res)=>{
    res.send("id: "+req.params.id+'and name:'+req.params.name);
});
app.listen('4000',()=>console.log('server running on the port:4000'));*/
//Pattern Matched Routes
app.get("/:id([0-9]{4})",(req,res)=>{
   res.send("id is like this:"+req.params.id);
});
app.listen('4000',()=>console.log("server running on a port: 4000"));