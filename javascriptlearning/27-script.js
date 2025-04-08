

console.log("==========querySelector() with element class============");
const techStackElement = document.querySelector(".techStack");
console.log(techStackElement);
console.log(techStackElement.innerHTML);

console.log("===========querySelectorAll with element class=========");
const techStackElements = document.querySelectorAll(".techStack");
for (const element of techStackElement){
    console.log(element.innerHTML);
    
}
console.log("=========querySElectorAll() with element name==========");
const liElements = document.querySelectorAll("li");
for(const element of liElements){
    console.log(element.innerHTML);
    
}

//next class
console.log("=========getElementBYID() with elment name===========");
const profileDetailsElement = document.getElementById("profileDetails");
console.log(profileDetailsElement);
profileDetailsElement.innerHTML = "My Complete Summery";
profileDetailsElement.style.color = "orange";
profileDetailsElement.style.fontFamily = "Arial";


console.log("=========Changing an attribute========");
const gitprofileElement = document.querySelector("#gitprofile");
gitprofileElement.setAttribute('href',"https://github.com"/);


console.log("==========Creating new node==========");
const paraElement = document.createElement("p");
const paraTextNode = document.createTextNode("My Hobbies:Reading,Writing and Time pass")
paraElement.appendChild(paraTextNode);
paraElement.style.color = "cadetblue";


const hobbiesElement = document.querySelector("#hobbies");
hobbiesElement.appendChild(paraElement);


console.log("==========Remove node=========");
const techULElement = document.querySelector("#tech");
const angularLIElemnt = document.querySelector("#angular");
techULElement
