// Creates the deck display on the game screen
function display() {
  console.log("Displaying Deck");
  var deckArray = new Array();
  deckRef.once('value', function (snapshot){
    snapshot.forEach(function (eachSnapshot){
      deckArray.push(eachSnapshot.val());
    });

    var el, top, left;

    left = 0;
    top  = 0;
    el = document.getElementById("deck");
    while (el.firstChild != null)
    el.removeChild(el.firstChild);
    n = deckArray.length;
    for (i = 0; i < Math.round(n / 5); i++) {
      node = createNode(deckArray[i]);
      node.firstChild.style.visibility = "hidden";
      node.style.left = left + "em";
      node.style.top  = top  + "em";
      el.appendChild(node);
      left += 0.10;
      top  += 0.05;
    }
  });
}

// Creates the playing cards that everyone can see
function communityCards() {
  console.log("Community Cards");

  var ccardsArrayDealt = new Array();
  communityCardRef.child('dealt').once('value', function (snapshot){
    snapshot.forEach(function (eachSnapshot){
      ccardsArrayDealt.push(eachSnapshot.val());
    });

    var j;

    if (ccardsArrayDealt.length === 3)
        transferCards(3, dealerCards());
    else if (ccardsArrayDealt.length === 4)
        transferCards(4, dealerCards());
    else if (ccardsArrayDealt.length=== 5)
      return false;
    else
      for (j=0; j < 3; j++)
        transferCards(j, dealerCards);
  });
}

function cardsHeld(){
  var ccardsHeld = new Array();
  // Pull all values first from the 'held' ref and add to 'held' array
  communityCardRef.child('held').once('value', function (snapshot, error){
    snapshot.forEach(function (eachSnapshot){
      ccardsHeld.push(eachSnapshot.val());
    });
    console.log(ccardsHeld);
    return ccardsHeld;
  });
}

function cardsDealt(){
  var ccardsDealt = new Array();
  // Then pull all values from the 'dealt' ref and add to 'dealt' array
  // There is probably a better way to do this but Firebase was making things screwy 
  communityCardRef.child('dealt').once('value', function (snapshot){
    snapshot.forEach(function (eachSnapshot){
      ccardsDealt.push(eachSnapshot.val());
    });
    console.log(ccardsDealt);
    return ccardsDealt;
  });

}

// Transfer cards from the Community "held" to Community "dealt"
function transferCards(num) {
  var ccardsHeld = cardsHeld();
  console.log(ccardsHeld);
  var cardsDealt = cardsDealt();

  console.log(ccardsHeld);
  console.log(cardsDealt);

  // removes the card from Firebase
  communityCardRef.child('held').child(num).remove();
  // removes the card from the Community Cards Array Held
  var card = ccardsHeld.shift();
  // adds card to the Community Cards Array dealt
  ccardsDealt.push(card);
  // adds the card to the player's hand
  communityCardRef.child('dealt').child(num).set({ rank: card['rank'], suit: card['suit'] });
  console.log(ccardsHeld);
  console.log(ccardsDealt);
  console.log("Done transferring");
};
//   });
// }


function dealerCards() {
  console.log("Dealer Cards");
  var ccardsDealt = new Array();
  communityCardRef.child('dealt').once('value', function (snapshot){
    console.log("value");
    snapshot.forEach(function (eachSnapshot){
      console.log("eachSnapshot");
      console.log(eachSnapshot.val());
      ccardsDealt.push(eachSnapshot.val());
    });
    console.log("Dealt!");
    console.log(ccardsDealt);
    
    left = 0;
    el = document.getElementById('ccards');
    while (el.firstChild != null)
      el.removeChild(el.firstChild);
    for (i = 0; i < ccardsDealt.length; i++) {
      node = createNode(ccardsDealt[i]);
      node.style.left = left + "em";
      el.appendChild(node);
      left += 4.00;
    }
  });
}



// Resets the community cards and the dealt cards
function reset() {
  console.log("Reseting");

  var el;

  if (deck === null) return;

  k = 1;
  deck.combine(player1);
  deck.combine(player2);
  // deck.combine(player3);
  deck.combine(ccards);
  displayplayer1();
  displayplayer2();
  // displayplayer3();
  dealerCards();
}

