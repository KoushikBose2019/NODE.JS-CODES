/*let os= require("os");
console.log('endianess: '+os.endianness);
console.log('type:'+os.type());
console.log('platform: '+os.platform());
console.log('total memory: '+os.totalmem()+"bytes");
console.log('free memory: '+os.freemem()+"bytes");*/
//net module is used to create both the server and client
let net = require('net');
let server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});