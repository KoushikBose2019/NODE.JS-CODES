let express= require('express');
let app=express();
//console.log(app);
//using  Http get request
app.get('/users',(req,res)=>{
    res.send('hello node.js!!!!');
});

app.post('/',(req,res)=>{
    res.send('got a post method');
});
app.put('/',(req,res)=>{
res.send("got a put method");
});

app.delete('/',(req,res)=>{
    res.send("got a delete method");
});
app.all('/',(req,res)=>{
    res.send("HTTP method doesn't have any effect on this route!");
});
app.listen('3000',()=>console.log('server is running at a port : 3000'));