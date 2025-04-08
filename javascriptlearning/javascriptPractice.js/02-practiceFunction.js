//Function
//Function Declaration
function show() {
    console.log("Inside Show the function");
    console.log("==========================");
    
}
//Function call  or invokation
show();
show();
show();

//Function With Argument no Return type
function square(num) {
    console.log("Given square is:",num);
   var result = num*num;
   console.log("Square is:", result);
   console.log("=====================");
   
    
}
square (2) ;
square (4) ;
square (50) ;
square (2345) ;

//Function with argument and return type
function multiply(n1,n2,n3) {
    console.log("Given numbers is:",n1,n2,n3);
    var result = n1*n2*n3 ;
    return result ;
}
var returnValue = multiply(10,2,2) 
    console.log("Multiplication is:",returnValue);
    console.log("===========================");
    
    var resultValue = multiply(50,70,25);
    console.log("Multiplication is:",resultValue);
    
    
