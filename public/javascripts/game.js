// Get a reference to the root of the chat data.
var gameRef = new Firebase('https://finalprojectcd.firebaseio.com/game');
var player1Ref = new Firebase('https://finalprojectcd.firebaseio.com/game/players/player1')
var player2Ref = new Firebase('https://finalprojectcd.firebaseio.com/game/players/player2')

player1Ref.set({ name:'', chips:10000, card1:'', card2:'', hand:'', inPlay: true});
player2Ref.set({ name:'', chips:10000, card1:'', card2:'', hand:'', inPlay: true});



player1Ref.on('value', function (snapshot){
  var chips = snapshot.val().chips;
  var name = snapshot.val().name;
  $('#player1name').html(name);
  $('#player1chips').html(chips);
})

// console.log(player1Ref);

$(document).ready(function(){
  
  //fire join game modal at start
  $('#joinGame').foundation('reveal', 'open'); 
  
  // add a player to the DB
  // $('#join').click(function() {
  //   var name = $('#username').val();
  //   var playerName = $('#username').val();
  //   playerName = playerRef.child(name).set({ name:name, chips:10000, card1:'', card2:'', hand:'', inPlay: true});
  //   // console.log(playerName); 
  // });

   
  // playerRef.on('value', function (snapshot) {
  //   var name = players.name();
  //   console.log(name);
  //   // document.getElementById('#player1').innerHTML = name;  
  // })
  
});

// Get a reference to the root of the chat data.
  //-   var messagesRef = new Firebase('https://finalprojectcd.firebaseio.com/');

  //-   // When the user presses enter on the message input, write the message to firebase.
  //-   $('#messageInput').keypress(function (e) {
  //-     if (e.keyCode == 13) {
  //-       var name = $('#nameInput').val();
  //-       var text = $('#messageInput').val();
  //-       messagesRef.push({name:name, text:text});
  //-       $('#messageInput').val('');
  //-     }
  //-   });

  //-   // Add a callback that is triggered for each chat message.
  //-   messagesRef.limit(10).on('child_added', function (snapshot) {
  //-     var message = snapshot.val();
  //-     $('<div/>').text(message.text).prepend($('<em/>')
  //-       .text(message.name+': ')).appendTo($('#messagesDiv'));
  //-     $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  //-   });