// Generate random numbers between 1 and 6 for both dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg1 = "./images/dice" + randomNumber1 + ".png";
let player1 = randomNumber1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg2 = "./images/dice" + randomNumber2 + ".png";
let player2 = randomNumber2;

// Update the src attribute of the image elements
document.querySelector(".img1").setAttribute("src", randomDiceImg1);
document.querySelector(".img2").setAttribute("src", randomDiceImg2);
if (player1 > player2){
    document.querySelector("h1").innerText= " 🚩 player 1 win";
}else if (player2 > player1){
    document.querySelector("h1").innerText = "player 2 win 🚩";
}else{
    document.querySelector("h1").innerText = "Draw";
}