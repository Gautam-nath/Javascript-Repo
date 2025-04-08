
console.log("===========object keys & values check==============");
let studentJenny  = {
    fullName:"Jenny",
    email:"jenny@gamil.com",
    qualification:"Be CSC",
    isMarried:"true",
    age:55,
}
const keys =  Object.keys(studentJenny);
console.log(keys);

const values = Object.values(studentJenny);
console.log(values);

console.log('===========Traversing Object==============');

for (const key in studentJenny) {
    if (Object.prototype.hasOwnProperty.call(studentJenny,key)) {
        const element = studentJenny[key];
        console.log(`${key}, => ${element}`);
        
    }
}

console.log('=============In operator===============');
console.log("age" in studentJenny);
console.log("city" in studentJenny);

//next class
let person  ={
    fullName:"Jenny Gates",
    city:"LA"
}
person = {

}
const age = 21;
age = 45;
