//sync function
//blocking code
//function will execute step by step
//it will take more time comapre to async func
let fs=require("fs");
try{
     //let data=fs.readFileSync(__dirname+"/hello.txt","utf8");
     let data=fs.readFileSync("hello.txt");

     console.log(data.toString());
    }catch(e){

        console.log(e);
    }
    console.log("file ended successfully!!!!");
    

