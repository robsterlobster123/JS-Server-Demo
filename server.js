
var express = require('express');
	http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);


/*
app.get('/', function(req, res,next){
	res.sendFile(__dirname + '/public/index.html');
});
*/

app.use(express.static('public'));

/*app.use(express.static(__dirname + '/public'));*/

server.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});

console.log("My socket server is running");

/*var socket = require('socket.io');

var io = socket(server);*/

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