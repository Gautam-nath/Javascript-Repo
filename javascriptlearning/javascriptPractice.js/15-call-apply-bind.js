
//call method
//apply method
//bind method
// let jenny = {
//     fullName:"Jenny Gates",
//     city:"LA"
// }

// function greeting(messege, myName){
//     console.log(`${myName} ${messege}, ${this.fullName}`);//call method
    

// }
//greeting.call(jenny,"Good Morning","Elon Musk"); 

//bind method
greeting.apply(jenny,["Good Morning","Elon Musk"]);

let jenny = {
    fullName:"Jenny Gates",
    city:"LA"
}

function greeting(messege, myName){
    console.log(`${myName} ${messege}, ${this.fullName}`);
    

}
const newFunction = greeting.bind(jenny);
newFunction("Good Mporning","Elon Musk");