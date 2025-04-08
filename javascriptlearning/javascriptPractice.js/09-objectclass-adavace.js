const person = {
    fullName:"Jenny Gates",
    city:"LA"
}

//person = {
 //age:60//not allowed as array reference bariable as constant 
//}
//const array = [10,20,30,40];
//array = [90,100,60];

console.log(person);
person.city ="pune";
console.log(person);

console.log("===========object freezing=========");
const student = {
    fullName:"Jenny Gates",
    city:"LA"
}
Object.freeze(student);
console.log(student);
//student.fullName = "Donald Trump";//cannot assign the value
//console.log(student);

const arrayfrnd = ["Jenny","Elon","Stew","Ratan"];
console.log(arrayfrnd);
arrayfrnd.push("Sundar");
console.log(arrayfrnd);

//array freeze does not allow to extensible property
Object.freeze(arrayfrnd);
console.log(arrayfrnd);
arrayfrnd.push("Bill");
console.log(arrayfrnd);//already freeze


