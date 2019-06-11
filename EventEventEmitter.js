let event=require('events');//create  and trigger custom event in node.js
let events=new event.EventEmitter();//here we are creating a custom event
let first_event=(a,b)=>{
    console.log(a*b);
    events.emit('click1');
    events.emit('click2');
    events.emit('click3');
}
let second_event=()=>{
    console.log("second event trigger");
    
}
let third_event=()=>{
    console.log("third event trigger");
   
}
//events.on('click',(n1,n2)=>console.log(n1+n2));//we are firing an event using emit
events.on('click', first_event)
events.on('click2',second_event)
events.on('click3',third_event)
events.emit('click',4,7); 
//jquery code
//event under event
/*$("#button").on('click',function(){
    console.log("abc");
});
function test(){
    console.log("xyz");
}*/

