


console.log("=============concat operator============");
let arrayOne = [10,20,40];
let arrayTwo= [90,80,20];

const arrayResult = arrayOne.concat(arrayTwo);
console.log(arrayResult);
console.log("=============Spread operator...============");
console.log(arrayOne);
console.log(...arrayOne);

console.log("=============include spread operator=============");
const result = [...arrayOne,...arrayTwo];
console.log(result);
