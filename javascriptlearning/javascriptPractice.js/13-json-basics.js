



const studentData = `{
   
        "fullName":"Elon",
        "age":"45",
        "city":"LA",
        "isMarried": true,
        "Skills":["HTML","CSS","JS","ML AI","DS"],
        "MARKS":{
            "PHY":90,
            "ENG":60,
            "MATH":99
        },
        "Weight": null
    }`;

console.log("=========JSON string to object conversion=========");
console.log(typeof studentData);
const studentDataInObjectFormat = JSON.parse(studentData)
console.log(typeof studentDataInObjectFormat);
console.log(studentDataInObjectFormat);
console.log(studentDataInObjectFormat.skills);
console.log(studentDataInObjectFormat.city);


console.log("=====object to JSON String conversion=========");

let studentJenny = {
    fullName: "Jenny",
    email: "jenny@gamil.com",
    qualification: "Be CSC",
    gender: "Female",
    isMarried: "true",
    age: 55,
    hobbies: ["Travelling", "Programming", "Reading"],
    marks: {
        Physics: 90,
        Maths: 67,
        programming: 89,
        socialScience: 78
    }
}

const studentJennyjson = JSON.stringify(studentJenny);
console.log(studentJennyjson)
console.log(typeof studentJennyjson);

