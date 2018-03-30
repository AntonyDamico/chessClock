//Current player
var current = false;
var startTime = 5;
var buttons = document.querySelectorAll("button");


//Counter object, it contains the current time of the counter and
// the document object of the counter
var Counter = function(display, time) {
	this.time = time;
	this.display = display;
	display.textContent = convertSeconds(this.time);

	// display.textContent = convertSeconds(this.time);
	this.passTime = function() {
		if (this.time > 0) {
			this.time--;
			display.textContent = convertSeconds(this.time);
		} else {
			buttons[+current].disabled = true;
			alert("Player " + +current + " ran out of time")
			//Exits out of the setInterval
			clearInterval(1);
		}
	}
}


var counters = [
	new Counter(document.querySelector("#counter1"), startTime),
	new Counter(document.querySelector("#counter2"), startTime)
];


//Event listener to change the current player's timer 
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		buttons[+current].disabled = true;
		current = !current;
		console.log("tic")
		buttons[+current].disabled = false;
	});
}

//Function to change seconds into a mm:ss format
function convertSeconds(s) {
	var min = Math.floor(s / 60);
	var sec = s % 60;
	var extra = "";
	//If the seconds are less than 10, the extra will give them a 0 on front
	if (sec < 10) {
		extra = "0";
	}
	return min + ":" + extra + sec;
}


function init() {
	//The unary + operator converts a boolean into an integer
	//+1 is true and +0 is false
	counters[+current].passTime();
};


setInterval(init, 1000);