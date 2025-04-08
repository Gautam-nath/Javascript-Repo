let mySet =new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
console.log(mySet);
console.log(`set length is:${mySet.size}`);
console.log('=====================Traversing set collection=====================');
for (const element of mySet) {
    console.log(element);
    
}
const is30Aailable = mySet.has(30);
console.log(`is 30element availlable: ${is30Aailable}`);
console.log('==============');
const is30Aailable1=mySet.has(300);
console.log(`is 30element abvailllable: ${is30Aailable1}`);

const is30Aailable2 = mySet.add(40);
console.log(is30Aailable2);//set do not allow any duplicate element

console.log('==========delete==========');
mySet.delete(20);
console.log(mySet);

console.log('=============1.approch removing duplicate element  from the aray=============');
let array =[10,20,40,20,10,60];
console.log(array);
const SetNum = new Set();
for (const element of array) {
    SetNum.add(element);
}
console.log(SetNum);

console.log('+++++++++++++++++++++++');

const arrrayunique = [];
for (const element of SetNum) {
    arrrayunique.push(element);
    
}
console.log(arrrayunique);

console.log('==========2.Approch Removing du plicate elements using spreed operator========');
const arrrayuniqueElements =['...new Set{array}'];
console.log(arrrayuniqueElements);




