let fs=require("fs");
//asynchronous reading of a file
//it will print result at first
//it return callback function
//non-blocking code
//console.log(fs);
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>
{
    if(err){
        console.log(err);
    }
    else{

    console.log(data.toString());
}});
console.log("file ended successfully!!!!");