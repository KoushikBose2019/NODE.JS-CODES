//create  and trigger custom event in node.js
const events=require("events");
const event=new events.EventEmitter();
//here we are creating a custom event
event.on('click',()=>console.log("first event created"));
//we are firing an event using emit
event.emit('click');
//jquery code
/*$("#button").on("click",function(){
    console.log("first event is created");
});*/
