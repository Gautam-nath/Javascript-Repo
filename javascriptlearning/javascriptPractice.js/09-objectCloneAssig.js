let bankSbi ={
    bankNAme:"SBI",
    location:"Bandhakata",
    iFCCode:87980,
  
}
 let bankLocation={
    street:"pentha",
    city:"kendrapara",
    pin:754228,
}
console.log("========clone the object into the ======");
const clonedbankSbi =Object.assign({},bankSbi)
console.log(bankSbi);
console.log(clonedbankSbi);
clonedbankSbi.bankNAme="bhubaneswar";
console.log(bankSbi);
console.log(clonedbankSbi);

console.log(bankSbi);
console.log(bankLocation);

console.log("=======merge============");

let rateofintrest={
    homeLoanintrest:50000,
    personalintrest:40000,
    duelintrest:30000,
}
const sbiDetails =Object.assign({},bankSbi,bankLocation,rateofintrest);
console.log(bankSbi);
console.log(sbiDetails);


console.log("========traverse=========");
