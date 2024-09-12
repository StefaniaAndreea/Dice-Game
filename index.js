let randomnr1=Math.floor(Math.random()*6)+1;
var randomDice1="images/"+"dice"+randomnr1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice1);

let randomnr2=Math.floor(Math.random()*6)+1;
var randomDice2="images/"+"dice"+randomnr2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);

if(randomnr1>randomnr2){
    document.querySelector("h1").innerHTML="Player1 won!";
}
else if (randomnr2>randomnr1){
    document.querySelector("h1").innerHTML="Player2 won!";
}
else{
    document.querySelector("h1").innerHTML="Both players won!";
}
