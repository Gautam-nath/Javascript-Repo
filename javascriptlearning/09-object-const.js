
const person = {
    fullName:"Jenny Gates",
    city:"La"
}
//Not allowed as person reference variable is constant
//person = {
  //  age = 60
//}
console.log(person);
person.city = "pune";
console.log(person);



const array = [10,20,30,40];
//Not allowed as array reference variableis constant
//array = [90,100,60];

console.log("===============Object Freezing=============");
const Student = {
    fullName:"Jenny Gates",
    city:"La"
}
Object.freeze(Student);
console.log(Student);
person.fullName = "Donal Trump";
console.log(Student);

console.log("===========Array Freezing================");

const arrayFrd = ["Jenny","Elon","Stew","Ratan"];
console.log(arrayFrd);
arrayFrd.push("Sundar");
console.log(arrayFrd);//not add is not extensibble
Object.freeze(arrayFrd);
arrayFrd.push("Bill");
console.console.log(arrayFrd);




