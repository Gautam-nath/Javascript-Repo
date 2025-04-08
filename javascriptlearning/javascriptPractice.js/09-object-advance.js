let StudentJenny = {
    fullName:"jenny",
       email:"jenny@gmail.com",
       qualification:"BECsc",
       gender:"female",
       isMarried:"true",
       age:55,
}
console.log("[==========only object (key) print==========");
const keys= Object.keys(StudentJenny);
console.log(keys);
console.log("=========only object(value) print==========");
const values = Object.values(StudentJenny);
console.log(values);

console.log("=========for in loop==========");
console.log("===========Traversing object==========");
for (const key in StudentJenny) {
    if (Object.prototype.hasOwnProperty.call(StudentJenny,key)) {
        const element = StudentJenny[key];
        console.log(`${key}, => ${element}`);
        
    }
}

console.log("=========operotor=========");//check
console.log("age" in StudentJenny);
console.log("city" in StudentJenny);


