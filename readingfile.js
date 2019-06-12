let fs=require("fs");
//let buf= new Buffer(1000);
//console.log("going to open an exixting file!!!!");
fs.open("textfile.txt","r+",function(err,fd){
if(err){
    return console.error(err);
}
console.log("file opened successfuly!!!!");
console.log("going to open a file!!!!");
fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err){
        return console.error(err);
    }
    else{
        console.log(bytes+"byte read");
    }

//close the opened file
fs.close(fd,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("file closed successfully!!!!");
    }
});
});
});
//delete a file node.js

fs.unlink('textfile.txt',function(err){
    if(err){
        console.log(err.stack);
    }
    else{
        console.log("file is deleted!!!!");
    }
});


