

const onBtn= ()=>{
    document.querySelector(".image").src="./assetsw3/pic_bulbon.gif";
}
const ofBtn=()=>{
    document.querySelector(".image").src="./assetsw3/pic_bulboff.gif";
}


document.querySelector(".on_btn").addEventListener("click",onBtn);
document.querySelector(".off_btn").addEventListener("click",ofBtn);
