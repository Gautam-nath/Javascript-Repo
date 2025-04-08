let array = [10,20,45,30,77,60];
console.log("======find oddd numbers from the array=======");
for (const element of array) {
    if (element%2==1) {
    console.log(element);
        
    }
}

console.log("========oddd numbers count========");
let oddNumCount = 0;
for (const element of array) {
    if (element%2==1) {
    console.log(element);
    oddNumCount=oddNumCount+1;
    }
}
console.log(`odd number count is: ${oddNumCount}`);

console.log("=======WAP to count trhe vowels including lower and upper case======");
const myLove = "I Love only Javascript";
const vowels ="a e i o u";
let countervowels = 0;
for (const char of myLove ) {
    if (vowels.includes(char.toLowerCase())) {
        countervowels = countervowels+1;
    }
}
console.log(`vowel count is : ${countervowels}`);

console.log("=======WAP to count trhe vowels including lower and upper case======");
const sentence = "Javascript LANGUAGE";
const counterAchar = 0;
for (const char of sentence) {
    if (char touppercase()=="A") {
        counterAchar=counterAchar+1;
    }
}
console.log(`Total achar is: ${counterAchar}`);
