//For Loop Statement
for (let i = 0; i <= 10; i=i+1) {
    console.log(i);
   
    
}
console.log("==================");



for (var index = 10; index >=1; index--) {
   console.log(index);
   
}
console.log("======================");
for (let index = 10; index >= 0; index=index-2) {
   console.log(index);
   
    
}
console.log("=======================================");
//While-Loop statement
var i = 0;
while (i<=20) {
    console.log(i);
    i=i+2;
    
}
var index = 20 ;
while (index >=0) {
    console.log(index);
    index=index-2
    
}
console.log('============================================');

//Do-While-Loop statement
var index = 0;
do {
    console.log(index);
    index = index+2;
    
} while (index<=10);
console.log("============================");

var index = 20;
do {
    console.log(index);
    index = index-1;
} while (index >=10);
console.log("=======================");

//Switch case
function dayoftheweek(daynumber) {
    switch (daynumber) {
        case 0:
            console.log("monday");
            break;
            case 1:
                console.log("Tuesday");
                break;
         case 2:
            console.log("Wednesday");
          break;
          case 3:
            console.log("Thursday");
          break;
         case 4:
           console.log("Friday");
         break;
        case 5:
           console.log("Saturday");
         break;
         case 6:
           console.log("qSunday");
        break;
             
        default:
            console.log("Invalid day number:",daynumber);
         break;
    }
}
dayoftheweek(1);
dayoftheweek(7);