//<![CDATA[

var deck, player1, player2, player3, id, k=1;

  function init() {
    console.log("Deck Initiated");
    deck = new Stack();
    player1 = new Stack();
    player2 = new Stack();
    // player3 = new Stack();
    ccards = new Stack();


    deck.makeDeck(1);
    // shuffle();
    display();
  }
  function shuffle() {
    console.log("Shuffling");
    if (deck === null) return;

    deck.shuffle(3);
    display();
  }
  function deal() {
    console.log("Dealing");
    var i;
    
    


    for (i = 0; i < 1; i++)
      var cardNum = "card" + (i+1);
      // player1Ref.set({ cardNum:(deck.deal()) });
      // player2Ref.set({ cardNum:(deck.deal()) });
      
      player1.addCard(deck.deal());
      player2.addCard(deck.deal());
      // player3.addCard(deck.deal());


    if (k <= 2){
      k++;
      displayplayer1();
      displayplayer2();
      // displayplayer3();
      deal();
    }
  }
  function communityCards() {
    console.log("Community Cards");

    var j;

    if (ccards.cardCount() === 3)
      for (j=0; j < 1; j++)
        ccards.addCard(deck.deal());
    else if (ccards.cardCount() === 4)
      for (j=0; j < 1; j++)
        ccards.addCard(deck.deal());
    else if (ccards.cardCount()=== 5)
      return false;
    else
      for (j=0; j < 3; j++)
        ccards.addCard(deck.deal());

    dealerCards();
  }
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
  function dealerCards() {
      // console.log("Dealer Cards");
      left = 0;
      el = document.getElementById('ccards');
      while (el.firstChild != null)
        el.removeChild(el.firstChild);
      for (i = 0; i < ccards.cardCount(); i++) {
        node = ccards.cards[i].createNode();
        node.style.left = left + "em";
        el.appendChild(node);
        left += 4.00;
      }
  }
  function displayplayer1() {
    console.log("Displaying Player 1");
    left = 0;
      el = document.getElementById("player1");
      while (el.firstChild != null)
        el.removeChild(el.firstChild);
      for (i = 0; i < player1.cardCount(); i++) {
        node = player1.cards[i].createNode();
        node.style.left = left + "em";
        el.appendChild(node);
        console.log(node);
        // player1Ref.set({ card1:node });
        left += 1.00;
      }
  }
  function displayplayer2() {
    console.log("Displaying Player 2");
          left = 0;
      el = document.getElementById("player2");
      while (el.firstChild != null)
        el.removeChild(el.firstChild);
      for (i = 0; i < player2.cardCount(); i++) {
        node = player2.cards[i].createNode();
        node.style.left = left + "em";
        el.appendChild(node);
        console.log(node);
        // player2Ref.set({ card1:node });
        left += 1.00;
      }
  }
  // function displayplayer3() {
  //   console.log("Displaying Player 3");
  //         left = 0;
  //     el = document.getElementById("player3");
  //     while (el.firstChild != null)
  //       el.removeChild(el.firstChild);
  //     for (i = 0; i < player3.cardCount(); i++) {
  //       node = player3.cards[i].createNode();
  //       node.style.left = left + "em";
  //       el.appendChild(node);
  //       left += 1.00;
  //     }
  // }

  function display() {
    console.log("Displaying Deck");
    var el, top, left;

      left = 0;
      top  = 0;
      el = document.getElementById("deck");
      while (el.firstChild != null)
      el.removeChild(el.firstChild);
      n = deck.cardCount();
      for (i = 0; i < Math.round(n / 5); i++) {
        node = deck.cards[i].createNode();
        node.firstChild.style.visibility = "hidden";
        node.style.left = left + "em";
        node.style.top  = top  + "em";
        el.appendChild(node);
        left += 0.10;
        top  += 0.05;
      }
  }
//]]>