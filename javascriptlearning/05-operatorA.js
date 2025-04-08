

function suquareOfWordLength(str1)
{
   var str1=str1.length;
   var strSquare=str1*str1;
   return strSquare;
}
var str3=suquareOfWordLength("JavaScript")
console.log(`Square of word is :${str3}`);
var str3=suquareOfWordLength("Google Chrome")
console.log(`Square of word is :${str3}`);
var str3=suquareOfWordLength("Web Devloper Smart")
console.log(`Square of word is :${str3}`);

function stringOperation(givenString)
{
   var strLength=givenString.length;
   var word=givenString.split(" ");
   var WordLength=word.length;
   var Division=strLength/WordLength;
   console.log(`Word division is : ${Division}`);
   var Multiplication=strLength*WordLength;
   console.log(`Word multipliction is : ${Multiplication}`);
   
   
}
stringOperation("I am Angular Developer");


