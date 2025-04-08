// const person = {
//     fullName:"Jenny Gates",
//     city:"LA"
// }
// person = {
//     age:32,
//     country:"india"
//}//one reference variable point one object//next object on rechargeble object


let person = {
    fullName:"Jenny Gates",
    city:"LA"
}

//shallow clone
console.log("===========Shallow clone===========");
const student = person;
student.fullName ="Elon Musk";
console.log(person.fullName);

console.log("===========Deep clone===========");
let Jenny = {
    fullName:"Jenny Gates",
    city:"LA"
}
const clonedjenny = Object.assign({},Jenny);
console.log(Jenny);
clonedjenny.fullName ="Stew Job";
console.log(Jenny);
console.log(clonedjenny);

console.log("===========Deep clone using spreed operator===========");
const newcloneJenny = {...Jenny};
console.log(newcloneJenny);

console.log("=============Merge object==============");
const emp = {
    fullName:"Jenny Gates",
    city:"LA"
}
const emp_address = {
    pin:41105,
    street:"woked"
}

Object.assign (emp,emp_address);
console.log(emp);

const newObject = Object.assign({},emp,emp_address);
console.log(newObject);

const refvariable = {...emp,...emp_address};


