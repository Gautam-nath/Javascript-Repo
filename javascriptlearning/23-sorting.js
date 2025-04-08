




const arraNames = ["Jenny","Bill","stew","Elon"];
console.log((arraNames));
console.log('Sorting in ascending order');
arraNames.sort();
console.log(arraNames);
console.log('Sorting in desending order');
arraNames.reverse();
console.log(arraNames); 

console.log('sorting array of numbers....');
const array = [100,2,7,55,9,11];
console.log("==============Before Sorting================");
console.log(array);
///array.sort();
//sort with custom sorting logic
array.sort((n1,n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log("============After Sorting===========");
console.log(array);




