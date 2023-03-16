var dice1 = Math.round(Math.random()*5+1);
console.log(dice1);
var diceimg1 = "images\\dice"+dice1+".png";
document.querySelector(".img1").setAttribute("src",diceimg1);
console.log(diceimg1);
var dice2 = Math.round(Math.random()*5+1);
console.log(dice2);
var diceimg2 = "images\\dice"+dice2+".png";
document.querySelector(".img2").setAttribute("src",diceimg2);
console.log(diceimg2);
if (dice1 > dice2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    console.log("player 1 win");
} else if(dice1 < dice2) { 
    document.querySelector("h1").innerHTML = "Player 2 Wins! ";
    console.log("player 2 win");
}
else {
    document.querySelector("h1").innerHTML = "Draw";
	console.log("draw");
}
