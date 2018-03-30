//Current player
var current = false;
var startTime = 190;
var buttons = document.querySelectorAll("button");


//Counter object, it contains the current time of the counter and
// the document object of the counter
var Counter = function(display, time){
	this.time = time;
	this.display = display;
	display.textContent = convertSeconds(this.time);

	// display.textContent = convertSeconds(this.time);
	this.passTime = function(){
		if(this.time > 0){
			this.time--;
			display.textContent = convertSeconds(this.time);
		}
	}
}


var counters = [
	new Counter(document.querySelector("#counter1"), startTime),
	new Counter(document.querySelector("#counter2"), startTime)
];


//Event listener to change the current player's timer 
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function(){
		current = !current;
		console.log("tic")
	});
}

//Function to change seconds into a mm:ss format
function convertSeconds(s) {
	var min = Math.floor(s / 60);
	var sec = s % 60;
	var extra = "";
	if(sec < 10){
		extra = "0";
	}
	return min + ":" + extra + sec;
}


function init(){
	//The unary + operator converts a boolean into an integer
	counters[+current].passTime(); 
};


setInterval(init, 1000);