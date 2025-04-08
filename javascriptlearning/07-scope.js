// first declar and then intialization
console.log("============1.declare and intialization==================");

var age;
age=20;
console.log(age);

let city;
city="pune";
console.log(city);
//declar and intialization at the same line
const isMarried=true;

//re-decclaration
console.log("=============2.Re-declaration==================");
var age=30;
console.log(age);
//let city="mumbai";
//const isMarried=true;

console.log("===========3. scope================");
function demo() {
    var n1=10;
    let n2=20; 
    const n3=30; 
    console.log(n1,n2,n3);
if (n1>=10) {
    var n4=50;//function scope
    let n5=60;//block scope
    const n6= 70;//block scope
    console.log(n4,n5.n6);
     
}
console.log(n4);

       
}
demo();



