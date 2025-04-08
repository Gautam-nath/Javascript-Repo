
//call
/*
let jenny = {
    fullName:"Jenny Gates",
    city:"LA"
}
function greeting(message,myName){
    console.log(`${myName},${message},${this.fullName},`);
    
}
greeting.call(jenny,"Good Morning","Elon Musk");*/


//bind
let jenny = {
    fullName:"Jenny Gates",
    city:"LA"
}
function greeting(message,myName){
    console.log(`${myName},${message},${this.fullName},`);
    
}
const newFunction = greeting.bind(jenny);
newFunction ("Good Morning","Elon Musk");
