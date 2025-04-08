

function demo(){
    console.log('Hey You clicked me...');
    
}

const techSkill = document.querySelector("#techSkill");
techSkill.addEventListener('click',()=>{
    console.log('Hello.. My buddy');
    alert("Thi is alert");   
});


const alertPara = document.querySelector("#alert");
alert.addEventListener('click',()=>{
    alert("This is alert");
});
const promptPara =document.querySelecto("#prompt");
promptPara.addEventListener('click',()=>{
    const input = prompt("please enter number to get square", 1);
    const square = input*input;
    console.log(square);
    alert(square); 
}); 
//This is Confirm Model
const confirmPara = document.querySelector("#confirm");
confirmPara.addEventListener('click', ()=>{
    const confirmResult = confirm("Are you sure, you want to submit information ?");
    alert(confirmResult);
    console.log(confirmResult);

});
