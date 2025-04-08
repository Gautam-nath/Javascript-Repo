function student(fullName,city) {
    this.fullName =fullName;
    this.city = city
}
const stdElon =new student ("Elon Musk","LA");
console.log(stdElon);

const stdBill = new student ("Bill gate","LA");
console.log(stdBill);

const stdSundar = new student ("Sundar","LA");
console.log(stdSundar);

const array = ["Elon","sundar","stew"];
array.pop ();

console.log("=========prototype=======");
student .prototype.country ="USA";
console.log(`${stdElon.fullName},${stdElon.country}`);
console.log(`${stdElon.fullName},${stdElon.country}`); 


console.log("=========instance of operator ==========");

class Dewpartment  {

}
const dept =new Dewpartment;
console.log(Dewpartment instanceof stuident);//check object create which in class




