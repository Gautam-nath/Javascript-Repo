console.log("=========1.object Literals==========");
let person ={
    fullName:"Elon Musk",
    city:"LA",
    isMarried:"true",
    age: 54
}
console.log(typeof person);
console.log(person);

console.log("=====Reading value from the object=========");
console.log("=========1.Dot Notation========");
const fullName = person.fullName;
console.log(`person full name is: ${fullName}`);

//if access the city value 
const city =person.city;
console.log(`person city is: ${city}`);

console.log("==========2.square Bracket[]Notation========");
const age = person["age"];
console.log(`peson age is: ${age}`);

console.log("==============Adding property into the object==========");
person.graduation = "MSC Physics";
console.log(person);

console.log("==========Delete Property into the object============");
delete person.isMarried;
console.log(person);

console.log("===========update property into the object=========");
console.log("==========before update=========");
console.log(person);
console.log("============after update==========");
person.age = 45;
console.log(person);

let student = {
    fullName : "swastik",
    email :"abc@gmail.com",
    qualification :"BE Csc",
    gender :"male",
    isMarried :false,
    age : 25,
    hobbies : ["Travelling","Talking with Girls","Reading"],
    details:function() {
        console.log(`student: ${this.fullName}Details is:`);
        console.log(`Email: ${this.email},qualification: ${this.qualification}`);
        console.log(`Gender: ${this.gender},ismarried: ${this.isMarried}`);
        console.log(`age: ${this.age},hobbbies: ${this.hobbies}`);

        
    }
    
}
student.details();
 console.log("======Nested object=========");

 let StudentJenny = {
       fullName:"jenny",
       email:"jenny@gmail.com",
       qualification:"BECsc",
       gender:"female",
       isMarried:"true",
       age:55,
       hobbies:["Travelling","programming","Reading"],
       marks :{
        physics:90,
        Math:67,
        programmig:89,
        socialscience:78
       }
 }
console.log(StudentJenny.marks.programmig);

//if access math
console.log(StudentJenny.marks.Math);
//if access hobbies 
console.log(StudentJenny.hobbies);

console.log("=====if adding watching movies=========");
StudentJenny.hobbies.push("Watching movies");
console.log("========traversing hobbies========");


for (const element of StudentJenny.hobbies) {
   console.log(element);
    
}

 








