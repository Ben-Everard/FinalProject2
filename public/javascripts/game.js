// Get a reference to the root of the chat data.
var gameRef = new Firebase('https://finalprojectcd.firebaseio.com/game');
var player1Ref = new Firebase('https://finalprojectcd.firebaseio.com/game/players/player1');
var player2Ref = new Firebase('https://finalprojectcd.firebaseio.com/game/players/player2');
var potRef = new Firebase('https://finalprojectcd.firebaseio.com/game/pot');
var chatRef = new Firebase('https://finalprojectcd.firebaseio.com/game/chat');
var deckRef = new Firebase('https://finalprojectcd.firebaseio.com/game/deck');

potRef.set({total:0});


// Keeps track of everyone's chip count
player1Ref.on('value', function (snapshot){
  var chips = snapshot.val().chips;
  console.log(chips);
  $('#player1chips').html(chips);
})

player2Ref.on('value', function (snapshot){
  var chips = snapshot.val().chips;
  console.log(chips);
  $('#player2chips').html(chips);
})

// Keeps track of the amount in the pot
potRef.on('value', function (snapshot){
  var pot = snapshot.val().total;
  console.log(pot);
  $('#pot').html(pot);
})

// CHAT 

// When the user presses enter on the message input, write the message to firebase.
$('#messageInput1').keypress(function (e) {
  if (e.keyCode === 13) {
    var name = $('#chatName1').val();
    var text = $('#messageInput1').val();
    chatRef.push({name:name, text:text});
    $('#messageInput1').val('');
  }
});

$('#messageInput2').keypress(function (e) {
  if (e.keyCode === 13) {
    var name = $('#chatName2').val();
    var text = $('#messageInput2').val();
    chatRef.push({name:name, text:text});
    $('#messageInput2').val('');
  }
});

// Add a callback that is triggered for each chat message.
chatRef.limit(10).on('child_added', function (snapshot) {
  var message = snapshot.val();
  $('<div/>').text(message.text).prepend($('<em/>')
    .text(message.name+': ')).appendTo($('#chatDiv'));
  $('#chatDiv')[0].scrollTop = $('#chatDiv')[0].scrollHeight;
});

