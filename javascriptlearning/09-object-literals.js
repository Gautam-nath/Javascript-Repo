
console.log('===========1.Object Literals=========');

let person = {
    fullName: "Elon Musk",
    city: "LA",
    isMarried: true,
    age: 54
};
console.log(typeof person);
console.log(person);


console.log("==========Reading values from the object========");
console.log("==========1.Dot Notation========");

const fullName = person.fullName;
console.log(`person full name is: ${fullName}`);


console.log("==========2.Square Bracket [] Notation========");
const age =person["age"];
console.log(`person age is: ${age}`);

console.log("========Adding Property into the object=============");
person.graduation = "MSC Physics";
console.log(person);
console.log(person.graduation);

console.log("========Delete Property into the object=============");
delete person.isMarried;
console.log(person);


console.log("========Update Property into the object=============");
person.age = 45;
console.log(person);

let student = {
    fullName:"Swastik",
    email:"abc@gamil.com",
    qualification:"Be CSC",
    gender:"Male",
    isMarried:"false",
    age:25,
    hobbies:["Travelling","Talking with Girls","Reading"],
    details:function(){
        console.log(`===============Student ${this.fullName} Details is:===============`);
        console.log(`Emali:${this.email},Qaulification: ${this.qualification}`);
        console.log(`Married status: ${this.isMarried},AGE: ${this.age}`);
        console.log(`Hobbies: ${this.hobbies}`);
        
        
    }
}
student.details();



let studentJenny = {
        fullName:"Jenny",
        email:"jenny@gamil.com",
        qualification:"Be CSC",
        gender:"Female",
        isMarried:"true",
        age:55,
        hobbies:["Travelling","Programming","Reading"],
        marks:{
          Physics: 90,
          Maths: 67,
          programming:89,
          socialScience:78
     }
        }
console.log(studentJenny.marks.programming);
studentJenny.hobbies.push("Watching Movie");
const arrayHobies = studentJenny.hobbies;
console.log('============Jenny hobbbies==========');
        for (const element of arrayHobies) {
            console.log(element);
            
        }


console.log('================Traversing Object================');

for (const key in studentJenny) {
    if (Object.prototype.hasOwnProperty.call(studentJenny key)) {
        const element = studentJenny[key];
        console.log(`${key}, ${elementlement}`);
        
    }
}

console.log('===========in operator=================');
console.log("age" in studentJenny);
console.log("city" in studentJenny);
console.log('=================In operator=================');




