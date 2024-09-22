// mainBox
let containt = document.querySelectorAll('.containt')

// scrollTop button
let buttonTop = document.querySelector('.buttonTop');

// Cookies
let wrapper = document.querySelector('.wrapper')

let navContainer = document.getElementsByClassName('navContainer')[0];
let logo = document.querySelector('.logo');
let naviB = document.querySelectorAll('.naviB');

window.addEventListener('load', () => {
	navContainer.classList.add('transformM50');
	logo.classList.add('scale1');
	logo.classList.add('transition');
	logo.classList.add('transition_delay');
	logo.classList.add('transformX0P');

	chatbotToggler.classList.add('scale1');
	chatbotToggler.classList.add('transition');
	chatbotToggler.classList.add('transition_delay');

	wrapper.classList.add('transformXY');
	wrapper.classList.add('transition');
	wrapper.classList.add('transition_delay');

	navSecAA.classList.add('scale1');
	navSecAA.classList.add('transition');
	navSecAA.classList.add('transition_delay');

	naviB.forEach((e) => {
		e.classList.add('scale1');
		e.classList.add('transition');
		e.classList.add('transition_delay');
		e.classList.add('transformX0P');
	});
});

// change work Home
let hobisPort = document.querySelector('#hobisPort');
function lateF(str) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(hobisPort.innerHTML = hobisPort.innerHTML + str);
		}, 1000 - 700);
	});
}
let str = 'Front end Developer';
async function sendtext() {
	for (let element of str) {
		let x = await lateF(element);
	}
}
sendtext();

// chane name Home
let textArray = ['Tarapada Garai']; // Array of texts
let textIndex = 0;
let textElement = document.querySelector(".sec-text");

function typeText() {
	if (textIndex >= textArray.length) {
		textIndex = 0;;
	}
	let currentText = textArray[textIndex];
	let typingSpeed = 300; // Typing speed in milliseconds

	let i = 0;
	let interval = setInterval(function () {
		if (i < currentText.length) {
			textElement.textContent += currentText[i];
			i++;
		} else {
			clearInterval(interval);
			setTimeout(deleteText, typingSpeed);
		}
	}, typingSpeed);
}

function deleteText() {
	let currentText = textElement.textContent;
	let deletingSpeed = 80; // Deleting speed in milliseconds

	let i = currentText.length = 1;
	let interval = setInterval(function () {
		if (i >= 0) {
			textElement.textContent = currentText.substring(0, i);
			i--;
		} else {
			clearInterval(interval);
			setTimeout(function () {
				textElement.textContent = ''; // Clear the text content
				textIndex++; // Move to the next text
				typeText(); // Start typing the next text
			}, deletingSpeed);
		}
	}, deletingSpeed);
}
typeText();

//Change Name About
let showNameAb = document.querySelector('#showNameAb');
function nameAb(str) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(showNameAb.innerHTML = showNameAb.innerHTML + str);
		}, 1000 - 400);
	});
}

let changeBlock = false;

let nameC = 'Tarapada Garai';
async function chanegeAb() {
	if (!changeBlock) {
		changeBlock = true;
		showNameAb.innerHTML = "";
		for (let element of nameC) {
			let x = await nameAb(element);
		}
		changeBlock = false;
	}
}
// chanegeAb();

// Animason Divs
let showContainer = document.querySelectorAll('.showContainer');
let BoxDiv = document.querySelectorAll('.BoxDiv');
let lodinfDiv = document.querySelectorAll('.lodinfDiv');

let aboutWrite = document.querySelector('.aboutWrite');

// container box
let profilrCon = document.querySelector('.profilrCon');
let aboutCon = document.querySelector('.aboutCon');
let skillCon = document.querySelector('.skillCon');
let projectCon = document.querySelector('.projectCon');
let contactCon = document.querySelector('.contactCon');

// navigason
let Home = document.querySelector('.Home');
let About = document.querySelector('.About');
let Skill = document.querySelector('.Skill');
let Project = document.querySelector('.Project');
let ContactUs = document.querySelector('.ContactUs');

Home.addEventListener('click', () => {
	Home.classList.add('stableN');

	About.classList.remove('stableN');
	Skill.classList.remove('stableN');
	Project.classList.remove('stableN');
	ContactUs.classList.remove('stableN');
});

About.addEventListener('click', () => {
	About.classList.add('stableN');

	Home.classList.remove('stableN');
	Skill.classList.remove('stableN');
	Project.classList.remove('stableN');
	ContactUs.classList.remove('stableN');
});

Skill.addEventListener('click', () => {
	Skill.classList.add('stableN');

	Home.classList.remove('stableN');
	About.classList.remove('stableN');
	Project.classList.remove('stableN');
	ContactUs.classList.remove('stableN');
});

Project.addEventListener('click', () => {
	Project.classList.add('stableN');

	Home.classList.remove('stableN');
	About.classList.remove('stableN');
	Skill.classList.remove('stableN');
	ContactUs.classList.remove('stableN');
});

ContactUs.addEventListener('click', () => {
	ContactUs.classList.add('stableN');

	Home.classList.remove('stableN');
	About.classList.remove('stableN');
	Skill.classList.remove('stableN');
	Project.classList.remove('stableN');
});

function changeNav() {
	if (profilrCon.classList.contains('scale1')) {
		Home.classList.add('stableN');

		About.classList.remove('stableN');
		Skill.classList.remove('stableN');
		Project.classList.remove('stableN');
		ContactUs.classList.remove('stableN');
	}
	if (aboutCon.classList.contains('scale1')) {
		About.classList.add('stableN');

		Home.classList.remove('stableN');
		Skill.classList.remove('stableN');
		Project.classList.remove('stableN');
		ContactUs.classList.remove('stableN');
	}
	if (skillCon.classList.contains('scale1')) {
		Skill.classList.add('stableN');

		Home.classList.remove('stableN');
		About.classList.remove('stableN');
		Project.classList.remove('stableN');
		ContactUs.classList.remove('stableN');
	}
	if (projectCon.classList.contains('scale1')) {
		Project.classList.add('stableN');

		Home.classList.remove('stableN');
		About.classList.remove('stableN');
		Skill.classList.remove('stableN');
		ContactUs.classList.remove('stableN');
	}
	if (contactCon.classList.contains('scale1')) {
		ContactUs.classList.add('stableN');

		Home.classList.remove('stableN');
		About.classList.remove('stableN');
		Skill.classList.remove('stableN');
		Project.classList.remove('stableN');
	}
}
changeNav();

let writeBox = document.querySelector('.writeBox');

let youTubeB = document.querySelector('.youTubeB');
let instaB = document.querySelector('.instaB');

window.addEventListener('scroll', checkBox);
checkBox();
function checkBox() {
	changeNav();

	if (writeBox.classList.contains('scale1')) {
		chanegeAb();
	}

	containt.forEach((box) => {
		let top = window.scrollY;
		let offset = box.offsetTop - 30;
		let hight = box.offsetHeight;

		if (top >= offset && top < offset + hight) {
			box.firstElementChild.classList.add('scale1');
			box.firstElementChild.classList.add('transition');
			box.firstElementChild.classList.add('transformXY');
			box.firstElementChild.classList.add('transition_delay1');
		}
		else {
			box.firstElementChild.classList.remove('scale1');
			box.firstElementChild.classList.remove('transition');
			box.firstElementChild.classList.remove('transformXY');
			box.firstElementChild.classList.remove('transition_delay1');
		}
	});

	const target = window.innerHeight / 5 * 4;
	BoxDiv.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;
		if (boxTop < target) {
			box.classList.add('scale1');
			box.classList.add('transformXY');
			box.classList.add('transition');
			box.classList.add('transition_delay');
		}
		else {
			box.classList.remove('scale1');
			box.classList.remove('transformXY');
			box.classList.remove('transition');
			box.classList.remove('transition_delay');
		}
	});

	lodinfDiv.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;
		if (boxTop < target) {
			box.classList.add('transformXY');
			box.classList.add('transition_delay1S');
			box.classList.add('transition');
		}
		else {
			box.classList.remove('transformXY');
			box.classList.remove('transition_delay1S');
			box.classList.remove('transition');
		}
	});
	// mediaScroll()
}

// change year
let show = document.querySelector('#year');
let dateY = new Date();
let year = dateY.getFullYear();
show.innerHTML = year;


// scroll Top
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		buttonTop.classList.add('scale1')
	} else {
		buttonTop.classList.remove('scale1')
	}
};
// When the user clicks on the button, scroll to the top of the document
buttonTop.addEventListener('click', () => {
	setTimeout(() => {
		changeNav();
	}, 1000)
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})
// move top button
const move = document.querySelector('.downAro')
let offsetX, offsetY;
const moveFun = (e) => {
	try {
		move.style.left = `${e.clientX - offsetX}px`
		move.style.top = `${e.clientY - offsetY}px`

		move = e.clientX - move.offsetLeft;
		move = e.clientX - move.offsetLeft;
	}
	catch (err) {

	}
}
move.addEventListener('mousedown', (e) => {
	offsetX = e.clientX - move.offsetLeft
	offsetY = e.clientX - move.offsetLeft
	document.addEventListener('mousemove', moveFun)
})
document.addEventListener('mouseup', () => {
	document.removeEventListener("mousemove", moveFun)
})


// input border
let borderInput = document.querySelectorAll('.borderInput');
borderInput.forEach((input) => {
	input.addEventListener('input', () => {
		if (input.value == "") {
			input.classList.remove('inputBo');
		}
		else {
			input.classList.add('inputBo');
		}
	});
});

// dark mode
let darkolight = document.querySelector('.darkolight');
let dark = true;
darkolight.addEventListener('click', lightMode);

function lightMode() {
	if (dark) {
		document.body.classList.add('lightMode')
		darkolight.innerHTML = '<i class="fa-solid fa-moon"></i>';
		dark = false;
	}
	else if (!dark) {
		document.body.classList.remove('lightMode');
		darkolight.innerHTML = '<i class="fa-solid fa-sun"></i>';
		dark = true;
	}
}


// send message
const scriptURL = 'https://script.google.com/macros/s/AKfycbyXZOwoKIQ_Dm1qLrXOcp1qC8205nP0bRVWGMHNFa45hztL7QHPxDOT1unsYKJFNrRg/exec'
const form = document.forms['submit-to-google-sheet']
const succes = document.querySelector('.succes')

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => {
			succes.classList.add('transformXY')
			succes.classList.add('transition')
			setTimeout(function () {
				succes.classList.remove('transformXY')
			}, 5000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
})


// cros msg
let crosb = document.querySelector('.crosb')
crosb.addEventListener('click', () => {
	succes.classList.remove('transformXY')
});