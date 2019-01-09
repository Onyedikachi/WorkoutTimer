
let hour = 0, minute = 0, second = 0;

document.addEventListener("DOMContentLoaded",function (){
	updateDOM(hour,minute,second);
});

let intervalID;

let updateDOM = (hour,minute,second)=>{
	document.querySelector('.hours').innerHTML = hour;
	document.querySelector('.minutes').innerHTML = minute;
	document.querySelector('.seconds').innerHTML = second;
}

let startTimer = () =>{
	intervalID =  setInterval(function(){
		ntimer(hour, minute, second)},1000);
	document.querySelector("button.start").setAttribute("disabled", "disabled");
	document.querySelector("button.pause").removeAttribute("disabled");
	document.querySelector("button.stop").removeAttribute("disabled");

}

let stopTimer = () =>{
	clearInterval(intervalID);

	hour =0, minute = 0, second = 0;

	document.querySelector("button.pause").setAttribute("disabled", "disabled");
	document.querySelector("button.stop").setAttribute("disabled", "disabled");
	document.querySelector("button.start").removeAttribute("disabled");

	
	document.querySelector("button.continue").style.display = "none";
	document.querySelector("button.pause").style.display = "inline";
}

let pauseTimer = () => {
	clearInterval(intervalID);
	
	document.querySelector("button.continue").style.display = "inline";
	document.querySelector("button.pause").style.display = "none";

}

let continueTimer =  () =>{

	intervalID =  setInterval(function(){
		ntimer(hour, minute, second)},1000);
	document.querySelector("button.continue").style.display = "none";
	document.querySelector("button.pause").style.display = "inline";

}

let ntimer = (hr, min, sec) => {
	if (sec == 59){
		min+=1;
		sec = 0;
	}

	else if (min == 59){
		hr+=1;
		min = 0;
		sec = 0
	}else{
		sec+=1;
	}
	hour = hr;
	second = sec;
	minute = min;

	updateDOM(hour,minute,second);
}