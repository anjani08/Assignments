function showTime() {
		var time = new Date();
		var hour = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var session = "AM";

		if(hour >= 12){
			hour -= 12;
			session = "PM";
		}
		if(hour == 0){
			hour =12;
		}

		hour = hour < 10 ? "0" + hour : hour;
		min = min < 10 ? "0" + min : min;
		sec = sec < 10 ? "0" + sec : sec;

		document.getElementById("time").innerText= hour + " : " + min + " : " + sec + " " +session;
}
showTime();

function showDate(){
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth()+1;
	var year = date.getFullYear();

	document.getElementById("date").innerText = day + " / " + month + " / " + year;
	startTime();
}
showDate();

function startTime(){
	setInterval(showTime,1000);
}

function stopTime()
{
	clearInterval(startTime.setInterval);
}

