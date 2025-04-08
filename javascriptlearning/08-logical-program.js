


let array = [10,20,45,30,77,60];
console.log('=======find the odd numbers from the array=========');
let oddNumCount = 0;
for (const element of array) {
    if (element%2==1) {
        console.log(element);
        oddNumCount = oddNumCount+1;
    }
}
console.log(`odd number count is:${oddNumCount}`);

console.log("==============WAp to count the vowels including lower and upper case=============");

const myLove = "I Love only Javascript";
const vowels = "aeiou";
let counterVowels = 0;
for (const element of myLove) {
    if (vowels.includes (char.toLowerCase)  ) {
        counterVowels = counterVowels+1;   
     }
    console.log(`Vowel count is:${counterVowels}`);
    
    console.log("=========WAP to count the characters includung lower and uper case===========");
    const sentence = "javaScript LANGUAGE";
    let countAChar = 0;
    for (const element of sentence) {
        if (char =='a' || char == 'A') {
            countAChar = countAChar+1;
        }
    }
    //if(char.toUpperCase() == 'A'){
        //countAChar = countAChar +1;
   // }
}
console.log(`Total a char is: ${countAChar}`);
