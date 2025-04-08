//my practice javascript
//variable declar and intialization
var cityName="kaudiabarai";
console.log("City Name is:",cityName);

var bestFraind="Gautam";
console.log("my best fraind name IS;",bestFraind);

var countryName="India";
console.log("my country name is:",countryName);

 var schoolName="chachaji nodal up school";
 console.log("my school name is:",schoolName);

 var collegeName="LN college";
 console.log("my college name is:",collegeName);
 console.log("===================================");
//funtion declar with argument
 function personalDetails(FirstName,LastName,collegeName){
    console.log("My First Name iS:",FirstName);
    console.log("My Last Name is:",LastName);
    console.log("My College Name is:",collegeName);
    console.log("=====================================");
    
 }
 personalDetails("Gautam","Nath","Lokanath Mahavidyalaya");

//Assignment
//variable declar
var fullName="Gautam Nath";
console.log("My Full Name is:",fullName);
var FirstName="Gautam";
console.log("My First Name is;",FirstName);
var LastName="Nath";
console.log("My Last Name is:",LastName);
var collegeName="Lokanath Mahavidyalaya";
console.log("My college Name is:",collegeName);
console.log("==================================");

//function declar with argument
function personalDetails(FullName,FirstName,LastName,collegeName) {
    console.log("My full Name is:",FullName);
    console.log("My First Name is:",FirstName);
    console.log("My last name is:",LastName);
    console.log("My college Name is:",collegeName);
   console.log("====================================");
   
    

}
personalDetails("Gautam Nath","Gautam","Nath","Lokanath mahavidyalaya");

//variable declar and intialization
var myLove="i love only JS";
console.log("My love is:",myLove);
var FirstName="Gautam";
console.log("My First Name is:",FirstName);
var LastName="Nath";
console.log("My Last Name is:",LastName);
var age="21";
console.log("My age is:",age);
var address="kaudiabarai";
console.log("My address is:",address);
var pincode="754228";
console.log("My pincode is:",pincode);
var gender="male";
console.log("My gender is:",gender);
var isMarried="false";
console.log("is married:",isMarried);
console.log("============================");

//function declar with argument
function personalDetails(firstName,lastName,age,address,pincode,gender,isMarried) {
    console.log("my first name is:",firstName);
    console.log("my last name is:",lastName);
    console.log("my Age is:",age);
    console.log("my address is:",address);
    console.log("my pincode is:",pincode);
    console.log("my  gender is:",gender);
    console.log("is married:",isMarried);
    console.log("================================");
    
}
personalDetails("Gautam","Nath","21","kaudiabarai","754228","male","false");

//Assignment 02
//functon no argument and no return type
function GoodMorning(){
    console.log("say hello:",GoodMorning);
    console.log("==============================");
    
    
}
GoodMorning();

function Name(){
    console.log("say hello:",Name);
    console.log("============================");
    
    
}
Name();
//function with argument and return type
function personalDetails(firstName,lastName,collegeName) {
    console.log("my first name is:",firstName);
    console.log("my last name is:",lastName);
    console.log("my college name is:",collegeName);
    console.log("======================================");
    
}
personalDetails("Gautam","Nath","Lokanath Mahavidyalaya");

//function with argument with three parameters
function addThreeValues(n1,n2,n3) {
    console.log("The three parameters are:",n1,n2,n3);
    var result=n1+n2+n3;
    console.log("The result is:",result);
    console.log("============================");
    
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

//string function declar
 function stringBasics() {
    var company="microsoft";
    console.log('my dreem company is:,${company}');
    var hobbyOne="readding";
    var hobbyTwo="programming";
    var hobbyThree="playing";
    console.log(`my hobbies are:${hobbyOne},${hobbyTwo},${hobbyThree}`);
    var result=hobbyOne.length+hobbyTwo.length+hobbyThree.length;
    console.log(`given sum of string is:${result}`);
    

 }
 stringBasics()

 //string
 console.log("==========charAt()=============");
 var txt = "Hello World";
 console.log(txt.charAt(0));

 console.log("============concat()===============");
 var str1 ="Hello";
 var str2 ="codingtute!";
 console.log(str1.concat(str2));

 console.log("=============indexOf()============");
 var txt = "Lets find where 'pen' occures";
 console.log(txt.indexOf('pen'));
 
console.log("==============lastIndexOf()==============");
// var str ="A dev is knows a dev ";
 //var  =str.lastIndexOf("dev");//doubt
 
console.log("=============replace()============");
var str ="Hello dev";
console.log(str.replace("dev","world"));

console.log("==================toUpperCase(()==============");
var sentence ="codingTute";
console.log(sentence.toUpperCase());

console.log("==============valueOf()=================");
//const s = new string('test');
//typeof s;
//s.valueof;//doubt
//typeof s.valueOf();

console.log("================Trim()================");
var str = "  Trim Both Side  ";
console.log(str.trim());

console.log("=============toString()=================");
var num = 15;
console.log(num.toString());
console.log("================Includes()================");
var str ="My Name is codingtute";
console.log(str.includes("Name"));

console.log("===============Search()==============");
var str = "hello dev!";
console.log(str.search("dev"));

console.log("=================slice() Start and End==================");
var str= "Developers World";
console.log(str.slice(0,10));

console.log("================Start,Legnth================");
var s = "JavaScript";
console.log(s.substr(4,6));

console.log("================Substring(start,end)========================");
var str = "Hello dev";
console.log(str.substring(1,4));

console.log("=================charCodesAt()==================");
var str = "TEST";
console.log(str.charCodeAt(0));

console.log("================Match()====================");
var str = "lopersum,lopersum,lopersum,lopersum";
console.log(str.match(/sum/g));

console.log("==============split()==============");
var str = "1,2,3,4,5";
console.log(str.split(","));



console.log("============to lower case==============");
var sentence = "CodingTute";
console.log(sentence.toLowerCase());


//var declare
var city ;
console.log("city:",city);





 








