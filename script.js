//your JS code here. If required.
function liveTime(){
let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let time = date.get.toLocaleTimeString('en-US',{hour : 'nummeric' , minutes : 'numeric', second : 'numeric', hour12 : 'true'});
let cudate = '${month}/{day}/{year}';
	document.getElementById("timer").textContent = cuedate+','+time
}
function startTimer(){
	liveTime();
	setInterval(liveTime,1000)
}

window.addKeyEventListener('load',startTimer);

