
const person ={
        fullName:"Jenny",
        email:"jenny@gamil.com",
        qualification:"Be CSC",
        isMarried:true,
        age:55,
        city: "Pune",
        pin: 411057,
        country: "India",
        skill: "Angular and React",
        graduation: "BCA"
}
//different line
//const fullName = person.fullName;
//const age = person.age;
//const skill = person.skill;
//const pin = person.pin;
//const ismaarried =person.ismarried;

//one line 
const {fullName,age,skill,pin,isMarried,graduation = "BE CSC"} = person;
console.log(fullName,age,skill,pin,isMarried);

console.log("Array Destructuring.......");
let array = [10,20,60];
const[n1,n2,n3,n4=1]= array;
console.log(n1,n2,n3,n4);

