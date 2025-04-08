
function multiply(n1,...n2) {  //rest parameter
    console.log(n1,n2);
    
}
multiply(4,5,6);
multiply(9,10);
multiply(90);
multiply(2,4,1,10);


//function division(n1,n2) {  
  //  console.log(n1/n2);
    
//}
//division(40,8);
//division(0,0);

//function divide(x, y=1) {  
  //  console.log(x/y);
    
//}
//divide(20,10);
//divide(5);

function division(n1,n2=1){
    console.log(n1/n2);
    
}
division(40,8);
division(20);


/*
const person = {
    first_name:'Akshya',
    age:25,
    grad:"BE"
}

//Before ES6: Assigning object properties to variables
let first_name = person.first_name;
let age = person.age;
console.log(first_name,age);//Akshya 25


//After ES6 - object Destructuring
let{ fUllName, age} = person;
console.log(fUllName, age);


//Array Desturbing
const fruits = ["Apple","Mango","Banana","Watermelon"]
//Assenging array element using index before ES6
const fruit_apple = fruits[0];
const fruit_banana = fruits[2] ;
console.log(fruit_apple,fruit_banana);

//ES6 - Array destructuring
let [fruit1,fruit2] = fruits;
console.log(fruit1,fruit2);*/


