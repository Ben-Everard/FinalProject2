// Get a reference to the root of the chat data.
var gameRef = new Firebase('https://finalprojectcd.firebaseio.com/');

$(document).ready(function(){
  $('#joinGame').foundation('reveal', 'open'); 

  $(document).on('click', '#join', function() {
    var player1 = gameRef.child('users');
    var name = $('#username').val();
    console.log("name: " + name);
    player1.set({ name:name, chips:10000, card1:'NULL', card2:'NULL', hand:'NULL', inPlay: true});
    // return false;
    });
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