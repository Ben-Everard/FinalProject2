// Deals cards to players, sets aside community cards, and deletes the card from the deck
function deal(){
  // creates an array filled with data from the Firebase Deck Reference
  var deckArray = new Array();
  deckRef.once('value', function (snapshot){
    snapshot.forEach(function (eachSnapshot){
      deckArray.push(eachSnapshot.val());
    });

    // 'z' is the index in Firebase that is incremented
    var z = 0;
    // deals only two cards to each player
    for (var i = 1; i <= 2; i++) {
      // removes the card from Firebase
      deckRef.child(z).remove();
      // removes the card from the Deck Array
      var card = deckArray.shift();
      // adds the card to the player's hand
      player1Ref.child('card'+i).set({ rank: card['rank'], suit: card['suit'] });
      // Increments the index in Firebase
      z++;

      //Same as above
      deckRef.child(z).remove();
      card = deckArray.shift();
      player2Ref.child('card'+i).set({ rank: card['rank'], suit: card['suit'] });
      z++
    }

    z = 0;
    for (var i = 0; i < 5; i++) {
      // removes the card from Firebase
      deckRef.child(z).remove();
      // removes the card from the Deck Array
      var card = deckArray.shift();
      // adds the card to the player's hand
      communityCardRef.child('held').child(i).set({ rank: card['rank'], suit: card['suit'] });
      // Increments the index in Firebase
      z++;
    }
  })
  
}