var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage:"images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage:"images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage:"images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function()
{
  if (cardsInPlay[0] == cardsInPlay[1])
  {
    alert("You found a match!");
  }
  else
  {
    alert("Sorry, try again.");
  }
};

var flipCard = function(cardId)
//flips the card that was selected
{
  cardId =
  document.getElementsByTagName('img');
  console.log(cardId);
  console.log("User flipped " + cards[cardId]);
  // cardsInPlay.push(cards[cardId].rank);
  console.log(this.cards[cardId].cardImage);
  console.log(this.cards[cardId].suit);
  // this.setAttribute(cards[cardId].cardImage, src);
  if (cardsInPlay.length === 2 )
  {
    checkForMatch();
  }
  else{};
}

var createBoard = function(){
  for (var i = 0; i < cards.length; i++)
  {
    var newListItem = document.createElement('img');
    newListItem.setAttribute('src', 'images/back.png');
    newListItem.setAttribute('cardId', i );
    // console.log(newListItem);
    var board = document.getElementById("game-board");
    board.appendChild(newListItem);
  };
    document.addEventListener("click", function(){
      cardsInPlay.push(newListItem);
      console.log(cardsInPlay);
      flipCard(newListItem);
    })
};



createBoard();

//if cardsInPlay[0] == cardsInPlay[1] then stay flipped
//else flip()
//      {
//         new img src= ...
//      }



/*var flip = function(num)
 {

}
console.log("User flipped" + cardOne);
console.log("User flipped" + cardFour);

/when we click an image
//document.getElementsByClassName('queen').on('click', function()
{
  //console log something
  console.log("User flipped queen");
  flip(cards[x])
})*/