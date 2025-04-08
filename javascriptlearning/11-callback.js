
//Jenny Student
function homeWorkJenny(callback){
    console.log("She had dinner...");
    console.log('She started her homework...');
    console.log('After sometime.she has completed her homework.......');
    console.log("jenny posted her home work in whats app group...");
    
}
 //Elon Student
 function copyHomeWorkElon(){
        console.log('when jenny callback.');
        console.log('"He will come and start coping home work... ');
        console.log("complete homework....");
        console.log("Elon posted output in what app group.");

        
        
 }
 homeWorkJenny(copyHomeWorkElon);
 copyHomeWorkElon();

console.log("=================================");


 let greet = function(){
    console.log('Hey Good Evening');
    


 }
 setTimeout(greet,7000);

 //1 hr = 60 mins
 //1 mins = 60 sec
 //1 sec = 1000 ms
 //5 sec = 8000 ms 

 
 console.log('==============Callback Hell=============');
 setTimeout(function(){
    console.log("Hello..");
    setInterval( function() {
        console.log("Good Evening...");
        setInterval( function()  {
            console.log("Good night...");
            
        }, interval);
        
    }, 7000);
 },5000)