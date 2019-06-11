//its like a inheritence in node.js(prototype)
function employee(){
    this.name="tony";
    this.age=28;
    this.email="abc123@gmail.com";
    this.city="kolkata"
}
//extend the new parameter in the existing function
employee.prototype={
    salary:54000,
    company:"wipro digital"
    //getname:function(){
        //return this.name;
    }
//}
let emp= new employee();
console.log(emp.salary);
console.log(emp.name);
console.log(emp);
console.log(emp.email);
console.log(emp.company);





