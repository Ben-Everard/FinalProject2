// Creates the deck. 
var deck

// int will be triggered on page load. 
function  init() {
  // Generate a new deck and store it's data in Firebase
  makeDeck();
  deal();
  console.log("Calling Display!");
  display();
}

//Make Deck
function makeDeck() {
  // Creates arrays of Ranks and Suits used to create specif card combinations.
  console.log("Making a Deck");
  var ranks = new Array('A','2','3','4','5','6','7','8','9','10','J','Q','K');
  var suits = new Array('C','D','H','S');
  // Set Array of Cards
  var deck = new Array();
  // 'z' becomes the index for cards in the deck. 
  var z = 0;
  // Iterate over the suits
  for (var j = 0; j < suits.length; j++)
    // For each suit iterate over Ranks
    for (var k = 0; k < ranks.length; k++){ 
      // Add card to deck
      deck[z] = [ranks[k], suits[j]];
      z++
    }
  // Shuffle the deck
  deck = shuffle(deck, 20);
  // Clear the old deck data in Firebase
  deckRef.remove();
  // Add the new deck in Firebase
  for (var m = 0; m < deck.length; m++) {
    deckRef.child(m).set({ rank:(deck[m][0]), suit: (deck[m][1]) }); 
  };
}

//Shuffle a deck 'shuffleNum' times. The more the better
function shuffle(deck, shuffleNum) {
  console.log("Shuffle");
  var temp;
  //Shuffle the stack 'n' times.
  for (var i = 0; i < shuffleNum; i++)
    // For the length of the deck, it grabs a random card and swaps it with the card who's index matches 'j', the current iteration
    for (var j = 0; j < deck.length; j++){
      var k = Math.floor(Math.random() * deck.length);
      temp = deck[j];
      deck[j] = deck[k];
      deck[k] = temp;
    }
  return deck;
}