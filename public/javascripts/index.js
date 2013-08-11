$(document).on('submit', "#form", function() {
	req.session.username = $("#name").val();
	console.log("submit event");
	socket.emit('set_user', { user: req.session.username });
});