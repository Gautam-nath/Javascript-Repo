const myMap = new Map();
myMap.set (11,"jenny");
myMap.set (22,"Elon");
myMap.set (33,"Stew");
myMap.set (44,"Bill");
console.log(myMap);//key ,value

console.log("===========key same different value (value over write)============")
const myMap1 = new Map();
myMap1.set (11,"jenny");
myMap1.set (22,"Elon");
myMap1.set (33,"Stew");
myMap1.set (44,"Bill");
myMap1.set (22,"sundar");
console.log(myMap1);

console.log("============if duplicate key(then change and write the changing value)==============");
const myMap2 = new Map();
myMap2.set (11,"jenny");
myMap2.set (22,"Elon");
myMap2.set (33,"Stew");
myMap2.set (44,"Bill");
myMap2.set (22,"sundar");
myMap2.set  (55,"Stew");
console.log(myMap2);
console.log(myMap2.size);

console.log(`Value for the key 44is:${myMap2.get(44)}`);
console.log(`value for the key 22 is: ${myMap2.get(22)}`);


console.log("==============Delete================");
console.log(`delete the entry : ${myMap2.delete(33)}`);
console.log(myMap2);




