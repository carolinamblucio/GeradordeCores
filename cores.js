const colors=["#F7D7D4", "#B2A7BB", "#B0C2D7", "#D9D8DF"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click", function(){
    //pega um numero aleatorio entre 0 - 3

    const randomNumber= getRandomNumber();
    //console.log(randomNumber);

    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length); 
}