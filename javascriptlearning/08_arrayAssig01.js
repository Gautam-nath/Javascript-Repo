
let fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
console.log("=======first element==========");
console.log(fruits_seasonal[0]);
console.log("=======last element==========");
console.log(fruits_seasonal[fruits_seasonal.length-1]);
console.log("=======Add element==========");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);
console.log("=======Remove Mango==========");
let fruits_seasonal1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal1);
fruits_seasonal1.splice(3,1);
console.log(fruits_seasonal1);
console.log("=======Insert an element 'pineapple' at the last position==========");
let fruits_seasonal2 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal2);
fruits_seasonal2.push("pineapple");
console.log(fruits_seasonal2);
console.log("=======Insert an element 'Dragon'before 'Water Melon' at the last position==========");
let fruits_seasonal3 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal3);
fruits_seasonal3.splice(3,1,"Dargon");
console.log(fruits_seasonal3);
console.log("=======Replace Element Orange with 'Kiwi'==========");
let fruits_seasonal4 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal4);
fruits_seasonal4.splice(1,1,"kiwi");
console.log(fruits_seasonal4);
console.log("=======starting from from index 1 to 4==========");
let fruits_seasonal5 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal5);
const SliceElements =fruits_seasonal5.slice(1,5);
console.log(SliceElements);
console.log("=======last 3 element log using length property==========");
let fruits_seasonal6 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal6);
console.log(fruits_seasonal6.slice(fruits_seasonal6.length-3));




