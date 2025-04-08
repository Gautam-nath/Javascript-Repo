 const employeeinfo =`{
 "name":"Aleix Melon",
 "id":"E00245",
 "role":["Dev","DBA"],
 "age":23,
 "doj":"11-12-2019",
 "married":false,
 "address":{
 "street":"32,Laha St.",
 "city":"Innsbruck",
 "country":"Austrai"
 },
 "refered-by":"E0012"
 }`;
 console.log("======convert this to one object======");
 const employeeinfoInObjectFormat = JSON.parse(employeeinfo);
 console.log(employeeinfoInObjectFormat);
 console.log("=========dev========");
 console.log(employeeinfoInObjectFormat.role[0]);
 console.log("========last Name========");
 console.log(employeeinfoInObjectFormat.name.split(" ")[1]);
 
 console.log("========date of joining year======");
 //console.log(employeeinfoInObjectFormat.doj.split(" -") [length-1]);
 
 
 
 