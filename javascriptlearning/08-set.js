



let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
console.log(mySet);

mySet.add(40);//Adding duplicate element


console.log(`set length is: ${mySet.size}`);
const is30Available = mySet.has(30);
console.log(`is 30 element available: ${is30Available}`);


mySet.delete(20);//delete element

console.log("=========Traversing Set Collection==========");

for (const element of mySet) {
    console.log(element);
    
}

console.log("=========Removing duplicate element fro the array==========");
let array = [10,20,40,20,10,60];
console.log(array);

const setNum = new Set();
for (const element of array) {
    setNum.add(element);
    
    
}
console.log(setNum);

const arrayUnique = [];
for (const element of setNum) {
    arrayUnique.push(element);
    
}
console.log(arrayUnique);

console.log("==========Removing duplicate elements using spread operator===========");

const arrayUniqueElements = [...new Set(array)];
console.log(arrayUniqueElements);
