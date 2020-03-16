const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }

}
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}


if (cardsInPlay.length === 2 && cardOne === "queen" && cardTwo === "queen") {
  alert("You found a match!")

} else {
  alert ("Not this time!")
}

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

let cardThree = cards[2]
cardsInPlay.push(cardThree);
console.log("User flipped " + cardThree);

let cardFour = cards[3]
cardsInPlay.push(cardFour);
console.log("User flipped " + cardFour);

function flipCard
// The instructions were very unclear here. I don't know any of the values and page 6
// Project:functions didnt give any specifics that I could comprehend.
