var startTime = 190;

var counter = document.querySelector("#counter1");
var time = startTime;
counter.textContent = convertSeconds(startTime);

var counter2 = document.querySelector("#counter2");
counter2.textContent = startTime;
var time2 = startTime;

var conBol = true;



setInterval(passTime, 1000);


function passTime(){
	if(time > 0 && time2 > 0){
		if(conBol){
			time--;
			counter1.textContent = convertSeconds(time);
		} else {
			time2--;
			counter2.textContent = time2;
		}
	}
}

function convertSeconds(s) {
	var min = Math.floor(s / 60);
	var sec = s % 60;
	var extra = "";
	if(sec < 10){
		extra = "0";
	}
	return min + ":" + extra + sec;
}



counter.addEventListener("click", function(){
	conBol = !conBol;
});
