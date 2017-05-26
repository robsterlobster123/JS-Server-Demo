var socket=io.connect('http://smoothsquares.herokuapp.com');
var osc =[];
var notes = [43, 43, 45, 47, 48, 50, 52, 54, 55, 55, 57, 59, 60, 62, 64, 66, 67, 67, 69, 71, 72, 74, 76, 78, 79, 79, 81, 83, 84, 86, 88, 90, 91, 91, 93, 95, 96, 98, 100, 102, 103, 103, 105, 107, 108, 110, 112, 114, 115]
function setup(){
  	for (var i = 0; i < 38; i++) {
  		osc[i] = new p5.Oscillator();
 		osc[i].setType('sine'); //Set type to 'sine', 'triangle', 'sawtooth' or 'square'.
  		osc[i].amp(0);
 		osc[i].start();
 		osc[i].freq(midiToFreq(notes[i]));
	}
		socket = io.connect('http://localhost:3000')
		socket.on('noteOnFromServer', playNote);
		socket.on('noteOffFromServer', muteNote)
}
	

 function playNote(id){
 	$("#num"+id).css("background-color", randomColor({
			luminosity: 'bright',
			hue: 'blue'
		}));
 	osc[id].amp(.5, .2);
 	console.log(id)
 }
 function muteNote(id) {
	$("#num"+id).css("background-color", randomColor({
	luminosity: 'light',
	hue: 'blue'
}));
	osc[id].amp(0, .2);
}
 $(document).ready(function(){


$(".box").mouseenter(function(){
	$(this).css("background-color", randomColor({
			luminosity: 'bright',
			hue: 'blue'
		}));
		var id = $(this).attr('id').substr(3, 2);
		osc[id].amp(.5, .2);
		//osc[id].freq(midiToFreq(random(notes)));
		socket.emit('noteOnToServer', id);
	});
$(".box").mouseleave(function(){
	$(this).css("background-color", randomColor({
		luminosity: 'light',
		hue: 'blue'
	}));
		var id = $(this).attr('id').substr(3, 2);
		osc[id].amp(0, .2);
		socket.emit('noteOffToServer', id);
});



/*$(".row1#one").mouseenter(function(){
	osc.amp(1,.2);
	});	
$(".row1#one").mouseleave(function(){
	osc.amp(0,.2);
});
$(".row1#two").mouseenter(function(){
	osc2.amp(1,.2);
	});	
$(".row1#two").mouseleave(function(){
	osc2.amp(0,.2);
});*/
});
