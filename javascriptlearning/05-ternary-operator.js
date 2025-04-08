

var n1=10;
var n2=20;

var result=n1==n2 ?"Equal":"Not Equal";
console.log(result);


function voteEligibility(age){
     var result= age >=18 ? "You are eligble for vote":"sorry not, try next time";
     console.log(result);
}
voteEligibility(20);
voteEligibility(10);
voteEligibility(70);