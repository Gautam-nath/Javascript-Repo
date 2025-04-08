
function Student(fullName,city){
    this.fullName = fullName
    this .city = city
}
const stdElon = new Student("Elon Musk","LA");
console.log(stdElon);

const stdBill = new Student("Bill gates","LA");
console.log(stdBill);

const stdSunadr = new Student("Sundar","LA");
console.log(stdSunadr);

console.log("=================Prototype====================");


Student.prototype.country = "USA";
console.log(` ${stdElon.fullName},${stdElon.country} `);
console.log(` ${stdSunadr.fullName},${stdSunadr.country} `);


const array = ["Elon","Sundar","Stew"];
array.pop()
