let fs=require("fs");
let child_process=require("child_process");
for(let i=0;i<4;i++){
    //let workprocess=child_process.exec('node.js suppport'+i,function(error,stdout,stderr){
        if(error){
            console.log(error.stack);
            console.log('error code: '+error.code);
            console.log("singnal received: "+error.signal);

        }
        console.log('stdout:'+stdout);
        console.log('std')
    });
    workprocess.on('exit',function(code){
        console.log("child process exited with exit code: "+code);
    });

}
}

let workerProcess = child_process.spawn('node', ['support.js', i]);
workerProcess.stdout.on('data',function(data){
    console.log('stdout:'+data);
});
workerProcess.stderr.on('data',function(data){
    console.log('data',function(err){
        console.log('stderr: '+data);
    });
workerProcess.on('close',function(code){
    console.log('child process exited with code: '+code);
});

//const fs = require('fs');
const child_process = require('child_process');
 
for(var i=0; i<3; i++) {
   var worker_process = child_process.fork("support.js", [i]);	

   worker_process.on('close', function (code) {
      console.log('child process exited with code ' + code);
   });
}