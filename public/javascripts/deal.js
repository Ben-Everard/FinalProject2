//Ranks the cards and suits
function Card(rank, suit) {
  // console.log("Making a card!");

  this.rank = rank;
  this.suit = suit;
  // console.log(rank);
  // console.log(suit);
  this.toString = cardToString;
  this.createNode = cardCreateNode;
}



function cardToString() {
  // console.log("Card to String ");
  var rank, suit;

  switch (this.rank) {
    case 'A':
      // console.log("Ace");
      rank = 'Ace';
      break;
    case '2':
      // console.log("Two");
      rank = 'Two';
      break;
    case '3':
      // console.log("Three");
      rank = 'Three';
      break;
    case '4':
      // console.log("Four");
      rank = 'Four';
      break;
    case '5':
      // console.log("Five");
      rank = 'Five';
      break;
    case '6':
      // console.log("Six");
      rank = 'Six';
      break;
    case '7':
      // console.log("Seven");
      rank = 'Seven';
      break;
    case '8':
      // console.log("Eight");
      rank = 'Eight';
      break;
    case '9':
      // console.log("Nine");
      rank = 'Nine';
      break;
    case '10':
      // console.log("Ten");
      rank = 'Ten'
      break;
    case 'J':
      // console.log("Jack");
      rank = 'Jack'
      break;
    case 'Q':
      // console.log("Queen");
      rank = 'Queen';
      break;
    case 'K':
      // console.log("King");
      rank = 'King';
      break;
    default :
      rank = null;
      break;
  }

  switch (this.suit) {
    case 'C':
      suit = 'Clubs';
      break;
    case 'D':
      suit = 'Diamonds';
      break;
    case 'H':
      suit = 'Hearts';
      break;
    case 'S':
      suit = 'Suit';
      break;
    default :
      suit = null;
      break;
  }

  if (rank === null || suit === null)
    return "";

  return rank + ' of ' + suit;
}
//Creates an Empty array for with a bunch of methods
function Stack() {
  console.log("Stack Creation");

  // Create an empty array of cards.

  this.cards = new Array();
  // console.log(this.cards);
  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
}
//Make Deck
function stackMakeDeck(n) {
  console.log("Making a Deck");
  var ranks = new Array('A','2','3','4','5','6','7','8','9','10','J','Q','K');
  var suits = new Array('C','D','H','S');

  var i, j, k;
  var m;

  m = ranks.length * suits.length;

  // Set Array of Cards

  this.cards = new Array(n * m);

  // Fill the array with 'n' packs of cards.
  var cards;
  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for(k = 0; k < ranks.length; k++) {
        this.cards[i * m + j * ranks.length + k] =
          new Card(ranks[k], suits[j]);
        cards = this.cards[i * m + j * ranks.length + k] =
          new Card(ranks[k], suits[j]); 
        // console.log(cards.rank);

      };
  this.shuffle(6);
  deckRef.remove();
  for (var l = 0; l < this.cards.length; l++) {
    deckRef.push({ rank:(this.cards[l].rank), suit: (this.cards[l].suit) }); 
  };

  // for (var m = 0; m < 2; m++){
  //   var newDeck = new Array();
  //   deckRef.on('value', function (snapshot) {
  //     console.log(snapshot.rank);
  //     // newDeck.push(snapshot);
  //     });
  //   console.log(newDeck);
  // // }
  
}

//Shuffle
function stackShuffle(n) {
  console.log("Stack Shuffle");
  var i, j, k;
  var temp;

  //Shuffle the stack 'n' times.

  for (i=0; i < n; i++)
    for (j=0; j<this.cards.length; j++){
      k = Math.floor(Math.random() * this.cards.length);
      temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
}

//Dealing the cards
function stackDeal() {
  console.log("Stack Deal");
  if (this.cards.length > 0) {
    var shifted = this.cards.shift();
    
    return shifted;
  } else
    return null;
}

//Drawing Cards
function stackDraw (n) {
  console.log("Stack Draw");
  var card;

  if (n >= 0 && n < this.cards.length) {
    card = this.cards[n];
    this.cards.splice(n, 1);
  } else {
    card = null;
  }
  return card;
}

//Card Count
function stackCardCount() {
  // console.log("Stack Card Count");
  return this.cards.length;
}

//Add Cards to a stack
function stackAddCard(card) {
  console.log("Stack Add Card");
  this.cards.push(card);
}

//Combine Decks
function stackCombine(stack) {
  // console.log("Stack Combine Decks");
  this.cards = this.cards.concat(stack.cards);
  stack.cards = new Array();
}

var cardImg0 = new Image(); cardImg0.src= "images/cardback.gif";
var cardImg1 = new Image(); cardImg1.src= "images/jack.gif";
var cardImg2 = new Image(); cardImg2.src= "images/queen.gif";
var cardImg3 = new Image(); cardImg3.src= "images/king.gif";

function cardCreateNode() {
  // console.log("Card Create Node");
  var cardNode, frontNode, indexNode, spotNode, tempNode, textNode;
  var indexStr, spotChar;

  //This is the main node, a DIV tag

  cardNode = document.createElement("DIV");
  cardNode.className = "card";

  //Build the front of the card
  frontNode = document.createElement('DIV');
  frontNode.className = 'front';

  //Get proper character for card suit and change the font color if necessary.
  spotChar = "\u00a0";
  switch (this.suit) {
    case 'C':
      spotChar = '\u2663';
      break;
    case 'D':
      frontNode.className += " red";
      spotChar = '\u2666';
      break;
    case 'H':
      frontNode.className += " red";
      spotChar = '\u2665';
      break;
    case 'S':
      spotChar = '\u2660';
      break;
  }

  //Create and add the index (rank) to the upper-left corner of the card.
  indexStr = this.rank;
  if (this.toString() === '')
    indexStr = '\u00a0';
  spotNode = document.createElement('DIV');
  spotNode.className = 'index';
  textNode = document.createTextNode(indexStr);
  spotNode.appendChild(textNode);
  spotNode.appendChild(document.createElement('BR'));
  textNode = document.createTextNode(spotChar);
  spotNode.appendChild(textNode);
  frontNode.appendChild(spotNode);

  //Create and add spots based on card rank(Ace thru 10).
  spotNode = document.createElement('DIV');
  textNode = document.createTextNode(spotChar);
  spotNode.appendChild(textNode);
  if (this.rank === 'A') {
    spotNode.className = "ace";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '3' || this.rank === '5' || this.rank === '9') {
    spotNode.className = 'spotB3';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '2' || this.rank === '3') {
    spotNode.className = 'spotB1';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '2' || this.rank === '3') {
    spotNode.className = 'spotB5';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '4' || this.rank === '5' || this.rank === '6' || this.rank === '7' || this.rank === '8' || this.rank === '9' || this.rank === '10') {
    spotNode.className = 'spotA1';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotA5';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotC1';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotC5';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '6' || this.rank === '7' || this.rank === '8') {
    spotNode.className = 'spotA3';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotC3';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '7' || this.rank === '8' || this.rank === '10') {
    spotNode.className = 'spotB2';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '8' || this.rank === '10') {
    spotNode.className = 'spotB4';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank === '9' || this.rank === '10') {
    spotNode.className = 'spotA2';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotA4';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotC2';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotC4';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }

  //For face cards (jack, queen, king), create and add the proper image.
  tempNode = document.createElement('IMG');
  tempNode.className = "face"
  if (this.rank === "J")
    tempNode.src = "images/jack.gif";
  if (this.rank === "Q")
    tempNode.src = "images/queen.gif";
  if (this.rank === "K")
    tempNode.src = "images/king.gif";

  //For face cards, add suit characters to the upper-left and lower-right corners.
  if (this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotA1';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = 'spotC5';
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }

  //Add front node to the card node.
  cardNode.appendChild(frontNode);

  // Return the card Node
  return cardNode;
}


