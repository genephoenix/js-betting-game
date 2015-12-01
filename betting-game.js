"use strict";

$(document).ready(function(){
  // player starts off with bankroll = $100
  var bankroll = 100;

  while (bankroll > 0){
    // bet between $5 and $10, 
    var userBet = prompt("Place a bet between 5 and 10 or quit");
    if (userBet === "quit"){
      break;
    } 
    // convert user prompt to integer
    var bet = parseInt(userBet);
    // generate random number to compare user number against
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    // guess num between 1 and 10
    var userNumber = prompt("Guess a number between 1 and 10:");
    // conversion to integer
    var number = parseInt(userNumber);


    if ((number < 1) || (number > 10)){
      alert("Not a valid choice");
    }

    else if ((bet < 5) || (bet > 10)){
      alert("Bet is not a valid choice");
    }

    else {
      // answer = correct -> bet + bankroll
      if (number === randomNumber){
        bankroll += bet;
        var congrats = alert("Your bankroll, " + bankroll + " has increased by " + bet);
      }

      // off by 1 , bankroll before = bankroll after
      else if ((number === randomNumber + 1) || (number === randomNumber -1 )){
        var offByOne = alert("No gain, no loss. You were only off by one.");
      }

      // else bankroll = bankroll - bet 
      else{
        bankroll -= bet;
        var ohNo = alert("Your bankroll, " + bankroll + " has decreased by " + bet);
      };
    };
  };

  // When hit $0, alert 'game over'
  if(bankroll <= 0){
    var gameOver = alert("Game Over");
  };
});


// var generateRandomNumber = function(){
//   return parseInt(Math.random() * 10)
// }