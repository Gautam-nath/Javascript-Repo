 
 function stringHandsOn(){
    var string="  Hey you are doing, good,keep it up  ";
    console.log(`Given string:,${string}`);
    console.log(`length of string is:${string.length}`);
    var result= string.trim();
    console.log(`After trim string is:${result} and it's  length ${result.length}`);
    console.log(`First char ${result.charAt(0)} and last char${result.charAt (result.length-1)}`);
    var resultValue= result.split("");
    console.log(`Total words:${resultValue.length}`);

    var resultValue= result.indexOf("good");
    console.log(`Index of good:${result.indexOf("good")}`);
    var resultValue = result.substring(22);
    console.log(`Index of 22:${result.substring(22)}`);

   var startaIndex=result.startsWith("Hey");
   var endIndex=result.endsWith("up");  
   console.log(`start with ${startaIndex},End Index :${endIndex} `);

 }
 stringHandsOn();



