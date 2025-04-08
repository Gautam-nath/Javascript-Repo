let professor={
    fullName:"Gautam Nath",
    qualification:"PG",
    city:"Kendrapara",
    ismarried:true,
    age:54,
    certificates:['HackerRank Participitation','Certificate in IFE course','Certificate in Adv Programming'],
    degree:{
        engineering:'CSC',
        PHD:'Adv Computing',
        graduation:"BSC",
        pg:"MCA",
        
    }
};
console.log(professor);
console.log("=========Adding new property=======");
professor.totalExperience ="14 years";
console.log(professor);
console.log(professor.totalExperience);

console.log("============ modify an  objeact===========");
professor.age = 45;
console.log(professor);

console.log("======== add 2nd index of an array========");
professor.certificates.splice(2,0,'Oracle certificates');
console.log(professor.certificates);

console.log("============Last elememnt of the array===========-");
console.log(professor.certificates[professor.certificates.length-1]);

console.log("========Traverse the array========");
for (const element of professor.certificates) {
    console.log(element);
    
}

