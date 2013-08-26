var cardImg0 = new Image(); cardImg0.src= "images/cardback.gif";
var cardImg1 = new Image(); cardImg1.src= "images/jack.gif";
var cardImg2 = new Image(); cardImg2.src= "images/queen.gif";
var cardImg3 = new Image(); cardImg3.src= "images/king.gif";



function createNode() {
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