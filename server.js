
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log('newConnection: ' + socket.id);
	socket.on('noteOnToServer', playNote);
	socket.on('noteOffToServer', muteNote)
	function playNote(id){
		socket.broadcast.emit('noteOnFromServer', id);
		console.log(id);
	}
	function muteNote(id){
		socket.broadcast.emit('noteOffFromServer', id);
	}
	}