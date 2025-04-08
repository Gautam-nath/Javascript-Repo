


console.log(age); //hosting 
var age = 22;

//console.log(vity);
//let city = "pune";

console.log('Named function is hosted');

show();
function show() {
    console.log("Inside show function....");
    
}
console.log('function expression never hosted');
//demo();
var demo = function(){
    console.log("Inside function expression");
    
}
demo();