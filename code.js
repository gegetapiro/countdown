var loop;
$(document).ready(function () {
	$.ajax({
		type: "POST",
		url: "contentreading.php",
		dataType: "text",
		success: function (msgcont) {
			document.getElementById("intestazione").innerHTML = msgcont;
		}

	});
	$.ajax({
		type: "POST",
		url: "timereading.php",
		dataType: "text",
		success: function (msg) {
			avvia(msg);
		}

	});
	function avvia(msg) {
		let wrotetime = Number(msg);
		let futureimput = Date.parse(wrotetime);

		loop = setInterval('updateTimer(' + wrotetime + ')', 1000);
	}
});
function updateTimer(choicedfuture) {


	future = choicedfuture;

	now = new Date();
	diff = future - now;
	days = Math.floor(diff / (1000 * 60 * 60 * 24));
	hours = Math.floor(diff / (1000 * 60 * 60));
	mins = Math.floor(diff / (1000 * 60));
	secs = Math.floor(diff / (1000));



	d = days;
	h = hours - days * 24;
	m = mins - hours * 60;
	s = secs - mins * 60;
	if (diff <= 0) {
		clearInterval(loop);
		d = 0;
		h = 0;
		m = 0;
		s = 0;
		document.getElementById("end").style.display = "block";
		/* document.getElementById("timer").innerHTML =
		'<div>' + d + '<span>Days</span></div>' +
		'<div>' + h + '<span>Hours</span></div>' +
		'<div>' + m + '<span>Minutes</span></div>' +
		'<div>' + s + '<span>Seconds</span></div>';
 */


	}

	document.getElementById("timer").innerHTML =
		'<div>' + d + '<span>Days</span></div>' +
		'<div>' + h + '<span>Hours</span></div>' +
		'<div>' + m + '<span>Minutes</span></div>' +
		'<div>' + s + '<span>Seconds</span></div>';

}

function insertfuture() {
	alert("va");
	let day = document.getElementById("day").value;
	let month = document.getElementById("month").value;
	let year = document.getElementById("year").value;
	let hour = document.getElementById("hour").value;
	let minutes = document.getElementById("minutes").value;
	let seconds = document.getElementById("seconds").value;
	let stringfuture = month + " " + day + ", " + year + " " + hour + ":" + minutes + ":" + seconds;
	let choicedfuture = Date.parse(stringfuture);
	//######### testo descrizione evento ###########
	let description = document.getElementById("description").value;
	alert(description);
	//######### fine testo descrizione evento ###########

	loop = setInterval('updateTimer(' + choicedfuture + ')', 1000);


	//######### scrittura su txt by php ##################
	xmlhttp = new XMLHttpRequest();

	var PageToSendTo = "timeinsert.php?";
	var thevaluee = choicedfuture;
	var placeholder = "variableName=";
	var UrlToSend = PageToSendTo + placeholder + thevaluee;

	xmlhttp.open("GET", UrlToSend, false);
	xmlhttp.send();

	//######### FINE scrittura su txt by php ##################

}

