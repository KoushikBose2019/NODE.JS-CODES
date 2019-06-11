console.log("hello node.js!!");

let user={
    name:"arnok",
    age:28,
    email:"arnokgosh2022@gmail.com",
    address:"dum dum"
}

console.log(user.name)
console.log(user)
//anonymous function
let person=function(a,b){
    let c=a+b
  console.log("addition of a and b is : "+c);
}
person(2,4);
//arrow function
let add=(a,b)=>{
    let c=a+b;
    console.log("addition of the number is :"+c);
//let c=a+b;
}
add(4,7);
let name="arnok";
module.exports.abc=name;
