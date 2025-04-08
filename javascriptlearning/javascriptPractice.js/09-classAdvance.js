const person = {
    fullName:"Elon Musk",
    city:"LA",
    age:20,
    ismarried:true
}
//class is the Blue print on design or templete
class student {
    //Date memmber
    //Constroctor
    constructor(fullName,city,age,ismarried) {
        this.fullName =fullName;
        this.city = city;
        this.age = age;
        this.ismarried = ismarried;
    }
    //mention function or method
details(){
    console.log(`=========Students ${this.fullName} Detaills=========`);
    console.log(`City:  ${this.city},Age: ${this.age},Ismarried: ${this.ismarried}`);
    
     
    
    
}


}
//const stdElon = new student("Elon Musk","LA","22",true);
// const stdStew = new student("Stew Job","pune","56",false);
// console.log(stdStew);
const stdElon=new student ("Elon Musk","LA",22,true);
stdElon.details();

