//Varible that says if the game is on pause
var playing = false;

//Current player
var current = false;

//Start time of the clocks, 5 minutes
var startTime = 300;

//Panel where the timer is
var panel = document.querySelectorAll(".player");


//Counter class, it contains the display and the current time of the counter 
var Counter = function(display, time) {
	this.time = time;
	this.display = display;
	display.textContent = convertSeconds(this.time);

	// display.textContent = convertSeconds(this.time);
	this.passTime = function() {
		if (this.time > 0) {
			this.time--;
			display.textContent = convertSeconds(this.time);
		}
	}
}


//Array of the Counter objects
var counters = [
	new Counter(document.querySelector("#counter1"), startTime),
	new Counter(document.querySelector("#counter2"), startTime)
];


//Event listener to change turns clicking the panels
for (var i = 0; i < panel.length; i++) {
	panel[i].addEventListener("click", function() {
		panel[+current].classList.toggle("active");
		current = !current;
		console.log("tic")
		panel[+current].classList.toggle("active");
	});
}


document.querySelector("#restart").addEventListener("click", function() {
	restart();
	//If the game is going it will pause it
	if (playing) {
		pause();
	}
});


document.querySelector("#pause").addEventListener("click", function() {
	pause();
});


document.querySelector("#options").addEventListener("click", function() {
	startTime = prompt("How many minutes would you like to play?") * 60
	restart();
});



function restart() {
	for (var i = 0; i < counters.length; i++) {
		counters[i].time = startTime;
		counters[i].display.textContent = convertSeconds(startTime);
	}
}


function pause() {
	var pauseButton = document.querySelectorAll("svg")[1];
	pauseButton.classList.toggle("fa-pause");
	pauseButton.classList.toggle("fa-play");

	playing = !playing;
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
	if (playing) {
		//The unary + operator converts a boolean into an integer
		//+1 is true and +0 is false
		counters[+current].passTime();
	}
};

//Main method
setInterval(init, 1000);