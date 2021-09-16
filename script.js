"use strict";


let number = Math.trunc(Math.random() * 21);
//document.querySelector(".number").textContent = number;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "Pick a Number";

    //When player wins
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".score").textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = 'rgb(900, 900, 5)';
    
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    
    //when guess is too high
  } else if (guess > number) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Guess to high";
    } else {
      document.querySelector(".message").textContent = "You Lose";
      document.querySelector(".score").textContent = 0;
    }
    //when guess it to low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess to low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose";
      document.querySelector(".score").textContent = 0;
    }
    //reset button
  }
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 21);

    document.querySelector(".message").textContent = "Pick a number";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.backgroundColor = 'rgb(255, 255, 255)';


})

});

