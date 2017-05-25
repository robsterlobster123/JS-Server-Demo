$(document).ready(function(){
	$(".box").mouseenter(function(){
		$(this).css("background-color", randomColor({
   			luminosity: 'bright',
   			hue: 'blue'
   		}));
	});
	$(".box").mouseleave(function(){
		$(this).css("background-color", randomColor({
   			luminosity: 'light',
   			hue: 'blue'
		}));
	});
	$("#Robbie").click(function(){
		var text= ($(this).html());
		console.log(text);
		if (text == "Robbie") {
			//This is if text == Robbie is true
		$(this).html("dog")	
		}
		if (text == "dog"){
			$(this).html("Robbie")
		}
	});
});