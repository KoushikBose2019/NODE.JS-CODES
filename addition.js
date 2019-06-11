function add(a,b){
    let c=a+b;
    console.log("addition of the file is : ",c);
}
function sub(a,b){
    let d=a-b;
    console.log("subtraction  of the value is: ",d)
}
function mul(){
    let e=a*b;
    console.log("multiplication of the file is: ",e)
}
function div(){
    let f=a/b;
    console.log("division of the file is: ",f)
}
//let a=24;
//let b=14;
add(2,4);
mul(2,4);
sub(4,2);
div(4,2);

module.exports.addition=add;
module.exports.subtration=sub;
module.exports.multiplication=mul;
module.exports.division=div;
//module.exports.aval=b;

