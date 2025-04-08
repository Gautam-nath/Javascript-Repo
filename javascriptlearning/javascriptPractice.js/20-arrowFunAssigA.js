//Arrow Function
console.log("======== with no argument and no return value =========");

let Show = function () {
  console.log("Good Morning Today is Tuesday");
     
}
Show();

console.log("====== with 3 arguments and no return value, for recived 3 parameters perform the multiplication ==========");

let multiplication = ( n1,n2,n3) =>{
    let result = n1*n2*n3;
    return result;
}
let multi = multiplication (5,5,2);
console.log(multi);


//b. invoke the arrow function for values -> 10,4
console.log("=======invoke the value========");
let multiplication1 =(n1,n2,n3) =>{
    let result = n1*n2*n3;
    return result;

}
let multi1 = multiplication1 (10,4);
console.log(multi1);


console.log("=======invoke the value========");
let multiplication2 =(n1,n2,n3=1) =>{
    let result = n1*n2*n3;
    return result;

}
let multi2 = multiplication2 (10,4);
console.log(multi2);

//with 5 argumnets and return value
console.log("=========5 areguments and return result========= ");
let addition = (n1,n2,n3,n4,n5) =>{
let result = n1+n2+n3+n4+n5;
return result;
}
let add = addition (100,100,200,349,756);
console.log(add);


//mening full message
console.log("======menningful messege=========");
console.log("=========5 areguments and return result========= ");
let addition1 = (n1,n2,n3,n4,n5) =>{
let result = n1+n2+n3+n4+n5;
return result;
}
let add1 = addition1 ("i am","learning","Es6","features","in depth");
console.log(add1);
