




const studentData = `{

    "fullName":"Elon",
    "age":45,
    "city":"LA",
    "isMarried":true,
    "skills":["HTML","CSS","JS","ML AI","DS"],
    "marks":{
        "phy":90,
        "Eng":60,
        "MATH":99
    },
    "Weight":null
}`

console.log('======== JSON String to object conversion ========');
console.log(typeof studentData);
const studentDataInObjectFormat = JSON.parse(studentData);
console.log(typeof studentDataInObjectFormat);
console.log(studentDataInObjectFormat);
console.log(studentDataInObjectFormat.skills);
console.log(studentDataInObjectFormat.city);


console.log('======== object to JSON string conversion ========');
let studentJenny = {
    fullName: "Jenny",
    email: "jenny@gamil.com",
   qualification: "Be CSC",
    isMarried: true,
    age: 55,
    hobbies: ["Travelling", "Programming", "Reading"],
    marks: {
       physics: 90,
       maths: 67,
        programming: 89,
       socialScience: 78
    }

}
const studentJennyJson = JSON.stringify(studentJenny);
console.log(studentJennyJson);
console.log(typeof studentJennyJson);

