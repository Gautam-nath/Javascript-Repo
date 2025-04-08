



//Class is the Blueprint or Design or templete
class Person{
    //Data Member
    //Constructor
    constructor(fullName,city){
        this.fullName = fullName;
        this.city = city;
       
    }
    //Member Function or methods
    details(){
        console.log(`=========Base class details() ==== Students ${this.fullName} Details=============`);
        //console.log(`City: ${this.city}`);
        
        
    }
}
class student extends Person{
    constructor (fullName,city,profession,age){
        super(fullName,city);
        this.profession = profession;
        this.age = age;
    }
    studentDetails(){
        console.log(`studentDetails: ${this.fullName}.${this.city},${this.age},${this.profession}`);
        
    }
    //Method overriding to achhive RT poly
    details(){
        console.log("=======Child class details()method ===>"); 
        console.log(`Hello My details are: ${this.fullName},.${this.city},${this.age},${this.profession}`);
    
    }
}
const stdElon = new student("Elon Musk","LA","student",22);
stdElon.studentDetails();
stdElon.details();
const stdLarry = new student("Larry Page","sillicon vally","CEO",56);
stdLarry.studentDetails();
