
console.log("=======WAP to count the even number from the array=========");
let array =[10,20,45,30,77,60];
console.log(array);
let evenNumCount =0;
for (const element of array) {
    if (element%2==0) {
        console.log(element);
        evenNumCount =evenNumCount+1;
    }
}
console.log(`even number count is: ${evenNumCount}`);

console.log("=======WAP to count the vowels including lower and upper case=========");
const myLove ="I Love only JavaScript";
const vowels= "aeiou";
let countervowels =0;
for (const char of myLove) {
    if (vowels.includes(char.toLowerCase())) {
        countervowels =countervowels+1
    }
}
console.log(`vowel count is:${countervowels}`);

console.log("=======WAP to count the character including lower and upper character=========");
const sentence = "JavaScript LANGUAGE";
let counterAchar = 0;
for (const char of sentence) {
    if (char=='a'||char=='A') {
        counterAchar =counterAchar+1;
    }
}
console.log(`TotalAchar is: ${counterAchar}`);
