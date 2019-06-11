let fs = require("fs");
let data;
let stream;
// Create a readable stream
let readerStream = fs.createReadStream(__dirname+'/hello.txt','utf8');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");
//another to read stream
readerStream.on("data",function(data){
let chunk=data.toString();
console.log(chunk);
});


//Writing to a Stream
let fs=require("fs");
let data="node.js is easy to learn!!!!";
let writerStream=fs.createWriteStream("hello.txt");
//handel stream event=>finish and error
writerStream.on('finish',function(){
    console.log("writting is completed");

});
writerStream.on('error',function(err){
    console.log("err.stack");
});
console.log("proagramme ended!!!!");

//another way of writting stream in a js file
stream=fs.createWriteStream("hello.txt");
stream.write("tutorial point!!!!");
stream.write("Introduction");
stream.write("Events");
stream.write("Generators");
stream.write("Data Connectivity");
stream.write("Using Jasmine"); 

