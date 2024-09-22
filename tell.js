// Text to Audio
let micIcon = document.getElementsByClassName('micIcon');

let audio = new Audio('music/intro.mp3');
let checkAu = true;
micIcon[0].addEventListener('click', () => {
	if (checkAu) {
		micIcon[0].innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
		audio.play();
		checkAu = false;
	}
	else if (!checkAu) {
		micIcon[0].innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
		audio.pause();
		checkAu = true;
	}
});

let about = new Audio('music/about.mp3');
let checkMicS = true;
micIcon[1].addEventListener('click', () => {
	if (checkMicS) {
		micIcon[1].innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
		about.play();
		checkMicS = false;
	}
	else if (!checkMicS) {
		micIcon[1].innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
		about.pause();
		checkMicS = true;
	}
});


// Audio to Text
let textShow = document.querySelector(".textShow");
let addspeek = document.querySelector('.addspeek');
let speech;
addspeek.addEventListener('click', () => {
	speech = true;
	window.SpeechRecognition = window.webkitSpeechRecognition;
	const recognition = new SpeechRecognition();
	recognition.interimResults = true;
	recognition.addEventListener('result', e => {
		const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
		textShow.value = transcript;
	});
	if (speech == true) {
		recognition.start();
	}
});

// Cookies
const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = () => {
	document.cookie = "CookieBy=codeWithRakesh; max-age=" + 60 * 60 * 24 * 30;
	if (document.cookie) { 
		cookieBox.classList.add("hide"); 
	} else { 
		alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
	}
}
let checkCookie = document.cookie.indexOf("CookieBy=codeWithRakesh");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

