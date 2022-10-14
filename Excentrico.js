const ex=[0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const btn= document.getElementById("btn");
const color= document.querySelector(".color");
//#DB7093
btn.addEventListener('click', function(){

    let exColor= "#";
    for(let i=0; i<6;i++){
        exColor+= ex[getRandomNumber()];
    }
    color.textContent=exColor;
    document.body.style.backgroundColor=exColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*ex.length);
}