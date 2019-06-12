let fs= require("fs");
// Asynchronous - Opening File
console.log("going to open a file!!!!");
fs.open('input.txt','r+',function(err,data){
    if(err){
        //console.log(err.stack);
        return console.error(err);
    }
    else{
        console.log("file opened successfully!!!!");
    }
});
//Get File Information
console.log("going to open an info!!!!");
fs.stat('input.txt',function(err,stats){
    if(err){
        //console.log(err.stack);
        return Console.error(err);
    }
    else{
        console.log(stats);
        console.log("got file info successfully!!!!");
    }
    //check the file type
    console.log("isFile:"+stats.isFile());
    console.log("isDirectory:"+stats.isDirectory());
    console.log(stats.isBlockDevice());
    console.log(stats.isSocket());
});
//Writing a File
console.log("going to write into exixting file!!!!");
fs.writeFile('input.txt','simply easy learning!!!!',function(err){
if(err){
    return console.error(err);
}
console.log("data written successfully!!!!");
console.log("lets read newly written data!!!!");
});
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("ashynchronous read: "+data.toString());

});

