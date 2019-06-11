//Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.
//with help of buffer class we are  used to deal with TCP streams or the file system
//buffer creation way
let buf= new Buffer(10);

let buf1= new Buffer([10,20,30,40]);
let buf2= new Buffer("simply easy learning","utf-8");
console.log(buf);//not show any output
console.log(buf1);
console.log(buf2);
//Writing to Buffer
buf= new Buffer(100);//number of octet/binary written
len = buf.write("simply easy learning!!!!");
console.log("number of binary written : "+len);
//Reading from Buffers
buf= new Buffer(26);
for(let i=0;i<26;i++){
    buf[i]=i+97;

}
console.log(buf.toString("ascii"));
console.log(buf.toString("ascii",0,4));
console.log(buf.toString("utf8"));
console.log(buf.toString("utf8",0,4));
console.log(buf.toString(undefined,0,5));//encoding
//Convert Buffer to JSON
let buf= new Buffer("this is node.js!!!!");
let json=buf.toJSON(buf);
console.log(json);
let buf1= new Buffer([10,20,30,40]);
let json=buf.toJSON(buf1);
console.log("JSON VALUE IS : ",json);
let buffer= new Buffer("tutorials point!!!!");
let buffer1= new Buffer("simply easy learning");
let buffer3= Buffer.concat([buffer,buffer1]);
console.log("buffer3 content is : "+buffer3.toString());*/
//console.log(Buffer.alloc());
//Compare Buffer
let buffer1= new Buffer("abc");
let buffer2= new Buffer("abcde");
let Compare=buffer1.compare(buffer2);
if(buffer2<0){
    console.log(buffer1+"comes before"+buffer2);

}
else if( Compare===0){
    console.log(buffer1+"same as"+buffer2);

}
else{
    console.log(buffer1 +"come after"+ buffer2);
}
//Copy Buffer
let buffer1= new Buffer('abc');
let buffer2= new Buffer(4);
buffer1.copy(buffer2);
console.log("buffer2 content is :"+buffer2.toString());
console.log( buffer2);
//slice in Buffer
let buffer1= new Buffer("tutorials point");
let buffer2=buffer1.slice(0,7);
console.log("buffer2 content is : "+buffer2);
//buffer length
let buffer= new Buffer("this is node.js!!!!");
console.log("the length of the buffer is : "+buffer.length);


