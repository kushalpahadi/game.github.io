"use strict";
// let secretNumber = Math.random();  // random rational number between 0-1
// let secretNumber = Math.random()*5; //0-1 * 5  

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random()* 20) +1;  // get 0 to 19 integers + 1



//bottom right message text function
const message= function(text){
  document.querySelector('.bottom__right__message').textContent =text;
}

document.querySelector(".check").addEventListener("click", function () {
  const inputGuessNumber = Number(document.querySelector(".guess__holder").value); //number will convert entered string to number
  // console.log(inputGuessNumber, typeof inputGuessNumber); // note : input will store the entered value as string by default

  if(!inputGuessNumber){  // if blank value is entered it input will store number('')=0 false and !0=true
message('Please Enter Any Number.')
  }
  else if(inputGuessNumber === secretNumber){
message('Correct answer');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.bottom__right__message').style.color = 'white';
    document.querySelector('.header__bottom').textContent = secretNumber;


    if(score>highScore){
      highScore = score;
      document.querySelector('.scorehighlight').textContent = highScore;
    }

  }else if (inputGuessNumber !== secretNumber){
  message(inputGuessNumber > secretNumber ? '📈Too high..':'📉Too low..');
    document.querySelector('.bottom__right__message').style.color = inputGuessNumber > secretNumber ? 'red':'#b7ff00';
   if (score > 0) score--;
    document.querySelector('.score').textContent = score;

    if (score===0){
message('👎 you lost !');
    }

  }
});



document.querySelector('.again').addEventListener('click', ()=>{
  message('Start guessing...');
  document.querySelector('body').style.backgroundColor = ' #222';
  score= 20;

  secretNumber = Math.trunc(Math.random()* 20) +1;  
  document.querySelector(".guess__holder").value = '';
  document.querySelector('.bottom__right__message').style.color = 'white';
  document.querySelector('.score').textContent = score;
  document.querySelector('.header__bottom').textContent = '?';



})
