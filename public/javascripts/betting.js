var player1Ref = new Firebase('https://finalprojectcd.firebaseio.com/game/players/player1');
var player2Ref = new Firebase('https://finalprojectcd.firebaseio.com/game/players/player2');
var potRef = new Firebase('https://finalprojectcd.firebaseio.com/game/pot');

var players = new Array();
players[0] = player1Ref;
players[1] = player2Ref;

// round progression
function round(){
  anti();
  betting();
  flop();
  betting();
  turn();
  betting();
  river();
  bet();
  showCards();
}

// iterate through each player, subtract 2 from chips, add to pot
function anti(){
  for (x in players) {
    // subtract the anti from the player
    y = 0;
    x.on('value', function (snapshot) {
      y = snapshot.val().chips;
    });
    x.update({ chips: (y - 2) });
    // add anti to pot
    potRef.on('value', function (snapshot) {
      z = snapshot.val().total;
    });
    potRef.update({ total: (z + 2) });
  };
}

function betting(){
  
}