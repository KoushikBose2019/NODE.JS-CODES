let http=require("http");
http.createServer(function(request,response){
//send the http header 
//HTTP Status :200:OK
//Content-type:Text/Plain
response.writeHead(200,{"Content-Type":"text/plain"});
//send the Response body 
response.end("hello node.js!!!!");
}).listen(8081);
console.log("server is running in the port at http://127.0.0.8081/");
